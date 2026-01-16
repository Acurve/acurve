import * as zod from "zod";

export const ServiceType = zod.enum([
    'Custom Web Development',
    'B2B Portals',
    'Customer & Vendor Portals',
    'Digital Marketing',
    'Branding',
    'SEO',
    'Social Media Management',
    'CRM & ERP Integration',
    'API Development & System Connectivity',
    'Cloud Migration & Hosting',
    'Maintenance & Technical Support',
    'Video Editing',
    'Graphic Design',
    'Logo Design'
]);

export const BudgetRange = zod.enum([
    "Not decided",
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000+",
]);


export const contactFormSchema = zod.object({
    fullName: zod
        .string()
        .min(3, { message: "Full name must be at least 3 characters." })
        .max(100, { message: "Full name must be 100 characters or fewer." })
        // allow letters, spaces, apostrophes, hyphens, dots
        .regex(/^[\p{L}\p{M}'\-\.\s]+$/u, {
            message: "Full name contains invalid characters.",
        }),

    phone: zod
        .string()
        .min(7, { message: "Phone number is too short." })
        .max(20, { message: "Phone number is too long." })
        .regex(/^\+?[0-9\s().-]{7,20}$/, {
            message: "Phone number format is invalid.",
        })
        .refine((val) => {
            const digits = val.replace(/\D/g, "");
            return digits.length >= 7 && digits.length <= 12;
        }, { message: "Phone number must contain between 7 and 12 digits." }),

    email: zod.string().email({ message: "Please enter a valid email address." }),

    serviceType: ServiceType,
    budgetRange: BudgetRange,

    message: zod
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(2000, { message: "Message must be 2000 characters or fewer." }),
});

export type ContactFormValues = zod.infer<typeof contactFormSchema>;
export type ServiceType = zod.infer<typeof ServiceType>;
