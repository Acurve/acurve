import { useEffect, useState, type ComponentType } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'

import { ChevronDown, Menu, X, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Acurve from '../svgs/Acurve'
import { servicesList, type IService } from '@/constants/serviceList'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'
import { NavLink, useLocation } from 'react-router'
import { IconRocket } from '@tabler/icons-react'
import { blueGradientClass } from '@/constants/gradients.constants'
import { Button } from '../ui/button'
import useIsMobile from '@/hooks/useIsMobile'
import { Navbar, NavBody } from '../ui/resizable-navbar'




interface INavLinks {
    id: string;
    name: string,
    href: string,
    icon: ComponentType,
    type: "link" | "dropdown";
    subItems?: {
        id: string;
        name: string,
        icon: ComponentType,
        href: string,
        // description: string,
        type: "link" | "dropdown",
    }[]
}

interface NavigationMenuListForMobileProps {
    className?: string;
    liClassName?: string;
    linkClassName?: string;
    divClassName?: string;

    list: INavLinks[]
}



const NavigationMenuListForMobile = ({ list, className = "", liClassName = "", linkClassName = "", divClassName = "", isNavBarOpen = false }: NavigationMenuListForMobileProps & { isNavBarOpen: boolean }) => {
    const [expandedServiceId, setExpandedServiceId] = useState<string | "">("")
    const [expandedCategoryId, setExpandedCategoryId] = useState<string | "">("")

    const handleExpandedIdClick = (id: string) => {
        if (id === expandedServiceId) {
            setExpandedServiceId("")
            setExpandedCategoryId("") // Reset category when closing main dropdown
        }
        else {
            setExpandedServiceId(id)
        }
    }

    const handleCategoryClick = (id: string) => {
        if (id === expandedCategoryId) {
            setExpandedCategoryId("")
        }
        else {
            setExpandedCategoryId(id)
        }
    }

    return (
        <ul className={cn('w-full', className)}>
            {list.map((link, index) => (
                <motion.div
                    key={`${link.id}-${isNavBarOpen}`}
                    className={cn(
                        'overflow-hidden border border-transparent border-b-foreground/30',
                        divClassName
                    )}
                    initial={{
                        y: -20 - index,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            delay: 0.1 + index / 50
                        }
                    }}
                >
                    <li className={cn('', liClassName)}>
                        {
                            link.type === "link" ? (
                                <NavLink
                                    to={link.href}
                                    className={cn(`w-full h-12 flex items-center font-semibold`, linkClassName)}
                                >
                                    {link.name}
                                </NavLink>
                            ) : (
                                <div>
                                    <div
                                        className={cn(`w-full h-12 flex items-center font-semibold justify-between`, linkClassName)}
                                        onClick={() => handleExpandedIdClick(link.id)}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown
                                            className={cn(
                                                'transition duration-300 text-secondary-foreground/30',
                                                expandedServiceId === link.id && "rotate-180"
                                            )}
                                        />
                                    </div>

                                    {/* Render categories when expanded */}
                                    {expandedServiceId === link.id && link.subItems && (
                                        <div className=''>
                                            {link.subItems.map((category) => (
                                                <div key={category.id} className='border-b border-foreground/10 last:border-0'>
                                                    <div
                                                        className='h-12 flex items-center justify-between px-4 text-sm font-medium cursor-pointer hover:bg-accent/50'
                                                        onClick={() => handleCategoryClick(category.id)}
                                                    >
                                                        <span className='flex items-center gap-2'>
                                                            <category.icon />
                                                            {category.name}
                                                        </span>
                                                        <ChevronRight
                                                            className={cn(
                                                                'transition duration-300',
                                                                expandedCategoryId === category.id && "rotate-90"
                                                            )}
                                                            size={16}
                                                        />
                                                    </div>

                                                    {/* Render sub-services when category is expanded */}
                                                    {expandedCategoryId === category.id && (
                                                        <div className=''>
                                                            {servicesList.find(s => s.name === category.name)?.subServices.map((subService) => (
                                                                <NavLink
                                                                    key={subService.id}
                                                                    to={`/service/${subService.href}`}
                                                                    className='h-12 flex items-center gap-2 px-8 text-sm hover:bg-accent/50'
                                                                >
                                                                    <subService.icon />
                                                                    {subService.name}
                                                                </NavLink>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </li>
                </motion.div>
            ))}
        </ul>
    )
}


const NavigationBar = () => {
    const services: INavLinks[] = servicesList.map((service, index) => ({
        id: `${index}-index-${index}`,
        name: service.name,
        href: "",
        type: "dropdown" as const,
        icon: service.icon, // Ensure icon is present
        subItems: service.subServices.map((subService, index) => ({
            id: `${index}-index-${index * 5}`,
            name: subService.name,
            href: subService.href,
            type: "link" as const,
            icon: subService.icon
        }))
    }))
    const navLinks: INavLinks[] = [
        {
            name: "Home",
            href: "/",
            id: "86c0db0-6d41-4bc1-9f37-97682a33685a",
            type: "link",
            icon: () => <></>
        },
        {
            name: "Services",
            href: '',
            id: "dklgsdjnojweifkj",
            type: "dropdown",
            icon: () => <></>,
            subItems: services
        },
        // {
        //     name: "Blogs",
        //     href: "/blogs",
        //     id: "2ec91bf3-529c-4199-aa4b-be90edca9b9e",
        //     type: "link",
        //     icon: () => <></>
        // },
        {
            name: "Contact",
            href: "/contact",
            id: "0414acbc-88b4-45a9-8cb7-0c1ddc3dea4b",
            type: "link",
            icon: () => <></>
        },
    ]


    const { isMobile } = useIsMobile()
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
    const [selectedService, setSelectedService] = useState<IService>(servicesList[0])
    const location = useLocation()
    useEffect(() => {
        setIsNavbarOpen(false)
    }, [location.pathname])


    const navbarState = useNavbarScroll()

    return (
        <Navbar>
            <NavBody>
                <nav
                    className={cn(" top-0 w-full transition-all rounded-full px-6 duration-300 ",
                        navbarState === 'transparent' && 'bg-transparent border-transparent',
                        navbarState === 'blur' && "backdrop-blur-3xl bg-transparent border-transparent",
                        navbarState === "solid" && "bg-background border-b border-secondary",
                        isNavbarOpen && "backdrop-blur-3xl rounded-md!")

                    }

                >
                    <div className={cn('flex-col flex md:justify-between overflow-hidden md:overflow-visible md:flex-row  min-h-16 md:items-center h-16', isNavbarOpen && "min-h-screen h-screen ")}>

                        <motion.div className='navbar-branding-container flex items-center min-h-16  justify-between'>

                            <NavLink to={"/"}>
                                <h3 className='text-xl flex gap-2 items-center font-bold 2xl:text-2xl'>
                                    <Acurve className='fill-white size-12' />
                                    <p>Acurve</p>
                                </h3>
                            </NavLink>
                            <div className='md:hidden'>

                                {
                                    !isNavbarOpen && <Button variant="outline" className='flex p-0' onClick={() => setIsNavbarOpen(true)}>
                                        <Menu size={10} />
                                    </Button>
                                }
                                {
                                    isNavbarOpen && <Button variant="outline" className='flex p-0' onClick={() => setIsNavbarOpen(false)}>
                                        <X size={10} />
                                    </Button>
                                }

                            </div>
                        </motion.div>
                        <div className='md:flex hidden'>
                            <NavigationMenu viewport={isMobile}>
                                <NavigationMenuList className='gap-6 lg:gap-10'>
                                    {navLinks.map((link) =>

                                        <NavigationMenuItem key={link.id}>
                                            {
                                                link.type === "link" ?
                                                    (<NavigationMenuLink asChild className={cn('font-semibold', location.pathname === link.href && "before:max-w-24")} variant='underline' >
                                                        <NavLink to={link.href}>{link.name}</NavLink>
                                                    </NavigationMenuLink>) :
                                                    (
                                                        <>
                                                            <NavigationMenuTrigger className={cn('font-semibold ')}>{link.name}</NavigationMenuTrigger>
                                                            <NavigationMenuContent className='flex p-0'>
                                                                <div className=' w-max bg-accent/40 rounded-md rounded-tr-none rounded-br-none p-2'>

                                                                    <span className='text-xs text-gray-200 font-medium'>categories</span>
                                                                    <ul className="mt-2">
                                                                        {
                                                                            servicesList.map((service, index) => (

                                                                                <li key={service.id}>
                                                                                    <NavigationMenuLink asChild

                                                                                        onMouseEnter={() => setSelectedService(servicesList[index])}
                                                                                    >
                                                                                        <NavLink to="" className={cn("flex  items-center gap-2 py-3 pr-10 text-foreground/60 hover:text-foreground group/categoryLink transition-all duration-300 flex-row", service.name === selectedService.name && "text-foreground")}>
                                                                                            <service.icon />
                                                                                            <p>{service.name}</p>
                                                                                            <ChevronRight size={16} className='group-hover/categoryLink:translate-x-2 transition-all duration-300 opacity-0 group-hover/categoryLink:opacity-100' />
                                                                                        </NavLink>
                                                                                    </NavigationMenuLink>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                                <div className='w-84 p-2'>
                                                                    <span className='text-xs text-gray-200 font-medium'>services</span>
                                                                    <ul className='mt-2'>
                                                                        {
                                                                            selectedService.subServices.map((subService) => (
                                                                                <li key={subService.id}>
                                                                                    <NavigationMenuLink asChild >
                                                                                        <NavLink to={`/service/${subService.href}`} className={cn("flex  items-center gap-2 py-3 pr-10 text-foreground/60 hover:text-foreground group/categoryLink transition-all duration-300 flex-row", subService.name === selectedService.name && "text-foreground")}>
                                                                                            <subService.icon />
                                                                                            <p>{subService.name}</p>
                                                                                            <ArrowRight size={18} className=' -rotate-30 translate-y-2 transform group-hover/categoryLink:translate-y-0 transition-all duration-300 opacity-0 group-hover/categoryLink:opacity-100' />
                                                                                        </NavLink>
                                                                                    </NavigationMenuLink>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </NavigationMenuContent>
                                                        </>
                                                    )

                                            }
                                        </NavigationMenuItem>
                                    )}
                                </NavigationMenuList>
                            </NavigationMenu>

                        </div>
                        <div className='navbar-links-container md:hidden flex'>
                            <NavigationMenuListForMobile list={navLinks} isNavBarOpen={isNavbarOpen} />
                        </div>
                        <div className='navbar-cta-container mt-auto mb-6    md:m-0'>
                            <NavLink to={"/"} >
                                <Button size="lg" className={cn('rounded-full flex gap-2 my-auto items-center w-full cursor-pointer bg-linear-to-r', blueGradientClass)}>

                                    <IconRocket size={18} />
                                    <span>
                                        Get started
                                    </span>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </nav >
            </NavBody>
        </Navbar>
    )
}

export default NavigationBar