import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconBrandGoogle, IconChartBar, IconMail, IconSpeakerphone, IconSeo, IconSocial, IconStar, IconTrendingUp } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const DigitalMarketingPage = () => {
    const processStepsList = [
        { number: 1, title: "Market Research & Audit", description: "Analyze your target audience, competitors, and current digital presence. Identify gaps and opportunities for growth across all channels." },
        { number: 2, title: "Strategy Development", description: "Create a comprehensive marketing strategy aligned with your business goals. Define KPIs, budget allocation, and channel priorities." },
        { number: 3, title: "Campaign Setup", description: "Set up tracking, analytics, and advertising accounts. Create compelling ad creatives, landing pages, and email campaigns." },
        { number: 4, title: "Content Creation", description: "Develop engaging content—blog posts, social media, videos, and graphics. SEO-optimized content that resonates with your audience." },
        { number: 5, title: "Launch & Optimization", description: "Roll out campaigns across Google Ads, social media, and email. Continuous A/B testing and optimization for better performance." },
        { number: 6, title: "Analytics & Reporting", description: "Monthly reports with actionable insights and ROI tracking. Data-driven recommendations to scale what works and cut what doesn't." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Attract, engage, and convert your ideal customers with data-driven digital marketing.
                </h3>
                <p className='text-foreground/70'>
                    Stop guessing what works. We create comprehensive digital marketing strategies that drive measurable results—from SEO and content marketing to paid ads and social media campaigns. Get more leads, more sales, and better ROI.
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
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=2074&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="Digital Marketing Strategy"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "channels",
    //     icon: <IconTarget className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconTrendingUp className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    return (
        <div>
            <MainSection text='Digital Marketing' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Digital Marketing Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop"
                        imageAlt="Digital marketing strategy process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Marketing Channels & Tools' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Digital Marketing?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default DigitalMarketingPage