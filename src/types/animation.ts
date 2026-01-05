import type { useAnimationControls } from "motion/react"

export type AnimationConfig = Parameters<ReturnType<typeof useAnimationControls>["start"]>[0]


export type AnimationHandle = {
    play: (animationConfig?: AnimationConfig) => Promise<void>
    stop: () => void
}

export type playFunctionType = AnimationHandle["play"]

export const svgClassName = 'stroke-white transition-all duration-1000'