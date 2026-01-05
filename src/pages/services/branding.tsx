import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconArrowRight, IconBrandAdobe, IconBrandPagekit, IconBulb, IconColorSwatch, IconEye, IconPalette, IconStar, IconTypography, IconWorldWww } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import StaggeredLayout from '@/components/shared/staggered-layout';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const BrandingPage = () => {
    const processStepsList = [
        { number: 1, title: "Brand Discovery", description: "Deep dive into your business values, target audience, and competitive landscape. We uncover what makes your brand unique and authentic." },
        { number: 2, title: "Strategy Development", description: "Define your brand positioning, messaging framework, and visual direction. We create a strategic foundation that guides all creative decisions." },
        { number: 3, title: "Visual Identity Design", description: "Craft your logo, color palette, typography, and visual elements. Every design choice reinforces your brand story and values." },
        { number: 4, title: "Brand Guidelines", description: "Comprehensive documentation on logo usage, colors, fonts, and tone of voice. Ensures consistency across all touchpoints." },
        { number: 5, title: "Collateral Design", description: "Business cards, letterheads, presentations, and marketing materials. Professional assets that bring your brand to life." },
        { number: 6, title: "Brand Launch Support", description: "Guidance on rolling out your new brand identity. We help you make a powerful first impression in the market." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Build a brand identity that captures hearts, minds, and market share.
                </h3>
                <p className='text-foreground/70'>
                    Your brand is more than a logo—it's the emotion people feel when they think of your business. We craft compelling brand identities that differentiate you from competitors and create lasting connections with your audience.
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
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="Brand Identity Design" 
            />
        </div>
    )

    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "techstack",
        icon: <IconBrandAdobe className="text-purple-700" />
    }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconEye className="text-blue-400" />
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
                    <SectionHeader heading='Our Brand Identity Development Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Brand identity development process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Design Tools We Use' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Branding Services?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default BrandingPage