import { IconCheck, IconPoint } from "@tabler/icons-react"
import { motion } from "motion/react"

type PhaseContentProps = {
    text: string,
    imageSrc: string,
    list: string[]
}

const PhaseContent = ({ text, imageSrc, list = [] }: PhaseContentProps) => {
    return (
        <div className='space-y-6'>
            <motion.div
                initial={{
                    x: 100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        x: {
                            duration: 0.7
                        },
                        opacity: {
                            duration: 1
                        }
                    }
                }}
                viewport={{
                    once: true,
                    amount: 0.5
                }}
                className='w-full text-lg font-medium text-foreground-lighter flex  gap-2'>
                <IconPoint size={36} className='w-max h-max xl:pt-1 pt-2' />
                <p>
                    {text}
                </p>

            </motion.div>
            <div className='flex flex-col xl:flex-row xl:gap-4 gap-10'>

                <div>
                    <ul className='px-6 space-y-4 text-neutral-400 pt-4'>
                        {
                            list.map((item, index) => (

                                <motion.li
                                    initial={{
                                        y: 10,
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.7,
                                            delay: index / 10
                                        }
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.5
                                    }}
                                    className='flex items-center gap-2' key={index}>
                                    <IconCheck />
                                    <span>{item}</span>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            y: {
                                duration: 0.7
                            },
                            opacity: {
                                duration: 1
                            }
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='ml-auto flex xl:w-108 w-[95%]  aspect-square overflow-hidden rounded-4xl relative'>

                    <img

                        src={imageSrc} alt="" className='w-full hover:scale-110 transition-all duration-500 object-cover' />
                </motion.div>
            </div>
        </div>
    )
}
export default PhaseContent