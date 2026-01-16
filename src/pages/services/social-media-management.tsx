import SectionHeader from '@/components/shared/SectionHeader';

import { IconCalendar, IconChartBar, IconHeart, IconMessage, IconPhoto, IconUsers } from '@tabler/icons-react';
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

import phase1 from "@/assets/social-media-management/phase1.webp"
import phase2 from "@/assets/social-media-management/phase2.webp"
import phase3 from "@/assets/social-media-management/phase3.webp"
import phase4 from "@/assets/social-media-management/phase4.webp"
import phase5 from "@/assets/social-media-management/phase5.webp"
import phase6 from "@/assets/social-media-management/phase6.webp"
import { techStackList } from '@/constants/techstack/social-media-management';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';


const SocialMediaManagementPage = () => {
    const processStepsList = [
        {
            title: "Social Media Audit",
            content: (
                <PhaseContent
                    text="Analyze your current social presence, audience demographics, and competitor strategies. Identify what's working and untapped opportunities."
                    imageSrc={phase1}
                    list={[
                        "Profile & content performance audit",
                        "Audience demographics & behavior analysis",
                        "Competitor benchmarking",
                        "Platform-wise opportunity identification",
                        "Engagement & reach gap analysis",
                    ]}
                />
            )
        },
        {
            title: "Strategy Development",
            content: (
                <PhaseContent
                    text="Create a comprehensive social media strategy aligned with your business goals. Define content pillars, posting frequency, and engagement tactics."
                    imageSrc={phase2}
                    list={[
                        "Goal & KPI definition",
                        "Content pillars & themes",
                        "Platform-specific strategy",
                        "Posting frequency & timing",
                        "Engagement & growth tactics",
                    ]}
                />
            )
        },
        {
            title: "Content Calendar Planning",
            content: (
                <PhaseContent
                    text="Plan and schedule content 30 days in advance. Mix promotional, educational, and entertaining posts for maximum engagement."
                    imageSrc={phase3}
                    list={[
                        "Monthly content calendar",
                        "Campaign & event planning",
                        "Post format & platform mapping",
                        "Hashtag & caption planning",
                        "Approval & scheduling workflow",
                    ]}
                />
            )
        },
        {
            title: "Content Creation",
            content: (
                <PhaseContent
                    text="Design eye-catching graphics, write compelling captions, and create videos. Professional content that stops the scroll and drives action."
                    imageSrc={phase4}
                    list={[
                        "Branded graphic design",
                        "Short-form video & reels",
                        "Copywriting & caption crafting",
                        "Story & carousel creation",
                        "Platform-optimized content formats",
                    ]}
                />
            )
        },
        {
            title: "Community Management",
            content: (
                <PhaseContent
                    text="Monitor comments, messages, and mentions daily. Engage with your audience authentically and handle customer inquiries promptly."
                    imageSrc={phase5}
                    list={[
                        "Daily comment & DM monitoring",
                        "Audience engagement & replies",
                        "Brand voice & tone consistency",
                        "Query escalation handling",
                        "Reputation & sentiment management",
                    ]}
                />
            )
        },
        {
            title: "Analytics & Optimization",
            content: (
                <PhaseContent
                    text="Track performance metrics and provide monthly reports. Continuously optimize strategy based on what content performs best."
                    imageSrc={phase6}
                    list={[
                        "Engagement & reach tracking",
                        "Content performance analysis",
                        "Follower growth monitoring",
                        "Monthly performance reports",
                        "Strategy refinement & optimization",
                    ]}
                />
            )
        },
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
        <Left
            heading='Build an engaged community that loves your brand and drives real business results.'
            subHeading='Stop posting randomly and start strategically. We handle everything—content creation, scheduling, community management, and analytics—so you can focus on running your business while your social presence grows.'
        />

    )

    const right = (
        <Right icon={<icons.digitalPresence.socialMediaManagement.icon />} />
    )



    useEffect(() => {
        document.title = "Social Media Management | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)

    return (
        <div>
            <MainSection text='Social Media Management' leftSection={left} rightSection={right} icon={<icons.digitalPresence.socialMediaManagement.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Social Media Management Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Tools we use' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Social Media Management?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default SocialMediaManagementPage