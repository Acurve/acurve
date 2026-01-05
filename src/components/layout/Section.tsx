import { cn } from '@/lib/utils'
import type { ChildrenProps, ClassNameProps } from '@/types/global'

type sectionProps = {
    id?: string;
}

const Section = ({ children, className = "", id = "" }: ChildrenProps & ClassNameProps & sectionProps) => {
    return (
        <div id={id} className={cn("min-h-screen overflow-hidden relative", className)}>
            {children}
        </div>
    )
}

export default Section
