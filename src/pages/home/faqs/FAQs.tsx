import  { useState } from 'react'
import { cn } from '@/lib/utils';
import { ChevronDown, CircleQuestionMarkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from '@/components/shared/SectionHeader';
import type  { SectionHeaderProps } from '@/components/shared/SectionHeader';
import Section from '@/components/layout/Section';

import Container from '@/components/layout/Container';
import { faqList } from '@/constants/faq-list';

const FAQs = () => {


    const [expandedId, setExpandedId] = useState<string | "">("")
    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "FAQ's",
        icon: <CircleQuestionMarkIcon className="text-green-700" />

    }
    return (
        <Section className='min-h-max'>
            <Container className='space-y-6'>

                <SectionHeader heading='Frequently Asked Question' subHeading='Transparency and clear answers lay the foundation for strong business relationships.'  eyebrow={eyebrow} />
                <div className='grid lg:grid-cols-2 gap-6 items-start'>
                    {faqList.map((faq) => (
                        <Faq faqData={faq} key={faq.id} expandedId={expandedId} handleClick={setExpandedId} className='bg-background' />
                    ))}
                </div>
            </Container>

        </Section>
    )
}
interface FaqProps {
    className?: string,
    expandedId: string,
    handleClick: (id: string) => void
    faqData: {
        question: string,
        answer: string,
        id: string,
    }
}
const Faq = ({ faqData, className = "", handleClick, expandedId }: FaqProps) => {
    return (
        <motion.div className={cn(` border border-secondary rounded overflow-hidden  ${faqData.id === expandedId ? "min-h-max" : "min-h-16 h-16"}`, className)}
            initial={{
                opacity: 0,
                x: 100
            }}
            whileInView={{
                opacity: 1,
                x: 0,

            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            <div className='flex items-center h-16 px-5 bg-[#171717] hover:bg-secondary' onClick={() => handleClick(expandedId === faqData.id ? "" : faqData.id)}>
                <p>{faqData.question}</p>
                <ChevronDown size={18} className={`ml-auto ${expandedId === faqData.id ? "rotate-180" : ""}`} />
            </div>
            <div className='p-5'>
                <p>{faqData.answer}</p>
            </div>
        </motion.div>
    )
}

export default FAQs
