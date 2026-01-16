import { motion, useAnimationControls } from 'motion/react';
import React, { useState, useRef, useLayoutEffect, forwardRef, useImperativeHandle } from 'react';

// --- Types ---
type Side = 'top' | 'bottom' | 'left' | 'right';

interface Point {
  x: number;
  y: number;
}

interface ConnectorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  pathColor?: string;
  fromSide?: Side;
  toSide?: Side;
}

// --- Utility: Calculate Auto-Sides based on relative position ---
const getAutoSides = (fromRect: DOMRect, toRect: DOMRect): { fromSide: Side; toSide: Side } => {
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2,
    y: fromRect.top + fromRect.height / 2,
  };
  const toCenter = {
    x: toRect.left + toRect.width / 2,
    y: toRect.top + toRect.height / 2,
  };

  const dx = toCenter.x - fromCenter.x;
  const dy = toCenter.y - fromCenter.y;

  let fromSide: Side = 'bottom';
  let toSide: Side = 'top';

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0) {
      fromSide = 'right';
      toSide = 'left';
    } else {
      fromSide = 'left';
      toSide = 'right';
    }
  } else {
    if (dy > 0) {
      fromSide = 'bottom';
      toSide = 'top';
    } else {
      fromSide = 'top';
      toSide = 'bottom';
    }
  }

  return { fromSide, toSide };
};

// --- Utility: Get exact coordinates for a side with "Slack" for alignment ---
const getSideCoordinates = (rect: DOMRect, targetRect: DOMRect, containerRect: DOMRect, side: Side): Point => {
  const slack = 20; // Increased slack for better straight-line alignment

  let x = (rect.left + rect.width / 2) - containerRect.left;
  let y = (rect.top + rect.height / 2) - containerRect.top;

  const targetX = (targetRect.left + targetRect.width / 2) - containerRect.left;
  const targetY = (targetRect.top + targetRect.height / 2) - containerRect.top;

  // If the target is nearly aligned with our center, shift our point to match target
  if (side === 'top' || side === 'bottom') {
    if (Math.abs(x - targetX) < slack) x = targetX;
  } else {
    if (Math.abs(y - targetY) < slack) y = targetY;
  }

  switch (side) {
    case 'top':
      return { x, y: rect.top - containerRect.top };
    case 'bottom':
      return { x, y: rect.bottom - containerRect.top };
    case 'left':
      return { x: rect.left - containerRect.left, y };
    case 'right':
      return { x: rect.right - containerRect.left, y };
    default:
      return { x, y };
  }
};

// --- Utility: Path Generator with Smooth Rounded L-bends ---
const getSmartPath = (startX: number, startY: number, endX: number, endY: number, fromSide: Side): string => {
  const threshold = 4;

  const dx = endX - startX;
  const dy = endY - startY;

  // 1. STRAIGHT LINE CASE
  if (Math.abs(dx) < threshold || Math.abs(dy) < threshold) {
    return `M ${startX},${startY} L ${endX},${endY}`;
  }

  // 2. ROUNDED L-SHAPE CASE
  let cornerX: number, cornerY: number;

  if (fromSide === 'left' || fromSide === 'right') {
    cornerX = endX;
    cornerY = startY;
  } else {
    cornerX = startX;
    cornerY = endY;
  }

  // Calculate maximum allowed radius based on segment lengths
  const dist1 = Math.sqrt(Math.pow(cornerX - startX, 2) + Math.pow(cornerY - startY, 2));
  const dist2 = Math.sqrt(Math.pow(endX - cornerX, 2) + Math.pow(endY - cornerY, 2));
  const radius = Math.min(30, dist1 / 2, dist2 / 2);

  // Vectors for arc start and end
  const v1 = {
    x: (startX - cornerX) / dist1,
    y: (startY - cornerY) / dist1
  };
  const v2 = {
    x: (endX - cornerX) / dist2,
    y: (endY - cornerY) / dist2
  };

  const arcStartX = cornerX + v1.x * radius;
  const arcStartY = cornerY + v1.y * radius;
  const arcEndX = cornerX + v2.x * radius;
  const arcEndY = cornerY + v2.y * radius;

  return `M ${startX},${startY} 
          L ${arcStartX},${arcStartY} 
          Q ${cornerX},${cornerY} ${arcEndX},${arcEndY} 
          L ${endX},${endY}`;
};

// --- Connector Component ---


export type AnimatedLineHandle = {
  play: () => Promise<void>;
  erase: () => Promise<void>;
  stop: () => void;
};

export const Connector = forwardRef<AnimatedLineHandle, ConnectorProps>(({
  containerRef,
  fromRef,
  toRef,
  pathColor = "#6366f1",
  fromSide: explicitFrom,
  toSide: explicitTo
}, ref) => {
  const [path, setPath] = useState<string>("");
  const pathRef = useRef<SVGPathElement>(null)
  const [length, setLength] = useState<number>(0)
  const controls = useAnimationControls()

  const updatePath = () => {
    if (!fromRef?.current || !toRef?.current || !containerRef?.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const from = fromRef.current.getBoundingClientRect();
    const to = toRef.current.getBoundingClientRect();

    let fSide: Side | undefined = explicitFrom;
    let tSide: Side | undefined = explicitTo;

    if (!fSide || !tSide) {
      const auto = getAutoSides(from, to);
      fSide = fSide || auto.fromSide;
      tSide = tSide || auto.toSide;
    }

    const start = getSideCoordinates(from, to, container, fSide as Side);
    const end = getSideCoordinates(to, from, container, tSide as Side);

    setPath(getSmartPath(start.x, start.y, end.x, end.y, fSide as Side));
  };

  useLayoutEffect(() => {
    updatePath();

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new ResizeObserver(updatePath);
    observer.observe(currentContainer);
    window.addEventListener('resize', updatePath);

    return () => {
      window.removeEventListener('resize', updatePath);
      observer.disconnect();
    };
  }, [fromRef, toRef, containerRef, explicitFrom, explicitTo]);

  useLayoutEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      setLength(pathLength);

      controls.set({
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        opacity: 0
      });
    }
  }, [path, controls]);

  const gradId = useRef(`grad-${Math.random().toString(36).substr(2, 9)}`).current;



  const play = async () => {
    if (!length) return;
    // Ensure we start from zero opacity and full offset
    const pathLength = pathRef.current?.getTotalLength()
    controls.set({ strokeDashoffset: pathLength, opacity: 0 });

    await controls.start({
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        opacity: { duration: 0.3 },
        strokeDashoffset: { duration: 0.7, ease: [0.32, 0, 0.67, 0] }
      }
    });
  };

  const erase = async () => {
    await controls.start({
      strokeDashoffset: -length,
      transition: {
        duration: 0.7,
        ease: [0.32, 0, 0.67, 0]
      }
    });
  };

  useImperativeHandle(ref, () => ({
    play,
    erase,
    stop: () => controls.stop()
  }));


  return (
    <g className="overflow-visible">

      <motion.path
        ref={pathRef}
        d={path}
        stroke={`url(#${gradId})`}
        strokeWidth={2}
        fill="none"
        style={{
          filter: `drop-shadow(0 0 8px ${pathColor}44)`,
          strokeLinecap: 'round',

        }}
        animate={controls}
      />

      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={pathColor}>
            <animate attributeName="stop-color" values={`${pathColor}; #10b981; #3b82f6; ${pathColor}`} dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#ffffff99">
            <animate attributeName="offset" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#a855f7">
            <animate attributeName="stop-color" values="#a855f7; #ec4899; #6366f1; #a855f7" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </g>
  );
})


// import React, { useState, useRef, useLayoutEffect, forwardRef, useImperativeHandle } from 'react';
// import { motion, useAnimationControls } from 'motion/react';

// // --- Types & Constants ---
// type Side = 'top' | 'bottom' | 'left' | 'right';

// interface Point {
//   x: number;
//   y: number;
// }

// interface ConnectorProps {
//   containerRef: React.RefObject<HTMLDivElement | null>;
//   fromRef: React.RefObject<HTMLDivElement | null>;
//   toRef: React.RefObject<HTMLDivElement | null>;
//   pathColor?: string;
//   fromSide?: Side;
//   toSide?: Side;
// }

// export interface AnimatedLineHandle {
//   play: () => Promise<void>;
//   erase: () => Promise<void>;
//   stop: () => void;
// }

// const SLACK = 20;
// const RADIUS = 30;
// const THRESHOLD = 4;
// // Increase the overlap to 2px to ensure it pierces the border of the target divs
// const OVERLAP_OFFSET = 2;

// // --- Utility: Sleep ---
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// // --- Utility: Calculate Auto-Sides ---
// const getAutoSides = (fromRect: DOMRect, toRect: DOMRect): { fromSide: Side; toSide: Side } => {
//   const fromCenter = { x: fromRect.left + fromRect.width / 2, y: fromRect.top + fromRect.height / 2 };
//   const toCenter = { x: toRect.left + toRect.width / 2, y: toRect.top + toRect.height / 2 };
//   const dx = toCenter.x - fromCenter.x;
//   const dy = toCenter.y - fromCenter.y;

//   if (Math.abs(dx) > Math.abs(dy)) {
//     return dx > 0 ? { fromSide: 'right', toSide: 'left' } : { fromSide: 'left', toSide: 'right' };
//   }
//   return dy > 0 ? { fromSide: 'bottom', toSide: 'top' } : { fromSide: 'top', toSide: 'bottom' };
// };

// // --- Utility: Get exact coordinates with overlap logic ---
// const getSideCoordinates = (rect: DOMRect, targetRect: DOMRect, containerRect: DOMRect, side: Side): Point => {
//   // Use scroll-adjusted or absolute viewport positions relative to the container
//   let x = (rect.left + rect.width / 2) - containerRect.left;
//   let y = (rect.top + rect.height / 2) - containerRect.top;

//   const targetX = (targetRect.left + targetRect.width / 2) - containerRect.left;
//   const targetY = (targetRect.top + targetRect.height / 2) - containerRect.top;

//   // Magnetic alignment: if nodes are nearly aligned, snap the connector to the center
//   if (side === 'top' || side === 'bottom') {
//     if (Math.abs(x - targetX) < SLACK) x = targetX;
//   } else {
//     if (Math.abs(y - targetY) < SLACK) y = targetY;
//   }

//   // Calculate the edge position and push it slightly inside the div (OVERLAP_OFFSET)
//   switch (side) {
//     case 'top':
//       return { x, y: (rect.top - containerRect.top) + OVERLAP_OFFSET };
//     case 'bottom':
//       return { x, y: (rect.bottom - containerRect.top) - OVERLAP_OFFSET };
//     case 'left':
//       return { x: (rect.left - containerRect.left) + OVERLAP_OFFSET, y };
//     case 'right':
//       return { x: (rect.right - containerRect.left) - OVERLAP_OFFSET, y };
//     default:
//       return { x, y };
//   }
// };

// // --- Utility: Path Generator ---
// const getSmartPath = (startX: number, startY: number, endX: number, endY: number, fromSide: Side): string => {
//   const dx = endX - startX;
//   const dy = endY - startY;

//   // Simple straight line if vertical or horizontal delta is minimal
//   if (Math.abs(dx) < THRESHOLD || Math.abs(dy) < THRESHOLD) {
//     return `M ${startX},${startY} L ${endX},${endY}`;
//   }

//   let cornerX = (fromSide === 'left' || fromSide === 'right') ? endX : startX;
//   let cornerY = (fromSide === 'left' || fromSide === 'right') ? startY : endY;

//   const dist1 = Math.sqrt(Math.pow(cornerX - startX, 2) + Math.pow(cornerY - startY, 2));
//   const dist2 = Math.sqrt(Math.pow(endX - cornerX, 2) + Math.pow(endY - cornerY, 2));
//   const r = Math.min(RADIUS, dist1 / 2, dist2 / 2);

//   const v1 = { x: (startX - cornerX) / dist1, y: (startY - cornerY) / dist1 };
//   const v2 = { x: (endX - cornerX) / dist2, y: (endY - cornerY) / dist2 };

//   const arcStartX = cornerX + v1.x * r;
//   const arcStartY = cornerY + v1.y * r;
//   const arcEndX = cornerX + v2.x * r;
//   const arcEndY = cornerY + v2.y * r;

//   return `M ${startX},${startY} L ${arcStartX},${arcStartY} Q ${cornerX},${cornerY} ${arcEndX},${arcEndY} L ${endX},${endY}`;
// };

// export const Connector = forwardRef<AnimatedLineHandle, ConnectorProps>(({
//   containerRef,
//   fromRef,
//   toRef,
//   pathColor = "#6366f1",
//   fromSide: explicitFrom,
//   toSide: explicitTo
// }, ref) => {
//   const [path, setPath] = useState<string>("");
//   const pathRef = useRef<SVGPathElement>(null);
//   const [length, setLength] = useState<number>(0);
//   const controls = useAnimationControls();
//   const gradId = useRef(`grad-${Math.random().toString(36).substr(2, 9)}`).current;

//   const updatePath = () => {
//     if (!fromRef?.current || !toRef?.current || !containerRef?.current) return;

//     // Use getBoundingClientRect for absolute positioning relative to viewport
//     const container = containerRef.current.getBoundingClientRect();
//     const from = fromRef.current.getBoundingClientRect();
//     const to = toRef.current.getBoundingClientRect();

//     let fSide = explicitFrom || getAutoSides(from, to).fromSide;
//     let tSide = explicitTo || getAutoSides(from, to).toSide;

//     const start = getSideCoordinates(from, to, container, fSide);
//     const end = getSideCoordinates(to, from, container, tSide);

//     setPath(getSmartPath(start.x, start.y, end.x, end.y, fSide));
//   };

//   useLayoutEffect(() => {
//     updatePath();
//     const currentContainer = containerRef.current;
//     if (!currentContainer) return;

//     const observer = new ResizeObserver(updatePath);
//     observer.observe(currentContainer);

//     // Handle scroll events in case the container or nodes are within a scrollable area
//     window.addEventListener('resize', updatePath);
//     window.addEventListener('scroll', updatePath, true);

//     return () => {
//       window.removeEventListener('resize', updatePath);
//       window.removeEventListener('scroll', updatePath, true);
//       observer.disconnect();
//     };
//   }, [fromRef, toRef, containerRef, explicitFrom, explicitTo]);

//   useLayoutEffect(() => {
//     if (pathRef.current) {
//       const pathLength = pathRef.current.getTotalLength();
//       setLength(pathLength);

//       // Dashoffset must exactly match pathLength for it to be "invisible" at start
//       controls.set({
//         strokeDasharray: pathLength,
//         strokeDashoffset: pathLength,
//         opacity: 1 // Keep opacity 1 but hide via dashoffset
//       });
//     }
//   }, [path, controls]);

//   const play = async () => {
//     const pathLength = pathRef.current?.getTotalLength() || length;
//     if (!pathLength) return;

//     // Reset to hidden state
//     controls.set({
//       strokeDasharray: pathLength,
//       strokeDashoffset: pathLength
//     });

//     await controls.start({
//       strokeDashoffset: 0,
//       transition: {
//         strokeDashoffset: { duration: 1, ease: "easeInOut" }
//       }
//     });
//   };

//   const erase = async () => {
//     const pathLength = pathRef.current?.getTotalLength() || length;
//     await controls.start({
//       strokeDashoffset: -pathLength,
//       transition: { duration: 0.8, ease: "easeInOut" }
//     });
//   };

//   useImperativeHandle(ref, () => ({ play, erase, stop: () => controls.stop() }));

//   return (
//     <g className="overflow-visible">
//       <defs>
//         <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
//           <stop offset="0%" stopColor={pathColor}>
//             <animate attributeName="stop-color" values={`${pathColor}; #10b981; #3b82f6; ${pathColor}`} dur="3s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="50%" stopColor="#ffffff99">
//             <animate attributeName="offset" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="100%" stopColor="#a855f7">
//             <animate attributeName="stop-color" values="#a855f7; #ec4899; #6366f1; #a855f7" dur="3s" repeatCount="indefinite" />
//           </stop>
//         </linearGradient>
//       </defs>
//       <motion.path
//         ref={pathRef}
//         d={path}
//         stroke={`url(#${gradId})`}
//         strokeWidth={2.5} // Slightly thinner for cleaner intersection
//         fill="none"
//         animate={controls}
//         style={{
//           filter: `drop-shadow(0 0 6px ${pathColor}44)`,
//           strokeLinecap: 'square', // Square cap helps fill the border area better than butt
//         }}
//       />
//     </g>
//   );
// });