import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconBell, IconBug, IconServer, IconShieldCheck, IconStar, IconTools, IconTrendingUp, IconCloudUpload } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';

const MaintenanceSupportPage = () => {
    const processStepsList = [
        { number: 1, title: "System Audit & Setup", description: "Comprehensive audit of your infrastructure, applications, and security setup. We document everything and set up monitoring tools." },
        { number: 2, title: "Monitoring Configuration", description: "Deploy 24/7 monitoring for uptime, performance, security threats, and errors. Automated alerts ensure issues are caught instantly." },
        { number: 3, title: "Preventive Maintenance", description: "Regular updates, patches, backups, and security scans. We prevent problems before they impact your business operations." },
        { number: 4, title: "Incident Response", description: "Rapid response to any issues—downtime, errors, security threats. Our team diagnoses and resolves problems quickly." },
        { number: 5, title: "Performance Optimization", description: "Continuous optimization of server resources, database queries, and application code. Keep systems running at peak efficiency." },
        { number: 6, title: "Reporting & Consultation", description: "Monthly reports on system health, incidents resolved, and recommendations. Strategic guidance on upgrades and improvements." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Keep your systems running smoothly with proactive maintenance and expert support.
                </h3>
                <p className='text-foreground/70'>
                    Stop worrying about downtime, security threats, or performance issues. Our dedicated team monitors your infrastructure 24/7, handles updates and patches, responds to incidents instantly, and keeps everything optimized and secure.
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
                alt="Maintenance and Technical Support"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "platforms",
    //     icon: <IconCloud className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconServer className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    useEffect(() => {
            document.title = "Maintenance & Technical Support | Acurve"
        }, [])
    return (
        <div>
            <MainSection text='Maintenace & Technical Support' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Maintenance & Support Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Maintenance and support process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technologies & Platforms We Support' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Maintenance & Support?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default MaintenanceSupportPage