


import { BREAKPOINTS } from '@/constants/breakpoints';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, type ReactNode } from 'react';

interface StaggeredLayoutProps {
    list: ReactNode[];
    mask?: boolean;
    className?:string
}

const StaggeredLayout: React.FC<StaggeredLayoutProps> = ({ list, mask = true,className="" }) => {
    const windoWidth = useWindowWidth()
    const items = list;
    const [visibleCols, setVisibleCols] = useState(10);
    const [activeMask, setActiveMask] = useState<boolean>(mask)
    const itemSize = 120;
    const gap = 15;
    const colorClass = "bg-accent/40"
    useEffect(() => {
        const calculateVisibleCols = () => {
            const containerWidth = window.innerWidth;
            // Calculate how many columns can fit in the visible width
            const colsCanFit = Math.floor(containerWidth / (itemSize + gap));
            setVisibleCols(colsCanFit);
        };

        calculateVisibleCols();
        window.addEventListener('resize', calculateVisibleCols);
        if (windoWidth < BREAKPOINTS.md) setActiveMask(false)
        return () => window.removeEventListener('resize', calculateVisibleCols);
    }, []);

    // Total columns = visible columns + 2 (one hidden on each side)
    const totalCols = visibleCols + 2;

    // Maximum items that can fit in visible area (excluding the 2 hidden columns)
    const maxItemsPerRow = visibleCols;

    // Function to distribute items across rows as evenly as possible
    const distributeItems = () => {
        const totalItems = items.length;

        // If 7 or more items, ensure at least 2 rows
        let minRows = Math.ceil(totalItems / maxItemsPerRow);
        if (totalItems >= 7 && minRows < 2) {
            minRows = 2;
        }

        const rows: ReactNode[][] = [];
        const baseItemsPerRow = Math.floor(totalItems / minRows);
        const extraItems = totalItems % minRows;

        let currentIndex = 0;
        for (let i = 0; i < minRows; i++) {
            const itemsInThisRow = baseItemsPerRow + (i < extraItems ? 1 : 0);
            rows.push(items.slice(currentIndex, currentIndex + itemsInThisRow));
            currentIndex += itemsInThisRow;
        }

        return rows;
    };

    const distributedRows = distributeItems();

    const renderEmptyRow = (rowIndex: number) => {
        const isEvenRow = rowIndex % 2 === 0;
        const boxes = [];

        for (let i = 0; i < totalCols; i++) {
            boxes.push(
                <div
                    key={`empty-${i}`}
                    className={cn("shrink-0 rounded-lg shadow-lg", colorClass)}
                    style={{
                        width: `${itemSize}px`,
                        height: `${itemSize}px`,
                    }}
                />
            );
        }

        return (
            <div
                key={`empty-row-${rowIndex}`}
                className="flex"
                style={{
                    gap: `${gap}px`,
                    transform: isEvenRow ? 'translateX(60px)' : 'translateX(0)',
                }}
            >
                {boxes}
            </div>
        );
    };

    const renderRow = (rowItems: ReactNode[], rowIndex: number) => {
        const isEvenRow = rowIndex % 2 === 0;
        const itemsInRow = rowItems.length;

        // Calculate positioning to center items
        // We have totalCols columns, items should be centered within them
        const emptyColsInRow = totalCols - itemsInRow;
        const emptyColsLeft = Math.floor(emptyColsInRow / 2);
        const emptyColsRight = emptyColsInRow - emptyColsLeft;

        const boxes = [];

        // Empty boxes on the left
        for (let i = 0; i < emptyColsLeft; i++) {
            boxes.push(
                <div
                    key={`empty-left-${i}`}
                    className={cn("shrink-0 bg-accent rounded-lg shadow-lg", colorClass)}
                    style={{
                        width: `${itemSize}px`,
                        height: `${itemSize}px`,
                    }}
                />
            );
        }

        // Content items
        rowItems.forEach((item, index) => {
            boxes.push(
                <div
                    key={`content-${index}`}
                    className={cn("shrink-0 flex  items-center justify-center rounded-lg font-bold shadow-lg")}
                    style={{
                        width: `${itemSize}px`,
                        height: `${itemSize}px`,
                    }}
                >
                    {item}
                </div>
            );
        });

        // Empty boxes on the right
        for (let i = 0; i < emptyColsRight; i++) {
            boxes.push(
                <div
                    key={`empty-right-${i}`}
                    className={cn("shrink-0 rounded-lg shadow-lg ", colorClass)}
                    style={{
                        width: `${itemSize}px`,
                        height: `${itemSize}px`,
                    }}
                />
            );
        }

        return (
            <div
                key={rowIndex}
                className="flex"
                style={{
                    gap: `${gap}px`,
                    transform: isEvenRow ? 'translateX(60px)' : 'translateX(0)',
                }}
            >
                {boxes}
            </div>
        );
    };

    return (
        <div className={cn("my-10  overflow-hidden relative",className)}>
            {activeMask && (
                <>
                    {/* Horizontal gradient mask (left and right) */}
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-background via-transparent to-background z-10" />

                    {/* Vertical gradient mask (top and bottom) */}
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-background via-transparent to-background z-10" />
                </>
            )}

            <div
                className="flex flex-col"
                style={{
                    gap: `${gap}px`,
                    marginLeft: `-${itemSize + gap}px`, // Hide first column
                }}
            >
                {/* Top empty row */}
                {renderEmptyRow(-1)}

                {/* Content rows */}
                {distributedRows.map((rowItems, index) => renderRow(rowItems, index))}

                {/* Bottom empty row */}
                {renderEmptyRow(distributedRows.length)}
            </div>
        </div>
    );
};

export default StaggeredLayout