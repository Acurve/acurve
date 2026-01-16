import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types/global";
import maintenance from "@/assets/maintenance-technical-support/maintenance.gif"
import { forwardRef } from "react";
/**
 * MaintenanceSupport Component
 * Displays a modern monitor with a static maintenance shield icon
 * and a blinking "Resolving" status indicator located inside the screen.
 */
// const Maintenance = ({ className = "" }: ClassNameProps) => {
//   return (
//     // <div className={cn("flex flex-col items-center justify-center w-full", className)}>
//     //   <div className="relative w-full px-4 max-w-sm flex flex-col items-center justify-center">



//     //     {/* Monitor / Screen Composition */}
//     //     <div className="relative z-10  aspect-4/3 bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700">
//     //       {/* Glossy Inner Screen */}
//     //       <div className="w-full h-full bg-slate-950 rounded-lg relative overflow-hidden flex flex-col items-center justify-center p-6">

//     //         {/* Maintenance Shield Icon (Static) */}
//     //         <svg viewBox="0 0 100 100" className="w-20 h-20 mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
//     //           <path
//     //             d="M50 15 L80 25 L80 50 C80 68 67 82 50 88 C33 82 20 68 20 50 L20 25 L50 15 Z"
//     //             fill="none"
//     //             stroke="#3b82f6"
//     //             strokeWidth="4"
//     //             strokeLinejoin="round"
//     //           />
//     //           <path
//     //             d="M40 50 L48 58 L62 42"
//     //             fill="none"
//     //             stroke="#60a5fa"
//     //             strokeWidth="5"
//     //             strokeLinecap="round"
//     //             strokeLinejoin="round"
//     //           />
//     //         </svg>

//     //         {/* Status Message INSIDE the screen */}
//     //         <div className="text-center space-y-2">
//     //           <p className="text-blue-400 font-bold text-base md:text-lg tracking-tight animate-blink">
//     //             Resolving issue...
//     //           </p>
//     //           <div className="flex justify-center gap-1">
//     //             <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 animate-bounce [animation-delay:-0.3s]"></div>
//     //             <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-bounce [animation-delay:-0.15s]"></div>
//     //             <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-bounce"></div>
//     //           </div>
//     //         </div>

//     //         {/* Screen Reflection */}
//     //         <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none"></div>
//     //       </div>
//     //     </div>

//     //     {/* Monitor Neck/Stand */}
//     //     <div className="w-12 h-4 bg-slate-700 -mt-1 shadow-inner"></div>
//     //     <div className="w-32 h-2 bg-slate-800 rounded-t-lg shadow-md"></div>

//     //     {/* Footer Label */}

//     //   </div>

//     //   <style>{`
//     //     @keyframes blink {
//     //       0%, 100% { opacity: 1; transform: scale(1); }
//     //       50% { opacity: 0.6; transform: scale(0.98); }
//     //     }
//     //     .animate-blink {
//     //       animation: blink 2s ease-in-out infinite;
//     //     }
//     //   `}</style>
//     // </div>
//     <div className={cn("w-full flex justify-center items-center", className)}>
//       <img src={maintenance} alt="" className="flex" />
//     </div>
//   );
// };
const Maintenance = forwardRef<HTMLDivElement | null, ClassNameProps>(({ className = "" }, ref) => {
  return (
    <div ref={ref} className={cn("w-full flex justify-center items-center", className)} style={{ opacity: 0 }}>
      <img src={maintenance} alt="" className="flex scale-75" />
    </div>
  );
});

export default Maintenance;