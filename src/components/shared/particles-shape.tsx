import React, { useRef, useMemo, useEffect, useState } from 'react';
import {  useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Props for the Morphing Particle Component
 */
interface MorphingParticlesProps {
    icon: React.ReactNode;
    color?: string;
    particleSize?: number; // Added prop for easy adjustment
}

const ParticleSystem: React.FC<MorphingParticlesProps> = ({ icon, color = "#60a5fa", particleSize = 100 }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const { pointer } = useThree();
    const [targetPositions, setTargetPositions] = useState<Float32Array | null>(null);
    const clock = useMemo(() => new THREE.Clock(), []);
    // Track if the mouse has moved yet to prevent initial center-point repulsion
    const hasInteracted = useRef(false);

    const particleCount = 6000;

    // 1. Initial random cloud positions
    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const cols = new Float32Array(particleCount * 3);
        const baseColor = new THREE.Color(color);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            pos[i3] = (Math.random() - 0.5) * 100;
            pos[i3 + 1] = (Math.random() - 0.5) * 100;
            pos[i3 + 2] = (Math.random() - 0.5) * 50;

            cols[i3] = baseColor.r + (Math.random() - 0.5) * 0.1;
            cols[i3 + 1] = baseColor.g + (Math.random() - 0.5) * 0.1;
            cols[i3 + 2] = baseColor.b + (Math.random() - 0.5) * 0.1;
        }
        return [pos, cols];
    }, [color]);

    // 2. Uniforms for the shader
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uSize: { value: particleSize }
    }), []);

    // Update uniform if prop changes
    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.uSize.value = particleSize;
        }
    }, [particleSize]);

    // 3. Rasterize the icon
    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 256;
        canvas.height = 256;
        
        let svgString = renderToStaticMarkup(icon as React.ReactElement);
        if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
            svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        }

        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();

        img.onload = () => {
            ctx.clearRect(0, 0, 256, 256);
            ctx.drawImage(img, 28, 28, 200, 200);
            const imageData = ctx.getImageData(0, 0, 256, 256).data;
            
            const points: [number, number][] = [];
            for (let y = 0; y < 256; y += 2) { 
                for (let x = 0; x < 256; x += 2) {
                    const alpha = imageData[(y * 256 + x) * 4 + 3];
                    if (alpha > 128) {
                        points.push([(x / 256 - 0.5) * 50, (0.5 - y / 256) * 50]);
                    }
                }
            }

            const newTargets = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                if (points.length > 0) {
                    const p = points[i % points.length];
                    newTargets[i3] = p[0] + (Math.random() - 0.5) * 0.8;
                    newTargets[i3 + 1] = p[1] + (Math.random() - 0.5) * 0.8;
                    newTargets[i3 + 2] = (Math.random() - 0.5) * 3;
                }
            }
            setTargetPositions(newTargets);
            URL.revokeObjectURL(url);
        };
        img.src = url;
        return () => { img.onload = null; };
    }, [icon]);

    const planeIntersectPoint = useMemo(() => new THREE.Vector3(), []);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const interactionPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);

    useFrame((state) => {
        if (!pointsRef.current || !targetPositions) return;

        const time = clock.getElapsedTime();
        if (materialRef.current) materialRef.current.uniforms.uTime.value = time;

        const geo = pointsRef.current.geometry;
        const posAttr = geo.attributes.position.array as Float32Array;

        // Reset intersection point if pointer is out of bounds or not interacting
        // Also check if user has actually moved the mouse yet (pointer starts at 0,0)
        if (!hasInteracted.current && (pointer.x !== 0 || pointer.y !== 0)) {
            hasInteracted.current = true;
        }

        const isPointerActive = hasInteracted.current && Math.abs(pointer.x) <= 1.0 && Math.abs(pointer.y) <= 1.0;

        if (isPointerActive) {
            raycaster.setFromCamera(pointer, state.camera);
            raycaster.ray.intersectPlane(interactionPlane, planeIntersectPoint);
        } else {
            // Move intersect point far away so no particles are affected
            planeIntersectPoint.set(9999, 9999, 9999);
        }

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const tx = targetPositions[i3];
            const ty = targetPositions[i3 + 1];
            const tz = targetPositions[i3 + 2];

            const dx = posAttr[i3] - planeIntersectPoint.x;
            const dy = posAttr[i3 + 1] - planeIntersectPoint.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only apply interaction if pointer is "active" (not far away)
            if (dist < 10) {
                const power = (1 - dist / 10) * 0.6;
                posAttr[i3] += (dx / dist) * power;
                posAttr[i3 + 1] += (dy / dist) * power;
            }

            // High-frequency "shiver" + low-frequency "float"
            const floatX = Math.sin(time * 0.8 + tx * 0.2) * 0.04 + Math.cos(time * 1.5 + ty * 0.1) * 0.02;
            const floatY = Math.cos(time * 0.7 + ty * 0.2) * 0.05 + Math.sin(time * 1.2 + tx * 0.1) * 0.03;
            const floatZ = Math.sin(time * 0.5 + (tx + ty) * 0.1) * 0.05;

            // Morphing logic with added floating noise - pull back to target always
            posAttr[i3] += (tx - posAttr[i3]) * 0.08 + floatX;
            posAttr[i3 + 1] += (ty - posAttr[i3 + 1]) * 0.08 + floatY;
            posAttr[i3 + 2] += (tz - posAttr[i3 + 2]) * 0.08 + floatZ;
        }

        geo.attributes.position.needsUpdate = true;
        
        // Smoothly return camera to center if pointer leaves
        const targetCamX = isPointerActive ? pointer.x * 8 : 0;
        const targetCamY = isPointerActive ? pointer.y * 8 : 0;
        state.camera.position.x += (targetCamX - state.camera.position.x) * 0.05;
        state.camera.position.y += (targetCamY - state.camera.position.y) * 0.05;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                transparent
                depthTest={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                uniforms={uniforms}
                vertexShader={`
                    uniform float uTime;
                    uniform float uSize;
                    attribute vec3 color;
                    varying vec3 vColor;
                    void main() {
                        vColor = color;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        // Size logic: base size * perspective factor
                        gl_PointSize = uSize * (1.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `}
                fragmentShader={`
                    varying vec3 vColor;
                    void main() {
                        float r = distance(gl_PointCoord, vec2(0.5));
                        if (r > 0.5) discard;
                        // Create a soft glow effect
                        float alpha = 1.0 - (r * 2.0);
                        gl_FragColor = vec4(vColor, alpha * 0.8);
                    }
                `}
            />
        </points>
    );
};

export default ParticleSystem