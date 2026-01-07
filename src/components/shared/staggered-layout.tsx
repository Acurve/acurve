// import { cn } from '@/lib/utils';
// import { ClassNameProps } from '@/types/global';
// import React, { ReactNode } from 'react';

// function splitIntoSublists(list: ReactNode[], n: number): ReactNode[][] {
//     if (n <= 0) throw new Error("n must be greater than 0");
//     if (list.length === 0) return Array(n).fill([]);
//     if (n > list.length) throw new Error("n cannot be greater than list length");

//     const baseSize = Math.floor(list.length / n);
//     const result: ReactNode[][] = [];
//     let currentIndex = 0;

//     for (let i = 0; i < n - 1; i++) {
//         result.push(list.slice(currentIndex, currentIndex + baseSize));
//         currentIndex += baseSize;
//     }
//     result.push(list.slice(currentIndex));

//     return result;
// }

// interface StaggeredLayoutProps {
//     rows?: number;
//     columns?: number;
//     mask?: boolean;
//     staggeredLayoutItemsContainerClassName?: string;
//     staggeredLayoutItemWidth?: number;
//     itemsList?: ReactNode[];

// }

// interface StaggeredLayoutItemsContainerProps {
//     rows: number;
//     columns: number;
//     className?: string;
//     width: number;
//     splitedList: ReactNode[][];
// }

// const StaggeredLayoutItemsContainer = ({
//     rows,
//     columns,
//     className = "",
//     width,
//     splitedList
// }: StaggeredLayoutItemsContainerProps) => {
//     // Calculate extended grid dimensions for overflow effect
//     const extendedColumns = columns + 4; // Extra columns on each side
//     const extendedRows = rows + 2; // Extra rows top and bottom
//     const offset = width / 2; // Offset amount for staggered effect

//     return (
//         <div className={cn("grid grid-cols-1 gap-4", className)}>
//             {Array.from({ length: extendedRows }).map((_, rowIndex) => {
//                 // Determine if this is a content row (not padding row)
//                 const isContentRow = rowIndex > 0 && rowIndex <= rows;
//                 const contentRowIndex = rowIndex - 1;
//                 const currentRowItems = isContentRow ? splitedList[contentRowIndex] : [];

//                 // Calculate starting column for centering content
//                 const itemsInRow = currentRowItems.length;
//                 const startCol = Math.floor((extendedColumns - itemsInRow) / 2);

//                 return (
//                     <div
//                         key={rowIndex}
//                         className="grid gap-4 grid-flow-col "
//                         style={{
//                             transform: `translateX(-${rowIndex % 2 === 0 ? offset : 0}px)`
//                         }}
//                     >
//                         {Array.from({ length: extendedColumns }).map((_, colIndex) => {
//                             let content: ReactNode = null;

//                             // Place actual content in the center columns for content rows
//                             if (isContentRow) {
//                                 const itemIndex = colIndex - startCol;
//                                 if (itemIndex >= 0 && itemIndex < itemsInRow) {
//                                     content = currentRowItems[itemIndex];
//                                 }
//                             }

//                             return (
//                                 <div
//                                     key={colIndex}
//                                     className={cn(
//                                         "flex items-center justify-center rounded-xl transition-all bg-muted min-h-18 min-w-18",
//                                     )}
//                                 // style={{ width: width, height: width }}
//                                 >
//                                     {content}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const list = [
//     <div>one</div>,
//     <div>two</div>,
//     <div>three</div>,
//     <div>four</div>,
//     <div>five</div>,
//     <div>six</div>,
//     <div>seven</div>,
//     <div>eight</div>,
//     <div>nine</div>,
//     <div>ten</div>,
//     <div>eleven</div>,
//     <div>tweleve</div>,
// ]
// const StaggeredLayout = ({
//     rows = 3,
//     columns = 8,
//     mask = true,
//     staggeredLayoutItemsContainerClassName = "",
//     staggeredLayoutItemWidth = 80,
//     itemsList = list,
//     className = ""
// }: StaggeredLayoutProps & ClassNameProps) => {
//     const splitedList = splitIntoSublists(itemsList, rows);

//     return (
//         <div className={cn("max-w-full overflow-hidden relative", className, mask && "mask-gradient")}>
//             {mask && (
//                 <>
//                     {/* Horizontal gradient mask (left and right) */}
//                     <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-background via-transparent to-background z-10" />

//                     {/* Vertical gradient mask (top and bottom) */}
//                     <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-background via-transparent to-background z-10" />
//                 </>
//             )}
//             <StaggeredLayoutItemsContainer
//                 rows={rows}
//                 columns={columns}
//                 className={staggeredLayoutItemsContainerClassName}
//                 width={staggeredLayoutItemWidth}
//                 splitedList={splitedList}
//             />
//         </div>
//     );
// };

// export default StaggeredLayout;

// // Example usage:
// // const icons = [
// //     <IconCard icon="⚡" />,
// //     <IconCard icon="⚛️" />,
// //     // ... more items
// // ];
// //
// // <StaggeredLayout
// //     itemsList={icons}
// //     rows={3}
// //     columns={8}
// //     staggeredLayoutItemWidth={80}
// //     mask={true}
// // />

import { cn } from '@/lib/utils';
import type { ClassNameProps } from '@/types/global';
import { type ReactNode, useState, useEffect } from 'react';

function splitIntoSublists(list: ReactNode[], n: number): ReactNode[][] {
    if (n <= 0) throw new Error("n must be greater than 0");
    if (list.length === 0) return Array(n).fill([]);
    if (n > list.length) throw new Error("n cannot be greater than list length");

    const baseSize = Math.floor(list.length / n);
    const result: ReactNode[][] = [];
    let currentIndex = 0;

    for (let i = 0; i < n - 1; i++) {
        result.push(list.slice(currentIndex, currentIndex + baseSize));
        currentIndex += baseSize;
    }
    result.push(list.slice(currentIndex));

    return result;
}

interface StaggeredLayoutProps {
    rows?: number;
    columns?: number;
    mask?: boolean;
    staggeredLayoutItemsContainerClassName?: string;
    staggeredLayoutItemWidth?: number;
    itemsList?: ReactNode[];
}

interface StaggeredLayoutItemsContainerProps {
    rows: number;
    columns: number;
    className?: string;
    width: number;
    splitedList: ReactNode[][];
    extraColumns: number;
}

const StaggeredLayoutItemsContainer = ({
    rows,
    columns,
    className = "",
    width,
    splitedList,
    extraColumns
}: StaggeredLayoutItemsContainerProps) => {
    const extendedColumns = columns + extraColumns;
    const extendedRows = rows + 2;
    const offset = width / 2;

    return (
        <div className={cn("grid grid-cols-1 gap-4", className)}>
            {Array.from({ length: extendedRows }).map((_, rowIndex) => {
                const isContentRow = rowIndex > 0 && rowIndex <= rows;
                const contentRowIndex = rowIndex - 1;
                const currentRowItems = isContentRow ? splitedList[contentRowIndex] : [];
                const itemsInRow = currentRowItems.length;
                const startCol = Math.floor((extendedColumns - itemsInRow) / 2);

                return (
                    <div
                        key={rowIndex}
                        className="grid gap-4 grid-flow-col "
                        style={{
                            transform: `translateX(-${rowIndex % 2 === 0 ? offset : 0}px)`
                        }}
                    >
                        {Array.from({ length: extendedColumns }).map((_, colIndex) => {
                            let content: ReactNode = null;

                            if (isContentRow) {
                                const itemIndex = colIndex - startCol;
                                if (itemIndex >= 0 && itemIndex < itemsInRow) {
                                    content = currentRowItems[itemIndex];
                                }
                            }

                            return (
                                <div
                                    key={colIndex}
                                    className={cn(
                                        "flex items-center justify-center rounded-xl transition-all min-h-18 min-w-18 bg-accent",
                                    )}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};


const StaggeredLayout = ({
    rows = 3,
    columns = 8,
    mask = true,
    staggeredLayoutItemsContainerClassName = "",
    staggeredLayoutItemWidth = 80,
    itemsList,
    className = ""
}: StaggeredLayoutProps & ClassNameProps) => {
    const [extraColumns, setExtraColumns] = useState(4);
    const [responsiveRows, setResponsiveRows] = useState(rows);
    const [responsiveColumns, setResponsiveColumns] = useState(columns);

    useEffect(() => {
        console.log("called")
        const updateLayout = () => {
            const width = window.innerWidth;
            const totalItems = itemsList?.length ?? 0;

            // Adjust layout based on screen size
            if (width < 640) {
                // Mobile: 2-3 items per row, more rows
                setExtraColumns(0);
                setResponsiveColumns(2);
                setResponsiveRows(Math.ceil(totalItems / 2));
            } else if (width < 768) {
                // Small tablets: 3-4 items per row
                setExtraColumns(1);
                setResponsiveColumns(3);
                setResponsiveRows(Math.ceil(totalItems / 3));
            } else if (width < 1024) {
                // Tablets: 4-5 items per row
                setExtraColumns(2);
                setResponsiveColumns(4);
                setResponsiveRows(Math.ceil(totalItems / 4));
            } else if (width < 1280) {
                // Small desktop: 6 items per row
                setExtraColumns(4);
                setResponsiveColumns(6);
                setResponsiveRows(Math.ceil(totalItems / 6));
            } else {
                // Large desktop: use original props
                setExtraColumns(6);
                setResponsiveColumns(columns);
                setResponsiveRows(rows);
            }
        };

        // Set initial value
        updateLayout();

        // Add resize listener
        window.addEventListener('resize', updateLayout);

        // Cleanup
        console.log("called before return")
        return () => window.removeEventListener('resize', updateLayout);
    }, [(itemsList?.length ?? 0), rows, columns]);

    const splitedList = splitIntoSublists(itemsList ?? [], responsiveRows);

    return (
        <div className={cn("max-w-full overflow-hidden relative", className)}>
            {mask && (
                <>
                    {/* Horizontal gradient mask (left and right) */}
                    <div className="absolute inset-0 pointer-events-none min-[600px]:bg-linear-to-r from-background via-transparent to-background z-10" />

                    {/* Vertical gradient mask (top and bottom) */}
                    <div className="absolute inset-0 pointer-events-none min-[600px]:bg-linear-to-b from-background via-transparent to-background z-10" />
                </>
            )}
            <StaggeredLayoutItemsContainer
                rows={responsiveRows}
                columns={responsiveColumns}
                className={staggeredLayoutItemsContainerClassName}
                width={staggeredLayoutItemWidth}
                splitedList={splitedList}
                extraColumns={extraColumns}
            />
        </div>
    );
};

export default StaggeredLayout;