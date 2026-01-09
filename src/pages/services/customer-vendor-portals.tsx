import SectionHeader, { type SectionHeaderProps } from '@/components/shared/SectionHeader';

import { Button } from '@/components/ui/button';
import { IconBell, IconFileInvoice, IconMessageCircle, IconPackage, IconShoppingCart, IconStar, IconTruck, IconUserCheck } from '@tabler/icons-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import MainSection from '@/components/shared/main-section';
import { ProcessSteps } from '@/components/shared/process-steps';
import Features from '@/components/shared/features';
import { NavLink } from 'react-router';
import CallToAction from '@/components/shared/CallToAction';
import { useEffect } from 'react';

const CustomerVendorPortalsPage = () => {
    const processStepsList = [
        { number: 1, title: "Requirements Gathering", description: "Understand your customer and vendor workflows, pain points, and communication needs. We identify key features to enhance collaboration and efficiency." },
        { number: 2, title: "User Experience Design", description: "Create intuitive interfaces for both customers and vendors. Self-service dashboards that reduce support tickets and improve satisfaction." },
        { number: 3, title: "Portal Development", description: "Build secure portals with order management, invoicing, and communication tools. Real-time updates and notifications keep everyone informed." },
        { number: 4, title: "System Integration", description: "Connect with your inventory, accounting, and shipping systems. Automated data sync eliminates manual entry and reduces errors." },
        { number: 5, title: "User Acceptance Testing", description: "Beta testing with real customers and vendors. Gather feedback and refine features for optimal adoption and usability." },
        { number: 6, title: "Launch & Support", description: "Smooth rollout with comprehensive onboarding materials. Dedicated support team to assist users and address any issues." },
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
        <div className='relative space-y-10 bg-no-repeat h-full flex flex-col justify-center items-center lg:items-start px-6 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 right-0 bottom-0 -z-2' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop)",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }} />
            <div className="lg:hidden absolute -z-1 bg-black/80 top-0 left-0 bottom-0 right-0 w-full h-full" />
            <div className='space-y-5'>
                <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                    Empower your customers and vendors with self-service portals that drive efficiency and satisfaction.
                </h3>
                <p className='text-foreground/70'>
                    Transform how you interact with customers and vendors. Our portals provide 24/7 access to orders, invoices, inventory, and communication tools—reducing support burden while improving relationships and transparency.
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                className='object-cover rounded-br-3xl'
                alt="Customer and Vendor Portal Dashboard"
            />
        </div>
    )

    // const eyebrow: SectionHeaderProps["eyebrow"] = {
    //     text: "techstack",
    //     icon: <IconUsers className="text-purple-700" />
    // }

    const processEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "process",
        icon: <IconUserCheck className="text-blue-400" />
    }

    const featuresEyebrow: SectionHeaderProps["eyebrow"] = {
        text: "features",
        icon: <IconStar className="text-yellow-400" />
    }

    useEffect(() => {
            document.title = "Customer & Vendor Portals | Acurve"
        }, [])
    return (
        <div>
            <MainSection text='Customer & Vendor Portals' leftSection={left} rightSection={right} />

            <Section className='overflow-visible' id='process'>
                <Container>
                    <SectionHeader heading='Our Portal Development Process' eyebrow={processEyebrow} />
                    <ProcessSteps
                        steps={processStepsList}
                        image="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Customer vendor portal development process"
                    />
                </Container>
            </Section>

            {/* <Section id='techstack'>
                <Container>
                    <SectionHeader heading='Technology Powering Your Portals' eyebrow={eyebrow} />
                </Container>
                <StaggeredLayout rows={3} columns={8} className='my-20' />
            </Section> */}

            <Section id='features'>
                <Container>
                    <SectionHeader heading='What is included in Customer-Vendor Portals?' eyebrow={featuresEyebrow} />
                    <Features featuresList={features} />
                </Container>
            </Section>
            <CallToAction />
        </div>
    )
}

export default CustomerVendorPortalsPage