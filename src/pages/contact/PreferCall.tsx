import { Phone, Calendar } from 'lucide-react';
import { NavLink } from 'react-router';
import { cn } from '@/lib/utils';
import { blueGradientClass } from '@/constants/gradients.constants';

interface QuickCallCTAProps {
    className?: string;
}

export default function QuickCallCTA({
    className = ""
}: QuickCallCTAProps) {
    return (
        <div className={`relative group ${className}`}>

            <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Prefer a Quick Call Instead?
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                            Let's discuss your project over a call. Schedule a time that works best for you,
                            and we'll connect to explore how we can help.
                        </p>

                        <NavLink
                            to={"/meeting"}
                            className={cn("inline-flex items-center gap-2 px-6 py-3  text-white rounded-xl font-semibold  transition-all duration-300 hover:scale-105 bg-linear-to-r", blueGradientClass)}
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Meeting
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}