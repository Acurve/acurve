import SectionHeader from '@/components/shared/SectionHeader';

import { IconArrowRight, IconCode,  IconDeviceIpadBolt, IconDeviceMobile,  IconShieldCheck, IconWorld} from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import { useEffect } from 'react';

import development from "@/assets/web-dev/development.png"
import deployment from "@/assets/web-dev/deployment.png"
import discovery from "@/assets/web-dev/discovery.png"
import prototyping from "@/assets/web-dev/prototyping.png"
import testing from "@/assets/web-dev/testing.png"
import support from "@/assets/web-dev/support.png"
import { Timeline } from '@/components/ui/timeline';
import { icons } from '@/constants/icons';
import StaggeredLayout from '@/components/shared/staggered-layout';
import { techStackList } from '@/constants/techstack/custom-web-development';
import PhaseContent from '@/components/shared/PhaseContent';
import Left from './LeftSection';
import Right from './RightSection';
import TechContainer from './TechContainer';
import CallToAction from '@/components/shared/CallToAction';



const processStepsList = [
    {
        title: "Discovery & Planning",
        content: <PhaseContent
            text='We analyze your goals, target audience, and technical requirements.Our team creates a comprehensive roadmap for your project success.'
            imageSrc={discovery}

            list={[
                "Business & goal analysis",
                "User & market research",
                "Requirement definition",
                "Technical feasibility",
                "Project roadmap"
            ]}
        />
    },
    {
        title: "Design & Prototyping",
        content: <PhaseContent
            text="Wireframes and interactive prototypes bring your vision to life. We focus on user experience and ensure your approval before development begins."
            imageSrc={prototyping}
            list={[
                "Wireframes & UX flows",
                "Visual design system",
                "Interactive prototypes",
            ]}
        />
    }
    ,
    {
        title: "Development",
        content: <PhaseContent
            text="Clean, scalable code built with modern frameworks. We follow best practices and industry standards for long-term maintainability."
            imageSrc={development}
            list={[
                "Frontend & backend development",
                "API & third-party integrations",
                "Performance optimization",
                "Code reviews & version control",

            ]}
        />
    }
    ,
    {
        title: "Testing & QA",
        content: <PhaseContent
            text="Rigorous testing across browsers, devices, and scenarios. We ensure zero bugs and optimal performance before launch."
            imageSrc={testing}
            list={[
                "Functional & usability testing",
                "Cross-browser & device testing",
            ]}
        />
    }
    ,
    {
        title: "Deployment",
        content: <PhaseContent
            text="Seamless deployment to your chosen hosting platform. We handle all technical setup and ensure zero downtime during launch."
            imageSrc={deployment}
            list={[
                "Production deployment",
                "Hosting & environment setup",
            ]}
        />
    }
    ,
    {
        title: "Support & Maintenance",
        content: <PhaseContent
            text="Ongoing monitoring, updates, and technical support. We keep your site secure, fast, and running smoothly."
            imageSrc={support}
            list={[
                "Security & uptime monitoring",
                "Updates & improvements",
                "Technical support",
            ]}
        />
    }
    ,
];
const features = [
    { icon: <IconCode />, title: "Custom Development", description: "Tailored solutions built with React, Next.js, and modern frameworks." },
    { icon: <IconDeviceMobile />, title: "Responsive Design", description: "Seamless experience across all devices and screen sizes." },
    { icon: <IconDeviceIpadBolt />, title: "High Performance", description: "Optimized code and assets for lightning-fast loading times." },
    { icon: <IconShieldCheck />, title: "Secure & Scalable", description: "Enterprise-grade security and infrastructure that grows with you." },
    { icon: <IconWorld />, title: "SEO Optimized", description: "Built-in SEO best practices for maximum online visibility." },
    { icon: <IconArrowRight />, title: "Ongoing Support", description: "Continuous maintenance, updates, and technical support." },
];

const customwebDevelopmentPage = () => {
    const left = (
        <Left
            heading='Custom websites and web applications built with cutting-edge technology and modern best practices.'
            subHeading='We create stunning, high-performing web applications that drive business results. From concept to launch, we handle every aspect of your digital presence.' />

    )
    const right = (
        <Right
            icon={<icons.digitalSolutions.customwebDevelopment.icon />}
        />
    )



    useEffect(() => {
        document.title = "Custom Web Development | Acurve"
    }, [])



    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Custom Web Development' leftSection={left} rightSection={right}
                icon={<icons.digitalSolutions.customwebDevelopment.icon />} />
            <Section className='overflow-visible' id='process'>
                <Container className='relative'>

                    <SectionHeader heading='Our Web-development Process' />

                    <Timeline data={processStepsList} />
                </Container>
            </Section>
            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology we use for Web Development' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>
            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Web-development?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default customwebDevelopmentPage

