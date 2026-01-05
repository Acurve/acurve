import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconArrowRight, IconCode, IconCpu, IconDeviceIpadBolt, IconDeviceMobile, IconShieldCheck, IconStar, IconWorld } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const customwebDevelopmentPage = () => {
    const processStepsList = [
        { number: 1, title: "Discovery & Planning", description: "We analyze your goals, target audience, and technical requirements. Our team creates a comprehensive roadmap for your project success." },
        { number: 2, title: "Design & Prototyping", description: "Wireframes and interactive prototypes bring your vision to life. We focus on user experience and ensure your approval before development begins." },
        { number: 3, title: "Development", description: "Clean, scalable code built with modern frameworks. We follow best practices and industry standards for long-term maintainability." },
        { number: 4, title: "Testing & QA", description: "Rigorous testing across browsers, devices, and scenarios. We ensure zero bugs and optimal performance before launch." },
        { number: 5, title: "Deployment", description: "Seamless deployment to your chosen hosting platform. We handle all technical setup and ensure zero downtime during launch." },
        { number: 6, title: "Support & Maintenance", description: "Ongoing monitoring, updates, and technical support. We keep your site secure, fast, and running smoothly." },
    ];
    const features = [
        { icon: <IconCode />, title: "Custom Development", description: "Tailored solutions built with React, Next.js, and modern frameworks." },
        { icon: <IconDeviceMobile />, title: "Responsive Design", description: "Seamless experience across all devices and screen sizes." },
        { icon: <IconDeviceIpadBolt />, title: "High Performance", description: "Optimized code and assets for lightning-fast loading times." },
        { icon: <IconShieldCheck />, title: "Secure & Scalable", description: "Enterprise-grade security and infrastructure that grows with you." },
        { icon: <IconWorld />, title: "SEO Optimized", description: "Built-in SEO best practices for maximum online visibility." },
        { icon: <IconArrowRight />, title: "Ongoing Support", description: "Continuous maintenance, updates, and technical support." },
    ];
    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'
        >
            <div className='lg:hidden  absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://img2.tradewheel.com/uploads/blog/6437c5405f148-attachment.jpg.webp)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5 '>

                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">Custom websites and web applications built with cutting-edge technology and modern best practices.</h3>
                <p className='text-foreground/70'>
                    We create stunning, high-performing web applications that drive business results. From concept to launch, we handle every aspect of your digital presence.
                </p>
            </div>
            <NavLink to="/contact">
                <Button className='cursor-pointer bg-linear-to-r from-blue-600 to-blue-500' size="lg">Get started</Button>
            </NavLink>

        </div>
    )
    const right = (
        <div className=' relative w-full flex'>
            <div className="absolute inset-0 bg-linear-to-r from-background to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-b from-background to-transparent"></div>

            <img src="https://img2.tradewheel.com/uploads/blog/6437c5405f148-attachment.jpg.webp" className='object-cover rounded-br-3xl' alt="" />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "techstack",
        icon: <IconCpu className="text-purple-700" />
    }
    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconCpu className="text-blue-400" />
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

                    <SectionHeader heading='Our Web-development Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Web development process"
                    />
                </Container>
            </Section>
            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology we use' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}
            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Web-development?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default customwebDevelopmentPage

