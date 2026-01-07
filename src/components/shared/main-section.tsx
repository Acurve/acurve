import  { type ReactNode } from 'react'
import type {  ClassNameProps } from '@/types/global'
import ServicePageHeader from './service-page-header'
import Section from '../layout/Section'
import Container from '../layout/Container'



type MainSectionProps = {
    leftSection: ReactNode;
    rightSection: ReactNode;
    text: string;
}

const MainSection = ({ leftSection, rightSection, text }: MainSectionProps & ClassNameProps) => {
    return (
        <Section className='mt-8 flex flex-col '>
            <Container className=' min-h-[calc(100vh-64px)] py-6 flex flex-col'>
                <div className='flex   justify-between items-center'>

                    <ServicePageHeader text={text}  />
                </div>
                <div className='flex flex-1 w-full'>
                    <div className="lg:w-1/2 flex-1 justify-center flex flex-col items-center">
                        {
                            leftSection
                        }
                    </div>
                    <div className="w-1/2 hidden lg:flex flex-1">
                        {rightSection}
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default MainSection
