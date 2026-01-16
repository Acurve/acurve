import { type ReactNode } from 'react'
import type { ClassNameProps } from '@/types/global'
import ServicePageHeader from './service-page-header'
import Section from '../layout/Section'
import Container from '../layout/Container'

type MainSectionProps = {
    leftSection: ReactNode;
    rightSection: ReactNode;
    text: string;
    icon: ReactNode;
}

const MainSection = ({ leftSection, rightSection, text, icon }: MainSectionProps & ClassNameProps) => {
    return (
        <Section className='flex  relative'>

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-background/80 -z-1" />
            <Container className='py-6 lg:min-h-[calc(100vh-80px)] w-full mt-20 flex flex-col lg:space-y-0'>


                <ServicePageHeader text={text} icon={icon} className='bg-primary'/>

                <div className='flex flex-1 flex-col lg:flex-row space-y-6 lg:space-y-0 relative'>

                    <div className="justify-center flex lg:w-1/2 flex-1 mt-5">
                        {
                            leftSection
                        }
                    </div>
                    <div className='flex w-full lg:w-1/2  flex-1 absolute top-0 bottom-0 left-0 right-0 lg:relative'>
                        {rightSection}
                    </div>
                </div>

            </Container>

        </Section>
    )
}

export default MainSection
