
import Section from "@/components/layout/Section"
import { FallingParticles } from "./FallingParticles"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { AuroraText } from "@/components/ui/aurora-text"
import { Button } from "@/components/ui/button"
import {  IconRocket } from "@tabler/icons-react"
import { NavLink } from "react-router"
import { blueGradientClass } from "@/constants/gradients.constants"

const Hero = () => {
    return (

        <Section className="relative">
            <FallingParticles side="left" />
            <FallingParticles side="right" />
          <DotPattern
                glow={true}
                className={cn(
                    "mask-[radial-gradient(300px_circle_at_center,white,transparent)] -z-1"
                )}
            /> 
            {/* <FloatingItems /> */}
            <div className=" w-full h-screen justify-center items-center flex">
                <div className="max-w-3xl space-y-10 h-max">

                    <div className="space-y-4">

                        <motion.h1 className={cn(" text-2xl md:text-3xl lg:text-5xl font-semibold  mx-auto text-center  relative bg-clip-text text-transparent bg-linear-to-b  from-neutral-400 dark:via-white to-white flex flex-col gap-4")}

                        >
                            Digital solutions that move
                            <span>

                                Brand <AuroraText speed={2}>forwards</AuroraText>
                            </span>
                        </motion.h1>
                        <motion.p className="text-foreground/60">
                            We design and implement web solutions, automation systems, and integrations that streamline operations, boost performance, and accelerate business growth for manufacturing and professional service companies.
                        </motion.p>
                    </div>
                    <div className="cta-buttons flex gap-4 justify-center">
                        {/* <NavLink to="/meeting" >
                            <Button variant="secondary" className='flex w-full items-center gap-2 h-full rounded-full cursor-pointer  px-5!'>
                                <IconCalendar className='text-primary size-6' />
                                <span className='mb-1'>schedule a meeting</span>
                            </Button>
                        </NavLink> */}
                        <NavLink to="/contact" className="relative group/getStartedBtn">
                            <div className={cn("absolute bg-linear-to-r blur-xl scale-75 rounded-full top-0 bottom-0 left-0 right-0 -z-1 opacity-0 transition-all duration-300 group-hover/getStartedBtn:opacity-100!", blueGradientClass)} />
                            <Button className={cn("flex w-full items-center gap-2 h-full rounded-full cursor-pointer  px-5! bg-linear-to-r group/getStartedBtn", blueGradientClass)}>
                                <IconRocket className="size-6" />
                                <span>Get started</span>
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Hero

// import Section from "@/components/layout/Section"
// import { DotPattern } from "@/components/ui/dot-pattern"
// import { AuroraText } from "@/components/ui/aurora-text"
// import { Button } from "@/components/ui/button"
// import { IconCalendar, IconRocket } from "@tabler/icons-react"
// import { NavLink } from "react-router"
// import { blueGradientClass } from "@/constants/gradients.constants"
// import { cn } from "@/lib/utils"
// import { motion, useReducedMotion } from "motion/react"
// import { FallingParticles } from "./FallingParticles"
// import { AnimatedGradientBackground, FloatingItems } from "./FloatingItems"

// type HeroVariant = "minimal" | "particles" | "floating" | "gradient"

// interface HeroProps {
//     variant?: HeroVariant
// }

// const Hero = ({ variant = "gradient" }: HeroProps) => {
//     const shouldReduceMotion = useReducedMotion()

//     return (
//         <Section className="relative overflow-hidden">
//             {/* Background Effects - Choose one based on performance needs */}
//             {variant === "particles" && (
//                 <>
//                     <FallingParticles side="left" count={6} />
//                     <FallingParticles side="right" count={6} />
//                 </>
//             )}
            
//             {variant === "floating" && <FloatingItems />}
            
//             {variant === "gradient" && <AnimatedGradientBackground />}
            
//             {variant === "minimal" && (
//                 <DotPattern
//                     className={cn(
//                         "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
//                     )}
//                 />
//             )}

//             {/* Main Content */}
//             <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-20">
//                 <div className="max-w-3xl space-y-10 px-4">
//                     {/* Heading */}
//                     <div className="space-y-6">
//                         <motion.h1
//                             className={cn(
//                                 "text-3xl md:text-4xl lg:text-6xl font-bold text-center",
//                                 "bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-white to-white"
//                             )}
//                             initial={shouldReduceMotion ? {} : { 
//                                 opacity: 0, 
//                                 y: 20 
//                             }}
//                             animate={shouldReduceMotion ? {} : { 
//                                 opacity: 1, 
//                                 y: 0 
//                             }}
//                             transition={{ 
//                                 duration: 0.8, 
//                                 ease: "easeOut" 
//                             }}
//                         >
//                             Digital solutions that move
//                             <span className="block mt-2">
//                                 Brand <AuroraText speed={2}>forwards</AuroraText>
//                             </span>
//                         </motion.h1>

//                         <motion.p
//                             className="text-foreground/70 text-center text-lg leading-relaxed"
//                             initial={shouldReduceMotion ? {} : { 
//                                 opacity: 0, 
//                                 y: 20 
//                             }}
//                             animate={shouldReduceMotion ? {} : { 
//                                 opacity: 1, 
//                                 y: 0 
//                             }}
//                             transition={{ 
//                                 duration: 0.8, 
//                                 delay: 0.2,
//                                 ease: "easeOut" 
//                             }}
//                         >
//                             We design and implement web solutions, automation systems, and 
//                             integrations that streamline operations, boost performance, and 
//                             accelerate business growth for manufacturing and professional 
//                             service companies.
//                         </motion.p>
//                     </div>

//                     {/* CTA Buttons */}
//                     <motion.div
//                         className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//                         initial={shouldReduceMotion ? {} : { 
//                             opacity: 0, 
//                             y: 20 
//                         }}
//                         animate={shouldReduceMotion ? {} : { 
//                             opacity: 1, 
//                             y: 0 
//                         }}
//                         transition={{ 
//                             duration: 0.8, 
//                             delay: 0.4,
//                             ease: "easeOut" 
//                         }}
//                     >
//                         <NavLink to="/meeting" className="w-full sm:w-auto">
//                             <Button
//                                 variant="secondary"
//                                 size="lg"
//                                 className="flex w-full items-center gap-2 rounded-full px-6"
//                             >
//                                 <IconCalendar className="size-5" />
//                                 <span>Schedule a meeting</span>
//                             </Button>
//                         </NavLink>

//                         <NavLink to="/contact" className="relative group w-full sm:w-auto">
//                             {/* Glow effect on hover */}
//                             <div
//                                 className={cn(
//                                     "absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-70 -z-10",
//                                     blueGradientClass
//                                 )}
//                             />
//                             <Button
//                                 size="lg"
//                                 className={cn(
//                                     "flex w-full items-center gap-2 rounded-full px-6",
//                                     blueGradientClass
//                                 )}
//                             >
//                                 <IconRocket className="size-5" />
//                                 <span>Get started</span>
//                             </Button>
//                         </NavLink>
//                     </motion.div>
//                 </div>
//             </div>
//         </Section>
//     )
// }

// export default Hero