import { cn } from "@/lib/utils"
import type { ChildrenProps } from "@/types/global"

const TechContainer = ({ glowClassName = "bg-blue-400", children }: { glowClassName?: string } & ChildrenProps) => {
    return (
        <div className='relative w-full h-full group'>


            <div className={cn('z-2 w-full h-full p-6 bg-accent/40 rounded-lg flex justify-center items-center border-0! hover:border!', glowClassName)}>

                {children}
            </div>

            {/* <div className={cn("absolute top-0 bottom-0 right-0 left-0 blur-2xl rounded-xl group-hover:opacity-70 transition-all duration-500 opacity-0 -z-1", glowClassName)} /> */}

        </div >
    )
}

export default TechContainer