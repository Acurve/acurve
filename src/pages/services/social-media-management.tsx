import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconArrowRight, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconCalendar, IconChartBar, IconHeart, IconMessage, IconPhoto, IconSocial, IconStar, IconUsers } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const SocialMediaManagementPage = () => {
    const processStepsList = [
        { number: 1, title: "Social Media Audit", description: "Analyze your current social presence, audience demographics, and competitor strategies. Identify what's working and untapped opportunities." },
        { number: 2, title: "Strategy Development", description: "Create a comprehensive social media strategy aligned with your business goals. Define content pillars, posting frequency, and engagement tactics." },
        { number: 3, title: "Content Calendar Planning", description: "Plan and schedule content 30 days in advance. Mix promotional, educational, and entertaining posts for maximum engagement." },
        { number: 4, title: "Content Creation", description: "Design eye-catching graphics, write compelling captions, and create videos. Professional content that stops the scroll and drives action." },
        { number: 5, title: "Community Management", description: "Monitor comments, messages, and mentions daily. Engage with your audience authentically and handle customer inquiries promptly." },
        { number: 6, title: "Analytics & Optimization", description: "Track performance metrics and provide monthly reports. Continuously optimize strategy based on what content performs best." },
    ];

    const features = [
        { icon: <IconCalendar />, title: "Content Calendar Management", description: "Strategic planning and scheduling of posts across all your social platforms." },
        { icon: <IconPhoto />, title: "Graphic Design & Videos", description: "Professional visuals, carousels, reels, and stories that capture attention." },
        { icon: <IconMessage />, title: "Community Engagement", description: "Daily monitoring and responses to comments, messages, and mentions." },
        { icon: <IconChartBar />, title: "Performance Analytics", description: "Detailed monthly reports on reach, engagement, and follower growth." },
        { icon: <IconHeart />, title: "Audience Growth", description: "Strategic tactics to grow your follower base with targeted, engaged users." },
        { icon: <IconUsers />, title: "Influencer Collaborations", description: "Connect with relevant influencers and manage partnership campaigns." },
    ];

    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Build an engaged community that loves your brand and drives real business results.
                </h3>
                <p className='text-foreground/70'>
                    Stop posting randomly and start strategically. We handle everything—content creation, scheduling, community management, and analytics—so you can focus on running your business while your social presence grows.
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="Social Media Management" 
            />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "platforms",
        icon: <IconSocial className="text-purple-700" />
    }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconBrandInstagram className="text-blue-400" />
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
                    <SectionHeader heading='Our Social Media Management Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=2074&auto=format&fit=crop"
                        imageAlt="Social media management process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Platforms We Manage' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Social Media Management?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default SocialMediaManagementPage