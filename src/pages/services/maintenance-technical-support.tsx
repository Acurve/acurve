import SectionHeader from '@/components/shared/SectionHeader';

import { IconBell, IconBug,  IconShieldCheck,  IconTools, IconTrendingUp, IconCloudUpload } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import { Timeline } from '@/components/ui/timeline';
import Right from './RightSection';
import Left from './LeftSection';
import PhaseContent from '@/components/shared/PhaseContent';

import phase1 from "@/assets/maintenance-technical-support/phase1.webp"
import phase2 from "@/assets/maintenance-technical-support/phase2.webp"
import phase3 from "@/assets/maintenance-technical-support/phase3.webp"
import phase4 from "@/assets/maintenance-technical-support/phase4.webp"
import phase5 from "@/assets/maintenance-technical-support/phase5.webp"
import phase6 from "@/assets/maintenance-technical-support/phase6.webp"
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';
import { techStackList } from '@/constants/techstack/maintenance-technical-support';

const MaintenanceSupportPage = () => {
    const processStepsList = [
    {
        title: "System Audit & Setup",
        content: (
            <PhaseContent
                text="Comprehensive audit of your infrastructure, applications, and security setup. We document everything and set up monitoring tools."
                imageSrc={phase1}
                list={[
                    "Infrastructure & cloud resource audit",
                    "Application & dependency mapping",
                    "Security & access review",
                    "Backup & recovery verification",
                    "Monitoring tools setup",
                ]}
            />
        )
    },
    {
        title: "Monitoring Configuration",
        content: (
            <PhaseContent
                text="Deploy 24/7 monitoring for uptime, performance, security threats, and errors. Automated alerts ensure issues are caught instantly."
                imageSrc={phase2}
                list={[
                    "Uptime & availability monitoring",
                    "Performance & latency tracking",
                    "Security & anomaly detection",
                    "Automated alert configuration",
                    "Log aggregation & analysis",
                ]}
            />
        )
    },
    {
        title: "Preventive Maintenance",
        content: (
            <PhaseContent
                text="Regular updates, patches, backups, and security scans. We prevent problems before they impact your business operations."
                imageSrc={phase3}
                list={[
                    "OS & dependency updates",
                    "Security patches & vulnerability scans",
                    "Automated backups & restore tests",
                    "Certificate & key rotation",
                    "Maintenance scheduling",
                ]}
            />
        )
    },
    {
        title: "Incident Response",
        content: (
            <PhaseContent
                text="Rapid response to any issues—downtime, errors, security threats. Our team diagnoses and resolves problems quickly."
                imageSrc={phase4}
                list={[
                    "Real-time incident detection",
                    "Root cause analysis",
                    "Immediate mitigation actions",
                    "Downtime & data impact minimization",
                    "Post-incident review",
                ]}
            />
        )
    },
    {
        title: "Performance Optimization",
        content: (
            <PhaseContent
                text="Continuous optimization of server resources, database queries, and application code. Keep systems running at peak efficiency."
                imageSrc={phase5}
                list={[
                    "Resource usage optimization",
                    "Auto-scaling configuration",
                    "Database & query tuning",
                    "Caching & CDN improvements",
                    "Cost-performance balancing",
                ]}
            />
        )
    },
    {
        title: "Reporting & Consultation",
        content: (
            <PhaseContent
                text="Monthly reports on system health, incidents resolved, and recommendations. Strategic guidance on upgrades and improvements."
                imageSrc={phase6}
                list={[
                    "System health & uptime reports",
                    "Incident & resolution summary",
                    "Cost & usage insights",
                    "Security & compliance recommendations",
                    "Future improvement roadmap",
                ]}
            />
        )
    },
];


    const features = [
        { icon: <IconBell />, title: "24/7 Monitoring", description: "Round-the-clock monitoring with instant alerts for downtime, errors, and security threats." },
        { icon: <IconTools />, title: "Proactive Updates", description: "Regular software updates, security patches, and dependency upgrades to prevent vulnerabilities." },
        { icon: <IconCloudUpload />, title: "Automated Backups", description: "Daily automated backups with easy restoration—your data is always safe and recoverable." },
        { icon: <IconBug />, title: "Bug Fixes & Troubleshooting", description: "Quick resolution of bugs, errors, and technical issues as they arise." },
        { icon: <IconShieldCheck />, title: "Security Monitoring", description: "Continuous security scans, firewall management, and protection against threats." },
        { icon: <IconTrendingUp />, title: "Performance Optimization", description: "Database optimization, caching, and resource management for maximum speed." },
    ];

    const left = (
        <Left
        heading=' Keep your systems running smoothly with proactive maintenance and expert support.'
        subHeading='Stop worrying about downtime, security threats, or performance issues. Our dedicated team monitors your infrastructure 24/7, handles updates and patches, responds to incidents instantly, and keeps everything optimized and secure.'
        />
        
    )

    const right = (
        <Right icon={<icons.cloudInfrastructure.maintenanceTechnicalSupport.icon/>} />
    )

    

    useEffect(() => {
            document.title = "Maintenance & Technical Support | Acurve"
        }, [])

        const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Maintenace & Technical Support' leftSection={left} rightSection={right} icon={<icons.cloudInfrastructure.maintenanceTechnicalSupport.icon/>} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Maintenance & Support Process'  />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technologies & Platforms We Support'  />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Maintenance & Support?'/>
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default MaintenanceSupportPage