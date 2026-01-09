import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconBadge, IconBrush, IconColorSwatch, IconEye, IconPalette, IconPencil, IconStar, IconVectorTriangle } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';

const LogoDesignPage = () => {
    const processStepsList = [
        { number: 1, title: "Brand Discovery", description: "Deep dive into your business values, target market, and competitive landscape. We uncover what makes you unique and how to express it visually." },
        { number: 2, title: "Concept Sketching", description: "Hand-sketch multiple logo concepts exploring different symbolic and typographic directions. Raw ideas that capture your brand essence." },
        { number: 3, title: "Digital Design", description: "Refine top concepts into polished digital designs. We explore color variations, typography options, and different visual treatments." },
        { number: 4, title: "Presentation & Feedback", description: "Present 3-5 strong logo concepts with rationale behind each design. Gather your feedback to identify the winning direction." },
        { number: 5, title: "Refinement & Finalization", description: "Perfect every detail of your chosen logo—spacing, proportions, colors. Create variations for different use cases and backgrounds." },
        { number: 6, title: "Delivery & Guidelines", description: "Deliver vector files, color variations, and usage guidelines. Your logo ready for business cards, websites, signage, and more." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Your logo is your first impression. Make it unforgettable.
                </h3>
                <p className='text-foreground/70'>
                    A great logo is timeless, memorable, and tells your brand story at a glance. We craft custom logos that stand out in crowded markets, resonate with your audience, and grow with your business for years to come.
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
                src="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="Logo Design Services"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "tools",
    //     icon: <IconBrandAdobe className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconBrush className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    useEffect(() => {
            document.title = "Logo Design | Acurve"
        }, [])
    return (
        <div>
            <MainSection text='Logo Design' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Logo Design Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Logo design process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Design Software We Use' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Logo Design?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default LogoDesignPage