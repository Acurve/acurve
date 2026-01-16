import SectionHeader from '@/components/shared/SectionHeader';

import { IconCloudComputing, IconDatabaseExport, IconRocket, IconServer, IconShieldCheck, IconTrendingUp } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import Right from './RightSection';
import Left from './LeftSection';
import { Timeline } from '@/components/ui/timeline';
import PhaseContent from '@/components/shared/PhaseContent';

import phase1 from "@/assets/cloud-migrate-host/phase1.webp"
import phase2 from "@/assets/cloud-migrate-host/phase2.webp"
import phase3 from "@/assets/cloud-migrate-host/phase3.webp"
import phase4 from "@/assets/cloud-migrate-host/phase4.webp"
import phase5 from "@/assets/cloud-migrate-host/phase5.webp"
import phase6 from "@/assets/cloud-migrate-host/phase6.webp"
import StaggeredLayout from '@/components/shared/staggered-layout';
import TechContainer from './TechContainer';
import { techStackList } from '@/constants/techstack/cloud-migrate-host';

const CloudMigrationHostingPage = () => {
    const processStepsList = [
        {
            title: "Infrastructure Assessment",
            content: (
                <PhaseContent
                    text="Comprehensive audit of your current infrastructure, applications, and workloads. We identify migration priorities and potential challenges upfront."
                    imageSrc={phase1}
                    list={[
                        "Current infrastructure audit",
                        "Application & workload analysis",
                        "Dependency & risk identification",
                        "Migration readiness assessment",
                    ]}
                />
            )
        }
        ,
        {
            title: "Migration Strategy",
            content: (
                <PhaseContent
                    text="Design the optimal cloud architecture—AWS, Azure, or Google Cloud. Choose between lift-and-shift, re-platforming, or cloud-native refactoring."
                    imageSrc={phase2}
                    list={[
                        "Cloud platform selection",
                        "Migration approach planning",
                        "Target architecture design",
                    ]}
                />
            )
        }
        ,
        {
            title: "Pre-Migration Testing",
            content: (
                <PhaseContent
                    text="Set up staging environment and test critical workflows. We ensure compatibility and performance before touching production systems."
                    imageSrc={phase3}
                    list={[
                        "Staging environment setup",
                        "Compatibility & performance testing",
                        "Critical workflow validation",
                    ]}
                />
            )
        }
        ,
        {
            title: "Data Migration",
            content: (
                <PhaseContent
                    text="Secure transfer of databases, files, and applications with zero data loss. Phased migration minimizes downtime and business disruption."
                    imageSrc={phase4}
                    list={[
                        "Secure data transfer",
                        "Phased migration execution",
                        "Downtime & risk minimization",
                    ]}
                />
            )
        }
        ,
        {
            title: "Optimization & Security",
            content: (
                <PhaseContent
                    text="Fine-tune performance, implement auto-scaling, and harden security. Cost optimization ensures you're not overpaying for resources."
                    imageSrc={phase5}
                    list={[
                        "Performance tuning & auto-scaling",
                        "Security hardening & access control",
                        "Cost optimization & resource management",
                        "Backup & disaster recovery setup",
                    ]}
                />
            )
        }
        ,
        {
            title: "Monitoring & Support",
            content: (
                <PhaseContent
                    text="24/7 monitoring with automated alerts and incident response. Ongoing optimization and support to maximize cloud ROI."
                    imageSrc={phase6}
                    list={[
                        "24/7 monitoring & alerts",
                        "Incident response & issue resolution",
                        "Continuous optimization & support",
                    ]}
                />
            )
        }
        ,
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
        <Left
            heading='Migrate to the cloud with confidence. Scale without limits.'
            subHeading='Move from costly on-premise servers to flexible, scalable cloud infrastructure. We handle the entire migration process—from planning to optimization—ensuring zero downtime and maximum performance on AWS, Azure, or Google Cloud.'
        />

    )

    const right = (
        <Right icon={<icons.cloudInfrastructure.cloudMigrationHosting.icon />} />
    )


    useEffect(() => {
        document.title = "Cloud Migration & Hosting | Acurve"
    }, [])
    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Cloud Migration & Hosting'
                leftSection={left} rightSection={right}
                icon={<icons.cloudInfrastructure.cloudMigrationHosting.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Cloud Migration Process' />
                    <Timeline data={processStepsList} />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Cloud Platforms & Technologies' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Cloud Migration & Hosting?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CloudMigrationHostingPage