import type { ClassNameProps } from '@/types/global'
import type { ReactNode } from 'react'
import Animate from '../animations/Animate'

const ServicePageHeader = ({ text, icon }: { text: string, icon?: ReactNode } & ClassNameProps) => {
    return (
        <Animate type='fade-down' duration={1}>

            <div className='flex items-center gap-2 '>
                <div className=' flex justify-center items-center rounded-md p-2 bg-linear-30 from-blue-600 to-blue-400 text-white'>

                    {icon}
                </div>
                <p className='text-xl font-semibold '>{text}</p>
            </div>
        </Animate>
    )
}

export default ServicePageHeader
