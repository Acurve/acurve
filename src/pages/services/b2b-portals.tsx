import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconChartBar, IconCloud, IconDatabaseCog, IconLock, IconStar, IconUsers, IconUserShield } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const B2BPortals = () => {
    const processStepsList = [
        { number: 1, title: "Business Analysis", description: "Deep dive into your business model, workflows, and stakeholder requirements. We map out user journeys and identify automation opportunities." },
        { number: 2, title: "Architecture Design", description: "Design scalable system architecture with secure data flows. We plan integrations, APIs, and database structures for optimal performance." },
        { number: 3, title: "Portal Development", description: "Build robust, feature-rich portals with role-based access control. Custom dashboards, reporting tools, and automated workflows." },
        { number: 4, title: "Integration & Testing", description: "Connect with your existing systems—CRM, ERP, payment gateways. Comprehensive testing ensures seamless data synchronization." },
        { number: 5, title: "User Training & Onboarding", description: "Complete training for your team and partner organizations. We provide documentation and hands-on guidance for smooth adoption." },
        { number: 6, title: "Launch & Optimization", description: "Phased rollout with continuous monitoring and optimization. Ongoing support to enhance features based on user feedback." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Enterprise B2B portals that streamline operations and strengthen partner relationships.
                </h3>
                <p className='text-foreground/70'>
                    We build powerful B2B platforms that connect businesses, automate workflows, and provide real-time visibility across your partner ecosystem. From supplier portals to distributor networks, we deliver solutions that scale.
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
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="B2B Portal Dashboard"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "techstack",
    //     icon: <IconBuildingStore className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconDatabaseCog className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    return (
        <div>
            <MainSection text='B2B Portals' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our B2B Portal Development Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                        imageAlt="B2B portal development process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Stack for B2B Portals' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in B2B Portal Development?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default B2BPortals