
import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

import BenefitCard from './BenefitCard';

import { benefitsList } from '@/constants/benefit-list';
import AuroraBackground from '@/components/ui/aurora-background';



const WhyChooseus: React.FC = () => {
    return (

        <Section className='relative mask-b-from-90% mask-t-from-80%'>
            <AuroraBackground />

            <Container className='space-y-12 py-24'>


                <SectionHeader heading='Why choose us?'></SectionHeader>

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
