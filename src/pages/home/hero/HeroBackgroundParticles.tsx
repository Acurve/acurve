import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { ClassNameProps } from '@/types/global';
import { cn } from '@/lib/utils';

const ParticleSystem = ({ isMouseActive }: { isMouseActive: React.RefObject<boolean> }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const { pointer } = useThree();

    const clock = useMemo(() => new THREE.Clock(), []);

    const particleCount = 70000;
    const interactionRadius = 15;

    // Create initial positions and colors once
    const [positions, originalPositions, colors] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const orig = new Float32Array(particleCount * 3);
        const cols = new Float32Array(particleCount * 3);
        const colorStart = new THREE.Color(0x0a84ff); // Vibrant Blue
        const colorEnd = new THREE.Color(0x00f2fe);
        const width = 200;
        const depth = 100;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const x = (Math.random() - 0.5) * width;
            const z = (Math.random() - 0.5) * depth;
            const y = (Math.random() - 0.5) * 10;

            pos[i3] = x;
            pos[i3 + 1] = y;
            pos[i3 + 2] = z;

            orig[i3] = x;
            orig[i3 + 1] = y;
            orig[i3 + 2] = z;

            const mixFactor = (x + width / 2) / width;
            const particleColor = colorStart.clone().lerp(colorEnd, mixFactor);
            cols[i3] = particleColor.r;
            cols[i3 + 1] = particleColor.g;
            cols[i3 + 2] = particleColor.b;
        }
        return [pos, orig, cols];
    }, []);

    // Use a plane to intersect the mouse position in 3D space
    const interactionPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
    const planeIntersectPoint = useMemo(() => new THREE.Vector3(), []);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const time = clock.getElapsedTime();
        const geo = pointsRef.current.geometry;
        const currentPositions = geo.attributes.position.array as Float32Array;

        // const mat = pointsRef.current.material as THREE.ShaderMaterial;


        if (isMouseActive.current) {
            raycaster.setFromCamera(pointer, state.camera);
            raycaster.ray.intersectPlane(interactionPlane, planeIntersectPoint);
        } else {
            // Move intersection point far away so no particles are pushed
            planeIntersectPoint.set(10000, 10000, 10000);
        }

        // Calculate mouse intersection in world space
        // raycaster.setFromCamera(mouse, state.camera);
        // raycaster.ray.intersectPlane(interactionPlane, planeIntersectPoint);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const oX = originalPositions[i3];
            const oY = originalPositions[i3 + 1];
            const oZ = originalPositions[i3 + 2];

            const dx = oX - planeIntersectPoint.x;
            const dz = oZ - planeIntersectPoint.z;
            const dist = Math.sqrt(dx * dx + dz * dz);

            let force = 0;
            if (dist < interactionRadius) {
                const t = 1 - dist / interactionRadius;
                force = t * t * 18;
            }

            const waveY = Math.sin(oX * 0.1 + time) * Math.cos(oZ * 0.1 + time * 0.5) * 2.5;
            const targetY = oY + waveY + force;

            // Vertical movement
            currentPositions[i3 + 1] += (targetY - currentPositions[i3 + 1]) * 0.1;

            // Horizontal displacement
            if (dist < interactionRadius && dist > 0.1) {
                const pushFactor = (1 - dist / interactionRadius) * 0.5;
                currentPositions[i3] += (dx / dist) * pushFactor;
                currentPositions[i3 + 2] += (dz / dist) * pushFactor;
            } else {
                currentPositions[i3] += (oX - currentPositions[i3]) * 0.05;
                currentPositions[i3 + 2] += (oZ - currentPositions[i3 + 2]) * 0.05;
            }
        }

        geo.attributes.position.needsUpdate = true;

        // Smooth Camera Parallax
        state.camera.position.x += (pointer.x * 10 - state.camera.position.x) * 0.05;

        state.camera.lookAt(0, 0, 0);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <shaderMaterial
                transparent
                depthTest={false}
                blending={THREE.AdditiveBlending}
                vertexShader={`
          attribute vec3 color;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 50.0 * (1.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
                fragmentShader={`
          varying vec3 vColor;
          void main() {
            float r = distance(gl_PointCoord, vec2(0.5));
            if (r > 0.5) discard;
            gl_FragColor = vec4(vColor, 0.85);
          }
        `}
            />
        </points>
    );
};



const HeroBackgroundParticles = ({className=""}:ClassNameProps) => {
    const isMouseActive = useRef<boolean>(false);
    return (
        <div
            className={cn("absolute inset-0 z-0",className)}
            onPointerEnter={() => (isMouseActive.current = true)}
            onPointerLeave={() => (isMouseActive.current = false)}
        >
            <Canvas
                camera={{ position: [0, 10, 50], fov: 75 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <fogExp2 attach="fog" args={[0x000000, 0.001]} />
                <ParticleSystem isMouseActive={isMouseActive} />
            </Canvas>
        </div>
    )
}

export default HeroBackgroundParticles
