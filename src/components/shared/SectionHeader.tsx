import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import type { ClassNameProps } from "@/types/global"
import { TextReveal } from '../ui/text-reveal';

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
    headingClassName = "",
    align = "center",
}: ClassNameProps & SectionHeaderProps) => {
    return (
        <div
            className={cn(
                align === "center" && "text-center",
                className
            )}
        >


            <h2
                className={cn(
                    "w-full flex",
                    align === "center" && "mx-auto",
                    headingClassName
                )}
            >
                <TextReveal className='text-2xl mx-auto w-max sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>

                    {heading}
                </TextReveal>
            </h2>
        </div>
    );
};


export default SectionHeader
