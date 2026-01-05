import type { ComponentType } from "react";
import { icons } from "./icons";
export interface ISubservices {
    id: string;
    name: string;
    icon: ComponentType;
    href: string;
}

export interface IService {
    id: string;
    name: string;
    description: string;
    icon: ComponentType;
    subServices: ISubservices[]
    contentId: string;
}

export const servicesList: IService[] = [
    {
        id: "b3b8f4b2-9c7a-4c3a-9b4e-9a4d1a1a1a01",
        name: "digital solutions",
        description: "Build scalable web solutions and portals that power your entire business ecosystem.",
        icon: icons.digitalSolutions.icon,
        contentId: "content-digital-solutions-animation",
        subServices: [
            {
                id: "1a2b3c4d-1111-4aaa-bbbb-aaaaaaaaaaaa",
                name: "custom web development",
                href: "custom-web-development",
                icon: icons.digitalSolutions.customwebDevelopment.icon,
            },
            {
                id: "2b3c4d5e-2222-4bbb-cccc-bbbbbbbbbbbb",
                name: "b2b portals",
                href: "b2b-portals",
                icon: icons.digitalSolutions.b2bportals.icon,
            },
            {
                id: "3c4d5e6f-3333-4ccc-dddd-cccccccccccc",
                name: "customer & vendor portals",
                href: "customer-vendor-portals",
                icon: icons.digitalSolutions.customerVendorPortals.icon,
            },
        ],
    },

    {
        id: "d8c2b1a9-3f44-4e12-8d21-3c3c3c3c3c03",
        name: "digital presence",
        description: "Get found, get noticed, get chosen—with SEO, branding, and social media that converts.",
        icon: icons.digitalPresence.icon,
        contentId: "content-digital-presence-animation",
        subServices: [
            {
                id: "7a8b9c0d-7777-4aaa-bbbb-111111111111",
                name: "digital marketing",
                href: "digital-marketing",
                icon: icons.digitalPresence.digitalMarketing.icon,
            },
            {
                id: "8b9c0d1e-8888-4bbb-cccc-222222222222",
                name: "branding",
                href: "branding",
                icon: icons.digitalPresence.branding.icon,
            },
            {
                id: "9c0d1e2f-9999-4ccc-dddd-333333333333",
                name: "social media management",
                href: "social-media-management",
                icon: icons.digitalPresence.socialMediaManagement.icon,
            },
            {
                id: "0d1e2f3a-0000-4ddd-eeee-444444444444",
                name: "seo",
                href: "seo",
                icon: icons.digitalPresence.seo.icon,
            },
        ],
    },
    {
        id: "e1f2a3b4-5c66-4a55-9d33-4d4d4d4d4d04",
        name: "automation & integration",
        description: "Eliminate manual work and connect your systems with intelligent automation and seamless integrations.",
        contentId: "content-automation-integration-animation",
        icon: icons.automationIntegration.icon,
        subServices: [
            {
                id: "1e2f3a4b-aaaa-4eee-ffff-555555555555",
                name: "crm & erp integration",
                href: "crm-erp-integration",
                icon: icons.automationIntegration.crmErpIntegration.icon,
            },
            // {
            //     id: "2f3a4b5c-bbbb-4fff-aaaa-666666666666",
            //     name: "workflow automation",
            //     href: "workflow-automation",
            //     icon: icons.automationIntegration.workflowAutomation.icon,
            // },
            {
                id: "3a4b5c6d-cccc-4aaa-bbbb-777777777777",
                name: "api development & system integration",
                href: "api-dev-system-integration",
                icon: icons.automationIntegration.apiDevSystemIntegration.icon,
            },
        ],
    },
    {
        id: "f9e8d7c6-6b77-4f44-8a11-5e5e5e5e5e05",
        name: "cloud & infrastructure",
        description: "Secure, scalable cloud infrastructure with seamless migration, hosting, and 24/7 technical support.",
        contentId: "content-cloud-infrastruture-animation",
        icon: icons.cloudInfrastructure.icon,
        subServices: [
            {
                id: "4b5c6d7e-dddd-4bbb-cccc-888888888888",
                name: "cloud migration & hosting",
                href: "cloud-migration-hosting",
                icon: icons.cloudInfrastructure.cloudMigrationHosting.icon,
            },
            {
                id: "5c6d7e8f-eeee-4ccc-dddd-999999999999",
                name: "maintenance & technical support",
                href: "maintenance-technical-support",
                icon: icons.cloudInfrastructure.maintenanceTechnicalSupport.icon,
            },
        ],
    },
    {

        id: "c4a9d3e1-8f21-4d11-9b2e-2b2b2b2b2b02",
        name: "creativity",
        description: "Creative design and video that elevates your brand and captivates your audience instantly.",
        icon: icons.creativity.icon,
        contentId: "content-creativity-animation",
        subServices: [
            {
                id: "4d5e6f7a-4444-4ddd-eeee-dddddddddddd",
                name: "video editing",
                href: "video-editing",
                icon: icons.creativity.videoEditing.icon,
            },
            {
                id: "5e6f7a8b-5555-4eee-ffff-eeeeeeeeeeee",
                name: "grahic design",
                href: "graphic-design",
                icon: icons.creativity.graphicDesign.icon,
            },
            {
                id: "6f7a8b9c-6666-4fff-aaaa-ffffffffffff",
                name: "logo design",
                href: "logo-design",
                icon: icons.creativity.logoDesign.icon,
            },
        ],
    },
]