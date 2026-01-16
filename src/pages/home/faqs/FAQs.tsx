import { useState } from 'react'
import {  Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import SectionHeader from '@/components/shared/SectionHeader';
import Section from '@/components/layout/Section';

import Container from '@/components/layout/Container';
import { faqList } from '@/constants/faq-list';
import Animate from '@/components/animations/Animate';

const FAQs = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className=''>
            <Container className='space-y-12'>

                <SectionHeader heading='Frequently Asked Question' />
                <div className="space-y-4">
                    {faqList.map((faq, idx) => (
                        <Animate type='fade-up' delay={idx * 0.2} duration={1}>


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
                                            <div className="p-6  text-white/60 leading-relaxed border-t border-white/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Animate>
                    ))}
                </div>
            </Container>

        </Section>
    )
}

export default FAQs


