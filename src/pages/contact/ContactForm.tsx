import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/schemas/contact.schema';
import { Mail, Phone, MapPin, Send, Sparkles, ChevronDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import Section from '@/components/layout/Section';
import { toast } from "react-hot-toast"
import Animate from '@/components/animations/Animate';

// Country codes data
const countryCodes = [
    { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
    { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
    { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: '+7', country: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
];

export default function ContactPage() {
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[2]); // Default to India
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        const toastId = toast.loading("Submitting your request...");

        try {
            const fullPhoneNumber = `${selectedCountry.code}${data.phone}`;

            const payload = {
                name: data.fullName,
                email: data.email,
                phoneNumber: fullPhoneNumber,
                service: data.serviceType,
                budget: data.budgetRange,
                message: data.message,
            };

            const api = `${import.meta.env.VITE_API_PREFIX}/api/v1/contacts`;

            const response = await fetch(api, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "Something went wrong");
            }

            await response.json();

            toast.success(
                <div>
                    <p className="font-semibold">Submitted successfully</p>
                    <p className="text-sm opacity-80">
                        We will get back to you shortly
                    </p>
                </div>,
                { id: toastId }
            );

            reset();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again.",
                { id: toastId }
            );
        }
    };


    const handleCountrySelect = (country: typeof countryCodes[0]) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    const serviceOptions = [
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
    ];

    const budgetOptions = [
        "Not decided",
        "Under $500",
        "$500 - $1,000",
        "$1,000 - $5,000",
        "$5,000+",
    ];

    return (
        <Section>


            <div className="min-h-screen  relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative md:max-w-3xl lg:max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
                    <div className="flex flex-col lg:flex-row  gap-16 items-start">
                        {/* Left Column - Info */}
                        <Animate type='fade-up' duration={2}>


                            <div className="space-y-12">
                                {/* Header */}
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                        <Sparkles className="w-4 h-4 text-white/70" />
                                        <span className="text-white/70 text-sm font-medium">Get in Touch</span>
                                    </div>

                                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                        Let's Build Something{' '}
                                        <span className="relative inline-block">
                                            <span>Extraordinary</span>
                                            <svg
                                                className="absolute -bottom-2 left-0 w-full h-3"
                                                viewBox="0 0 200 12"
                                                fill="none"
                                                preserveAspectRatio="none"
                                            >
                                                <path
                                                    d="M0 6 Q50 12, 100 6 T200 6"
                                                    stroke="rgba(255,255,255,0.3)"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </span>
                                    </h1>

                                    <p className="text-xl text-white/60 leading-relaxed">
                                        Ready to transform your digital presence? Share your vision with us,
                                        and we'll help bring it to life.
                                    </p>
                                </div>

                                {/* Contact Info Cards */}
                                <div className="space-y-4">
                                    <NavLink
                                        to="mailto:contact@acurve.in"
                                        className="group flex items-center gap-4 p-6 bg-white/2 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <Mail className="w-6 h-6 text-white/80" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-sm mb-1">Email us at</p>
                                            <p className="text-white font-semibold">contact@acurve.in</p>
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        to="tel:9173355608"
                                        className="group flex items-center gap-4 p-6 bg-white/2 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <Phone className="w-6 h-6 text-white/80" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-sm mb-1">Call us at</p>
                                            <p className="text-white font-semibold">+91 9173355608</p>
                                        </div>
                                    </NavLink>

                                    <div className="flex items-center gap-4 p-6 bg-white/2 backdrop-blur-xl border border-white/10 rounded-2xl">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white/80" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-sm mb-1">Visit us at</p>
                                            <p className="text-white font-semibold">Jamnagar, gujarat, india</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Animate>

                        {/* Right Column - Form */}
                        <Animate type='fade-up' className='w-full' duration={2}>
                            <div className="relative flex">
                                <div className="absolute -inset-px bg-white/10 rounded-3xl opacity-50 blur-sm" />

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="relative bg-white/2 backdrop-blur-xl border border-white/10 rounded-3xl w-full p-8 lg:p-10 space-y-6"
                                >
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-white font-semibold mb-2 text-sm">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            {...register('fullName')}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                            placeholder="John Doe"
                                        />
                                        {errors.fullName && (
                                            <p className="mt-2 text-sm text-red-400">{errors.fullName.message}</p>
                                        )}
                                    </div>

                                    {/* Phone & Email */}
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm">
                                                Phone <span className="text-red-400">*</span>
                                            </label>
                                            <div className="flex flex-col min-[420px]:flex-row gap-2">
                                                {/* Country Code Dropdown */}
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className="h-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white flex items-center gap-2 hover:bg-white/10 transition-all min-w-25"
                                                    >
                                                        <span className="text-xl">{selectedCountry.flag}</span>
                                                        <span className="text-sm">{selectedCountry.code}</span>
                                                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    {/* Dropdown Menu */}
                                                    {isDropdownOpen && (
                                                        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                                                            {countryCodes.map((country) => (
                                                                <button
                                                                    key={country.country}
                                                                    type="button"
                                                                    onClick={() => handleCountrySelect(country)}
                                                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
                                                                >
                                                                    <span className="text-xl">{country.flag}</span>
                                                                    <span className="text-white text-sm flex-1">{country.name}</span>
                                                                    <span className="text-white/60 text-sm">{country.code}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Phone Input */}
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    {...register('phone')}
                                                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                                    placeholder="234 567 890"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                                                Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...register('email')}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Service Type & Budget */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="serviceType" className="block text-white font-semibold mb-2 text-sm">
                                                Service Type <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                id="serviceType"
                                                {...register('serviceType')}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-gray-900">Select a service</option>
                                                {serviceOptions.map((service) => (
                                                    <option key={service} value={service} className="bg-gray-900">
                                                        {service.charAt(0).toUpperCase() + service.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.serviceType && (
                                                <p className="mt-2 text-sm text-red-400">{errors.serviceType.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="budgetRange" className="block text-white font-semibold mb-2 text-sm">
                                                Budget Range <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                id="budgetRange"
                                                {...register('budgetRange')}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-gray-900">Select budget</option>
                                                {budgetOptions.map((budget) => (
                                                    <option key={budget} value={budget} className="bg-gray-900">
                                                        {budget}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.budgetRange && (
                                                <p className="mt-2 text-sm text-red-400">{errors.budgetRange.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            {...register('message')}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                        {errors.message && (
                                            <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full py-4 px-6 bg-linear-to-r from-blue-600 to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </Section >
    );
}