import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types/global";
import upload from "@/assets/cloud-migrate-host/upload.gif"
import { forwardRef } from "react";
/**
 * UploadAnimation Component
 * A modern, responsive React component using Tailwind CSS
 * visualizing data uploading from a screen to a cloud-based server.
 */
// const Uploading = ({ className = "" }: ClassNameProps) => {
//   return (
//     // <div className={cn("flex flex-col items-center justify-center", className)}>
//     //   <div className="relative w-full max-w-xs md:max-w-sm aspect-3/4 flex flex-col items-center justify-between py-12">

//     //     {/* Cloud & Server Group */}
//     //     <div className="relative animate-float">
//     //       {/* Cloud Shadow/Glow */}

//     //       <svg viewBox="0 0 160 100" className="w-48 md:w-56 drop-shadow-md overflow-visible">
//     //         {/* Fluffy Cloud Body */}
//     //         <g fill="white">
//     //           <circle cx="30" cy="60" r="25" />
//     //           <circle cx="60" cy="40" r="30" />
//     //           <circle cx="100" cy="35" r="35" />
//     //           <circle cx="130" cy="60" r="25" />
//     //           <rect x="30" y="50" width="100" height="35" />
//     //         </g>

//     //         {/* Internal Servers */}
//     //         <g transform="translate(55, 45)">
//     //           {/* Server 1 */}
//     //           <rect x="0" y="0" width="50" height="14" rx="2" className="fill-slate-700" />
//     //           <rect x="6" y="6" width="28" height="2" rx="1" className="fill-slate-500" />
//     //           <circle cx="43" cy="7" r="1.5" className="fill-green-500 animate-pulse" />

//     //           {/* Server 2 */}
//     //           <rect x="0" y="18" width="50" height="14" rx="2" className="fill-slate-700" />
//     //           <rect x="6" y="24" width="28" height="2" rx="1" className="fill-slate-500" />
//     //           <circle cx="43" cy="25" r="1.5" className="fill-green-500 animate-pulse [animation-delay:0.5s]" />
//     //         </g>
//     //       </svg>
//     //     </div>

//     //     {/* Animated Upload Line */}
//     //     <div className="relative flex-1 w-full flex justify-center">
//     //       <svg className="h-full w-2 overflow-visible">
//     //         {/* Reversing the animation: 
//     //             Moving dashoffset from 0 to 24 (or positive) makes the dashes 
//     //             appear to move against the path direction (upwards).
//     //         */}
//     //         <line
//     //           x1="4" y1="0"
//     //           x2="4" y2="100%"
//     //           stroke="#3b82f6"
//     //           strokeWidth="5"
//     //           strokeLinecap="round"
//     //           strokeDasharray="12 12"
//     //           className="animate-flow-up"
//     //         />
//     //       </svg>
//     //     </div>

//     //     {/* Modern Screen Section */}
//     //     <div className="relative w-40 md:w-48 aspect-video bg-slate-800 rounded-lg p-1.5 shadow-2xl border border-slate-700">
//     //       {/* Glossy Screen Inner */}
//     //       <div className="w-full h-full bg-slate-950 rounded-sm relative overflow-hidden flex flex-col items-center justify-center gap-2 p-4">
//     //         {/* Animated Data Bars */}
//     //         <div className="w-full h-1 bg-blue-500/40 rounded-full animate-pulse"></div>
//     //         <div className="w-3/4 h-1 bg-blue-400/30 rounded-full animate-pulse [animation-delay:0.2s]"></div>
//     //         <div className="w-5/6 h-1 bg-blue-300/20 rounded-full animate-pulse [animation-delay:0.4s]"></div>

//     //         {/* Glass Reflection */}
//     //         <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>
//     //       </div>
//     //     </div>

//     //     {/* Label */}

//     //   </div>

//     //   <style>{`
//     //     @keyframes flow-up {
//     //       /* Reversing the offset direction to make it move UP toward the cloud */
//     //       from { stroke-dashoffset: 0; }
//     //       to { stroke-dashoffset: 24; }
//     //     }
//     //     @keyframes float {
//     //       0%, 100% { transform: translateY(0); }
//     //       50% { transform: translateY(-12px); }
//     //     }
//     //     .animate-flow-up {
//     //       animation: flow-up 1s linear infinite;
//     //     }
//     //     .animate-float {
//     //       animation: float 4s ease-in-out infinite;
//     //     }
//     //   `}</style>
//     // </div>
//     <div className={cn("w-full flex items-center justify-center", className)}>
//       <img src={upload} alt="" className="" style={{opacity:0}} />
//     </div>
//   );
// };
const Uploading = forwardRef<HTMLDivElement | null, ClassNameProps>(({ className = "" },ref) => {
  return (

    <div ref={ref} className={cn("w-full flex items-center justify-center", className)} style={{ opacity: 0 }}>
      <img src={upload} alt="" className="scale-175 flex"  />
    </div>
  );
});

export default Uploading;