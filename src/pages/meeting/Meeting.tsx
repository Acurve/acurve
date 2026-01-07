import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, User, Mail, Phone, Sparkles, Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Meeting form schema
const meetingFormSchema = z.object({
    fullName: z
        .string()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(100, { message: "Name must be 100 characters or fewer." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z
        .string()
        .min(7, { message: "Phone number is too short." })
        .max(20, { message: "Phone number is too long." })
        .regex(/^\+?[0-9\s().-]{7,20}$/, {
            message: "Phone number format is invalid.",
        }),
    meetingDate: z.string().min(1, { message: "Please select a date." }),
    meetingTime: z.string().min(1, { message: "Please select a time." }),
});

type MeetingFormValues = z.infer<typeof meetingFormSchema>;

// Country codes
const countryCodes = [
    { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
    { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
];

// Available time slots
const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

export default function Meeting() {
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[2]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
    } = useForm<MeetingFormValues>({
        resolver: zodResolver(meetingFormSchema),
    });

    const onSubmit = async (data: MeetingFormValues) => {
        try {
            const fullPhoneNumber = `${selectedCountry.code}${data.phone}`;
            console.log('Meeting data:', { ...data, phone: fullPhoneNumber });
            
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert('Meeting scheduled successfully!');
            reset();
            setSelectedTime('');
        } catch (error) {
            console.error('Error scheduling meeting:', error);
            alert('Failed to schedule meeting. Please try again.');
        }
    };

    const handleCountrySelect = (country: typeof countryCodes[0]) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setValue('meetingTime', time);
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
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

            <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-white/70" />
                        <span className="text-white/70 text-sm font-medium">Book a Meeting</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Schedule Your{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Consultation
                            </span>
                            <svg 
                                className="absolute -bottom-2 left-0 w-full h-3" 
                                viewBox="0 0 200 12" 
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path 
                                    d="M0 6 Q50 12, 100 6 T200 6" 
                                    stroke="rgba(96, 165, 250, 0.5)" 
                                    strokeWidth="2" 
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                        Choose a convenient time to discuss your project. We'll connect with you at your selected time.
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="relative">
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-white/5 rounded-3xl blur-sm" />
                    
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 space-y-8"
                    >
                        {/* Personal Information Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <User className="w-5 h-5 text-white/80" />
                                </div>
                                Personal Information
                            </h2>

                            <div className="space-y-6">
                                {/* Full Name */}
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

                                {/* Email & Phone */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                                            Email Address <span className="text-red-400">*</span>
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

                                    <div>
                                        <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm">
                                            Phone Number <span className="text-red-400">*</span>
                                        </label>
                                        <div className="flex gap-2">
                                            {/* Country Code Dropdown */}
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="h-full px-3 bg-white/5 border border-white/10 rounded-xl text-white flex items-center gap-2 hover:bg-white/10 transition-all min-w-[100px]"
                                                >
                                                    <span className="text-xl">{selectedCountry.flag}</span>
                                                    <span className="text-sm">{selectedCountry.code}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>

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
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/10"></div>

                        {/* Meeting Schedule Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white/80" />
                                </div>
                                Select Date & Time
                            </h2>

                            <div className="space-y-6">
                                {/* Meeting Date */}
                                <div>
                                    <label htmlFor="meetingDate" className="block text-white font-semibold mb-2 text-sm">
                                        Meeting Date <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="meetingDate"
                                        type="date"
                                        min={today}
                                        {...register('meetingDate')}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all cursor-pointer"
                                    />
                                    {errors.meetingDate && (
                                        <p className="mt-2 text-sm text-red-400">{errors.meetingDate.message}</p>
                                    )}
                                </div>

                                {/* Meeting Time */}
                                <div>
                                    <label className="block text-white font-semibold mb-3 text-sm">
                                        Meeting Time <span className="text-red-400">*</span>
                                    </label>
                                    <input type="hidden" {...register('meetingTime')} />
                                    
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => handleTimeSelect(time)}
                                                className={cn(
                                                    "px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 border",
                                                    selectedTime === time
                                                        ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white border-transparent shadow-lg shadow-blue-500/30"
                                                        : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/20"
                                                )}
                                            >
                                                {selectedTime === time && (
                                                    <Check className="w-4 h-4 inline-block mr-1" />
                                                )}
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.meetingTime && (
                                        <p className="mt-2 text-sm text-red-400">{errors.meetingTime.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Info Badge */}
                        <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                            <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-blue-300 text-sm font-semibold mb-1">Meeting Duration: 30 minutes</p>
                                <p className="text-blue-200/70 text-xs">
                                    You'll receive a confirmation email with meeting details and a calendar invite.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Scheduling...
                                </>
                            ) : (
                                <>
                                    <Calendar className="w-5 h-5" />
                                    Confirm Meeting
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Instant Confirmation</p>
                            <p className="text-white/50 text-xs">Immediate booking</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Flexible Rescheduling</p>
                            <p className="text-white/50 text-xs">Easy to reschedule</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Calendar Invite</p>
                            <p className="text-white/50 text-xs">Auto-added to calendar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}