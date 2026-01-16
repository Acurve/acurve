import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import Section from "@/components/layout/Section"

import { servicesList } from '@/constants/serviceList';
import Container from '@/components/layout/Container';
import { NavLink } from 'react-router';
import SectionHeader from '@/components/shared/SectionHeader';

import DigitalSolutionAnimation from './animation/digital-solution';
import { IconPointFilled } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Animate from '@/components/animations/Animate';
import CreativityAnimation from './animation/creativity';
import CloudInfrastructureAnimation from './animation/cloud-infrastructure';


const OurServices: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    type ContentKey =
        | "content-cloud-infrastruture-animation"
        | "content-digital-solutions-animation"
        | "content-digital-presence-animation"
        | "content-creativity-animation"
        | "content-automation-integration-animation";


    const content: Record<ContentKey, ReactNode> = {
        "content-cloud-infrastruture-animation": <CloudInfrastructureAnimation />,
        "content-digital-solutions-animation": <DigitalSolutionAnimation />,
        "content-digital-presence-animation": <DigitalSolutionAnimation />,
        "content-creativity-animation": <CreativityAnimation />,
        "content-automation-integration-animation": <DigitalSolutionAnimation />,
    }

    useEffect(() => {
        const handleScroll = (): void => {
            const viewportMiddle = window.innerHeight / 2;

            sectionRefs.current.forEach((section, index) => {
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const sectionMiddle = rect.top + rect.height / 2;

                // Check if section middle is close to viewport middle
                if (Math.abs(sectionMiddle - viewportMiddle) < rect.height / 2) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [hoveredSubServiceId, setHoveredSubServiceId] = useState<string | null>(null)
    return (

        <Section className="overflow-visible">

            <Container>


                <SectionHeader heading='Our Services' align="center" />

                {/* Sticky Scroll Section */}
                <div className="flex">
                    {/* Left Side - Scrolling Content */}
                    <div className="w-full lg:w-1/2 space-y-6 lg:space-y-0">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                ref={el => { sectionRefs.current[index] = el; }}
                                className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center relative"
                            >

                                <div className="group relative max-w-lg">

                                    <div className="relative p-2  overflow-hidden">


                                        <div className="relative z-10">
                                            <div className="mb-8 space-y-3">
                                                <Animate type="fade-up" duration={1}>

                                                    <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                                                        {service.name}
                                                    </h3>
                                                </Animate>
                                                <Animate type="fade-up" duration={1}>

                                                    <p className="text-foreground-lighter/60  leading-relaxed font-light">
                                                        {service.description}
                                                    </p>
                                                </Animate>
                                            </div>



                                            <div className="space-y-1.5" onMouseLeave={() => setHoveredSubServiceId(null)}>

                                                {service.subServices.map((subService, index) => (
                                                    <Animate type='slide-right' duration={1}>


                                                        <NavLink
                                                            to={`/service/${subService.href}`}
                                                            key={index}
                                                            className=" flex items-center gap-3 px-4 py-3 rounded-lg font-medium  hover:text-background transition-all duration-300  text-foreground  group/subservice relative hov"
                                                            onMouseEnter={() => setHoveredSubServiceId(subService.id)}
                                                        >
                                                            {
                                                                subService.id === hoveredSubServiceId &&
                                                                <motion.div
                                                                    layoutId='subservice-hover'
                                                                    transition={{
                                                                        type: "spring",
                                                                        stiffness: 200,
                                                                        damping: 10
                                                                    }}
                                                                    className="absolute w-full h-full inset-0 -z-1 bg-foreground-lighter/70 rounded-full" />}
                                                            <div className="">
                                                                <div className='hidden group-hover/subservice:flex'>
                                                                    <subService.icon />
                                                                </div>
                                                                <IconPointFilled size={24} className=' group-hover/subservice:hidden' />
                                                            </div>
                                                            <p className="text-base">{subService.name}</p>
                                                            <svg
                                                                className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover/subservice:opacity-100 group-hover/subservice:translate-x-0 transition-all duration-300"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </NavLink>
                                                    </Animate>
                                                ))}
                                            </div>
                                        </div>



                                    </div>
                                </div>


                                <div className='lg:hidden w-full'>

                                    {content[service.contentId as ContentKey]}

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Sticky Content */}
                    <div className="hidden lg:block w-1/2 ">
                        <div className="sticky top-22.5   flex items-center justify-center ">
                            <div className="relative w-full h-[calc(100dvh-90px)]">
                                {servicesList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="absolute flex justify-center items-center  inset-0 transition-all duration-700 ease-out "
                                        style={{
                                            opacity: activeIndex === index ? 1 : 0,
                                            zIndex: activeIndex === index ? 10 : 5,
                                        }}
                                    >
                                        {content[service.contentId as ContentKey]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default OurServices;