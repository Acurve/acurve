// "use client"
// import React from 'react'

// import { motion, useMotionTemplate } from 'motion/react';
// import { benefitsList } from '@/constants/benefit-list';
// import type { Benefit } from '@/constants/benefit-list';

// interface BenefitCardProps {
//     benefit: Benefit;
//     index: number;
// }

// const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
//     return (
//         <motion.div
//             className="relative p-8 md:p-10  bg-transparent border border-white/20 border-y-transparent group"

//             initial={{
//                 y: 20,
//                 opacity: 0
//             }}
//             whileInView={{
//                 y: 0,
//                 opacity: 1,

//             }}
//             viewport={{
//                 once: true
//             }}
//             transition={{
//                 duration: 0.6,
//                 delay: index * 0.2,
//                 ease: "easeOut"
//             }}

//         >
//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_40%,#09090b)] scale-x-105 dark:bg-background"></div>
//             {/* Radial gradient glow */}
//             <div className="absolute top-0 left-0 right-0 h-[200px] bg-[radial-gradient(circle_at_center_top,rgba(255,255,255,0.03)_10%,transparent_100%)] -z-1 pointer-events-none" />

//             {/* Top line decoration */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

//             {/* Side indicators */}
//             <div className="absolute top-5 left-0 w-2 h-10 bg-white/5 rounded-r" />
//             <div className="absolute top-5 right-0 w-2 h-10 bg-white/5 rounded-l" />

//             <div className="relative z-10 flex flex-col items-center">
//                 {/* <DotPattern /> */}

//                 {/* Icon container */}
//                 <div className="p-3 w-max rounded-md flex items-center justify-center mb-8 bg-white/5 backdrop-blur-[20px] border border-white/10">
//                     {benefit.icon}
//                 </div>

//                 <h3 className="text-lg md:text-xl font-bold mb-4 text-white">
//                     {benefit.title}
//                 </h3>

//                 <p className="text-foreground/50 text-center leading-relaxed text-base md:text-lg">
//                     {benefit.description}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };


// export default BenefitCard
import React from 'react'
import { motion } from 'motion/react';
import type { Benefit } from '@/constants/benefit-list';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
    return (
        <motion.div
            className="relative group h-full"
            initial={{
                y: 40,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{
                once: true,
                margin: "-50px"
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {/* Outer glow */}
            <div className="absolute -inset-px bg-linear-to-b from-white/20 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            {/* Main glass card */}
            <div className="relative h-full p-8 md:p-10 rounded-2xl overflow-hidden
                bg-white/3 backdrop-blur-xs
                border border-white/10
                shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
                transition-all duration-500
                group-hover:bg-white/6
                group-hover:border-white/20
                group-hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.2)]
                group-hover:-translate-y-1">

                {/* Top edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Animated shine on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon container with glassmorphism */}
                    <motion.div 
                        className="relative mb-6 p-4 rounded-xl
                            bg-white/5 backdrop-blur-md
                            border border-white/10
                            shadow-lg
                            group-hover:bg-white/10
                            group-hover:border-white/20
                            group-hover:shadow-xl
                            group-hover:scale-110
                            transition-all duration-500 rotate-0"

                        transition={{ duration: 0.5 }}
                    >
                        {/* Icon glow */}
                        <div className={cn("absolute inset-0 bg-linear-to-br  rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",benefit.gradient)} />
                        
                        <div className="relative text-white/90 flex justify-center items-center w-7 h-7 md:w-8 md:h-8">
                            {benefit.icon}
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-white/95 tracking-tight leading-tight">
                        {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white/70 transition-colors duration-300">
                        {benefit.description}
                    </p>

                    {/* Bottom decorative line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Side indicators */}
                <div className="absolute top-8 left-0 w-1 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-8 right-0 w-1 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-l opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};

export default BenefitCard