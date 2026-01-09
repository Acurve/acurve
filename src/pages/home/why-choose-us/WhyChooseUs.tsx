
import React from 'react';
import { Flame } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import type { SectionHeaderProps } from '@/components/shared/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

import BenefitCard from './BenefitCard';
import { benefitsList } from '@/constants/benefit-list';
import { SparklesCore } from '@/components/ui/sparkles';



const WhyChooseus: React.FC = () => {
    const eyebrow: SectionHeaderProps["eyebrow"] = {
        text: "benifits",
        icon: <Flame className='text-destructive' />
    }
    return (
     
            <Section className='relative'>
                <div className="w-full absolute inset-0 h-screen">

                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <Container className='space-y-6'>


                    <SectionHeader heading='Why choose us?' eyebrow={eyebrow}></SectionHeader>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4">
                        {benefitsList.map((benefit, index) => (
                            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
                        ))}
                    </div>
                </Container>
            </Section>
    );
};

export default WhyChooseus;