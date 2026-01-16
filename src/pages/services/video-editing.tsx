import SectionHeader from '@/components/shared/SectionHeader';

import { IconDeviceTv, IconMovie, IconMusic, IconScissors, IconSparkles, IconWand } from '@tabler/icons-react';
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

import phase1 from "@/assets/video-editing/phase1.webp"
import phase2 from "@/assets/video-editing/phase2.webp"
import phase3 from "@/assets/video-editing/phase3.webp"
import phase4 from "@/assets/video-editing/phase4.webp"
import phase5 from "@/assets/video-editing/phase5.webp"
import phase6 from "@/assets/video-editing/phase6.webp"
import { techStackList } from '@/constants/techstack/video-editing';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const VideoEditingPage = () => {
    const processStepsList = [
        {
            title: "Creative Brief & Review",
            content: (
                <PhaseContent
                    text="Understand your video goals, target audience, and desired style. Review raw footage and discuss creative direction together."
                    imageSrc={phase1}
                    list={[
                        "Define video objectives clearly",
                        "Identify target audience and their preferences",
                        "Discuss desired style and tone",
                        "Review raw footage together",
                        "Align on creative direction"
                    ]}
                />
            )
        },
        {
            title: "Initial Edit & Assembly",
            content: (
                <PhaseContent
                    text="Organize footage, create initial sequence, and establish pacing. Build the story structure with rough cuts and scene selection."
                    imageSrc={phase2}
                    list={[
                        "Sort and label all footage",
                        "Create an initial sequence of scenes",
                        "Establish pacing and timing",
                        "Build rough story structure",
                        "Select best takes for each scene"
                    ]}
                />
            )
        },
        {
            title: "Advanced Editing",
            content: (
                <PhaseContent
                    text="Fine-tune timing, add transitions, color correction, and audio mixing. Layer in music, sound effects, and voiceover work."
                    imageSrc={phase3}
                    list={[
                        "Adjust clip timing for smooth flow",
                        "Add transitions between scenes",
                        "Apply color correction and grading",
                        "Mix audio levels and enhance sound",
                        "Incorporate music, effects, and voiceover"
                    ]}
                />
            )
        },
        {
            title: "Motion Graphics & Effects",
            content: (
                <PhaseContent
                    text="Add animated titles, lower thirds, logos, and visual effects. Create custom graphics and overlays that enhance your message."
                    imageSrc={phase4}
                    list={[
                        "Design animated titles and text",
                        "Create lower thirds and logos",
                        "Add visual effects and overlays",
                        "Customize graphics to match brand",
                        "Integrate animations seamlessly into video"
                    ]}
                />
            )
        },
        {
            title: "Review & Revisions",
            content: (
                <PhaseContent
                    text="Present the edited video for your feedback. Two rounds of revisions included to perfect every detail."
                    imageSrc={phase5}
                    list={[
                        "Present initial edit for feedback",
                        "Implement first round of revisions",
                        "Implement second round of revisions",
                        "Fine-tune all details for perfection",
                        "Ensure final video meets expectations"
                    ]}
                />
            )
        },
        {
            title: "Final Delivery",
            content: (
                <PhaseContent
                    text="Export optimized versions for different platforms—YouTube, Instagram, Facebook, website. Deliver source files if needed."
                    imageSrc={phase6}
                    list={[
                        "Export video in platform-specific formats",
                        "Optimize resolution and file size",
                        "Prepare versions for YouTube, Instagram, Facebook, website",
                        "Deliver original source files if requested",
                        "Ensure quality and compatibility across devices"
                    ]}
                />
            )
        },
    ];


    const features = [
        { icon: <IconScissors />, title: "Professional Cutting", description: "Precise cuts, seamless transitions, and perfect pacing that keeps viewers engaged." },
        { icon: <IconWand />, title: "Color Grading", description: "Professional color correction and grading to create cinematic, polished visuals." },
        { icon: <IconMusic />, title: "Audio Enhancement", description: "Crystal-clear audio mixing, noise reduction, and music/sound effects integration." },
        { icon: <IconSparkles />, title: "Motion Graphics", description: "Custom animated titles, lower thirds, logos, and eye-catching visual effects." },
        { icon: <IconDeviceTv />, title: "Multi-Platform Optimization", description: "Export in formats optimized for YouTube, Instagram, TikTok, Facebook, and web." },
        { icon: <IconMovie />, title: "Subtitle & Captions", description: "Professional subtitles and closed captions for accessibility and social media." },
    ];

    const left = (
        <Left
            heading='Transform raw footage into compelling stories that captivate and convert.'
            subHeading='Great video editing makes the difference between content people scroll past and content they watch, share, and remember. We craft polished, professional videos—from corporate promos to social media content—that drive results.'
        />
    )

    const right = (
        <Right icon={<icons.creativity.videoEditing.icon />} />
    )


    useEffect(() => {
        document.title = "Video Editing | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)

    return (
        <div>
            <MainSection text='Video Editing' leftSection={left} rightSection={right} icon={<icons.creativity.videoEditing.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Video Editing Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Video Editing Software We Use' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Video Editing?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default VideoEditingPage