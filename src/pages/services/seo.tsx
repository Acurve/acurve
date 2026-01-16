import SectionHeader from '@/components/shared/SectionHeader';

import { IconChartLine, IconFileText, IconLink, IconReportSearch, IconSearch, IconSeo } from '@tabler/icons-react';
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


import phase1 from "@/assets/seo/phase1.webp"
import phase2 from "@/assets/seo/phase2.webp"
import phase3 from "@/assets/seo/phase3.webp"
import phase4 from "@/assets/seo/phase4.webp"
import phase5 from "@/assets/seo/phase5.webp"
import phase6 from "@/assets/seo/phase6.webp"
import { techStackList } from '@/constants/techstack/seo';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const SEOPage = () => {
    const processStepsList = [
    {
        title: "SEO Audit & Analysis",
        content: (
            <PhaseContent
                text="Comprehensive analysis of your website's current SEO performance, technical issues, and competitive landscape. Identify quick wins and long-term opportunities."
                imageSrc={phase1}
                list={[
                    "Technical SEO audit",
                    "Site health & performance analysis",
                    "Competitor SEO benchmarking",
                    "Indexing & crawlability review",
                    "Quick-win opportunity identification",
                ]}
            />
        )
    },
    {
        title: "Keyword Research",
        content: (
            <PhaseContent
                text="Deep keyword research to find high-value search terms your customers use. Balance search volume, competition, and buying intent for maximum ROI."
                imageSrc={phase2}
                list={[
                    "Search intent analysis",
                    "High-conversion keyword discovery",
                    "Competitor keyword gap analysis",
                    "Long-tail keyword identification",
                    "Keyword prioritization roadmap",
                ]}
            />
        )
    },
    {
        title: "Technical SEO Optimization",
        content: (
            <PhaseContent
                text="Fix technical issues—site speed, mobile-friendliness, crawlability, schema markup. Ensure search engines can properly index your content."
                imageSrc={phase3}
                list={[
                    "Page speed & Core Web Vitals fixes",
                    "Mobile usability optimization",
                    "Crawl & index issue resolution",
                    "Schema & structured data setup",
                    "URL & internal linking optimization",
                ]}
            />
        )
    },
    {
        title: "On-Page Optimization",
        content: (
            <PhaseContent
                text="Optimize titles, meta descriptions, headers, and content structure. Make every page relevant and compelling for both users and search engines."
                imageSrc={phase4}
                list={[
                    "Title & meta optimization",
                    "Header & content structure improvements",
                    "Keyword placement & density tuning",
                    "Image alt text optimization",
                    "Internal linking strategy",
                ]}
            />
        )
    },
    {
        title: "Content Strategy & Creation",
        content: (
            <PhaseContent
                text="Create SEO-optimized content that answers user questions and ranks for target keywords. Blog posts, landing pages, and resource content."
                imageSrc={phase5}
                list={[
                    "Content gap analysis",
                    "SEO content planning",
                    "Blog & landing page creation",
                    "Search intent–focused writing",
                    "Content optimization & updates",
                ]}
            />
        )
    },
    {
        title: "Link Building & Monitoring",
        content: (
            <PhaseContent
                text="Build high-quality backlinks from authoritative sites. Continuous monitoring and reporting on rankings, traffic, and conversions."
                imageSrc={phase6}
                list={[
                    "High-quality backlink acquisition",
                    "Outreach & digital PR",
                    "Toxic link monitoring",
                    "Rank & traffic tracking",
                    "Monthly SEO performance reports",
                ]}
            />
        )
    },
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
        <Left
            heading='Rank higher on Google. Drive organic traffic that converts'
            subHeading='Stop relying on paid ads. Our proven SEO strategies get your website ranking on page one for keywords that matter. More visibility, more traffic, more customers—all without paying for every click.'
        />
    )

    const right = (
        <Right icon={<icons.digitalPresence.seo.icon />} />
    )


    useEffect(() => {
        document.title = "SEO | Acurve"
    }, [])

    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='SEO' leftSection={left} rightSection={right} icon={<icons.digitalPresence.seo.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our SEO Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='SEO Tools & Analytics'/>
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in SEO Services?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default SEOPage