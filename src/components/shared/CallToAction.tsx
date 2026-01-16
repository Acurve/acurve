import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router';
import Container from '../layout/Container';

interface CallToActionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onAction?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
    title = "Ready to elevate your Business?",
    description = "",
    buttonText = "Get Started",
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container>


            <div className="w-full  mx-auto p-1">
                <div
                    className="relative overflow-hidden bg-slate-950 rounded-3xl border border-slate-800 transition-all duration-500 ease-out shadow-2xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

                    <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6 transition-transform duration-300 hover:scale-105">
                                <Sparkles className="w-4 h-4 text-indigo-400" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Let's do it
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                {title}
                            </h2>

                            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="shrink-0">
                            <NavLink to='/contact'>


                                <button
                                    className={`
                group relative flex items-center justify-center space-x-3 
                bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg
                transition-all duration-300 transform
                hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
                active:scale-95
              `}
                                >
                                    <span>{buttonText}</span>
                                    <div className="relative overflow-hidden w-5 h-5">
                                        <ArrowRight
                                            className={`
                    absolute transition-all duration-300 
                    ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                  `}
                                        />
                                        <ChevronRight
                                            className={`
                    absolute transition-all duration-300 
                    ${isHovered ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
                  `}
                                        />
                                    </div>
                                </button>

                            </NavLink>
                        </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className={`
          absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent 
          transition-all duration-700 ease-in-out
          ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
        `} />
                </div>
            </div>
        </Container>
    );
};

export default CallToAction