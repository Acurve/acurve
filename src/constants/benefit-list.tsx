import { CheckCircle, Clock, Eye, Grid, Handshake, Layers, RefreshCw, Target, Zap } from "lucide-react";

export interface Benefit {
    id: string,
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}
// export const benefitsList: Benefit[] = [
//     {
//         id: "9f1c2a3e-4d7b-4a9f-b2c1-8e3a6c9f1a21",
//         icon: <Target />,
//     title: "Strategy-Led Execution",
//         description: "Every decision is driven by a clear strategy aligned with your business goals."
//     },
//     {
//         id: "c4b8e2d1-6a3f-4c9b-9f72-1d8a5e6b3c90",
//         icon: <Layers />,
//     title: "End-to-End Expertise",
//         description: "Design, development, marketing, and hosting — everything works together seamlessly."
//     },
//     {
//         id: "a7e9d5c3-1b84-4f6a-8c2d-9e1b3a4f6d72",
//         icon: <Zap />,
//     title: "Built for Performance & Scale",
//         description: "Fast, secure, and scalable solutions that grow with your business."
//     },
//     {
//         id: "e3a1b7c9-5d42-4f8a-b6c1-2d9e8a7f3c54",
//         icon: <Eye />,
//     title: "Transparent Process",
//         description: "Clear timelines, honest communication, and full visibility at every stage."
//     },
//     {
//         id: "b6d9f3e1-2c8a-4a57-9e4d-7f1c5a3b8e90",
//         icon: <CheckCircle />,
//     title: "Quality Without Shortcuts",
//         description: "Clean architecture and best practices for long-term reliability."
//     },
//     {
//         id: "4c8e1d9a-7b3f-4e2a-a6c5-9f1d3b8e7a42",
//         icon: <Handshake />,
//     title: "Long-Term Partnership",
//         description: "We think beyond projects and support your growth as a trusted partner."
//     }
// ];

export const benefitsList: Benefit[] = [
    {
        id: "9f1c2a3e-4d7b-4a9f-b2c1-8e3a6c9f1a21",
        icon: <Target />,
        title: "Strategy-Led Execution",
        description: "Every decision is driven by a clear strategy aligned with your business goals.",
        gradient: "from-red-500/60 to-orange-500/60" // Target/precision = red-orange (focused, direct)
    },
    {
        id: "c4b8e2d1-6a3f-4c9b-9f72-1d8a5e6b3c90",
        icon: <Layers />,
        title: "End-to-End Expertise",
        description: "Design, development, marketing, and hosting — everything works together seamlessly.",
        gradient: "from-blue-500/60 to-purple-500/60" // Layers/comprehensive = blue-purple (depth, variety)
    },
    {
        id: "a7e9d5c3-1b84-4f6a-8c2d-9e1b3a4f6d72",
        icon: <Zap />,
        title: "Built for Performance & Scale",
        description: "Fast, secure, and scalable solutions that grow with your business.",
        gradient: "from-yellow-500/60 to-orange-500/60" // Lightning/speed = yellow-orange (energy, power)
    },
    {
        id: "e3a1b7c9-5d42-4f8a-b6c1-2d9e8a7f3c54",
        icon: <Eye />,
        title: "Transparent Process",
        description: "Clear timelines, honest communication, and full visibility at every stage.",
        gradient: "from-cyan-500/60 to-blue-500/60" // Vision/clarity = cyan-blue (transparency, openness)
    },
    {
        id: "b6d9f3e1-2c8a-4a57-9e4d-7f1c5a3b8e90",
        icon: <CheckCircle />,
        title: "Quality Without Shortcuts",
        description: "Clean architecture and best practices for long-term reliability.",
        gradient: "from-green-500/60 to-emerald-500/60" // Check/quality = green-emerald (success, excellence)
    },
    {
        id: "4c8e1d9a-7b3f-4e2a-a6c5-9f1d3b8e7a42",
        icon: <Handshake />,
        title: "Long-Term Partnership",
        description: "We think beyond projects and support your growth as a trusted partner.",
        gradient: "from-purple-500/60 to-pink-500/60" // Partnership/trust = purple-pink (loyalty, connection)
    }
];