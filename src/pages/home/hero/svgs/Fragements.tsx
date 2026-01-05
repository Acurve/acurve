import { svgPathLengthInitial } from '@/constants/animation'
import { cn } from '@/lib/utils'
import type { AnimationHandle } from '@/types/animation'
import type { ClassNameProps } from '@/types/global'
import { motion, useAnimationControls } from 'motion/react'
import { forwardRef, useEffect, useImperativeHandle } from 'react'


const Fragements = forwardRef<AnimationHandle, ClassNameProps>(({ className = "" }, ref) => {

    const controls = useAnimationControls()
    const play = async () => {
        controls.start({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {

                    duration: 3
                },
                opacity: {
                    duration: 0.3
                }
            }
        })
    }
    useImperativeHandle(ref, () => ({
        play,
        stop: () => controls.stop()
    }))

    
    return (
        <div className="relative">

            <svg
                xmlns="http://www.w3.org/2000/svg"

                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill='none'
                className={cn("absolute stroke-white/1 -z-1 icon icon-tabler icons-tabler-outline icon-tabler-code", className)}
            >

                <motion.path d="M7 8l-4 4l4 4" />
                <motion.path d="M17 8l4 4l-4 4" />
                <motion.path d="M14 4l-4 16" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("stroke-white/60 absolute icon icon-tabler icons-tabler-outline icon-tabler-code", className)}
            >

                <motion.path d="M7 8l-4 4l4 4" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                <motion.path d="M17 8l4 4l-4 4" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                <motion.path d="M14 4l-4 16" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
            </svg>

        </div>
    )
})

export default Fragements
