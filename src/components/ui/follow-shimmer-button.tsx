import { useState, useRef } from 'react';
import type { ChildrenProps, ClassNameProps } from '@/types/global';
import { cn } from '@/lib/utils';

const FollowShimmerButton = ({ className = "", children }: ClassNameProps & ChildrenProps) => {
    const [_, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (


        <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

            {/* Main Button */}
            <button
                ref={buttonRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
                className={cn("relative px-8 py-4 bg-background rounded-full leading-none flex items-center border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 overflow-hidden",className)}
            >
                {children}

                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent)`
                    }}
                />
            </button>
        </div>


    );
};

export default FollowShimmerButton;