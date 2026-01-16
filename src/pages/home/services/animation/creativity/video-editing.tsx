import Acurve from '@/components/svgs/Acurve';
import { TextAnimate } from '@/components/ui/text-animate';
import { cn } from '@/lib/utils';
import type { ClassNameProps } from '@/types/global';
import { forwardRef } from 'react';
/**
 * VideoEditingInterface Component (Minimal Version)
 * A sleek, high-end visualization of a video editing workspace 
 * focusing on essential UI elements and a modern dark aesthetic.
 */
const VideoEditing = forwardRef<HTMLDivElement | null, ClassNameProps>(({ className = "" }, ref) => {
  return (
    <div ref={ref} className={cn("flex items-center justify-center  w-full", className)}>
      {/* Main Interface Container */}
      <div className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] border border-slate-800 flex flex-col">

        {/* Top Minimal Bar */}
        <div className="h-12 px-6 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-700"></div>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="flex-1 flex overflow-hidden">

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">

            {/* Minimal Preview Window */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="relative w-full h-16 bg-background rounded-lg overflow-hidden  group shadow-inner">
                {/* Playhead Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <Acurve variant='white' className='size-16' />
                  <h1 className="text-3xl font-black tracking-[0.2em] text-white">

                    <TextAnimate by='character' animation='fadeIn' duration={2}>ACURVE</TextAnimate>
                  </h1>
                </div>

                {/* Bottom Overlay Info */}

              </div>
            </div>

            {/* Simplified Timeline */}
            <div className="h-48 bg-slate-900/80 p-6 space-y-4 relative border-t border-slate-800">

              {/* Playhead Scrubber */}
              <div className="absolute left-[40%] top-0 bottom-0 w-px bg-blue-500 z-20 animate-scrub">
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute -top-1 -left-[3.5px]"></div>
              </div>

              <div className="relative h-10 w-full bg-slate-800/10 rounded-md border border-slate-800/30 flex items-center px-4">
                <div className="w-full h-4 flex items-center gap-0.5">
                  {[...Array(60)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-slate-700/40 rounded-full"
                      style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Timeline Ruler */}
              <div className="flex justify-between px-2 pt-2 border-t border-slate-800/50">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-[8px] font-mono text-slate-600">0{i}:00</div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Tool Column */}
          <div className="w-16 border-l border-slate-800 flex flex-col items-center py-8 gap-8">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="mt-auto w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center opacity-40">
              <div className="w-4 h-4 rounded-sm border border-slate-600"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrub {
          0% { left: 15%; }
          100% { left: 85%; }
        }
        .animate-scrub {
          animation: scrub 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
})

export default VideoEditing;