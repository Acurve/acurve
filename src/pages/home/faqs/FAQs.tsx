import { useState } from 'react'
import { CircleQuestionMarkIcon, Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import SectionHeader from '@/components/shared/SectionHeader';
import type { SectionHeaderProps } from '@/components/shared/SectionHeader';
import Section from '@/components/layout/Section';

import Container from '@/components/layout/Container';
import { faqList } from '@/constants/faq-list';

const FAQs = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "FAQ's",
        icon: <CircleQuestionMarkIcon className="text-green-700" />

    }
    return (
        <Section className=''>
            <Container className='space-y-6'>

                <SectionHeader heading='Frequently Asked Question' subHeading='Transparency and clear answers lay the foundation for strong business relationships.' eyebrow={eyebrow} />
                {/* <div className='grid lg:grid-cols-2 gap-6 items-start'>
                    {faqList.map((faq) => (
                        <Faq faqData={faq} key={faq.id} expandedId={expandedId} handleClick={setExpandedId} className='bg-background' />
                    ))}
                </div> */}
                <div className="space-y-4">
                    {faqList.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-xl bg-white/2 overflow-hidden lg:max-w-5xl mx-auto"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/2 transition-colors"
                            >
                                <span className="font-display font-bold text-lg">{faq.question}</span>
                                <span className="p-2 rounded-full bg-white/5">
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>

        </Section>
    )
}

export default FAQs


