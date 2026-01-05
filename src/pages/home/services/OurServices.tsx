import React, { useState, useEffect, useRef } from 'react';
import { HelpingHand } from 'lucide-react';
import Section from "@/components/layout/Section"


import DigitalPresenceAnimation from './animation/digital-presence';
import DigitalSolutionAnimation from './animation/digital-solution';
import CloudInfrastructureAnimation from './animation/cloud-infrastructure';
import CreativityAnimation from './animation/creativity';
import AutomationIntegrationAnimation from './animation/automation-integration';
import { servicesList } from '@/constants/serviceList';
import Container from '@/components/layout/Container';
import { NavLink } from 'react-router';
import SectionHeader from '@/components/shared/SectionHeader';
import type { SectionHeaderProps } from "@/components/shared/SectionHeader"


const OurServices: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    type ContentKey =
        | "content-cloud-infrastruture-animation"
        | "content-digital-solutions-animation"
        | "content-digital-presence-animation"
        | "content-creativity-animation"
        | "content-automation-integration-animation";

    const content: Record<ContentKey, React.ReactNode> = {
        "content-cloud-infrastruture-animation": <CloudInfrastructureAnimation />,
        "content-digital-solutions-animation": <DigitalSolutionAnimation />,
        "content-digital-presence-animation": <DigitalPresenceAnimation />,
        "content-creativity-animation": <CreativityAnimation />,
        "content-automation-integration-animation": <AutomationIntegrationAnimation />,
    }


    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sectionRefs.current.forEach((section, index) => {
                if (!section) return;

                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

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
                    <div className="w-full lg:w-1/2 ">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                ref={el => { sectionRefs.current[index] = el; }}
                                className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center"
                            >
                                {/* <div className="max-w-lg bg-neutral-200 p-12 rounded-2xl">
                                    <div>

                                        <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                                            {service.name}
                                        </h3>
                                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className='mt-4 flex flex-col gap-2'>
                                        <p className='font-semibold text-lg'>Sevices</p>
                                        <div className='space-y-2'>

                                            {service.subServices.map((subService, index) => (
                                                <NavLink
                                                    to={`/${subService.href}`}
                                                    key={index}
                                                    className='flex items-center gap-2 text-background/70 font-semibold hover:text-background'>
                                                    <subService.icon />
                                                    <p>{subService.name}</p>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div> */}
                                <div className="group relative max-w-lg">
                                    {/* Gradient glow effect */}
                                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-800 via-blue-600 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

                                    {/* Main card */}
                                    <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-10 rounded-2xl border border-neutral-700/50 shadow-2xl overflow-hidden">
                                        {/* Subtle animated background pattern */}
                                        <div className="absolute inset-0 opacity-5">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                                        </div>

                                        {/* Shine effect on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <div className="mb-8">
                                                <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent leading-tight">
                                                    {service.name}
                                                </h3>
                                                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Divider */}
                                            <div className="w-16 h-0.5 bg-linear-to-r from-blue-600 to-blue-400 mb-6"></div>

                                            <div className="space-y-4">
                                                <p className="font-semibold text-neutral-200 tracking-wide uppercase text-sm">
                                                    Services
                                                </p>
                                                <div className="space-y-1.5">
                                                    {service.subServices.map((subService, index) => (
                                                        <NavLink
                                                            to={`/${subService.href}`}
                                                            key={index}
                                                            className="group/link flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 font-medium hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-neutral-700/50"
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
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                    </div>
                                </div>

                                <div className='lg:hidden h-108 w-full'>
                                    {content[service.contentId as ContentKey]}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Sticky Content */}
                    <div className="hidden lg:block w-1/2 ">
                        <div className="sticky top-16 min-h-[calc(100vh-64px)] flex items-center justify-center ">
                            <div className="relative w-full h-full aspect-square">
                                {servicesList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="absolute inset-0 transition-all duration-700 ease-out "
                                        style={{
                                            opacity: activeIndex === index ? 1 : 0,
                                            transform: activeIndex === index ? 'scale(1)' : 'scale(0.9)',
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