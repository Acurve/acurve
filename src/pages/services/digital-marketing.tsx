import SectionHeader from '@/components/shared/SectionHeader';

import { IconBrandGoogle, IconChartBar, IconMail, IconSpeakerphone, IconSeo, IconSocial } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import Right from './RightSection';
import Left from './LeftSection';
import PhaseContent from '@/components/shared/PhaseContent';
import { Timeline } from '@/components/ui/timeline';

import phase1 from "@/assets/digital-marketing/phase1.webp"
import phase2 from "@/assets/digital-marketing/phase2.webp"
import phase3 from "@/assets/digital-marketing/phase3.webp"
import phase4 from "@/assets/digital-marketing/phase4.webp"
import phase5 from "@/assets/digital-marketing/phase5.webp"
import phase6 from "@/assets/digital-marketing/phase6.webp"
import TechContainer from './TechContainer';
import { techStackList } from '@/constants/techstack/digital-marketing';
import StaggeredLayout from '@/components/shared/staggered-layout';

const DigitalMarketingPage = () => {
    const processStepsList = [
        {
            title: "Market Research & Audit",
            content: (
                <PhaseContent
                    text="Analyze your target audience, competitors, and current digital presence. Identify gaps and opportunities for growth across all channels."
                    imageSrc={phase1}
                    list={[
                        "Audience & persona research",
                        "Competitor & market analysis",
                        "Current channel performance audit",
                        "Opportunity & gap identification",
                    ]}
                />
            )
        }
        ,
        {
            title: "Strategy Development",
            content: (
                <PhaseContent
                    text="Create a comprehensive marketing strategy aligned with your business goals. Define KPIs, budget allocation, and channel priorities."
                    imageSrc={phase2}
                    list={[
                        "Goal setting & KPI definition",
                        "Channel & budget planning",
                        "Campaign roadmap creation",
                    ]}
                />
            )
        }
        ,
        {
            title: "Campaign Setup",
            content: (
                <PhaseContent
                    text="Set up tracking, analytics, and advertising accounts. Create compelling ad creatives, landing pages, and email campaigns."
                    imageSrc={phase3}
                    list={[
                        "Analytics & conversion tracking setup",
                        "Ad account configuration",
                        "Landing page & funnel setup",
                        "Email & automation workflows",
                    ]}
                />
            )
        }
        ,
        {
            title: "Content Creation",
            content: (
                <PhaseContent
                    text="Develop engaging content—blog posts, social media, videos, and graphics. SEO-optimized content that resonates with your audience."
                    imageSrc={phase4}
                    list={[
                        "SEO-focused content planning",
                        "Social & campaign creatives",
                        "Visual & video asset creation",
                    ]}
                />
            )
        }
        ,
        {
            title: "Launch & Optimization",
            content: (
                <PhaseContent
                    text="Roll out campaigns across Google Ads, social media, and email. Continuous A/B testing and optimization for better performance."
                    imageSrc={phase5}
                    list={[
                        "Multi-channel campaign launch",
                        "A/B testing & optimization",
                        "Budget & performance tuning",
                    ]}
                />
            )
        }
        ,
        {
            title: "Analytics & Reporting",
            content: (
                <PhaseContent
                    text="Monthly reports with actionable insights and ROI tracking. Data-driven recommendations to scale what works and cut what doesn't."
                    imageSrc={phase6}
                    list={[
                        "Performance & ROI reporting",
                        "Actionable insights & recommendations",
                        "Scaling & optimization planning",
                    ]}
                />
            )
        }
        ,
    ];

    const features = [
        { icon: <IconBrandGoogle />, title: "Search Engine Marketing", description: "Google Ads and PPC campaigns that drive targeted traffic and conversions." },
        { icon: <IconSocial />, title: "Social Media Marketing", description: "Engaging campaigns on Facebook, Instagram, LinkedIn, and Twitter that build community." },
        { icon: <IconSeo />, title: "Search Engine Optimization", description: "Technical and content SEO to rank higher and attract organic traffic." },
        { icon: <IconMail />, title: "Email Marketing", description: "Automated email campaigns with personalization that nurture leads and drive sales." },
        { icon: <IconSpeakerphone />, title: "Content Marketing", description: "Valuable blog posts, videos, and resources that position you as an industry leader." },
        { icon: <IconChartBar />, title: "Analytics & Conversion Optimization", description: "Track every click and optimize for maximum ROI with data-driven insights." },
    ];

    const left = (
        <Left
            heading='Attract, engage, and convert your ideal customers with data-driven digital marketing.'
            subHeading='Stop guessing what works. We create comprehensive digital marketing strategies that drive measurable results—from SEO and content marketing to paid ads and social media campaigns. Get more leads, more sales, and better ROI.'

        />

    )

    const right = (
        <Right icon={<icons.digitalPresence.digitalMarketing.icon />} />
    )


    useEffect(() => {
        document.title = "Digital Marketing | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (


        <div>
            <MainSection text='Digital Marketing' leftSection={left} rightSection={right} icon={<icons.digitalPresence.digitalMarketing.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Digital Marketing Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Marketing Channels & Tools' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Digital Marketing?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default DigitalMarketingPage