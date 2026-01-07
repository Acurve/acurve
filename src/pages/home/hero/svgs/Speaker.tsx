


import { svgPathLengthInitial } from '@/constants/animation'
import { cn } from '@/lib/utils'
import type { AnimationHandle } from '@/types/animation'
import type { ClassNameProps } from '@/types/global'
import { motion, useAnimationControls } from 'motion/react'
import { forwardRef,  useImperativeHandle } from 'react'


const Speaker = forwardRef<AnimationHandle, ClassNameProps>(({ className = "" }, ref) => {

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

                <g strokeWidth={0.7}>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 8a3 3 0 0 1 0 6" />
                    <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                    <path d="M12 8l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                </g>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("stroke-white/60 absolute icon icon-tabler icons-tabler-outline icon-tabler-code", className)}
            >
                <g strokeWidth={0.7}>

                    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M18 8a3 3 0 0 1 0 6" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M12 8l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                </g>

            </svg>

        </div>
    )
})

export default Speaker
