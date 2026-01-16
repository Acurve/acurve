import SectionHeader from '@/components/shared/SectionHeader';

import { IconChartBar, IconCloud, IconDatabaseCog, IconLock, IconUsers, IconUserShield } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import Right from './RightSection';
import Left from './LeftSection';
import PhaseContent from '@/components/shared/PhaseContent';
import { Timeline } from '@/components/ui/timeline';

import phase1 from "@/assets/b2b-portals/phase1.webp"
import phase2 from "@/assets/b2b-portals/phase2.webp"
import phase3 from "@/assets/b2b-portals/phase3.webp"
import phase4 from "@/assets/b2b-portals/phase4.webp"
import phase5 from "@/assets/b2b-portals/phase5.webp"
import phase6 from "@/assets/b2b-portals/phase6.webp"
import { techStackList } from '@/constants/techstack/b2b-portals';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';
import CallToAction from '@/components/shared/CallToAction';

const B2BPortals = () => {
    const processStepsList = [
        {
            title: "Business Analysis",
            content: (
                <PhaseContent
                    text="Deep dive into your business model, workflows, and stakeholder requirements. We map out user journeys and identify automation opportunities."
                    imageSrc={phase1}
                    list={[
                        "Business goals & requirements analysis",
                        "Workflow & process mapping",
                        "User roles & journey definition",
                        "Automation opportunity identification",
                    ]}
                />
            )
        },

        {
            title: "Architecture Design",
            content: (
                <PhaseContent
                    text="Design scalable system architecture with secure data flows. We plan integrations, APIs, and database structures for optimal performance."
                    imageSrc={phase2}
                    list={[
                        "System & application architecture",
                        "API & integration planning",
                        "Data flow & security design",
                    ]}
                />
            )
        }
        ,
        {
            title: "Portal Development",
            content: (
                <PhaseContent
                    text="Build robust, feature-rich portals with role-based access control. Custom dashboards, reporting tools, and automated workflows."
                    imageSrc={phase3}
                    list={[
                        "Role-based access control",
                        "Custom dashboards & reporting",
                        "Workflow automation",
                        "Scalable frontend & backend development",
                    ]}
                />
            )
        }
        ,
        {
            title: "Integration & Testing",
            content: (
                <PhaseContent
                    text="Connect with your existing systems—CRM, ERP, payment gateways. Comprehensive testing ensures seamless data synchronization."
                    imageSrc={phase4}
                    list={[
                        "Third-party system integrations",
                        "Data synchronization & validation",
                        "End-to-end testing & QA",
                    ]}
                />
            )
        }
        ,
        {
            title: "User Training & Onboarding",
            content: (
                <PhaseContent
                    text="Complete training for your team and partner organizations. We provide documentation and hands-on guidance for smooth adoption."
                    imageSrc={phase5}
                    list={[
                        "User training sessions",
                        "Technical & user documentation",
                        "Onboarding support",
                    ]}
                />
            )
        }
        ,
        {
            title: "Launch & Optimization",
            content: (
                <PhaseContent
                    text="Phased rollout with continuous monitoring and optimization. Ongoing support to enhance features based on user feedback."
                    imageSrc={phase6}
                    list={[
                        "Phased launch & deployment",
                        "Performance monitoring",
                        "Continuous improvements & optimization",
                    ]}
                />
            )
        }
        ,
    ];

    const features = [
        { icon: <IconUsers />, title: "Multi-Tenant Architecture", description: "Separate spaces for each business partner with custom branding and configurations." },
        { icon: <IconUserShield />, title: "Role-Based Access Control", description: "Granular permissions system ensuring users see only what they need." },
        { icon: <IconDatabaseCog />, title: "Advanced Reporting", description: "Real-time analytics, custom reports, and data visualization dashboards." },
        { icon: <IconCloud />, title: "Cloud Integration", description: "Seamless integration with CRMs, ERPs, and third-party business tools." },
        { icon: <IconLock />, title: "Enterprise Security", description: "Bank-level encryption, SSO, and compliance with industry standards." },
        { icon: <IconChartBar />, title: "Workflow Automation", description: "Automate approvals, notifications, and repetitive business processes." },
    ];

    const left = (
        <Left
            heading='Enterprise B2B portals that streamline operations and strengthen partner relationships.'
            subHeading='We build powerful B2B platforms that connect businesses, automate workflows, and provide real-time visibility across your partner ecosystem. From supplier portals to distributor networks, we deliver solutions that scale.'
        />

    )

    const right = (
        <Right icon={<icons.digitalSolutions.b2bportals.icon />} />
    )


    useEffect(() => {
        document.title = "B2B Portals | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='B2B Portals' leftSection={left} rightSection={right} icon={<icons.digitalSolutions.b2bportals.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our B2B Portal Development Process' />
                    <Timeline data={processStepsList} />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Stack for B2B Portals'  />
                </Container>
                <StaggeredLayout list={techStackListFinal}/>
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in B2B Portal Development?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default B2BPortals