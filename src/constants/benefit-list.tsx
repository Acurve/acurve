import { CheckCircle, Eye, Handshake, Layers,  Target, Zap } from "lucide-react";
import type { ReactNode } from "react";

export interface Benefit {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  accentColor: string;
}


export const benefitsList: Benefit[] = [
  {
    id: "9f1c2a3e-4d7b-4a9f-b2c1-8e3a6c9f1a21",
    icon: <Target className="w-6 h-6" />,
    title: "Strategy-Led Execution",
    description: "Every decision is driven by a clear strategy aligned with your business goals.",
    accentColor: "rgba(244, 63, 94, 0.4)", // Rose
  },
  {
    id: "c4b8e2d1-6a3f-4c9b-9f72-1d8a5e6b3c90",
    icon: <Layers className="w-6 h-6" />,
    title: "End-to-End Expertise",
    description: "Design, development, marketing, and hosting — everything works together seamlessly.",
    accentColor: "rgba(59, 130, 246, 0.4)", // Blue
  },
  {
    id: "a7e9d5c3-1b84-4f6a-8c2d-9e1b3a4f6d72",
    icon: <Zap className="w-6 h-6" />,
    title: "Built for Performance",
    description: "Fast, secure, and scalable solutions that grow with your business needs.",
    accentColor: "rgba(251, 191, 36, 0.4)", // Amber
  },
  {
    id: "e3a1b7c9-5d42-4f8a-b6c1-2d9e8a7f3c54",
    icon: <Eye className="w-6 h-6" />,
    title: "Transparent Process",
    description: "Clear timelines, honest communication, and full visibility at every stage.",
    accentColor: "rgba(34, 211, 238, 0.4)", // Cyan
  },
  {
    id: "b6d9f3e1-2c8a-4a57-9e4d-7f1c5a3b8e90",
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Quality Engineering",
    description: "Clean architecture and best practices for long-term reliability and code health.",
    accentColor: "rgba(16, 185, 129, 0.4)", // Emerald
  },
  {
    id: "4c8e1d9a-7b3f-4e2a-a6c5-9f1d3b8e7a42",
    icon: <Handshake className="w-6 h-6" />,
    title: "Long-Term Partnership",
    description: "We think beyond projects and support your growth as a trusted digital partner.",
    accentColor: "rgba(168, 85, 247, 0.4)", // Purple
  }
];
