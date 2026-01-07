import  { forwardRef, useRef } from 'react'
import { Connector } from './Connector'
import { cn } from '@/lib/utils'
import type { ChildrenProps, ClassNameProps } from '@/types/global'


type svgContainerProps = {} & ClassNameProps & ChildrenProps
const SvgContainer = forwardRef<HTMLDivElement, svgContainerProps>(({ className = "", children }, ref) => {
    return (
        <div ref={ref} className={cn('bg-secondary text-white  max-w-24 min-w-24 flex items-center justify-center rounded-lg shadow-lg', className)}>
            {children}
        </div>
    )
})

const DigitalSolutionAnimation = () => {
    const webDevRef = useRef<HTMLDivElement>(null)
    const webDevRef1 = useRef<HTMLDivElement>(null)
    const webDevRef2 = useRef<HTMLDivElement>(null)
    const b2bPortals = useRef<HTMLDivElement>(null)
    const b2bPortals1 = useRef<HTMLDivElement>(null)
    const b2bPortals12 = useRef<HTMLDivElement>(null)
    const customerPortals = useRef<HTMLDivElement>(null)
    const customerPortals1 = useRef<HTMLDivElement>(null)
    const customerPortals12 = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const mainDivRef = useRef<HTMLDivElement>(null)

    // const mainToWebDev = useRef<AnimatedLineHandle>(null)
    // const mainToB2b = useRef<AnimatedLineHandle>(null)
    // const mainToCustomer = useRef<AnimatedLineHandle>(null)
    // const webDevto1 = useRef<AnimatedLineHandle>(null)
    // const webDevto2 = useRef<AnimatedLineHandle>(null)
    // const b2bTo1 = useRef<AnimatedLineHandle>(null)
    // const b2bTo2 = useRef<AnimatedLineHandle>(null)
    // const customerTo1 = useRef<AnimatedLineHandle>(null)
    // const customerTo2 = useRef<AnimatedLineHandle>(null)

    // useEffect(() => {
    //     // Play all animations in sequence with delays
    //     const playAnimations = async () => {
    //         await sleep(100)
    //         mainToWebDev.current?.play()
    //         await sleep(2000)
    //         mainToWebDev.current?.erase()

    //         await sleep(500)
    //         webDevto1.current?.play()
    //         await sleep(2000)
    //         webDevto1.current?.erase()

    //         await sleep(500)
    //         webDevto2.current?.play()
    //         await sleep(2000)
    //         webDevto2.current?.erase()

    //         await sleep(500)
    //         mainToB2b.current?.play()
    //         await sleep(2000)
    //         mainToB2b.current?.erase()

    //         await sleep(500)
    //         b2bTo1.current?.play()
    //         await sleep(2000)
    //         b2bTo1.current?.erase()

    //         await sleep(500)
    //         b2bTo2.current?.play()
    //         await sleep(2000)
    //         b2bTo2.current?.erase()

    //         await sleep(500)
    //         mainToCustomer.current?.play()
    //         await sleep(2000)
    //         mainToCustomer.current?.erase()

    //         await sleep(500)
    //         customerTo1.current?.play()
    //         await sleep(2000)
    //         customerTo1.current?.erase()

    //         await sleep(500)
    //         customerTo2.current?.play()
    //         await sleep(2000)
    //         customerTo2.current?.erase()
    //     }

    //     playAnimations()
    // }, [])

    return (
        <div ref={containerRef} className='w-full h-full grid grid-cols-12 grid-rows-12 relative justify-center'>

            <Connector
                containerRef={containerRef}
                fromRef={mainDivRef}
                toRef={webDevRef}
                // ref={mainToWebDev}
                pathColor="#6366f1"
                fromSide='top'
                toSide='right'
            />
            <Connector
                containerRef={containerRef}
                fromRef={mainDivRef}
                toRef={b2bPortals}
                // ref={mainToB2b}
                pathColor="#6366f1"
                fromSide='right'
                toSide='left'
            />
            <Connector
                containerRef={containerRef}
                fromRef={mainDivRef}
                toRef={customerPortals}
                // ref={mainToCustomer}
                pathColor="#6366f1"
                fromSide='left'
                toSide='top'
            />
            <Connector
                containerRef={containerRef}
                fromRef={webDevRef}
                toRef={webDevRef1}
                // ref={webDevto1}
                pathColor="#6366f1"
                fromSide='top'
                toSide='left'
            />
            <Connector
                containerRef={containerRef}
                fromRef={webDevRef}
                toRef={webDevRef2}
                // ref={webDevto2}
                pathColor="#6366f1"
                fromSide='left'
                toSide='top'
                strokeWidth={2}
                
            />
            <Connector
                containerRef={containerRef}
                fromRef={b2bPortals}
                toRef={b2bPortals12}
                // ref={b2bTo2}
                pathColor="#6366f1"
                fromSide='bottom'
                toSide='top'
            />
            <Connector
                containerRef={containerRef}
                fromRef={b2bPortals}
                toRef={b2bPortals1}
                // ref={b2bTo1}
                pathColor="#6366f1"
                fromSide='left'
                toSide='left'
            />
            <Connector
                containerRef={containerRef}
                fromRef={customerPortals}
                toRef={customerPortals1}
                // ref={customerTo1}
                pathColor="#6366f1"
                fromSide='left'
                toSide='top'
            />
            <Connector
                containerRef={containerRef}
                fromRef={customerPortals}
                toRef={customerPortals12}
                // ref={customerTo2}
                pathColor="#6366f1"
                
            />



            <SvgContainer ref={webDevRef1} className='row-start-1 col-start-6 row-span-2 col-span-2'>
                <span className="font-semibold">web dev 1</span>
            </SvgContainer>
            <SvgContainer ref={webDevRef} className='row-start-3 col-start-3 row-span-2 col-span-2'>
                <span className="font-semibold">web dev main</span>
            </SvgContainer>
            <SvgContainer ref={b2bPortals1} className='row-start-3 col-start-9 row-span-2 col-span-2'>
                <span className="font-semibold">b2b 1 </span>
            </SvgContainer>
            <SvgContainer ref={mainDivRef} className='row-start-5 col-start-6 row-span-2 col-span-2'>
                <span className="font-semibold">acurve</span>
            </SvgContainer>
            <SvgContainer ref={webDevRef2} className='row-start-6 col-start-1 row-span-2 col-span-2'>
                <span className="font-semibold">wd2</span>
            </SvgContainer>
            <SvgContainer ref={b2bPortals} className='row-start-6 col-start-10 row-span-2 col-span-2'>
                <span className="font-semibold">b2b main</span>
            </SvgContainer>
            <SvgContainer ref={customerPortals} className='row-start-9 col-start-4 row-span-2 col-span-2'>
                <span className="font-semibold">customer main</span>
            </SvgContainer>
            <SvgContainer ref={customerPortals1} className='row-start-10 col-start-2 row-span-2 col-span-2'>
                <span className="font-semibold">customer 1</span>
            </SvgContainer>
            <SvgContainer ref={customerPortals12} className='row-start-9 col-start-8 row-span-2 col-span-2'>
                <span className="font-semibold">customer 2</span>
            </SvgContainer>
            <SvgContainer ref={b2bPortals12} className='row-start-10 col-start-10 row-span-2 col-span-2'>
                <span className="font-semibold">b2b 2</span>
            </SvgContainer>


        </div>
    )
}

export default DigitalSolutionAnimation