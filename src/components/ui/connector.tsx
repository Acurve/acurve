import React, { useEffect, useRef, useState } from 'react';

type Side = 'top' | 'bottom' | 'left' | 'right' | 'center';

interface AnimatedConnectorProps {
    containerRef?: React.RefObject<HTMLElement | null>;
    fromRef: React.RefObject<HTMLDivElement | null>;
    toRef: React.RefObject<HTMLDivElement | null>;
    originSide?: Side;
    targetSide?: Side;
    color?: string;
    strokeWidth?: number;
    animationDuration?: number;
    className?: string;
}

type Point = { x: number; y: number };
type RelativePosition = {
    targetIsAbove: boolean;
    targetIsBelow: boolean;
    targetIsLeft: boolean;
    targetIsRight: boolean;
};

export const AnimatedConnector: React.FC<AnimatedConnectorProps> = ({
    containerRef,
    fromRef,
    toRef,
    originSide = 'right',
    targetSide = 'left',
    color = '#6366f1',
    strokeWidth = 2,
    className = '',
}) => {
    const [pathData, setPathData] = useState<string>('');
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
    const pathRef = useRef<SVGPathElement>(null);

    const getPointOnElement = (
        element: HTMLElement,
        side: Side,
        containerRect: DOMRect
    ): Point => {
        const rect = element.getBoundingClientRect();
        const relX = rect.left - containerRect.left;
        const relY = rect.top - containerRect.top;

        switch (side) {
            case 'top':
                return { x: relX + rect.width / 2, y: relY };
            case 'bottom':
                return { x: relX + rect.width / 2, y: relY + rect.height };
            case 'left':
                return { x: relX, y: relY + rect.height / 2 };
            case 'right':
                return { x: relX + rect.width, y: relY + rect.height / 2 };
            case 'center':
            default:
                return { x: relX + rect.width / 2, y: relY + rect.height / 2 };
        }
    };

    const getRelativePosition = (
        fromRect: DOMRect,
        toRect: DOMRect
    ): RelativePosition => {
        const fromCenterX = fromRect.left + fromRect.width / 2;
        const fromCenterY = fromRect.top + fromRect.height / 2;
        const toCenterX = toRect.left + toRect.width / 2;
        const toCenterY = toRect.top + toRect.height / 2;

        return {
            targetIsAbove: toCenterY < fromCenterY,
            targetIsBelow: toCenterY > fromCenterY,
            targetIsLeft: toCenterX < fromCenterX,
            targetIsRight: toCenterX > fromCenterX,
        };
    };

    const determineOptimalSides = (
        position: RelativePosition,
        requestedOrigin: Side,
        requestedTarget: Side
    ): { origin: Side; target: Side } => {
        // Determine which side to actually use for origin
        let actualOrigin = requestedOrigin;
        let actualTarget = requestedTarget;

        // Fix origin side: ensure we exit toward the target, not away from it
        if (requestedOrigin === 'top' && position.targetIsBelow) {
            actualOrigin = 'bottom'; // Target below, exit downward
        } else if (requestedOrigin === 'bottom' && position.targetIsAbove) {
            actualOrigin = 'top'; // Target above, exit upward
        } else if (requestedOrigin === 'left' && position.targetIsRight) {
            actualOrigin = 'right'; // Target right, exit rightward
        } else if (requestedOrigin === 'right' && position.targetIsLeft) {
            actualOrigin = 'left'; // Target left, exit leftward
        }

        // Fix target side: ensure we enter from the origin's direction
        if (requestedTarget === 'top' && position.targetIsAbove) {
            actualTarget = 'bottom'; // Target is above origin, enter from bottom
        } else if (requestedTarget === 'bottom' && position.targetIsBelow) {
            actualTarget = 'top'; // Target is below origin, enter from top
        } else if (requestedTarget === 'left' && position.targetIsLeft) {
            actualTarget = 'right'; // Target is left of origin, enter from right
        } else if (requestedTarget === 'right' && position.targetIsRight) {
            actualTarget = 'left'; // Target is right of origin, enter from left
        }

        return { origin: actualOrigin, target: actualTarget };
    };

    const createSmartPath = (
        start: Point,
        end: Point,
        startSide: Side,
        endSide: Side,
        radius: number = 20
    ): string => {
        let path = `M ${start.x} ${start.y}`;

        const startVertical = startSide === 'top' || startSide === 'bottom';
        const endVertical = endSide === 'top' || endSide === 'bottom';

        const startDirY = startSide === 'top' ? -1 : startSide === 'bottom' ? 1 : 0;
        const startDirX = startSide === 'left' ? -1 : startSide === 'right' ? 1 : 0;
        const endDirY = endSide === 'top' ? -1 : endSide === 'bottom' ? 1 : 0;
        const endDirX = endSide === 'left' ? -1 : endSide === 'right' ? 1 : 0;

        const offset = 40;

        // Check if simple L-shape is possible (1 bend)
        const canUseSingleBend = (
            (startVertical && !endVertical &&
                ((startSide === 'top' && end.y < start.y) ||
                    (startSide === 'bottom' && end.y > start.y))) ||
            (!startVertical && endVertical &&
                ((startSide === 'left' && end.x < start.x) ||
                    (startSide === 'right' && end.x > start.x)))
        );

        if (canUseSingleBend) {
            // Simple L-shape - 1 bend
            if (startVertical) {
                path += ` L ${start.x} ${end.y - Math.sign(end.y - start.y) * radius}`;
                path += ` Q ${start.x} ${end.y}, ${start.x + Math.sign(end.x - start.x) * radius} ${end.y}`;
                path += ` L ${end.x} ${end.y}`;
            } else {
                path += ` L ${end.x - Math.sign(end.x - start.x) * radius} ${start.y}`;
                path += ` Q ${end.x} ${start.y}, ${end.x} ${start.y + Math.sign(end.y - start.y) * radius}`;
                path += ` L ${end.x} ${end.y}`;
            }
        } else if (startVertical && endVertical) {
            // Both vertical - 2 bends (S-shape)
            const mid1Y = start.y + startDirY * offset;
            const mid2Y = end.y + endDirY * offset;

            path += ` L ${start.x} ${mid1Y - Math.sign(mid1Y - start.y) * radius}`;
            path += ` Q ${start.x} ${mid1Y}, ${start.x + Math.sign(end.x - start.x) * radius} ${mid1Y}`;
            path += ` L ${end.x - Math.sign(end.x - start.x) * radius} ${mid1Y}`;
            path += ` Q ${end.x} ${mid1Y}, ${end.x} ${mid1Y + Math.sign(mid2Y - mid1Y) * radius}`;
            path += ` L ${end.x} ${mid2Y}`;
            path += ` Q ${end.x} ${mid2Y}, ${end.x} ${mid2Y + Math.sign(end.y - mid2Y) * radius}`;
            path += ` L ${end.x} ${end.y}`;
        } else if (!startVertical && !endVertical) {
            // Both horizontal - 2 bends (S-shape)
            const mid1X = start.x + startDirX * offset;
            const mid2X = end.x + endDirX * offset;

            path += ` L ${mid1X - Math.sign(mid1X - start.x) * radius} ${start.y}`;
            path += ` Q ${mid1X} ${start.y}, ${mid1X} ${start.y + Math.sign(end.y - start.y) * radius}`;
            path += ` L ${mid1X} ${end.y - Math.sign(end.y - start.y) * radius}`;
            path += ` Q ${mid1X} ${end.y}, ${mid1X + Math.sign(mid2X - mid1X) * radius} ${end.y}`;
            path += ` L ${mid2X} ${end.y}`;
            path += ` Q ${mid2X} ${end.y}, ${mid2X + Math.sign(end.x - mid2X) * radius} ${end.y}`;
            path += ` L ${end.x} ${end.y}`;
        } else {
            // Mixed directions - 2 bends
            if (startVertical) {
                const midY = end.y + endDirY * offset;

                path += ` L ${start.x} ${midY - Math.sign(midY - start.y) * radius}`;
                path += ` Q ${start.x} ${midY}, ${start.x + Math.sign(end.x - start.x) * radius} ${midY}`;
                path += ` L ${end.x - Math.sign(end.x - start.x) * radius} ${midY}`;
                path += ` Q ${end.x} ${midY}, ${end.x} ${midY + Math.sign(end.y - midY) * radius}`;
                path += ` L ${end.x} ${end.y}`;
            } else {
                const midX = end.x + endDirX * offset;

                path += ` L ${midX - Math.sign(midX - start.x) * radius} ${start.y}`;
                path += ` Q ${midX} ${start.y}, ${midX} ${start.y + Math.sign(end.y - start.y) * radius}`;
                path += ` L ${midX} ${end.y - Math.sign(end.y - start.y) * radius}`;
                path += ` Q ${midX} ${end.y}, ${midX + Math.sign(end.x - midX) * radius} ${end.y}`;
                path += ` L ${end.x} ${end.y}`;
            }
        }

        return path;
    };

    const calculatePath = () => {
        if (!fromRef.current || !toRef.current) return;

        const container = containerRef?.current || document.body;
        const containerRect = container.getBoundingClientRect();

        setSvgDimensions({
            width: containerRect.width,
            height: containerRect.height,
        });

        // Determine relative positions
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();
        const position = getRelativePosition(fromRect, toRect);

        console.log('=== POSITION ANALYSIS ===');
        console.log('Target relative to Origin:', {
            above: position.targetIsAbove,
            below: position.targetIsBelow,
            left: position.targetIsLeft,
            right: position.targetIsRight,
        });

        // Determine optimal sides based on positions
        const { origin: actualOriginSide, target: actualTargetSide } = 
            determineOptimalSides(position, originSide, targetSide);

        console.log('Requested Origin:', originSide, '→ Using:', actualOriginSide);
        console.log('Requested Target:', targetSide, '→ Using:', actualTargetSide);

        // Get connection points
        const start = getPointOnElement(fromRef.current, actualOriginSide, containerRect);
        const end = getPointOnElement(toRef.current, actualTargetSide, containerRect);

        console.log('Start Point:', start);
        console.log('End Point:', end);

        // Generate path
        const path = createSmartPath(start, end, actualOriginSide, actualTargetSide, 20);
        setPathData(path);
    };

    useEffect(() => {
        const timer = setTimeout(calculatePath, 100);

        const handleResize = () => calculatePath();
        window.addEventListener('resize', handleResize);

        const resizeObserver = new ResizeObserver(calculatePath);
        if (fromRef.current) resizeObserver.observe(fromRef.current);
        if (toRef.current) resizeObserver.observe(toRef.current);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    }, [fromRef, toRef, originSide, targetSide]);

    if (!pathData) return null;

    return (
        <svg
            width={svgDimensions.width}
            height={svgDimensions.height}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
            className={`pointer-events-none absolute top-0 left-0 ${className}`}
            style={{ zIndex: 1 }}
        >
            <path
                ref={pathRef}
                d={pathData}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

