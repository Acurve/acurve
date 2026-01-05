import { cn, sleep } from "@/lib/utils"
import type { ChildrenProps, ClassNameProps } from "@/types/global"
import { motion } from "motion/react"
import Fragements from "./svgs/Fragements"
import Cloud from "./svgs/Cloud"
import Speaker from "./svgs/Speaker"
import BarGraph from "./svgs/BarGraph"
import ArtBoard from "./svgs/ArtBoard"
import { useEffect, useRef } from "react"
import type { AnimationHandle } from "@/types/animation"

const gridItemClassName = "rounded-xl"

const FloatingItem = ({ className = "", children }: ClassNameProps & ChildrenProps) => {
    return (
        <motion.div
            className={cn("col-span-2 col-start-2 bg-linear-to-br from-background/40 to-foreground/10 row-span-4 row-start-4 animate-float opacity-30 ", gridItemClassName, className)}

        >
            {children}



        </motion.div>
    )
}

const FloatingItems = ({ className = "" }: ClassNameProps) => {

    const fragementRef = useRef<AnimationHandle>(null)
    const speakerRef = useRef<AnimationHandle>(null)
    const cloudRef = useRef<AnimationHandle>(null)
    const barGraphRef = useRef<AnimationHandle>(null)
    const artBoardRef = useRef<AnimationHandle>(null)


    const playAnimation = async () => {
        fragementRef.current?.play()
        await sleep(2000)

        cloudRef.current?.play()
        await sleep(2000)

        speakerRef.current?.play()
        await sleep(2000)

        barGraphRef.current?.play()
        await sleep(2000)

        artBoardRef.current?.play()

        await sleep(3000)
        playAnimation()


    }

    useEffect(() => {
        playAnimation()
    }, [])
    return (
        <div className={cn("absolute top-0 left-0 bottom-0 right-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4", className)}>
            <FloatingItem>

                <Fragements ref={fragementRef} className="size-60" />
            </FloatingItem>
            <FloatingItem className="col-span-3 col-start-1 row-span-4 row-start-9">

                <Cloud ref={cloudRef} className="size-72" />
            </FloatingItem>
            <FloatingItem className="col-span-3 row-span-5 row-start-3 col-start-10">

                <Speaker ref={speakerRef} className="size-80 scale-x-[-1] rotate-45" />
            </FloatingItem>
            <FloatingItem className="col-span-3 row-span-4 row-start-9 col-start-11">

                <BarGraph ref={barGraphRef} className="size-60" />
            </FloatingItem>
            <FloatingItem className="col-span-2 row-span-3 row-start-10 col-start-9">

                <ArtBoard ref={artBoardRef} className="size-44" />
            </FloatingItem>




        </div>
    )
}

export default FloatingItems
