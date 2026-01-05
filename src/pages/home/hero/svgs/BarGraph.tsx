import { svgPathLengthInitial } from '@/constants/animation'
import { cn } from '@/lib/utils'
import type { AnimationHandle } from '@/types/animation'
import type { ClassNameProps } from '@/types/global'
import { motion, useAnimationControls } from 'motion/react'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'

const BarGraph = forwardRef<AnimationHandle, ClassNameProps>(({ className = "" }, ref) => {

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
            {/* Background SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("absolute stroke-white/1 -z-1 icon icon-tabler icons-tabler-outline icon-tabler-chart-bar-popular", className)}>
                <g strokeWidth={1}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
                    <path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" />
                    <path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" />
                    <path d="M4 20h14" />
                </g>
            </svg>

            {/* Animated SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("icon icon-tabler icons-tabler-outline icon-tabler-chart-bar-popular", className)}>
                <g strokeWidth={1}>
                    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                    <motion.path d="M4 20h14" initial={{ ...svgPathLengthInitial, opacity: 0 }} animate={controls} />
                </g>
            </svg>
        </div>
    )

})

export default BarGraph