import Acurve from '@/components/svgs/Acurve';
import { cn } from '@/lib/utils';
import type { ClassNameProps } from '@/types/global';
import { forwardRef } from 'react';

/**
 * ACURVE Merged Business Card
 * A high-end, single-sided professional card built with React and Tailwind CSS.
 * This version merges the branding and contact details into a unified layout.
 */
const GraphicDesign = forwardRef<HTMLDivElement | null, ClassNameProps>(({ className = "" }, ref) => {
    return (
        <div ref={ref} className={cn("flex items-center w-full justify-center", className)}>
            {/* Card Container */}
            <div className="relative w-full  aspect-[1.75/1] bg-[#020617] rounded-2xl overflow-hidden  flex flex-col p-8 md:p-10 transition-all group">

                {/* Background Decorative Element */}


                {/* Branding Section (Center) */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-4">
                        {/* Logo Mark */}
                        <Acurve variant='white' className='size-16' />
                        <h1 className="text-4xl md:text-5xl  text-white">ACURVE
                        </h1>
                    </div>
                </div>

                {/* Information Section (Bottom) */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end pt-8 border-t border-white/10 gap-6">
                    {/* Identity Info */}
                    <div className="">
                        <p className="text-slate-400 text-[8px] w-[50%] uppercase tracking-widest mt-1 font-semibold">if you are reading this, means you have great observation skills</p>
                    </div>

                    {/* Contact List */}
                    <div className="flex flex-col gap-2 text-[11px] text-slate-300 font-medium">
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <span>+91 9825233854</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <span>contact@acurve.com</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <span>www.acurve.in</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
})

export default GraphicDesign;