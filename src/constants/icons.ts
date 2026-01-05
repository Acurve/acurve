import { IconActivity, IconAdjustmentsCog, IconAlertCircle, IconApi, IconArtboard, IconAutomation, IconBell, IconBlendMode, IconBrandTabler, IconBrush, IconBuildingCommunity, IconBuildingWarehouse, IconBulb, IconCalendar, IconChartArcs, IconChartBarPopular, IconCloud, IconCloudCheck, IconCloudCode, IconCloudCog, IconCloudUpload, IconCode, IconCompass, IconCreditCard, IconDeviceDesktopAnalytics, IconDeviceIpadBolt, IconDeviceMobile, IconEdit, IconEye, IconFileAnalytics, IconFileDollar, IconFileDownload, IconFileText, IconGitBranch, IconGraph, IconJson, IconLayersIntersect, IconLayout, IconLink, IconLock, IconLockAccess, IconMessage, IconMessageUser, IconMoneybagMinus, IconMovie, IconMusic, IconNetwork, IconPackage, IconPalette, IconPresentationAnalytics, IconRefresh, IconRefreshDot, IconScreenShare, IconSearch, IconSettings, IconShare2, IconShieldCheck, IconShoppingCart, IconSparkles, IconSpeakerphone, IconTarget, IconThumbUp, IconTrendingUp, IconTrendingUp2, IconTypography, IconUser, IconUserCheck, IconUsers, IconUserSearch, IconUsersGroup, IconVideo, IconWorldCode } from "@tabler/icons-react";

export const icons = {
    digitalSolutions: {
        icon: IconBrandTabler,
        customwebDevelopment: {
            icon: IconWorldCode,
            customDevelopment: IconCode,
            responsiveDesign: IconDeviceMobile,
            highPerformance: IconDeviceIpadBolt,
            secureScalable: IconShieldCheck,
            seoOptimized: IconDeviceDesktopAnalytics,
            ongoingSupport: IconMessageUser

        },
        b2bportals: {
            icon: IconUsersGroup,
            multiTenateArch: IconUsers,
            documentManagement: IconFileText,
            analyticsDashboard: IconFileAnalytics,
            roleBasedAccess: IconLockAccess,
            businessMessaging: IconMessage,
            automatedWorkflows: IconRefresh,

        },
        customerVendorPortals: {
            icon: IconBuildingWarehouse,
            selfServiceOrder: IconShoppingCart,
            paymentIntegration: IconCreditCard,
            inventoryVisibility: IconPackage,
            smartNotification: IconBell,
            profileManagement: IconUserCheck,
            performanceReports: IconTrendingUp
        }
    },
    creativity: {
        icon: IconBulb,
        videoEditing: {
            icon: IconVideo,
            videoProduction: IconMovie,
            deliveryFormats: IconEdit,
            audioDesign: IconMusic
        },
        graphicDesign: {
            icon: IconPalette,
            brandDesign: IconBrush,
            webUiDesign: IconLayout,
            typography: IconTypography
        },
        logoDesign: {
            icon: IconArtboard,
            multipleConcepts: IconSparkles,
            strategicApproach: IconTarget,
            brandGuidLines: IconEye,
            versatilieFormats: IconLayersIntersect
        }
    },
    digitalPresence: {
        icon: IconPresentationAnalytics,
        digitalMarketing: {
            icon: IconSpeakerphone,
        },
        branding: {
            icon: IconChartBarPopular,
            brandStratergy: IconBulb,
            brandIdentity: IconCompass,
            audienceResearch: IconUserSearch,
        },
        seo: {
            icon: IconDeviceDesktopAnalytics,
            keywordResearch: IconSearch,
            linkBuildging: IconLink,
        },
        socialMediaManagement: {
            icon: IconThumbUp,
            contentCreation: IconShare2,
            growthStratergy: IconTrendingUp2,
            communityManagement: IconBuildingCommunity,
            socialScheduling: IconCalendar,
            analyticsReporting: IconGraph,
            influencerPartnership: IconUser,
        }
    },
    automationIntegration: {
        icon: IconAutomation,
        crmErpIntegration: {
            icon: IconScreenShare,
            integrationReady: IconLink,
            salesAnalytics: IconChartArcs,
            activityTracking: IconActivity
        },
        workflowAutomation: {
            icon: IconAdjustmentsCog,
            customWorkflows: IconGitBranch,

        },
        apiDevSystemIntegration: {
            icon: IconBlendMode,
            restFulAPi: IconApi,
            dataTransformation: IconJson,
            thirdPartyIntegration: IconNetwork
        }
    },
    cloudInfrastructure: {
        icon: IconCloudCode,
        cloudMigrationHosting: {
            icon: IconCloudUpload,
            cloudAssessment: IconCloud,
            costOptimization: IconMoneybagMinus,
            secureMigration: IconCloudCheck
        },
        maintenanceTechnicalSupport: {
            icon: IconCloudCog,
            monitoring: IconActivity,
            automatedBackups: IconRefreshDot,
            performanceTuning: IconSettings,
            incidentManagement: IconAlertCircle,
            updateMangement: IconFileDownload,
            resourceOptimization: IconFileDollar
        }
    }
}