// import React from 'react'
// import Container from '../layout/Container'
// import mountain from "./mountain.png"
// import Section from '../layout/Section'
// import { NavLink } from 'react-router'
// import { Button } from '../ui/button'

// const FirstClient = () => {
//     return (
//         <Section className='min-h-max'>
//             <Container>
//                 <div className="relative min-h-[88vh]  flex items-center justify-center">

//                     <img src={mountain} alt="" className=' absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-1 object-cover' />
//                     <div className="absolute top-0 left-0 bottom-0 right-0  flex flex-col items-center justify-center bg-linear-to-b from-transparent via-background to-background " />
//                     <div className='flex flex-col gap-8 z-10'>

//                         <div className='flex justify-center items-center flex-col space-y-4 mt-32 lg:mt-56'>

//                             <h2 className='xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold'>Be The First to Transform</h2>
//                             <p className='max-w-xl  text-center text-white/70'>Every legendary partnership starts with someone bold enough to be first. Your success story could be the foundation of something extraordinary.</p>
//                         </div>
//                         <div className='flex justify-center'>
//                             <NavLink to="/contact">
//                                 <Button className="transition-all duration-300 cursor-pointer scale-125 hover:scale-110 rounded-full">
//                                     Get started
//                                 </Button>

//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>

//             </Container>

//         </Section>
//     )
// }

// export default FirstClient

import Container from '../layout/Container'
import mountain from "./mountain.png"
import Section from '../layout/Section'
import { NavLink } from 'react-router'
import { Button } from '../ui/button'
import { ArrowRight, Sparkles, TrendingUp, Award, Rocket } from 'lucide-react'
import { motion } from 'motion/react'

const FirstClient = ({ variant = "black" }: { variant?: "white" | "black" }) => {
    const isBlack = variant === "white"

    // Dynamic color classes based on variant
    const textPrimary = isBlack ? "text-black" : "text-white"
    const textSecondary = isBlack ? "text-black/60" : "text-white/60"
    const textTertiary = isBlack ? "text-black/70" : "text-white/70"
    const textMuted = isBlack ? "text-black/50" : "text-white/50"
    const textSubtle = isBlack ? "text-black/40" : "text-white/40"

    const bgLight = isBlack ? "bg-black/[0.02]" : "bg-white/[0.02]"
    const bgMedium = isBlack ? "bg-black/[0.05]" : "bg-white/[0.05]"
    const bgHover = isBlack ? "hover:bg-black/[0.05]" : "hover:bg-white/[0.05]"
    const bgCard = isBlack ? "bg-black/5" : "bg-white/5"
    const bgCardHover = isBlack ? "group-hover:bg-black/10" : "group-hover:bg-white/10"
    const bgIcon = isBlack ? "bg-black/5" : "bg-white/5"
    const bgIconHover = isBlack ? "hover:bg-black/10" : "hover:bg-white/10"

    const borderLight = isBlack ? "border-black/10" : "border-white/10"
    const borderMedium = isBlack ? "border-black/20" : "border-white/20"
    const borderHover = isBlack ? "hover:border-black/20" : "hover:border-white/20"
    const borderHoverStrong = isBlack ? "hover:border-black/30" : "hover:border-white/30"

    const iconColor = isBlack ? "text-black/80" : "text-white/80"
    const dotColor = isBlack ? "bg-black/30" : "bg-white/30"
    const dotBg = isBlack ? "bg-black/50" : "bg-white/50"

    const strokeColor = isBlack ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"

    return (
        <Section className='min-h-max overflow-hidden'>
            <Container>
                <div className="relative min-h-[90vh] flex items-center justify-center">
                    {/* Mountain Background */}
                    <img
                        src={mountain}
                        alt=""
                        className='absolute inset-0 w-full h-full object-cover opacity-10'
                    />

                    {/* Subtle animated dots */}
                    <div className={`absolute top-20 left-[10%] w-1 h-1 ${dotColor} rounded-full animate-pulse`} />
                    <div className={`absolute top-32 right-[15%] w-1 h-1 ${dotColor} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }} />
                    <div className={`absolute top-40 left-[70%] w-1 h-1 ${dotColor} rounded-full animate-pulse`} style={{ animationDelay: '1s' }} />

                    {
                        variant === "black" &&
                        <div className="absolute top-0 left-0 bottom-0 right-0  flex flex-col items-center justify-center bg-linear-to-b from-transparent via-transparent to-background " />
                    }
                    {
                        variant === "white" &&
                        <div className="absolute top-0 left-0 bottom-0 right-0  flex flex-col items-center justify-center bg-linear-to-b from-transparent via-foreground-lighter/70 to-foreground-lighter " />
                    }

                    {/* Content */}
                    <div className='relative z-10 w-full max-w-5xl mx-auto px-4'>
                        <motion.div
                            className='flex flex-col items-center gap-12'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            {/* <motion.div
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${bgCard} backdrop-blur-xl ${borderLight}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Sparkles className={`w-4 h-4 ${textTertiary}`} />
                                <span className={`${textTertiary} text-sm font-medium tracking-wide`}>
                                    Exclusive Founding Client Opportunity
                                </span>
                            </motion.div> */}

                            {/* Heading */}
                            <div className='text-center space-y-6'>
                                <motion.h2
                                    className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <span className={textPrimary}>Be The First to</span>
                                    <br />
                                    <span className='relative inline-block mt-2'>
                                        <span className={textPrimary}>Transform</span>
                                        <svg
                                            className="absolute -bottom-2 left-0 w-full h-3"
                                            viewBox="0 0 200 12"
                                            fill="none"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0 6 Q50 12, 100 6 T200 6"
                                                stroke={strokeColor}
                                                strokeWidth="2"
                                                fill="none"
                                            />
                                        </svg>
                                    </span>
                                </motion.h2>

                                <motion.p
                                    className={`text-lg sm:text-xl lg:text-2xl ${textSecondary} max-w-3xl mx-auto leading-relaxed`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    Every legendary partnership starts with someone bold enough to be first.
                                    Your success story could be the foundation of something extraordinary.
                                </motion.p>
                            </div>

                            {/* Feature Cards */}
                            <motion.div
                                className="grid sm:grid-cols-3 gap-4 w-full max-w-4xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <div className={`group ${bgLight} backdrop-blur-xl border ${borderLight} rounded-2xl p-6 ${bgHover} ${borderHover} transition-all duration-300`}>
                                    <div className={`w-10 h-10 rounded-xl ${bgIcon} flex items-center justify-center mb-3 ${bgCardHover} transition-colors`}>
                                        <TrendingUp className={`w-5 h-5 ${iconColor}`} />
                                    </div>
                                    <h3 className={`${textPrimary} font-semibold mb-1 text-sm`}>Priority Access</h3>
                                    <p className={`${textMuted} text-xs`}>100% dedicated attention</p>
                                </div>

                                <div className={`group ${bgLight} backdrop-blur-xl border ${borderLight} rounded-2xl p-6 ${bgHover} ${borderHover} transition-all duration-300`}>
                                    <div className={`w-10 h-10 rounded-xl ${bgIcon} flex items-center justify-center mb-3 ${bgCardHover} transition-colors`}>
                                        <Award className={`w-5 h-5 ${iconColor}`} />
                                    </div>
                                    <h3 className={`${textPrimary} font-semibold mb-1 text-sm`}>Founder's Pricing</h3>
                                    <p className={`${textMuted} text-xs`}>Special early rates</p>
                                </div>

                                <div className={`group ${bgLight} backdrop-blur-xl border ${borderLight} rounded-2xl p-6 ${bgHover} ${borderHover} transition-all duration-300`}>
                                    <div className={`w-10 h-10 rounded-xl ${bgIcon} flex items-center justify-center mb-3 ${bgCardHover} transition-colors`}>
                                        <Rocket className={`w-5 h-5 ${iconColor}`} />
                                    </div>
                                    <h3 className={`${textPrimary} font-semibold mb-1 text-sm`}>Shape Our Journey</h3>
                                    <p className={`${textMuted} text-xs`}>Direct founder access</p>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                className='flex flex-col sm:flex-row gap-4 items-center'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <NavLink to="/contact">
                                    <Button
                                        className="group relative px-8 py-6 cursor-pointer font-semibold text-base hover:bg-blue-500/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-full"
                                    >
                                        <span className="flex items-center gap-2">
                                            Start Your Transformation
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Button>
                                </NavLink>

                                <NavLink to="/services">
                                    <Button
                                        variant="outline"
                                        className={`px-8 py-6 ${bgCard} ${isBlack ? 'text-black' : 'text-white'} ${borderMedium} font-semibold text-base ${bgIconHover} ${borderHoverStrong} transition-all duration-300 rounded-full cursor-pointer`}
                                    >
                                        Explore Our Services
                                    </Button>
                                </NavLink>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                className={`pt-8 border-t ${borderLight} w-full max-w-3xl`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <p className={`${textSubtle} text-xs text-center mb-4`}>
                                    As a founding client, you receive:
                                </p>
                                <div className={`flex flex-wrap justify-center gap-6 text-xs ${textMuted}`}>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                                        <span>Premium Support</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                                        <span>Flexible Terms</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                                        <span>Lifetime Benefits</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FirstClient