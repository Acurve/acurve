import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconArrowRight, IconBrandFigma, IconBrush, IconFileTypography, IconLayout, IconPalette, IconPhoto, IconPresentation, IconPrinter, IconStar, IconTemplate } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const GraphicDesignPage = () => {
    const processStepsList = [
        { number: 1, title: "Creative Brief", description: "Understand your brand, target audience, and project goals. We gather inspiration, references, and define the creative direction together." },
        { number: 2, title: "Concept Development", description: "Create multiple design concepts exploring different visual approaches. Present mood boards, sketches, and initial ideas for your feedback." },
        { number: 3, title: "Design Refinement", description: "Refine the chosen concept with your input. Perfect colors, typography, layouts, and every visual detail until it's just right." },
        { number: 4, title: "Revisions & Approval", description: "Two rounds of revisions included to ensure complete satisfaction. We iterate until the design exceeds your expectations." },
        { number: 5, title: "File Preparation", description: "Prepare all file formats for your needs—print-ready PDFs, web-optimized PNGs, editable source files, and more." },
        { number: 6, title: "Delivery & Support", description: "Deliver organized files with usage guidelines. Available for future updates, adaptations, and additional design needs." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Beautiful designs that communicate your message and captivate your audience.
                </h3>
                <p className='text-foreground/70'>
                    Great design is invisible—it just works. We create stunning visual designs that communicate your message clearly, strengthen your brand, and leave lasting impressions. From logos to marketing materials, we make you look exceptional.
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="Graphic Design Services" 
            />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "tools",
        icon: <IconBrandFigma className="text-purple-700" />
    }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconPalette className="text-blue-400" />
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
                    <SectionHeader heading='Our Graphic Design Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop"
                        imageAlt="Graphic design process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Design Tools We Master' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Graphic Design?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default GraphicDesignPage