import SectionHeader from '@/components/shared/SectionHeader';

import { IconBrush, IconLayout,  IconPhoto, IconPresentation, IconPrinter,  IconTemplate } from '@tabler/icons-react';
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

import phase1 from "@/assets/graphic-design/phase1.webp"
import phase2 from "@/assets/graphic-design/phase2.webp"
import phase3 from "@/assets/graphic-design/phase3.webp"
import phase4 from "@/assets/graphic-design/phase4.webp"
import phase5 from "@/assets/graphic-design/phase5.webp"
import phase6 from "@/assets/graphic-design/phase6.webp"
import { techStackList } from '@/constants/techstack/graphic-design';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const GraphicDesignPage = () => {
    const processStepsList = [
    {
        title: "Creative Brief",
        content: (
            <PhaseContent
                text="Understand your brand, target audience, and project goals. We gather inspiration, references, and define the creative direction together."
                imageSrc={phase1}
                list={[
                    "Brand personality & tone definition",
                    "Target audience and use-case analysis",
                    "Design goals & success criteria",
                    "Visual references & inspiration",
                    "Timeline and deliverables alignment",
                ]}
            />
        )
    },
    {
        title: "Concept Development",
        content: (
            <PhaseContent
                text="Create multiple design concepts exploring different visual approaches. Present mood boards, sketches, and initial ideas for your feedback."
                imageSrc={phase2}
                list={[
                    "Multiple creative directions",
                    "Mood boards & style exploration",
                    "Layout and composition ideas",
                    "Color and typography options",
                    "Initial visual mockups",
                ]}
            />
        )
    },
    {
        title: "Design Refinement",
        content: (
            <PhaseContent
                text="Refine the chosen concept with your input. Perfect colors, typography, layouts, and every visual detail until it's just right."
                imageSrc={phase3}
                list={[
                    "Color palette finalization",
                    "Typography refinement",
                    "Spacing, alignment & hierarchy",
                    "Visual consistency checks",
                    "Detail-level enhancements",
                ]}
            />
        )
    },
    {
        title: "Revisions & Approval",
        content: (
            <PhaseContent
                text="Two rounds of revisions included to ensure complete satisfaction. We iterate until the design exceeds your expectations."
                imageSrc={phase4}
                list={[
                    "Structured feedback review",
                    "Two revision rounds included",
                    "Fine-tuning visual details",
                    "Final design adjustments",
                    "Client approval & sign-off",
                ]}
            />
        )
    },
    {
        title: "File Preparation",
        content: (
            <PhaseContent
                text="Prepare all file formats for your needs—print-ready PDFs, web-optimized PNGs, editable source files, and more."
                imageSrc={phase5}
                list={[
                    "Print-ready files (PDF, CMYK)",
                    "Web-optimized assets (PNG, JPG, SVG)",
                    "Editable source files (Figma / AI / PSD)",
                    "Multiple sizes & format exports",
                    "Organized asset structure",
                ]}
            />
        )
    },
    {
        title: "Delivery & Support",
        content: (
            <PhaseContent
                text="Deliver organized files with usage guidelines. Available for future updates, adaptations, and additional design needs."
                imageSrc={phase6}
                list={[
                    "Clean and organized file delivery",
                    "Usage & export guidelines",
                    "Brand consistency notes",
                    "Support for minor tweaks",
                    "Future design adaptations",
                ]}
            />
        )
    },
];


    const features = [
        { icon: <IconBrush />, title: "Logo & Brand Identity", description: "Memorable logos and complete visual identity systems that make you stand out." },
        { icon: <IconPrinter />, title: "Print Design", description: "Business cards, brochures, flyers, posters, and packaging that leave a lasting impression." },
        { icon: <IconLayout />, title: "Marketing Materials", description: "Eye-catching social media graphics, banners, ads, and promotional designs." },
        { icon: <IconPresentation />, title: "Presentation Design", description: "Professional pitch decks and presentations that captivate and persuade." },
        { icon: <IconPhoto />, title: "Photo Editing & Retouching", description: "Professional image editing, color correction, and manipulation for perfect visuals." },
        { icon: <IconTemplate />, title: "Custom Illustrations", description: "Unique illustrations and iconography tailored to your brand and message." },
    ];

    const left = (
        <Left
            heading='Beautiful designs that communicate your message and captivate your audience.'
            subHeading='Great design is invisible—it just works. We create stunning visual designs that communicate your message clearly, strengthen your brand, and leave lasting impressions. From logos to marketing materials, we make you look exceptional.'
        />
    )

    const right = (
        <Right icon={<icons.creativity.graphicDesign.icon />} />
    )



    useEffect(() => {
        document.title = "Graphic Design | Acurve"
    }, [])


    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Graphic Design' leftSection={left} rightSection={right} icon={<icons.creativity.graphicDesign.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Graphic Design Process'  />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Design Tools We Master' />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Graphic Design?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default GraphicDesignPage