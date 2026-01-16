import SectionHeader from '@/components/shared/SectionHeader';

import { IconBell, IconFileInvoice, IconMessageCircle, IconPackage, IconShoppingCart,  IconTruck } from '@tabler/icons-react';
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

import phase1 from "@/assets/customer-vendor-portals/phase1.webp"
import phase2 from "@/assets/customer-vendor-portals/phase2.webp"
import phase3 from "@/assets/customer-vendor-portals/phase3.webp"
import phase4 from "@/assets/customer-vendor-portals/phase4.webp"
import phase5 from "@/assets/customer-vendor-portals/phase5.webp"
import phase6 from "@/assets/customer-vendor-portals/phase6.webp"
import StaggeredLayout from '@/components/shared/staggered-layout';
import { techStackList } from '@/constants/techstack/customer-vendor-portals';
import TechContainer from './TechContainer';

const CustomerVendorPortalsPage = () => {
    const processStepsList = [
        {
            title: "Requirements Gathering",
            content: (
                <PhaseContent
                    text="Understand your customer and vendor workflows, pain points, and communication needs. We identify key features to enhance collaboration and efficiency."
                    imageSrc={phase1}
                    list={[
                        "Customer & vendor workflow analysis",
                        "Pain point & requirement identification",
                        "Feature prioritization",
                        "Access level & role definition",
                    ]}
                />
            )
        }
        ,
        {
            title: "User Experience Design",
            content: (
                <PhaseContent
                    text="Create intuitive interfaces for both customers and vendors. Self-service dashboards that reduce support tickets and improve satisfaction."
                    imageSrc={phase2}
                    list={[
                        "User journey & interaction design",
                        "Customer & vendor dashboard layouts",
                        "Usability-focused UI design",
                    ]}
                />
            )
        }
        ,
        {
            title: "Portal Development",
            content: (
                <PhaseContent
                    text="Build secure portals with order management, invoicing, and communication tools. Real-time updates and notifications keep everyone informed."
                    imageSrc={phase3}
                    list={[
                        "Secure authentication & access control",
                        "Order & request management",
                        "Invoicing & document handling",
                        "Notifications & real-time updates",
                    ]}
                />
            )
        }
        ,
        {
            title: "System Integration",
            content: (
                <PhaseContent
                    text="Connect with your inventory, accounting, and shipping systems. Automated data sync eliminates manual entry and reduces errors."
                    imageSrc={phase4}
                    list={[
                        "Inventory & accounting integration",
                        "Shipping & logistics connectivity",
                        "Automated data synchronization",
                    ]}
                />
            )
        }
        ,
        {
            title: "User Acceptance Testing",
            content: (
                <PhaseContent
                    text="Beta testing with real customers and vendors. Gather feedback and refine features for optimal adoption and usability."
                    imageSrc={phase5}
                    list={[
                        "Customer & vendor beta testing",
                        "Feedback collection & analysis",
                        "Usability improvements & refinements",
                    ]}
                />
            )
        }
        ,
        {
            title: "Launch & Support",
            content: (
                <PhaseContent
                    text="Smooth rollout with comprehensive onboarding materials. Dedicated support team to assist users and address any issues."
                    imageSrc={phase6}
                    list={[
                        "Phased rollout & go-live support",
                        "User onboarding & training materials",
                        "Ongoing support & maintenance",
                    ]}
                />
            )
        }
        ,
    ];

    const features = [
        { icon: <IconShoppingCart />, title: "Order Management", description: "Place orders, track shipments, and view order history in real-time." },
        { icon: <IconFileInvoice />, title: "Invoice & Payment Portal", description: "View invoices, make payments, and download statements securely online." },
        { icon: <IconMessageCircle />, title: "Direct Communication", description: "Built-in messaging system for quick resolution of queries and issues." },
        { icon: <IconTruck />, title: "Shipment Tracking", description: "Real-time tracking updates from warehouse to delivery at your doorstep." },
        { icon: <IconPackage />, title: "Inventory Visibility", description: "View real-time stock levels, product catalogs, and availability status." },
        { icon: <IconBell />, title: "Smart Notifications", description: "Automated alerts for order updates, payment reminders, and important events." },
    ];

    const left = (
        <Left
            heading='Empower your customers and vendors with self-service portals that drive efficiency and satisfaction.'
            subHeading='Transform how you interact with customers and vendors. Our portals provide 24/7 access to orders, invoices, inventory, and communication tools—reducing support burden while improving relationships and transparency.'
        />

    )

    const right = (
        <Right icon={<icons.digitalSolutions.customerVendorPortals.icon />} />
    )



    useEffect(() => {
        document.title = "Customer & Vendor Portals | Acurve"
    }, [])


    const techStackListFinal = techStackList.map((stack) => <TechContainer children={stack.icon} glowClassName={stack.className} />)
    return (
        <div>
            <MainSection text='Customer & Vendor Portals' leftSection={left} rightSection={right} icon={<icons.digitalSolutions.customerVendorPortals.icon />} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Portal Development Process' />
                    <Timeline
                        data={processStepsList}
                    />
                </Container>
            </Section>

            <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Powering Your Portals'  />
                </Container>
                <StaggeredLayout list={techStackListFinal} />
            </Section>

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Customer-Vendor Portals?' />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CustomerVendorPortalsPage