import { motion } from "motion/react"

type FallingParticlesProps = {
    side: "left" | "right"
}

export const FallingParticles = ({ side }: FallingParticlesProps) => {
    // Generate random particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
        startX: Math.random() * 100 - 50,
        endY: 150 + Math.random() * 100,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.7
    }))

    const isLeft = side === "left"

    // Position classes based on side
    const lightPosition = isLeft
        ? "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        : "top-0 right-0 translate-x-1/2 -translate-y-1/2"

    const particlesPosition = isLeft
        ? "top-0 left-0"
        : "top-0 right-0"

    // Rotation based on side (45deg for left, -45deg for right)
    const rotation = isLeft ? 45 : -45

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Light burst effect from top corner */}
            <motion.div
                className={`absolute rounded-[50%] h-24 w-108 bg-white/40 blur-3xl ${lightPosition}`}
                style={{ rotate: rotation }}
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: 1.5,
                    opacity: [0, 1, 0.6],
                    transition: {
                        duration: 2,
                        times: [0, 0.3, 1]
                    }
                }}
            />

            {/* Falling particles */}
            <div className={`absolute ${particlesPosition}`}>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: isLeft ? `${particle.startX}px` : 'auto',
                            right: isLeft ? 'auto' : `${particle.startX}px`,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255,255,255,${particle.opacity * 0.5})`
                        }}
                        initial={{
                            x: 0,
                            y: 0,
                            opacity: 0
                        }}
                        animate={{
                            x: isLeft ? particle.endY : -particle.endY,
                            y: particle.endY,
                            opacity: [0, particle.opacity, 0],
                            transition: {
                                delay: particle.delay,
                                duration: particle.duration,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2,
                                ease: "linear",
                                times: [0, 0.1, 1]
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    )
}