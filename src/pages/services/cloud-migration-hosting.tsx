import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconArrowRight, IconCloud, IconCloudComputing, IconDatabaseExport, IconLock, IconRocket, IconServer, IconShieldCheck, IconStar, IconTrendingUp, IconWorldUpload } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const CloudMigrationHostingPage = () => {
    const processStepsList = [
        { number: 1, title: "Infrastructure Assessment", description: "Comprehensive audit of your current infrastructure, applications, and workloads. We identify migration priorities and potential challenges upfront." },
        { number: 2, title: "Migration Strategy", description: "Design the optimal cloud architecture—AWS, Azure, or Google Cloud. Choose between lift-and-shift, re-platforming, or cloud-native refactoring." },
        { number: 3, title: "Pre-Migration Testing", description: "Set up staging environment and test critical workflows. We ensure compatibility and performance before touching production systems." },
        { number: 4, title: "Data Migration", description: "Secure transfer of databases, files, and applications with zero data loss. Phased migration minimizes downtime and business disruption." },
        { number: 5, title: "Optimization & Security", description: "Fine-tune performance, implement auto-scaling, and harden security. Cost optimization ensures you're not overpaying for resources." },
        { number: 6, title: "Monitoring & Support", description: "24/7 monitoring with automated alerts and incident response. Ongoing optimization and support to maximize cloud ROI." },
    ];

    const features = [
        { icon: <IconCloudComputing />, title: "Multi-Cloud Expertise", description: "AWS, Azure, Google Cloud, and hybrid cloud solutions tailored to your needs." },
        { icon: <IconDatabaseExport />, title: "Zero-Downtime Migration", description: "Phased migration strategies that keep your business running smoothly." },
        { icon: <IconRocket />, title: "Performance Optimization", description: "CDN setup, caching, auto-scaling, and load balancing for peak performance." },
        { icon: <IconShieldCheck />, title: "Enterprise Security", description: "SSL certificates, DDoS protection, firewalls, and compliance certifications." },
        { icon: <IconTrendingUp />, title: "Auto-Scaling Infrastructure", description: "Automatically adjust resources based on traffic—pay only for what you use." },
        { icon: <IconServer />, title: "Managed Hosting", description: "24/7 server monitoring, updates, backups, and technical support included." },
    ];

    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Migrate to the cloud with confidence. Scale without limits.
                </h3>
                <p className='text-foreground/70'>
                    Move from costly on-premise servers to flexible, scalable cloud infrastructure. We handle the entire migration process—from planning to optimization—ensuring zero downtime and maximum performance on AWS, Azure, or Google Cloud.
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="Cloud Migration and Hosting" 
            />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "platforms",
        icon: <IconCloud className="text-purple-700" />
    }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconWorldUpload className="text-blue-400" />
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
                    <SectionHeader heading='Our Cloud Migration Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Cloud migration and hosting process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Cloud Platforms & Technologies' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Cloud Migration & Hosting?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CloudMigrationHostingPage