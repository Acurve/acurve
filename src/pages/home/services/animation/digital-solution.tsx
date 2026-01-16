import React, { useEffect, useRef, useState } from "react";
import { Connector, type AnimatedLineHandle } from "./Connector";
import { sleep } from "@/lib/utils";
import { AnimatePresence } from "motion/react";
import { icons } from "@/constants/icons";
import { AcurveOutlined } from "@/components/svgs/Acurve";
import SvgContainer, { type SvgContainerHandle } from "@/components/shared/SvgContainer";



const DigitalSolutionAnimation: React.FC = () => {

  const containers = useRef<Record<string, SvgContainerHandle | null>>({});
  const connectors = useRef<Record<string, AnimatedLineHandle | null>>({});

  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);



  const playMain = async (
    svgCurrent: SvgContainerHandle | null,
    lineCurrent: AnimatedLineHandle | null,
  ) => {
    if (!svgCurrent || !lineCurrent) return

    containers.current.acurve?.setActive(true)
    await lineCurrent?.play()
    svgCurrent.setActive(true)
    await sleep(1000)
    containers.current.acurve?.setActive(false)
    await lineCurrent?.erase()
    // svgCurrent.setActive(false)
  }
  const playSub = async (
    svgMain: SvgContainerHandle | null,
    svgSub1: SvgContainerHandle | null,
    svgSub2: SvgContainerHandle | null,
    lineSub1: AnimatedLineHandle | null,
    lineSub2: AnimatedLineHandle | null,
  ) => {
    if (!svgMain || !lineSub1 || !lineSub2 || !svgSub1 || !svgSub2) return

    svgMain.setActive(true)
    lineSub1?.play()
    await lineSub2?.play()

    svgSub1.setActive(true)
    svgSub2.setActive(true)

    await sleep(1000)
    svgMain.setActive(false)
    lineSub1?.erase()
    await lineSub2?.erase()

    svgSub1.setActive(false)
    svgSub2.setActive(false)
  }

  const playAnimation = async () => {
    const svg = containers.current
    const line = connectors.current

    await sleep(1000) // intial delay

    // Custom web development animation
    playMain(svg.webDevMain, line.mainToWebDev)
    await sleep(1000)
    playSub(svg.webDevMain, svg.webDev1, svg.webDev2, line.webDevToWebDev1, line.webDevToWebDev2)

    await sleep(3000) // delay between two service animation

    // B2B Portals animation
    playMain(svg.b2bMain, line.mainToB2b)
    await sleep(1000)
    playSub(svg.b2bMain, svg.b2b1, svg.b2b2, line.b2bToB2b1, line.b2bToB2b2)

    await sleep(3000) // delaty between two service animation

    // Customer and Vendor portals animation
    playMain(svg.customerVendorMain, line.mainToCustomerVendor)
    await sleep(1000)
    playSub(svg.customerVendorMain, svg.customerVendor1, svg.customerVendor2, line.customerVendorToCustomerVendor1, line.customerVendorToCustomerVendor2)

    await sleep(2000)
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
            ". . . . b2b-1 ."
            "web-dev-1 . . b2b-main . ."
            ". . acurve . . b2b-2"
            ". web-dev-main . . customer-main ."
            ". . . . . customer-1"
            "web-dev-2 . . customer-2 . ."
          `,
          "--mobile-layout": `
            ". b2b-1 . ."
            "web-dev-1 . . b2b-main"
            ". . acurve ."
            ". web-dev-main . b2b-2"
            "web-dev-2 . customer-main ."
            ". customer-1 . customer-2"
          `,
        } as React.CSSProperties}
      >
        {/* CRITICAL FIX: The SVG must be present and cover the container */}
        <AnimatePresence>


          {mounted && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
              <Connector
                ref={line => { connectors.current.mainToWebDev = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.acurve?.getDomNode() || null }}
                toRef={{ current: containers.current.webDevMain?.getDomNode() || null }}
                pathColor="#6366f1"
                fromSide="bottom"
                toSide="right"
              />

              <Connector
                ref={line => { connectors.current.mainToB2b = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.acurve?.getDomNode() || null }}
                toRef={{ current: containers.current.b2bMain?.getDomNode() || null }}
                pathColor="#a855f7"
                fromSide="top"
                toSide="left"
              />

              <Connector
                ref={line => { connectors.current.mainToCustomerVendor = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.acurve?.getDomNode() || null }}
                toRef={{ current: containers.current.customerVendorMain?.getDomNode() || null }}
                pathColor="#10b981" fromSide="right" toSide="top"
              />

              <Connector
                ref={line => { connectors.current.webDevToWebDev1 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.webDevMain?.getDomNode() || null }}
                toRef={{ current: containers.current.webDev1?.getDomNode() || null }}
                pathColor="#6366f1" fromSide="top" toSide="right"
              />

              <Connector
                ref={line => { connectors.current.webDevToWebDev2 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.webDevMain?.getDomNode() || null }}
                toRef={{ current: containers.current.webDev2?.getDomNode() || null }}
                pathColor="#3b82f6" fromSide="bottom" toSide="right"
              />

              <Connector
                ref={line => { connectors.current.b2bToB2b1 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.b2bMain?.getDomNode() || null }}
                toRef={{ current: containers.current.b2b1?.getDomNode() || null }}
                pathColor="#ec4899" fromSide="top" toSide="left"
              />


              <Connector
                ref={line => { connectors.current.b2bToB2b2 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.b2bMain?.getDomNode() || null }}
                toRef={{ current: containers.current.b2b2?.getDomNode() || null }}
                pathColor="#a855f7" fromSide="top" toSide="left"
              />

              <Connector
                ref={line => { connectors.current.customerVendorToCustomerVendor1 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.customerVendorMain?.getDomNode() || null }}
                toRef={{ current: containers.current.customerVendor1?.getDomNode() || null }}
                pathColor="#10b981" fromSide="right" toSide="top"
              />

              <Connector
                ref={line => { connectors.current.customerVendorToCustomerVendor2 = line }}
                containerRef={containerRef}
                fromRef={{ current: containers.current.customerVendorMain?.getDomNode() || null }}
                toRef={{ current: containers.current.customerVendor2?.getDomNode() || null }}
                pathColor="#f59e0b" fromSide="left" toSide="top"
              />



            </svg>
          )}
        </AnimatePresence>

        {/* Nodes Grid Layout */}
        <SvgContainer
          ref={con => { containers.current.webDev1 = con }}
          gridArea="web-dev-1"
          text="Flexible">
          <icons.digitalSolutions.customwebDevelopment.responsiveDesign size={42} strokeWidth={1.5} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.webDevMain = con }}
          gridArea="web-dev-main"
          text="Web dev">
          <icons.digitalSolutions.customwebDevelopment.icon size={42} strokeWidth={1.5} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.b2b1 = con }}
          gridArea="b2b-1"
          text="Analytics">
          <icons.digitalSolutions.b2bportals.analyticsDashboard size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.acurve = con }}
          gridArea="acurve"
          text="Acurve" >
          <AcurveOutlined className="fill-none size-12 stroke-blue-400 stroke-100" />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.webDev2 = con }}
          gridArea="web-dev-2"
          text="Ranking">
          <icons.digitalSolutions.customwebDevelopment.seoOptimized size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.b2bMain = con }}
          gridArea="b2b-main"
          text="B2B">

          <icons.digitalSolutions.b2bportals.icon size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.customerVendorMain = con }}
          gridArea="customer-main"
          text="Portals">
          <icons.digitalSolutions.customerVendorPortals.icon size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.customerVendor2 = con }}
          gridArea="customer-2"
          text="Reports"
        >
          <icons.digitalSolutions.customerVendorPortals.performanceReports size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.customerVendor1 = con }}
          gridArea="customer-1"
          text="Inventory">
          <icons.digitalSolutions.customerVendorPortals.inventoryVisibility size={42} />
        </SvgContainer>

        <SvgContainer
          ref={con => { containers.current.b2b2 = con }}
          gridArea="b2b-2"
          text="RBAC" >
          <icons.digitalSolutions.b2bportals.roleBasedAccess size={42} />
        </SvgContainer>
      </div>


    </div>
  );
};

export default DigitalSolutionAnimation;

