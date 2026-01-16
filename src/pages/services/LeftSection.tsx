import Animate from "@/components/animations/Animate"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router"

type LeftProps = {
    heading: string,
    subHeading: string
}

const Left = ({ heading, subHeading }: LeftProps) => {
    return (
        <div className='relative space-y-10 h-full flex flex-col justify-center items-center lg:items-start'
        >


            <div className='space-y-5 '>

                <Animate type="fade-up" duration={1}>
                    <h3 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold lg:text-start">{heading}</h3>
                </Animate>
                <Animate type="fade-up" duration={1} delay={0.3}>

                    <p className='text-foreground/70 text-center lg:text-start'>
                        {subHeading}
                    </p>
                </Animate>
            </div>
            <Animate type="fade-up" duration={1} delay={0.7}>
                <NavLink to="/contact">
                    <Button className='cursor-pointer bg-linear-to-r from-blue-600 to-blue-500 hover:scale-110' size="lg">Get started</Button>
                </NavLink>
            </Animate>

        </div>

    )
}

export default Left