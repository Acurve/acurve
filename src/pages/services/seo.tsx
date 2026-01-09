import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconChartLine, IconFileText, IconLink, IconReportSearch, IconSearch, IconSeo, IconStar, IconTargetArrow } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';

const SEOPage = () => {
    const processStepsList = [
        { number: 1, title: "SEO Audit & Analysis", description: "Comprehensive analysis of your website's current SEO performance, technical issues, and competitive landscape. Identify quick wins and long-term opportunities." },
        { number: 2, title: "Keyword Research", description: "Deep keyword research to find high-value search terms your customers use. Balance search volume, competition, and buying intent for maximum ROI." },
        { number: 3, title: "Technical SEO Optimization", description: "Fix technical issues—site speed, mobile-friendliness, crawlability, schema markup. Ensure search engines can properly index your content." },
        { number: 4, title: "On-Page Optimization", description: "Optimize titles, meta descriptions, headers, and content structure. Make every page relevant and compelling for both users and search engines." },
        { number: 5, title: "Content Strategy & Creation", description: "Create SEO-optimized content that answers user questions and ranks for target keywords. Blog posts, landing pages, and resource content." },
        { number: 6, title: "Link Building & Monitoring", description: "Build high-quality backlinks from authoritative sites. Continuous monitoring and reporting on rankings, traffic, and conversions." },
    ];

    const features = [
        { icon: <IconSearch />, title: "Keyword Research", description: "Data-driven keyword targeting that captures high-intent search traffic." },
        { icon: <IconFileText />, title: "Technical SEO", description: "Site speed optimization, mobile responsiveness, and proper indexing structure." },
        { icon: <IconSeo />, title: "On-Page Optimization", description: "Meta tags, headers, content structure, and internal linking optimized for rankings." },
        { icon: <IconLink />, title: "Link Building", description: "High-quality backlinks from authoritative domains to boost your authority." },
        { icon: <IconReportSearch />, title: "Content Optimization", description: "SEO-focused content that ranks well and converts visitors into customers." },
        { icon: <IconChartLine />, title: "Analytics & Reporting", description: "Monthly reports tracking rankings, organic traffic, and conversion improvements." },
    ];

    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=2074&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Rank higher on Google. Drive organic traffic that converts.
                </h3>
                <p className='text-foreground/70'>
                    Stop relying on paid ads. Our proven SEO strategies get your website ranking on page one for keywords that matter. More visibility, more traffic, more customers—all without paying for every click.
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
                src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=2074&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="SEO Services"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "tools",
    //     icon: <IconBrandGoogle className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconTargetArrow className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }
    useEffect(() => {
        document.title = "SEO | Acurve"
    }, [])
    return (
        <div>
            <MainSection text='SEO' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our SEO Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="SEO optimization process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='SEO Tools & Analytics' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in SEO Services?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default SEOPage