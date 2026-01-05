import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import type { ClassNameProps } from "@/types/global"

export interface SectionHeaderProps {
    heading: string;
    subHeading?: string;
    headingClassName?: string;
    subHeadingClassName?: string;
    align?: "left" | "center";
    eyebrow?: {
        className?: string;
        text: string;
        icon?: ReactNode;
    };
}

const SectionHeader = ({
    className = "",
    heading,
    subHeading,
    headingClassName = "",
    subHeadingClassName = "",
    align = "center",
    eyebrow,
}: ClassNameProps & SectionHeaderProps) => {
    return (
        <div
            className={cn(
                align === "center" && "text-center",
                className
            )}
        >
            {eyebrow && (
                <p
                    className={cn(
                        "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-foreground/70",
                        align === "center" && "justify-center",
                        eyebrow.className
                    )}
                >
                    {eyebrow.icon}
                    {eyebrow.text}
                </p>
            )}

            <h2
                className={cn(
                    "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight",
                    eyebrow && "mt-3",
                    headingClassName
                )}
            >
                {heading}
            </h2>

            {subHeading && (
                <p
                    className={cn(
                        "mt-3 text-base md:text-lg text-foreground/40 max-w-2xl",
                        align === "center" && "mx-auto",
                        subHeadingClassName
                    )}
                >
                    {subHeading}
                </p>
            )}
        </div>
    );
};


export default SectionHeader
