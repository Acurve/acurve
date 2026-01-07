import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconDeviceTv, IconMovie, IconMusic, IconPlayerPlay, IconScissors, IconSparkles, IconStar, IconWand } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const VideoEditingPage = () => {
    const processStepsList = [
        { number: 1, title: "Creative Brief & Review", description: "Understand your video goals, target audience, and desired style. Review raw footage and discuss creative direction together." },
        { number: 2, title: "Initial Edit & Assembly", description: "Organize footage, create initial sequence, and establish pacing. Build the story structure with rough cuts and scene selection." },
        { number: 3, title: "Advanced Editing", description: "Fine-tune timing, add transitions, color correction, and audio mixing. Layer in music, sound effects, and voiceover work." },
        { number: 4, title: "Motion Graphics & Effects", description: "Add animated titles, lower thirds, logos, and visual effects. Create custom graphics and overlays that enhance your message." },
        { number: 5, title: "Review & Revisions", description: "Present the edited video for your feedback. Two rounds of revisions included to perfect every detail." },
        { number: 6, title: "Final Delivery", description: "Export optimized versions for different platforms—YouTube, Instagram, Facebook, website. Deliver source files if needed." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Transform raw footage into compelling stories that captivate and convert.
                </h3>
                <p className='text-foreground/70'>
                    Great video editing makes the difference between content people scroll past and content they watch, share, and remember. We craft polished, professional videos—from corporate promos to social media content—that drive results.
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
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="Video Editing Services"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "software",
    //     icon: <IconVideo className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconPlayerPlay className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    return (
        <div>
            <MainSection text='Video Editing' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Video Editing Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2062&auto=format&fit=crop"
                        imageAlt="Video editing process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Video Editing Software We Use' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Video Editing?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default VideoEditingPage