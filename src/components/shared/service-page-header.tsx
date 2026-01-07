import type { ClassNameProps } from '@/types/global'

const ServicePageHeader = ({ text, }: { text: string } & ClassNameProps) => {
    return (
        <div className='flex items-center gap-2 flex-col sm:flex-row'>
            {/* <div className=' flex justify-center items-center bg-accent rounded-md p-2 bg-linear-30 from-blue-600 to-blue-400'>

                {icon}
            </div> */}
            <p className='text-xl font-semibold '>{text}</p>
        </div>
    )
}

export default ServicePageHeader
