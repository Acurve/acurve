
// import React, { useRef } from 'react'
// import { Connector } from './Connector'

// const DigitalPresenceAnimation = () => {
//     const divRef1 = useRef<HTMLElement>(null)
//     const divRef2 = useRef<HTMLElement>(null)
//     const divRef3 = useRef<HTMLElement>(null)
//     const containerRef = useRef<HTMLDivElement>(null)
//     const mainDivRef = useRef<HTMLDivElement>(null)
//     return (
//         <div ref={containerRef} className='w-full h-full flex items-center relative justify-center'>
            
//             {/* Add SVG wrapper for connectors */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                 <Connector
//                     containerRef={containerRef}
//                     fromRef={mainDivRef}
//                     toRef={divRef1}
//                     // originSide='left'
//                     // targetSide='bottom'
//                 />
//                 <Connector
//                     containerRef={containerRef}
//                     fromRef={mainDivRef}
//                     toRef={divRef2}
//                     // originSide='bottom'
//                     // targetSide='right'
//                 />
//                 <Connector
//                     containerRef={containerRef}
//                     fromRef={mainDivRef}
//                     toRef={divRef3}
                    
//                     // originSide='right'
//                     // targetSide='right'
//                 />
//             </svg>

//             <div className='bg-secondary text-white absolute top-2 left-2 w-24 h-24 flex items-center justify-center' ref={divRef1}>
//                 one
//             </div>
//             <div className='bg-secondary text-white absolute bottom-2 left-2 w-24 h-24 flex items-center justify-center' ref={divRef2}>
//                 two
//             </div>
//             <div className='bg-secondary text-white absolute w-24 h-24 bottom-2 right-2 flex items-center justify-center' ref={divRef3}>
//                 three
//             </div>
//             <div className='bg-secondary text-white absolute w-24 h-24 top-2 right-2 flex items-center justify-center' ref={mainDivRef}>
//                 main
//             </div>

//         </div>
//     )
// }

// export default DigitalPresenceAnimation


const DigitalPresenceAnimation = () => {
  return (
    <div>
      
    </div>
  )
}

export default DigitalPresenceAnimation
