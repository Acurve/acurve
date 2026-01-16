import SectionHeader from '@/components/shared/SectionHeader';

import { IconChartLine, IconDatabase, IconLink, IconRefresh, IconReportAnalytics, IconUsers } from '@tabler/icons-react';
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

import phase1 from "@/assets/crm-erp-integrate/phase1.webp"
import phase2 from "@/assets/crm-erp-integrate/phase2.webp"
import phase3 from "@/assets/crm-erp-integrate/phase3.webp"
import phase4 from "@/assets/crm-erp-integrate/phase4.webp"
import phase5 from "@/assets/crm-erp-integrate/phase5.webp"
import phase6 from "@/assets/crm-erp-integrate/phase6.webp"
import { techStackList } from '@/constants/techstack/crm-erp-integrate';
import TechContainer from './TechContainer';
import StaggeredLayout from '@/components/shared/staggered-layout';

const CRMERPIntegrationPage = () => {
    const processStepsList = [
        {
            title: "System Discovery",
            content: (
                <PhaseContent
                    text="Analyze your existing CRM and ERP systems, data structures, and business processes. Map out integration touchpoints and data dependencies."
                    imageSrc={phase1}
                    list={[
                        "CRM & ERP system audit",
                        "Data structure & schema analysis",
                        "Business process mapping",
                        "Integration touchpoint identification",
                    ]}
                />
            )
        },

        {
            title: "Integration Blueprint",
            content: (
                <PhaseContent
                    text="Design the data flow architecture between systems. Define field mappings, sync frequency, and conflict resolution strategies."
                    imageSrc={phase2}
                    list={[
                        "Data flow & architecture design",
                        "Field mapping & transformation rules",
                        "Sync strategy & conflict resolution",
                    ]}
                />
            )
        }
        ,
        {
            title: "Custom Connector Development",
            content: (
                <PhaseContent
                    text="Build robust middleware or use native APIs to connect your systems. Handle data transformation and validation automatically."
                    imageSrc={phase3}
                    list={[
                        "Custom API or middleware development",
                        "Data transformation & normalization",
                        "Validation & error handling logic",
                        "Secure authentication & access control",
                    ]}
                />
            )
        }
        ,
        {
            title: "Data Migration & Sync",
            content: (
                <PhaseContent
                    text="Initial data migration with validation and deduplication. Set up real-time or scheduled synchronization between platforms."
                    imageSrc={phase4}
                    list={[
                        "Initial data migration",
                        "Data validation & deduplication",
                        "Real-time or scheduled synchronization",
                    ]}
                />
            )
        }
        ,
        {
            title: "Testing & Validation",
            content: (
                <PhaseContent
                    text="Comprehensive testing of all integration scenarios. Verify data accuracy, handle edge cases, and ensure system stability."
                    imageSrc={phase5}
                    list={[
                        "End-to-end integration testing",
                        "Data accuracy & consistency checks",
                        "Edge case & failure handling",
                    ]}
                />
            )
        }
        ,
        {
            title: "Monitoring & Maintenance",
            content: (
                <PhaseContent
                    text="24/7 monitoring with automated error alerts. Ongoing maintenance as your systems evolve and scale."
                    imageSrc={phase6}
                    list={[
                        "Automated monitoring & alerts",
                        "Issue resolution & support",
                        "Ongoing optimization & updates",
                    ]}
                />
            )
        }
        ,
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
        <Left
            heading='Break down data silos. Unite your CRM and ERP into one powerful ecosystem.'
            subHeading='Stop copying data between systems. We integrate your CRM and ERP platforms—Salesforce, HubSpot, SAP, Oracle, NetSuite—creating seamless data flows that eliminate manual work and give your teams real-time visibility across your entire business.'
        />
    )

    const right = (
        <Right icon={<icons.automationIntegration.crmErpIntegration.icon />} />
    )


    useEffect(() => {
        document.title = "CRM & ERP Integration | Acurve"
    }, [])


    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)

    return (
        <div>
            <MainSection text='CRM & ERP Integration' leftSection={left} rightSection={right} icon={<icons.automationIntegration.crmErpIntegration.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our CRM-ERP Integration Process' />
                    <Timeline data={processStepsList} />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Tools we use in Integration'/>
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in CRM-ERP Integration?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CRMERPIntegrationPage