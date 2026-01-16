import React, { useRef, useMemo, useEffect } from 'react';
import { motion, useInView, type Variant, type Variants, type Transition, useScroll, useSpring, useTransform } from 'motion/react';

/**
 * Supported animation types
 */
export type AnimationType =
    | 'fade'
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'scale'
    | 'scale-up'
    | 'scale-down'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
    | 'zoom-in'
    | 'zoom-out'
    | 'flip-up'
    | 'flip-down'
    | 'bounce';

/**
 * Trigger types for the animation
 */
export type AnimationTrigger = 'onLoad' | 'inView';

interface AnimateProps {
    children: React.ReactNode;
    type?: AnimationType;
    duration?: number;
    delay?: number;
    start?: AnimationTrigger;
    iteration?: 'once' | 'always';
    className?: string;
    threshold?: number;
    ease?: Transition['ease'];
}

/**
 * 1. SMOOTH ANIMATION WRAPPER
 * Optimized for performance using GPU-accelerated properties
 */
const Animate: React.FC<AnimateProps> = ({
    children,
    type = 'fade-up',
    duration = 0.8, // Slightly longer duration for "smoothness"
    delay = 0,
    start = 'inView',
    iteration = 'once',
    className = '',
    threshold = 0.15,
    ease = [0.22, 1, 0.36, 1], // Custom "Quart Out" ease for professional feel
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: iteration === 'once',
        amount: threshold
    });

    const variants: Variants = useMemo(() => {
        const onscreen: Variant = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { duration, delay, ease }
        };

        const map: Record<AnimationType, Variant> = {
            'fade': { opacity: 0 },
            'fade-up': { opacity: 0, y: 40 },
            'fade-down': { opacity: 0, y: -40 },
            'fade-left': { opacity: 0, x: 40 },
            'fade-right': { opacity: 0, x: -40 },
            'scale': { opacity: 0, scale: 0.95 },
            'scale-up': { opacity: 0, scale: 0.8, y: 30 },
            'scale-down': { opacity: 0, scale: 1.1, y: -30 },
            'slide-up': { y: '100%' },
            'slide-down': { y: '-100%' },
            'slide-left': { x: '100%' },
            'slide-right': { x: '-100%' },
            'zoom-in': { opacity: 0, scale: 0.5 },
            'zoom-out': { opacity: 0, scale: 1.2 },
            'flip-up': { opacity: 0, rotateX: 70 },
            'flip-down': { opacity: 0, rotateX: -70 },
            'bounce': { opacity: 0, y: 60 },
        };

        return {
            hidden: map[type] || { opacity: 0 },
            visible: onscreen,
        };
    }, [type, duration, delay, ease]);

    const animateState = start === 'onLoad' ? 'visible' : (isInView ? 'visible' : 'hidden');

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={animateState}
            variants={variants}
            className={className}
            // Corrected: transformTemplate is a direct prop, not a style property
            transformTemplate={({ x, y, scale, rotateX, rotateY }) =>
                `translate3d(${x}, ${y}, 0) scale(${scale}) rotateX(${rotateX}) rotateY(${rotateY})`
            }
        >
            {children}
        </motion.div>
    );
};

/**
 * 2. SMOOTH SCROLL COMPONENT
 * Implements a "virtual" smooth scroll effect by transforming the main container
 * based on the actual window scroll position with spring physics.
 */
const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = React.useState(0);

    // Set the body height to match the content height to enable native scrollbar
    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [children]);

    const { scrollY } = useScroll();

    // Create a spring-smoothed version of the scroll position
    const smoothY = useSpring(scrollY, {
        damping: 20,
        stiffness: 80,
        restDelta: 0.001
    });

    // Map the smoothed scroll to a negative transform
    const y = useTransform(smoothY, (value) => -value);

    return (
        <>
            <div style={{ height: contentHeight }} />
            <motion.div
                ref={contentRef}
                style={{ y, position: 'fixed', top: 0, left: 0, width: '100%', overflow: 'hidden' }}
            >
                {children}
            </motion.div>
        </>
    );
};


export default Animate;
export { SmoothScroll }