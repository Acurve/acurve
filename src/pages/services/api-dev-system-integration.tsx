import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconApi, IconArrowRight, IconCloud, IconDatabase, IconKey, IconPlugConnected, IconRefresh, IconShieldLock, IconStar, IconWebhook } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const APISystemIntegrationPage = () => {
    const processStepsList = [
        { number: 1, title: "System Analysis", description: "Map out your existing systems, data flows, and integration requirements. We identify bottlenecks and opportunities for automation." },
        { number: 2, title: "API Architecture Design", description: "Design RESTful or GraphQL APIs with proper authentication and rate limiting. We ensure scalability, security, and maintainability from the start." },
        { number: 3, title: "Development & Documentation", description: "Build robust APIs with comprehensive documentation. Clear endpoints, examples, and SDKs for easy integration by your team." },
        { number: 4, title: "Integration Implementation", description: "Connect your systems—CRM, ERP, payment gateways, marketing tools. Automated data synchronization eliminates manual work." },
        { number: 5, title: "Testing & Security Audit", description: "Rigorous testing of all endpoints and data flows. Security audits ensure your integrations are protected against vulnerabilities." },
        { number: 6, title: "Monitoring & Optimization", description: "Real-time monitoring with alerts for failures. Continuous optimization to improve performance and reliability." },
    ];

    const features = [
        { icon: <IconApi />, title: "RESTful & GraphQL APIs", description: "Modern API architectures optimized for performance and flexibility." },
        { icon: <IconPlugConnected />, title: "Third-Party Integrations", description: "Connect with Stripe, PayPal, Salesforce, HubSpot, and 100+ platforms." },
        { icon: <IconDatabase />, title: "Database Synchronization", description: "Real-time or scheduled sync between multiple databases and systems." },
        { icon: <IconWebhook />, title: "Webhooks & Events", description: "Event-driven architecture for instant notifications and actions." },
        { icon: <IconShieldLock />, title: "Enterprise Security", description: "OAuth 2.0, JWT tokens, API keys, and encryption for secure data exchange." },
        { icon: <IconRefresh />, title: "Automated Workflows", description: "Eliminate manual data entry with intelligent automation and error handling." },
    ];

    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Connect your systems seamlessly with powerful APIs and intelligent integrations.
                </h3>
                <p className='text-foreground/70'>
                    Break down data silos and automate workflows. We build robust APIs and integrate your existing systems—CRM, ERP, payment gateways, and third-party services—creating a unified, efficient technology ecosystem.
                </p>
            </div>
            <NavLink to="/contact">
                <Button className='cursor-pointer bg-linear-to-r from-blue-600 to-blue-500' size="lg">Get started</Button>
            </NavLink>
        </div>
    )

    const right = (
        <div className='relative w-full flex'>
            <div className="absolute inset-0 bg-linear-to-r from-background to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-b from-background to-transparent"></div>
            <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="API Development and System Integration" 
            />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "techstack",
        icon: <IconCloud className="text-purple-700" />
    }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconApi className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    return (
        <div>
            <MainSection leftSection={left} rightSection={right} />
            
            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our API Development & Integration Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="API development and integration process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Stack for APIs & Integrations' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in API Development & System Integration?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default APISystemIntegrationPage