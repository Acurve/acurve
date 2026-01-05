import { cn } from '@/lib/utils'
import type { ChildrenProps, ClassNameProps } from '@/types/global'

const Container = ({ className, children }: ChildrenProps & ClassNameProps) => {
    return (
        <div className={cn("px-4 md:px-10 lg:px-24 lg:py-16 md:py-8 py-4", className)}>
            {children}
        </div>
    )
}

export default Container
