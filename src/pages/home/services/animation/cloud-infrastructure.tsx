import type { SvgContainerHandle } from "@/components/shared/SvgContainer";
import { sleep } from "@/lib/utils";
import { AnimatePresence } from "motion/react"
import { useEffect, useRef, useState, type RefObject } from "react"
import { Connector, type AnimatedLineHandle } from "./Connector";
import SvgContainer from "@/components/shared/SvgContainer";
import { icons } from "@/constants/icons";
import Uploading from "./cloud-infrastructure/uploding-to-cloud";
import Maintenance from "./cloud-infrastructure/maintenance";

const CloudInfrastructureAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const containers = useRef<Record<string, SvgContainerHandle | null>>({});
  const connectors = useRef<Record<string, AnimatedLineHandle | null>>({});


  const screenRef = useRef<HTMLDivElement | null>(null)

  const uploadingRef = useRef<HTMLDivElement | null>(null)
  const maintenanceRef = useRef<HTMLDivElement | null>(null)

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);

  const playSub = async (
    svg: SvgContainerHandle | null,
    svg2: SvgContainerHandle | null,
    line: AnimatedLineHandle | null,
    line2: AnimatedLineHandle | null,
    svgRef: RefObject<HTMLDivElement | null>
  ) => {
    if (!svgRef?.current) return

    svg?.setActive(true)
    svg2?.setActive(true)
    line?.play()
    await line2?.play()
    svgRef.current.style.opacity = `1`
    await sleep(2000)
    svg?.setActive(false)
    svg2?.setActive(false)
    await sleep(100)
    line?.erase()
    await line2?.erase()
    svgRef.current.style.opacity = `0`
  }

  const playAnimation = async () => {
    const svg = containers.current
    const line = connectors.current

    await sleep(1000) // intial delay


    playSub(svg.cloud, svg.hosting, line.cloudToScreen, line.hostingToScreen, uploadingRef)
    await sleep(5000)


    playSub(svg.maintenance, svg.support, line.maintenanceToScreen, line.supportToScreen, maintenanceRef)
    await sleep(4000)

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
            "cloud . . . . support"
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            "screen screen screen screen screen screen"
            "maintenance . . . . hosting"
          `,
          "--mobile-layout": `
            "cloud . . support"
            "screen screen screen screen"
            "screen screen screen screen"
            "screen screen screen screen"
            "screen screen screen screen"
            "maintenance . . hosting"
          `,
        } as React.CSSProperties}
      >
        {/* CRITICAL FIX: The SVG must be present and cover the container */}
        <AnimatePresence>


          {mounted && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
              <Connector
                ref={line => { connectors.current.cloudToScreen = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.cloud?.getDomNode() || null }}
                toRef={screenRef}
                pathColor="#6366f1"
                fromSide="right"
                toSide="top"
              />

              <Connector
                ref={line => { connectors.current.hostingToScreen = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.hosting?.getDomNode() || null }}
                toRef={screenRef}
                pathColor="#a855f7"
                fromSide="left"
                toSide="bottom"
              />
              <Connector
                ref={line => { connectors.current.supportToScreen = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.support?.getDomNode() || null }}
                toRef={screenRef}
                pathColor="#6366f1"
                fromSide="left"
                toSide="top"
              />

              <Connector
                ref={line => { connectors.current.maintenanceToScreen = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.maintenance?.getDomNode() || null }}
                toRef={screenRef}
                pathColor="#a855f7"
                fromSide="right"
                toSide="bottom"
              />




            </svg>
          )}
        </AnimatePresence>

        {/* Nodes Grid Layout */}
        <SvgContainer
          ref={con => { containers.current.cloud = con }}
          gridArea="cloud"
          text="Cloud">
          <icons.cloudInfrastructure.cloudMigrationHosting.icon size={42} strokeWidth={1.5} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.hosting = con }}
          gridArea="hosting"
          text="Hosting">
          <icons.cloudInfrastructure.cloudMigrationHosting.hosting size={42} strokeWidth={1.5} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.support = con }}
          gridArea="support"
          text="Support">
          <icons.cloudInfrastructure.maintenanceTechnicalSupport.icon size={42} strokeWidth={1.5} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.maintenance = con }}
          gridArea="maintenance"
          text="Maintenance">
          <icons.cloudInfrastructure.maintenanceTechnicalSupport.maintenance size={42} strokeWidth={1.5} />
        </SvgContainer>



        <div style={{ gridArea: "screen" }} ref={screenRef} className="flex rounded-lg overflow-hidden bg-white/20 relative" >
          <Uploading className="bg-white transition-all duration-500 absolute top-0 bottom-0 left-0 right-0" ref={uploadingRef} />
          <Maintenance className="bg-white transition-all duration-500 absolute top-0 bottom-0 left-0 right-0" ref={maintenanceRef} />
          <div className="absolute bg-background/70  w-full h-full z-1"/>
        </div>
      </div>


    </div>


  )
}

export default CloudInfrastructureAnimation
