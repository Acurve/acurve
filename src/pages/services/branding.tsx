import SectionHeader from '@/components/shared/SectionHeader';

import { IconBrandPagekit, IconBulb, IconColorSwatch,  IconPalette,  IconTypography, IconWorldWww } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import Features from '@/components/shared/features';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';
import { icons } from '@/constants/icons';
import Right from './RightSection';
import Left from './LeftSection';
import { Timeline } from '@/components/ui/timeline';
import PhaseContent from '@/components/shared/PhaseContent';

import phase1 from "@/assets/branding/phase1.webp"
import phase2 from "@/assets/branding/phase2.webp"
import phase3 from "@/assets/branding/phase3.webp"
import phase4 from "@/assets/branding/phase4.webp"
import phase5 from "@/assets/branding/phase5.webp"
import phase6 from "@/assets/branding/phase6.webp"
import { techStackList } from '@/constants/techstack/branding';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const BrandingPage = () => {
    const processStepsList = [
        {
            title: "Brand Discovery",
            content: (
                <PhaseContent
                    text="Deep dive into your business values, target audience, and competitive landscape. We uncover what makes your brand unique and authentic."
                    imageSrc={phase1}
                    list={[
                        "Brand vision & values alignment",
                        "Target audience research",
                        "Market & competitor analysis",
                        "Brand personality definition",
                    ]}
                />
            )
        }
        ,
        {
            title: "Strategy Development",
            content: (
                <PhaseContent
                    text="Define your brand positioning, messaging framework, and visual direction. We create a strategic foundation that guides all creative decisions."
                    imageSrc={phase2}
                    list={[
                        "Brand positioning & differentiation",
                        "Messaging & tone of voice",
                        "Creative direction planning",
                    ]}
                />
            )
        }
        ,
        {
            title: "Visual Identity Design",
            content: (
                <PhaseContent
                    text="Craft your logo, color palette, typography, and visual elements. Every design choice reinforces your brand story and values."
                    imageSrc={phase3}
                    list={[
                        "Logo design & variations",
                        "Color palette & typography",
                        "Iconography & visual elements",
                        "Brand imagery style",
                    ]}
                />
            )
        }
        ,
        {
            title: "Brand Guidelines",
            content: (
                <PhaseContent
                    text="Comprehensive documentation on logo usage, colors, fonts, and tone of voice. Ensures consistency across all touchpoints."
                    imageSrc={phase4}
                    list={[
                        "Logo usage & spacing rules",
                        "Typography & color guidelines",
                        "Voice & communication guidelines",
                    ]}
                />
            )
        }
        ,
        {
            title: "Collateral Design",
            content: (
                <PhaseContent
                    text="Business cards, letterheads, presentations, and marketing materials. Professional assets that bring your brand to life."
                    imageSrc={phase5}
                    list={[
                        "Business stationery design",
                        "Marketing & presentation templates",
                        "Digital & print-ready assets",
                    ]}
                />
            )
        }
        ,
        {
            title: "Brand Launch Support",
            content: (
                <PhaseContent
                    text="Guidance on rolling out your new brand identity. We help you make a powerful first impression in the market."
                    imageSrc={phase6}
                    list={[
                        "Brand rollout planning",
                        "Launch asset support",
                        "Post-launch guidance",
                    ]}
                />
            )
        }
        ,
    ];

    const features = [
        { icon: <IconBulb />, title: "Brand Strategy", description: "Positioning, messaging, and competitive differentiation that resonates with your audience." },
        { icon: <IconPalette />, title: "Logo & Identity Design", description: "Memorable logos and visual systems that tell your brand story at a glance." },
        { icon: <IconColorSwatch />, title: "Color & Typography", description: "Carefully curated color palettes and typefaces that evoke the right emotions." },
        { icon: <IconBrandPagekit />, title: "Brand Guidelines", description: "Detailed standards document ensuring consistent application across all media." },
        { icon: <IconTypography />, title: "Marketing Collateral", description: "Business cards, brochures, presentations, and digital assets that wow." },
        { icon: <IconWorldWww />, title: "Digital Brand Assets", description: "Social media templates, email signatures, and web-ready graphics." },
    ];

    const left = (
        <Left
            heading='Build a brand identity that captures hearts, minds, and market share.'
            subHeading="Your brand is more than a logo—it's the emotion people feel when they think of your business. We craft compelling brand identities that differentiate you from competitors and create lasting connections with your audience."
        />

    )

    const right = (
        <Right icon={<icons.digitalPresence.branding.icon />} />
    )

    useEffect(() => {
        document.title = "Branding | Acurve"
    }, [])
const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Branding'
                leftSection={left} rightSection={right}
                icon={<icons.digitalPresence.branding.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Brand Identity Development Process' />
                    <Timeline data={processStepsList} />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Branding Tools We Use' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Branding Services?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default BrandingPage