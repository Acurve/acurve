import { cn } from '@/lib/utils';
import type { ChildrenProps, ClassNameProps } from '@/types/global';

/**
 * MinimalScreen Component
 * A clean, floating display panel without a stand or extra UI clutter.
 * Focuses on a premium bezel and subtle depth.
 */
const Screen = ({ children, className = "" }: ChildrenProps & ClassNameProps) => {
    return (
        <div className={cn("flex items-center justify-center w-full", className)}>
            <div className="relative w-full max-w-2xl">

                {/* Subtle Backdrop Glow */}
                <div className="absolute inset-0 bg-slate-900/5 blur-3xl rounded-3xl transform scale-95"></div>

                {/* The Screen / Panel */}
                <div className="relative z-10 w-full aspect-video bg-gray-700 rounded-2xl p-1.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-slate-800/40">

                    {/* Inner Display Area */}
                    <div className="relative w-full h-full bg-[#080808] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">

                        {children}

                        
                    </div>

                    {/* Minimal Power Status Dot */}
                    <div className="absolute bottom-3 right-6">
                        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;