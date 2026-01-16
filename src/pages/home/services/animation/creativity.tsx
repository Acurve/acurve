import type { SvgContainerHandle } from "@/components/shared/SvgContainer";
import { sleep } from "@/lib/utils";
import { AnimatePresence } from "motion/react"
import { useEffect, useRef, useState, type RefObject } from "react"
import { Connector, type AnimatedLineHandle } from "./Connector";
import SvgContainer from "@/components/shared/SvgContainer";
import { icons } from "@/constants/icons";
import Screen from "./creativity/screen";
import VideoEditing from "./creativity/video-editing";
import GraphicDesign from "./creativity/graphic-design";
import AcurveAnimated from "./creativity/acurve-animated";

const CreativityAnimation = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const containers = useRef<Record<string, SvgContainerHandle | null>>({});
    const connectors = useRef<Record<string, AnimatedLineHandle | null>>({});


    const screenRef = useRef<HTMLDivElement | null>(null)

    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => setMounted(true), []);

    const logoSvgRef = useRef<HTMLDivElement | null>(null)
    const videoSvgRef = useRef<HTMLDivElement | null>(null)
    const graphicSvgRef = useRef<HTMLDivElement | null>(null)



    const playSub = async (
        svg: SvgContainerHandle | null,
        line: AnimatedLineHandle | null,
        svgRef: RefObject<HTMLDivElement | null>
    ) => {
        if (!svgRef?.current) return

        svg?.setActive(true)
        await line?.play()
        svgRef.current.style.opacity = "1"
        await sleep(2000)
        svg?.setActive(false)
        await sleep(100)
        await line?.erase()
        svgRef.current.style.opacity = "0"
    }

    const playAnimation = async () => {
        const svg = containers.current
        const line = connectors.current

        await sleep(1000) // intial delay


        playSub(svg.logo, line.logoToScreen, logoSvgRef)
        await sleep(4000)

        playSub(svg.vieo, line.videoToScreen, videoSvgRef)
        await sleep(4000)

        playSub(svg.graphic, line.graphicToScreen, graphicSvgRef)
        await sleep(3000)

        playAnimation()

    }

    useEffect(() => { playAnimation() }, [setMounted])

    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className={`relative gap-2 w-full justify-center
          xl:grid-cols-[repeat(6,78px)] xl:grid-rows-[repeat(6,78px)] 
          lg:grid-cols-[repeat(6,60px)] lg:grid-rows-[repeat(6,60px)] 

          min-[540px]:grid-cols-[repeat(6,78px)] min-[540px]:grid-rows-[repeat(6,78px)] 
          min-[540px]:[grid-template-areas:var(--web-layout)] 
          p-3
          grid-cols-[repeat(4,72px)] grid-rows-[repeat(6,72px)] 
          [grid-template-areas:var(--mobile-layout)]
          `}
                style={{
                    display: 'grid',
                    "--web-layout": `
            ". logo . . video ."
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            ". . . . graphic ."
          `,
                    "--mobile-layout": `
            "logo . video ."
            "screen screen screen screen"
            "screen screen screen screen"
            "screen screen screen screen"
            "screen screen screen screen"
            ". . graphic ."
          `,
                } as React.CSSProperties}
            >
                {/* CRITICAL FIX: The SVG must be present and cover the container */}
                <AnimatePresence>


                    {mounted && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
                            <Connector
                                ref={line => { connectors.current.videoToScreen = line }}
                                containerRef={containerRef}
                                fromRef={{ current: containers.current.video?.getDomNode() || null }}
                                toRef={screenRef}
                                pathColor="#6366f1"
                                fromSide="left"
                                toSide="top"
                            />

                            <Connector
                                ref={line => { connectors.current.logoToScreen = line }}
                                containerRef={containerRef}
                                fromRef={{ current: containers.current.logo?.getDomNode() || null }}
                                toRef={screenRef}
                                pathColor="#a855f7"
                                fromSide="right"
                                toSide="top"
                            />

                            <Connector
                                ref={line => { connectors.current.graphicToScreen = line }}
                                containerRef={containerRef}
                                fromRef={{ current: containers.current.graphic?.getDomNode() || null }}
                                toRef={screenRef}
                                pathColor="#10b981" fromSide="left" toSide="bottom"
                            />


                        </svg>
                    )}
                </AnimatePresence>

                {/* Nodes Grid Layout */}
                <SvgContainer
                    ref={con => { containers.current.video = con }}
                    gridArea="video"
                    text="Video">
                    <icons.creativity.videoEditing.icon size={42} strokeWidth={1.5} />
                </SvgContainer>

                <SvgContainer
                    ref={con => { containers.current.graphic = con }}
                    gridArea="graphic"
                    text="Graphic">
                    <icons.creativity.graphicDesign.icon size={42} strokeWidth={1.5} />
                </SvgContainer>

                <SvgContainer
                    ref={con => { containers.current.logo = con }}
                    gridArea="logo"
                    text="Logo">
                    <icons.creativity.logoDesign.icon size={42} />
                </SvgContainer>

                <div style={{ gridArea: "screen" }} className="flex" >
                    <div ref={screenRef} className="w-full h-max my-auto">

                        <Screen>

                            <div ref={graphicSvgRef} style={{ opacity: "0" }} className="w-full h-full flex justify-center items-center transition-all duration-500 absolute">

                                <GraphicDesign />
                            </div>
                            <div ref={videoSvgRef} style={{ opacity: "0" }} className="w-full h-full flex justify-center items-center transition-all duration-500 absolute">

                                <VideoEditing />
                            </div>
                            <div ref={logoSvgRef} style={{ opacity: "0" }} className="w-full h-full flex justify-center items-center transition-all duration-500 absolute">

                                <AcurveAnimated className="size-36" />
                            </div>


                        </Screen>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default CreativityAnimation
