import ParticleSystem from '@/components/shared/particles-shape'
import { Canvas } from '@react-three/fiber'
import type { ReactNode } from 'react'

type RightProps = {
    icon: ReactNode,
    color?: string,
}

const Right = ({ icon, color = "#3b82f6" }: RightProps) => {
    return (
        <div className=' relative w-full flex'>
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
                    <ParticleSystem
                        icon={icon}
                        color={color}
                        particleSize={100} />
                </Canvas>
            </div>
        </div>
    )
}

export default Right
