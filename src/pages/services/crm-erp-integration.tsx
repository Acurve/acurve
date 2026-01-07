import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import {  IconChartLine,  IconDatabase, IconLink, IconRefresh, IconReportAnalytics, IconStar, IconTransferIn, IconUsers } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';

const CRMERPIntegrationPage = () => {
    const processStepsList = [
        { number: 1, title: "System Discovery", description: "Analyze your existing CRM and ERP systems, data structures, and business processes. Map out integration touchpoints and data dependencies." },
        { number: 2, title: "Integration Blueprint", description: "Design the data flow architecture between systems. Define field mappings, sync frequency, and conflict resolution strategies." },
        { number: 3, title: "Custom Connector Development", description: "Build robust middleware or use native APIs to connect your systems. Handle data transformation and validation automatically." },
        { number: 4, title: "Data Migration & Sync", description: "Initial data migration with validation and deduplication. Set up real-time or scheduled synchronization between platforms." },
        { number: 5, title: "Testing & Validation", description: "Comprehensive testing of all integration scenarios. Verify data accuracy, handle edge cases, and ensure system stability." },
        { number: 6, title: "Monitoring & Maintenance", description: "24/7 monitoring with automated error alerts. Ongoing maintenance as your systems evolve and scale." },
    ];

    const features = [
        { icon: <IconLink />, title: "Bi-Directional Sync", description: "Real-time data synchronization between CRM and ERP in both directions." },
        { icon: <IconUsers />, title: "Unified Customer View", description: "360° customer data—sales, orders, invoices, and support in one place." },
        { icon: <IconRefresh />, title: "Automated Workflows", description: "Trigger actions across systems automatically—no manual data entry required." },
        { icon: <IconDatabase />, title: "Data Consistency", description: "Eliminate duplicate records and ensure data accuracy across all systems." },
        { icon: <IconReportAnalytics />, title: "Consolidated Reporting", description: "Generate reports combining CRM and ERP data for better business insights." },
        { icon: <IconChartLine />, title: "Real-Time Updates", description: "Instant visibility into inventory, orders, and customer interactions across teams." },
    ];

    const left = (
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Break down data silos. Unite your CRM and ERP into one powerful ecosystem.
                </h3>
                <p className='text-foreground/70'>
                    Stop copying data between systems. We integrate your CRM and ERP platforms—Salesforce, HubSpot, SAP, Oracle, NetSuite—creating seamless data flows that eliminate manual work and give your teams real-time visibility across your entire business.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                className='object-cover rounded-br-3xl' 
                alt="CRM ERP Integration" 
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "platforms",
    //     icon: <IconWorldCode className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconTransferIn className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    return (
        <div>
            <MainSection text='CRM & ERP Integration' leftSection={left} rightSection={right} />
            
            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our CRM-ERP Integration Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="CRM ERP integration process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Systems We Integrate' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in CRM-ERP Integration?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CRMERPIntegrationPage