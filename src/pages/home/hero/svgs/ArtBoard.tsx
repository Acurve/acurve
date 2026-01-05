import { svgPathLengthInitial } from '@/constants/animation'
import { cn } from '@/lib/utils'
import type { AnimationHandle } from '@/types/animation'
import type { ClassNameProps } from '@/types/global'
import { motion, useAnimationControls } from 'motion/react'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'

const ArtBoard = forwardRef<AnimationHandle, ClassNameProps>(({ className = "" }, ref) => {

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

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cn("absolute stroke-white/1 -z-1 icon icon-tabler icons-tabler-outline icon-tabler-code", className)}>
                <g strokeWidth={2}>

                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6" />
                    <path d="M3 8l1 0" />
                    <path d="M3 16l1 0" />
                    <path d="M8 3l0 1" />
                    <path d="M16 3l0 1" />
                    <path d="M20 8l1 0" />
                    <path d="M20 16l1 0" />
                    <path d="M8 20l0 1" />
                    <path d="M16 20l0 1" />
                </g>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cn("absolute stroke-white/1 -z-1 icon icon-tabler icons-tabler-outline icon-tabler-code", className)}>
                <g strokeWidth={2}>

                    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M3 8l1 0" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M3 16l1 0" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M8 3l0 1" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M16 3l0 1" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M20 8l1 0" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M20 16l1 0" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M8 20l0 1" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M16 20l0 1" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                </g>
            </svg>
        </div>
    )

})

export default ArtBoard
