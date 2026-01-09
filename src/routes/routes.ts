import MainLayout from "@/components/layout/MainLayout";
import NotFoundPage from "@/components/layout/NotFoundPage";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import Meeting from "@/pages/meeting/Meeting";
import APISystemIntegrationPage from "@/pages/services/api-dev-system-integration";
import B2BPortals from "@/pages/services/b2b-portals";
import BrandingPage from "@/pages/services/branding";
import CloudMigrationHostingPage from "@/pages/services/cloud-migration-hosting";
import CRMERPIntegrationPage from "@/pages/services/crm-erp-integration";
import customwebDevelopmentPage from "@/pages/services/custom-web-development";
import CustomerVendorPortalsPage from "@/pages/services/customer-vendor-portals";
import DigitalMarketingPage from "@/pages/services/digital-marketing";
import GraphicDesignPage from "@/pages/services/graphic-design";
import LogoDesignPage from "@/pages/services/logo-design";
import MaintenanceSupportPage from "@/pages/services/maintenance-technical-support";
import SEOPage from "@/pages/services/seo";
import SocialMediaManagementPage from "@/pages/services/social-media-management";
import VideoEditingPage from "@/pages/services/video-editing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "",
                Component: Home
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "meeting",
                Component: Meeting
            }
        ]

    },
    {
        path: "/service/",
        Component: MainLayout,
        children: [
            {
                path: "custom-web-development",
                Component: customwebDevelopmentPage,
            },
            {
                path: "b2b-portals",
                Component: B2BPortals,

            },
            {
                path: "customer-vendor-portals",
                Component: CustomerVendorPortalsPage,
            },
            {
                path: "api-dev-system-integration",
                Component: APISystemIntegrationPage,
            },
            {
                path: "crm-erp-integration",
                Component: CRMERPIntegrationPage,
            },
            {
                path: "digital-marketing",
                Component: DigitalMarketingPage,
            },
            {
                path: "graphic-design",
                Component: GraphicDesignPage,
            },
            {
                path: "logo-design",
                Component: LogoDesignPage,
            },
            {
                path: "maintenance-technical-support",
                Component: MaintenanceSupportPage,
            },
            {
                path: "seo",
                Component: SEOPage,
            },
            {
                path: "social-media-management",
                Component: SocialMediaManagementPage,
            },
            {
                path: "branding",
                Component: BrandingPage,
            },
            {
                path: "video-editing",
                Component: VideoEditingPage,
            },
            {
                path: "cloud-migration-hosting",
                Component: CloudMigrationHostingPage,
            },
        ]
    },
    {
        path:'*',
        Component:NotFoundPage
    }
])