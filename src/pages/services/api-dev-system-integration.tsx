import SectionHeader from '@/components/shared/SectionHeader';

import { IconApi, IconDatabase, IconPlugConnected, IconRefresh, IconShieldLock, IconWebhook } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import StaggeredLayout from '@/components/shared/staggered-layout';
import PhaseContent from '@/components/shared/PhaseContent';
import { Timeline } from '@/components/ui/timeline';
import Left from './LeftSection';
import Right from './RightSection';
import { techStackList } from '@/constants/techstack/api-dev-sys-int';
import TechContainer from './TechContainer';

import phase1 from "@/assets/api-dev-sys-int/phase1.webp"
import phase2 from "@/assets/api-dev-sys-int/phase2.webp"
import phase3 from "@/assets/api-dev-sys-int/phase3.webp"
import phase4 from "@/assets/api-dev-sys-int/phase4.webp"
import phase5 from "@/assets/api-dev-sys-int/phase5.webp"
import phase6 from "@/assets/api-dev-sys-int/phase6.webp"


const APISystemIntegrationPage = () => {
    const processStepsList = [
        {
            title: "System Analysis",
            content: (
                <PhaseContent
                    text="Map out your existing systems, data flows, and integration requirements. We identify bottlenecks and opportunities for automation."
                    imageSrc={phase1}
                    list={[
                        "System & data flow audit",
                        "Integration dependency mapping",
                        "Automation opportunity analysis",
                    ]}
                />
            )
        },
        {
            title: "API Architecture Design",
            content: (
                <PhaseContent
                    text="Design RESTful or GraphQL APIs with proper authentication and rate limiting. We ensure scalability, security, and maintainability from the start."
                    imageSrc={phase2}
                    list={[
                        "API standards & protocols",
                        "Authentication & authorization",
                        "Scalability & rate limiting",
                    ]}
                />
            )
        },
        {
            title: "Development & Documentation",
            content: (
                <PhaseContent
                    text="Build robust APIs with comprehensive documentation. Clear endpoints, examples, and SDKs for easy integration by your team."
                    imageSrc={phase3}
                    list={[
                        "Endpoint development",
                        "Error handling & validation",
                        "API documentation & examples",
                    ]}
                />
            )
        },
        {
            title: "Integration Implementation",
            content: (
                <PhaseContent
                    text="Connect your systems—CRM, ERP, payment gateways, marketing tools. Automated data synchronization eliminates manual work."
                    imageSrc={phase4}
                    list={[
                        "Third-party integrations",
                        "Data synchronization",
                        "Webhook & event handling",
                    ]}
                />
            )
        },
        {
            title: "Testing & Security Audit",
            content: (
                <PhaseContent
                    text="Rigorous testing of all endpoints and data flows. Security audits ensure your integrations are protected against vulnerabilities."
                    imageSrc={phase5}
                    list={[
                        "Endpoint & load testing",
                        "Security vulnerability checks",
                        "Data integrity validation",
                    ]}
                />
            )
        },
        {
            title: "Monitoring & Optimization",
            content: (
                <PhaseContent
                    text="Real-time monitoring with alerts for failures. Continuous optimization to improve performance and reliability."
                    imageSrc={phase6}
                    list={
                        [
                            "Logging & monitoring setup",
                            "Failure alerts",
                            "Performance optimization",
                        ]}
                />
            )
        },
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
        <Left
            heading='Connect your systems seamlessly with powerful APIs and intelligent integrations.'
            subHeading='Break down data silos and automate workflows. We build robust APIs and integrate your existing systems—CRM, ERP, payment gateways, and third-party services—creating a unified, efficient technology ecosystem.'
        />

    )

    const right = (
        <Right
            icon={<icons.automationIntegration.apiDevSystemIntegration.icon />}
        />
    )


    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)


    useEffect(() => {
        document.title = "Api Development & System Integration | Acurve"
    }, [])

    return (
        <div>
            <MainSection text='Api Developmen & System Integration' leftSection={left} rightSection={right} icon={<icons.automationIntegration.apiDevSystemIntegration.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our API Development & Integration Process' />
                    <Timeline data={processStepsList} />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Stack for APIs & Integrations' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in API Development & System Integration?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default APISystemIntegrationPage