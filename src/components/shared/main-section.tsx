import React, { type ReactNode } from 'react'
import type { ChildrenProps, ClassNameProps } from '@/types/global'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router'
import ServicePageHeader from './service-page-header'
import Section from '../layout/Section'
import Container from '../layout/Container'
import { icons } from '@/constants/icons'


const MainSectionRight = ({ children, className = "" }: ChildrenProps & ClassNameProps) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

type MainSectionProps = {
    leftSection: ReactNode;
    rightSection: ReactNode;
}

const MainSection = ({ leftSection, rightSection }: MainSectionProps & ClassNameProps) => {
    return (
        <Section className='mt-8 flex flex-col '>
            <Container className=' min-h-[calc(100vh-64px)] py-6 flex flex-col'>
                <div className='flex   justify-between items-center'>

                    <ServicePageHeader icon={<icons.digitalSolutions.customwebDevelopment.icon />} />
                    {/* <div className='hidden sm:flex gap-4 text-xs text-foreground/70'>
                        <NavLink to="#process">process</NavLink>
                        <NavLink to="#techstack">tech stack</NavLink>
                        <NavLink to="#features">features</NavLink>
                        <NavLink to="#faqs">faqs</NavLink>
                    </div> */}
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
