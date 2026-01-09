import React, { useState, useEffect, useRef } from 'react';
import { HelpingHand } from 'lucide-react';
import Section from "@/components/layout/Section"

import { servicesList } from '@/constants/serviceList';
import Container from '@/components/layout/Container';
import { NavLink } from 'react-router';
import SectionHeader from '@/components/shared/SectionHeader';
import type { SectionHeaderProps } from "@/components/shared/SectionHeader"


import crm from "@/assets/crm.jpg"
import cloud from "@/assets/cloudInfra.avif"
import graphic from "@/assets/graphicDesign.avif"
import social from "@/assets/socialMediamanagement.avif"
import web from "@/assets/webDev.avif"


const OurServices: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    type ContentKey =
        | "content-cloud-infrastruture-animation"
        | "content-digital-solutions-animation"
        | "content-digital-presence-animation"
        | "content-creativity-animation"
        | "content-automation-integration-animation";

    
    const content: Record<ContentKey, string> = {
        "content-cloud-infrastruture-animation": cloud,
        "content-digital-solutions-animation": web,
        "content-digital-presence-animation": social,
        "content-creativity-animation": graphic,
        "content-automation-integration-animation": crm,
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
    const eyebrow: SectionHeaderProps["eyebrow"] = {
        className: "text-background/70",
        text: "services",
        icon: <HelpingHand className="text-primary" />

    }
    return (

            <Section className="bg-foreground-lighter/90 text-background overflow-visible">
                <Container>


                    <SectionHeader heading='Our Services' subHeading='Smart digital experiences built for the next generation of businesses.' align="center" eyebrow={eyebrow} subHeadingClassName='text-background/40' />

                    {/* Sticky Scroll Section */}
                    <div className="flex  border">
                        {/* Left Side - Scrolling Content */}
                        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-0">
                            {servicesList.map((service, index) => (
                                <div
                                    key={index}
                                    ref={el => { sectionRefs.current[index] = el; }}
                                    className="min-h-[calc(100dvh-64px)] flex flex-col justify-center items-center relative"
                                >
                                    <div
                                        className="absolute lg:hidden rounded-xl shadow-2xl  w-full h-full">
                                        <img src={content[service.contentId as ContentKey]} alt="" className='w-full h-full object-cover rounded-xl! -z-1' />
                                    </div>
                                    <div className="absolute lg:hidden rounded-xl bg-background/90 left-0 right-0 top-0 bottom-0" />
                                    <div className="group relative max-w-lg">

                                        {/* Main card */}
                                        <div className="relative bg-gradient-to-br- from-neutral-900 via-neutral-900 to-neutral-800 p-10 rounded-2xl border- border-neutral-700/50- shadow-2xl- overflow-hidden">


                                            <div className="relative z-10">
                                                <div className="mb-8">
                                                    <h3 className="text-4xl lg:text-5xl font-bold mb-6 lg:text-background text-foreground-lighter  leading-tight">
                                                        {service.name}
                                                    </h3>
                                                    <p className="text-lg lg:text-xl  lg:text-background/70 text-foreground-lighter/80 leading-relaxed font-light">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                {/* Divider */}
                                                <div className="w-16 h-0.5 bg-linear-to-r from-blue-600 to-blue-400 mb-6"></div>

                                                <div className="space-y-4">
                                                    <p className="font-semibold text-foreground/90 lg:text-background/90 tracking-wide uppercase text-sm">
                                                        Services
                                                    </p>
                                                    <div className="space-y-1.5">
                                                        {service.subServices.map((subService, index) => (
                                                            <NavLink
                                                                to={`/service/${subService.href}`}
                                                                key={index}
                                                                className="group/link flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400- font-medium  hover:bg-white/5- transition-all duration-300  lg:text-background/80 lg:hover:bg-background/10 text-foreground/80 hover:bg-foreground/10"
                                                            >
                                                                <div className="text-blue-400 group-hover/link:text-blue-300 transition-colors duration-300">
                                                                    <subService.icon />
                                                                </div>
                                                                <p className="text-base">{subService.name}</p>
                                                                <svg
                                                                    className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Corner accent */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                        </div>
                                    </div>

                                    <div className='lg:hidden w-full'>
                                        {/* <img src={content[service.contentId as ContentKey]} alt="" /> */}

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Sticky Content */}
                        <div className="hidden lg:block w-1/2 ">
                            <div className="sticky top-16 min-h-[calc(100vh-64px)] flex items-center justify-center ">
                                <div className="relative w-full h-[80dvh]">
                                    {servicesList.map((service, index) => (
                                        <div
                                            key={index}
                                            className="absolute shadow-2xl rounded-xl inset-0 transition-all duration-700 ease-out "
                                            style={{
                                                opacity: activeIndex === index ? 1 : 0,
                                                transform: activeIndex === index ? 'scale(1)' : 'scale(0.9)',
                                                zIndex: activeIndex === index ? 10 : 5,
                                            }}
                                        >
                                            <img src={content[service.contentId as ContentKey]} alt="" className='rounded-xl h-full object-cover w-full' />
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