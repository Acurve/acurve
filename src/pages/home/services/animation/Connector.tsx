// import { motion, useAnimationControls } from 'motion/react';
// import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

// interface SmartAnimatedLineProps {
//     containerRef?: React.RefObject<HTMLElement | null>;
//     fromRef: React.RefObject<HTMLDivElement | null>;
//     toRef: React.RefObject<HTMLDivElement | null>;
//     obstacles?: React.RefObject<HTMLDivElement | null>[];
//     color?: string;
//     strokeWidth?: number;
//     animationDuration?: number;
//     className?: string;
//     padding?: number;
// }

// type Point = { x: number; y: number };
// type Side = 'top' | 'bottom' | 'left' | 'right';

// export type AnimatedLineHandle = {
//     play: () => Promise<void>;
//     erase: () => Promise<void>;
//     stop: () => void;
// } | null;

// export const Connector = forwardRef<AnimatedLineHandle, SmartAnimatedLineProps>(({
//     containerRef,
//     fromRef,
//     toRef,
//     obstacles = [],
//     color = '#635bff',
//     strokeWidth = 2,
//     animationDuration = 1.5,
//     className = '',
//     padding = 20,
// }, ref) => {
//     const [pathData, setPathData] = useState<string>('');
//     const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
//     const [length, setLength] = useState<number>(0);

//     const pathRef = useRef<SVGPathElement>(null);
//     const controls = useAnimationControls();

//     const getBestConnectionPoints = (
//         fromRect: DOMRect,
//         toRect: DOMRect,
//         containerRect: DOMRect
//     ): { start: Point; end: Point; startSide: Side; endSide: Side } => {
//         const fromCenter = {
//             x: fromRect.left - containerRect.left + fromRect.width / 2,
//             y: fromRect.top - containerRect.top + fromRect.height / 2,
//         };

//         const toCenter = {
//             x: toRect.left - containerRect.left + toRect.width / 2,
//             y: toRect.top - containerRect.top + toRect.height / 2,
//         };

//         const dx = toCenter.x - fromCenter.x;
//         const dy = toCenter.y - fromCenter.y;

//         let startSide: Side;
//         let start: Point;

//         const fromRelX = fromRect.left - containerRect.left;
//         const fromRelY = fromRect.top - containerRect.top;

//         if (Math.abs(dx) > Math.abs(dy)) {
//             if (dx > 0) {
//                 startSide = 'right';
//                 start = { x: fromRelX + fromRect.width, y: fromRelY + fromRect.height / 2 };
//             } else {
//                 startSide = 'left';
//                 start = { x: fromRelX, y: fromRelY + fromRect.height / 2 };
//             }
//         } else {
//             if (dy > 0) {
//                 startSide = 'bottom';
//                 start = { x: fromRelX + fromRect.width / 2, y: fromRelY + fromRect.height };
//             } else {
//                 startSide = 'top';
//                 start = { x: fromRelX + fromRect.width / 2, y: fromRelY };
//             }
//         }

//         let endSide: Side;
//         let end: Point;

//         const toRelX = toRect.left - containerRect.left;
//         const toRelY = toRect.top - containerRect.top;

//         if (Math.abs(dx) > Math.abs(dy)) {
//             if (dx > 0) {
//                 endSide = 'left';
//                 end = { x: toRelX, y: toRelY + toRect.height / 2 };
//             } else {
//                 endSide = 'right';
//                 end = { x: toRelX + toRect.width, y: toRelY + toRect.height / 2 };
//             }
//         } else {
//             if (dy > 0) {
//                 endSide = 'top';
//                 end = { x: toRelX + toRect.width / 2, y: toRelY };
//             } else {
//                 endSide = 'bottom';
//                 end = { x: toRelX + toRect.width / 2, y: toRelY + toRect.height };
//             }
//         }

//         return { start, end, startSide, endSide };
//     };

//     const createSmartPath = (
//         start: Point,
//         end: Point,
//         startSide: Side,
//         endSide: Side,
//     ): string => {
//         const radius = 16; // Smaller radius for tighter curves like Stripe

//         // Check for nearly straight lines
//         if (Math.abs(start.x - end.x) < 10) {
//             return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
//         }
//         if (Math.abs(start.y - end.y) < 10) {
//             return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
//         }

//         let path = `M ${start.x} ${start.y}`;

//         const startVertical = startSide === 'top' || startSide === 'bottom';
//         const endVertical = endSide === 'top' || endSide === 'bottom';

//         if (startVertical && endVertical) {
//             // Both vertical - create S-curve
//             const midY = (start.y + end.y) / 2;
//             const dx = end.x - start.x;
//             const controlOffset = Math.min(Math.abs(dx) / 2, 60);

//             path += ` L ${start.x} ${midY - radius}`;
//             path += ` Q ${start.x} ${midY} ${start.x + Math.sign(dx) * radius} ${midY}`;
//             path += ` L ${end.x - Math.sign(dx) * radius} ${midY}`;
//             path += ` Q ${end.x} ${midY} ${end.x} ${midY + radius}`;
//             path += ` L ${end.x} ${end.y}`;

//         } else if (!startVertical && !endVertical) {
//             // Both horizontal - create S-curve
//             const midX = (start.x + end.x) / 2;
//             const dy = end.y - start.y;

//             path += ` L ${midX - radius} ${start.y}`;
//             path += ` Q ${midX} ${start.y} ${midX} ${start.y + Math.sign(dy) * radius}`;
//             path += ` L ${midX} ${end.y - Math.sign(dy) * radius}`;
//             path += ` Q ${midX} ${end.y} ${midX + radius} ${end.y}`;
//             path += ` L ${end.x} ${end.y}`;

//         } else {
//             // One horizontal, one vertical - single curve
//             const dx = end.x - start.x;
//             const dy = end.y - start.y;

//             if (startVertical) {
//                 // Vertical start to horizontal end
//                 const cornerY = end.y;
//                 const cornerX = start.x;

//                 path += ` L ${cornerX} ${cornerY - Math.sign(dy) * radius}`;
//                 path += ` Q ${cornerX} ${cornerY} ${cornerX + Math.sign(dx) * radius} ${cornerY}`;
//                 path += ` L ${end.x} ${end.y}`;
//             } else {
//                 // Horizontal start to vertical end
//                 const cornerX = end.x;
//                 const cornerY = start.y;

//                 path += ` L ${cornerX - Math.sign(dx) * radius} ${cornerY}`;
//                 path += ` Q ${cornerX} ${cornerY} ${cornerX} ${cornerY + Math.sign(dy) * radius}`;
//                 path += ` L ${end.x} ${end.y}`;
//             }
//         }

//         return path;
//     };

//     const calculatePath = () => {
//         if (!fromRef.current || !toRef.current) return;

//         const container = containerRef?.current || document.body;
//         const containerRect = container.getBoundingClientRect();

//         setSvgDimensions({
//             width: containerRect.width,
//             height: containerRect.height,
//         });

//         const fromRect = fromRef.current.getBoundingClientRect();
//         const toRect = toRef.current.getBoundingClientRect();

//         const { start, end, startSide, endSide } = getBestConnectionPoints(
//             fromRect,
//             toRect,
//             containerRect
//         );

//         const path = createSmartPath(start, end, startSide, endSide);
//         setPathData(path);
//     };

//     const play = async () => {
//         if (length === 0) return;

//         await controls.start({
//             pathLength: [0, 1],
//             opacity: 1,
//             transition: { 
//                 pathLength: { duration: animationDuration, ease: "easeInOut" },
//                 opacity: { duration: 0.2 }
//             }
//         });
//     };

//     const erase = async () => {
//         if (length === 0) return;

//         await controls.start({
//             pathLength: [1, 0],
//             opacity: 0,
//             transition: { 
//                 pathLength: { duration: animationDuration, ease: "easeInOut" },
//                 opacity: { duration: 0.2, delay: animationDuration - 0.2 }
//             }
//         });
//     };

//     useImperativeHandle(ref, () => ({
//         play,
//         erase,
//         stop: () => controls.stop()
//     }));

//     useEffect(() => {
//         const timer = setTimeout(calculatePath, 100);
//         const handleResize = () => calculatePath();
//         window.addEventListener('resize', handleResize);

//         const resizeObserver = new ResizeObserver(calculatePath);
//         if (fromRef.current) resizeObserver.observe(fromRef.current);
//         if (toRef.current) resizeObserver.observe(toRef.current);

//         return () => {
//             clearTimeout(timer);
//             window.removeEventListener('resize', handleResize);
//             resizeObserver.disconnect();
//         };
//     }, [fromRef, toRef, containerRef]);

//     useLayoutEffect(() => {
//         if (pathRef.current && pathData) {
//             const pathLength = pathRef.current.getTotalLength();
//             setLength(pathLength);
//         }
//     }, [pathData]);

//     if (!pathData) return null;

//     return (
//         <svg
//             width={svgDimensions.width}
//             height={svgDimensions.height}
//             viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
//             className={`pointer-events-none absolute top-0 left-0 ${className}`}
//             style={{ zIndex: 1 }}
//         >
//             <defs>
//                 <linearGradient id={`gradient-${Math.random()}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor={color} stopOpacity="0.1" />
//                     <stop offset="50%" stopColor={color} stopOpacity="1" />
//                     <stop offset="100%" stopColor={color} stopOpacity="0.1" />
//                 </linearGradient>
//             </defs>
//             <motion.path
//                 ref={pathRef}
//                 d={pathData}
//                 stroke={color}
//                 strokeWidth={strokeWidth}
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={controls}
//                 style={{
//                     filter: `drop-shadow(0 0 4px ${color}40)`
//                 }}
//             />
//         </svg>
//     );
// });


import { motion } from 'motion/react';
import React, { useLayoutEffect, useState } from 'react';
import { getElementCoords, getOrthogonalPath, Side } from '@/utils/beam';
import { cn } from '@/lib/utils';

interface ConnectorProps {
    containerRef: React.RefObject<HTMLElement | null>;
    fromRef: React.RefObject<HTMLElement | null>;
    toRef: React.RefObject<HTMLElement | null>;
    /**
     * Side to exit from the 'from' element. 
     * Default depends on logic, but can be forced (e.g., Side.Right)
     */
    fromSide?: Side;
    /**
     * Side to enter the 'to' element.
     */
    toSide?: Side;
    color?: string;
    strokeWidth?: number;
    duration?: number;
    className?: string;
    pathColor?: string; // Color of the background track
    reverse?: boolean; // Direction of flow
    dotted?: boolean; // Should the background track be dotted?
    curvature?: number; // Radius of the corners
}

export const Connector = ({
    containerRef,
    fromRef,
    toRef,
    fromSide = Side.Right,
    toSide = Side.Left,
    color = '#6366f1', // Indigo-500
    pathColor = '#e5e7eb', // Gray-200
    strokeWidth = 2,
    duration = 2,
    className = '',
    reverse = false,
    dotted = false,
    curvature = 16, // Good radius for 90 deg turns
}: ConnectorProps) => {
    const [pathD, setPathD] = useState('');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Calculate path on mount and window resize
    const updatePath = () => {
        if (!containerRef.current || !fromRef.current || !toRef.current) return;

        const container = containerRef.current;
        const from = fromRef.current;
        const to = toRef.current;

        // Update SVG dimensions to match container
        const { width, height } = container.getBoundingClientRect();
        setDimensions({ width, height });

        // Get coordinates relative to container
        const start = getElementCoords(from, container, fromSide);
        const end = getElementCoords(to, container, toSide);

        // Generate the 90-degree curved path
        const d = getOrthogonalPath(start, end, curvature);
        setPathD(d);
    };

    useLayoutEffect(() => {
        updatePath();
        window.addEventListener('resize', updatePath);
        return () => window.removeEventListener('resize', updatePath);
    }, [containerRef, fromRef, toRef, fromSide, toSide, curvature]);

    // Animation configuration
    // We use a long dasharray: [length of beam, length of gap]
    // The gap must be long enough to hide the beam when it cycles.
    const transition = {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0, // Continuous flow
    };

    return (
        <svg
            className={cn('pointer-events-none absolute left-0 top-0 block h-full w-full', className)}
            width={dimensions.width}
            height={dimensions.height}
            fill="none"
            style={{ zIndex: -1 }} // Ensure it stays behind content
        >
            {/* 1. Background Track (Static) */}
            <path
                d={pathD}
                stroke={pathColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={dotted ? "4 4" : "none"}
            />

            {/* 2. Animated Beam (Moving) */}
            {/* The strokeDasharray creates the "beam". 
                "100 2000" means: 100px of line, then 2000px of empty space.
                We animate the offset to make this 100px segment slide along the path.
             */}
            <motion.path
                d={pathD}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round" // Round caps for the beam look better
                initial={{ strokeDasharray: "80 2000", strokeDashoffset: reverse ? -2000 : 2000 }}
                animate={{
                    strokeDashoffset: reverse ? 0 : 0,
                }}
            // transition={transition}
            />

            {/* Optional: Add a glow effect by duplicating the path with blur */}
            <motion.path
                d={pathD}
                stroke={color}
                strokeWidth={strokeWidth * 2}
                strokeOpacity={0.2}
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDasharray: "80 2000", strokeDashoffset: reverse ? -2000 : 2000 }}
                animate={{
                    strokeDashoffset: reverse ? 0 : 0,
                }}
            // transition={transition}
            />
        </svg>
    );
};