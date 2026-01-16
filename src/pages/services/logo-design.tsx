import SectionHeader from '@/components/shared/SectionHeader';

import { IconBadge,  IconColorSwatch, IconEye, IconPalette, IconPencil,  IconVectorTriangle } from '@tabler/icons-react';
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


import phase1 from "@/assets/logo-design/phase1.webp"
import phase2 from "@/assets/logo-design/phase2.webp"
import phase3 from "@/assets/logo-design/phase3.webp"
import phase4 from "@/assets/logo-design/phase4.webp"
import phase5 from "@/assets/logo-design/phase5.webp"
import phase6 from "@/assets/logo-design/phase6.webp"
import { techStackList } from '@/constants/techstack/logo-design';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const LogoDesignPage = () => {
    const processStepsList = [
    {
        title: "Brand Discovery",
        content: (
            <PhaseContent
                text="Deep dive into your business values, target market, and competitive landscape. We uncover what makes you unique and how to express it visually."
                imageSrc={phase1}
                list={[
                    "Brand values & vision alignment",
                    "Target audience analysis",
                    "Competitor logo research",
                    "Brand personality definition",
                    "Design goals & expectations",
                ]}
            />
        )
    },
    {
        title: "Concept Sketching",
        content: (
            <PhaseContent
                text="Hand-sketch multiple logo concepts exploring different symbolic and typographic directions. Raw ideas that capture your brand essence."
                imageSrc={phase2}
                list={[
                    "Symbol & icon exploration",
                    "Typography-based concepts",
                    "Multiple rough sketch options",
                    "Abstract & literal approaches",
                    "Concept shortlisting",
                ]}
            />
        )
    },
    {
        title: "Digital Design",
        content: (
            <PhaseContent
                text="Refine top concepts into polished digital designs. We explore color variations, typography options, and different visual treatments."
                imageSrc={phase3}
                list={[
                    "Vector-based logo creation",
                    "Font & typography refinement",
                    "Color palette exploration",
                    "Monochrome & full-color versions",
                    "Scalability & clarity checks",
                ]}
            />
        )
    },
    {
        title: "Presentation & Feedback",
        content: (
            <PhaseContent
                text="Present 3–5 strong logo concepts with rationale behind each design. Gather your feedback to identify the winning direction."
                imageSrc={phase4}
                list={[
                    "Concept presentation with reasoning",
                    "Real-world logo mockups",
                    "Strengths & use-case explanation",
                    "Structured feedback collection",
                    "Direction finalization",
                ]}
            />
        )
    },
    {
        title: "Refinement & Finalization",
        content: (
            <PhaseContent
                text="Perfect every detail of your chosen logo—spacing, proportions, colors. Create variations for different use cases and backgrounds."
                imageSrc={phase5}
                list={[
                    "Spacing & proportion tuning",
                    "Color & contrast optimization",
                    "Light & dark background versions",
                    "Icon-only & text-only variants",
                    "Final quality assurance",
                ]}
            />
        )
    },
    {
        title: "Delivery & Guidelines",
        content: (
            <PhaseContent
                text="Deliver vector files, color variations, and usage guidelines. Your logo ready for business cards, websites, signage, and more."
                imageSrc={phase6}
                list={[
                    "Vector & raster file formats",
                    "Color & typography specifications",
                    "Clear space & sizing rules",
                    "Do’s and don’ts usage guide",
                    "Assets ready for all platforms",
                ]}
            />
        )
    },
];


    const features = [
        { icon: <IconVectorTriangle />, title: "Multiple Concepts", description: "3-5 unique logo concepts to choose from, each crafted with purpose and meaning." },
        { icon: <IconColorSwatch />, title: "Color Variations", description: "Full color, black & white, and reverse versions for versatile applications." },
        { icon: <IconBadge />, title: "Versatile File Formats", description: "Vector files (AI, EPS, SVG) and high-res rasters (PNG, JPG) for any use case." },
        { icon: <IconPencil />, title: "Unlimited Revisions", description: "Refine your chosen concept until it's absolutely perfect—no rush, no limits." },
        { icon: <IconPalette />, title: "Custom Typography", description: "Hand-crafted or carefully selected fonts that complement your brand personality." },
        { icon: <IconEye />, title: "Usage Guidelines", description: "Clear guidelines on spacing, sizing, and proper logo usage across all media." },
    ];

    const left = (

        <Left
            heading='Your logo is your first impression. Make it unforgettable.'
            subHeading='A great logo is timeless, memorable, and tells your brand story at a glance. We craft custom logos that stand out in crowded markets, resonate with your audience, and grow with your business for years to come.'
        />

    )

    const right = (
        <Right icon={<icons.creativity.logoDesign.icon />} />
    )



    useEffect(() => {
        document.title = "Logo Design | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Logo Design' leftSection={left} rightSection={right} icon={<icons.creativity.logoDesign.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Logo Design Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Design Software We Use'  />
                </Container>
                <StaggeredLayout list={techStackListFinal}/>
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Logo Design?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default LogoDesignPage