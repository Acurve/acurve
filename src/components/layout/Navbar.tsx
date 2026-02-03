

import { useEffect, useState, useCallback, type ComponentType } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { ChevronDown, Menu, X, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import Acurve from '../svgs/Acurve'
import { servicesList } from '@/constants/serviceList'
import { NavLink, useLocation } from 'react-router'
import { IconRocket } from '@tabler/icons-react'
import { blueGradientClass } from '@/constants/gradients.constants'
import { Button } from '../ui/button'
import { Navbar as ResizableNavbar, NavBody as ResizableNavBody } from '../ui/resizable-navbar'
import { useHeroStore } from '@/store/useHeroStore'

// ============================================
// TYPES - Centralized and improved
// ============================================

interface ISubService {
    id: string
    name: string
    icon: ComponentType
    href: string
}

interface IServiceCategory {
    id: string
    name: string
    icon: ComponentType
    subServices: ISubService[]
}

interface INavLink {
    id: string
    name: string
    href: string
    type: "link" | "dropdown"
    icon?: ComponentType
    categories?: IServiceCategory[]
}

interface MobileNavProps {
    links: INavLink[]
    isOpen: boolean
    onClose: () => void
}

// ============================================
// UTILITIES - Pure functions
// ============================================

/**
 * Generate stable IDs for navigation items
 */
const generateNavId = (prefix: string, name: string): string => {
    return `${prefix}-${name.toLowerCase().replace(/\s+/g, '-')}`
}

/**
 * Transform services data into navigation structure
 */
const transformServicesToNavigation = (): IServiceCategory[] => {
    return servicesList.map((service) => ({
        id: generateNavId('category', service.name),
        name: service.name,
        icon: service.icon,
        subServices: service.subServices.map((subService) => ({
            id: generateNavId('service', subService.name),
            name: subService.name,
            icon: subService.icon,
            href: subService.href
        }))
    }))
}

// ============================================
// MOBILE NAVIGATION - Improved
// ============================================

interface MobileMenuItemProps {
    link: INavLink
    expandedItems: Set<string>
    onToggle: (id: string) => void
}

const MobileMenuItem = ({ link, expandedItems, onToggle }: MobileMenuItemProps) => {
    const isExpanded = expandedItems.has(link.id)

    if (link.type === "link") {
        return (
            <NavLink
                to={link.href}
                className="w-full h-12 flex items-center font-semibold hover:bg-accent/50 transition-colors"
            >
                {link.name}
            </NavLink>
        )
    }

    return (
        <div>
            <button
                className="w-full h-12 flex items-center font-semibold justify-between hover:bg-accent/50 transition-colors"
                onClick={() => onToggle(link.id)}
                aria-expanded={isExpanded}
                aria-controls={`dropdown-${link.id}`}
            >
                <span>{link.name}</span>
                <ChevronDown
                    className={cn(
                        'transition-transform duration-300 text-secondary-foreground/30',
                        isExpanded && "rotate-180"
                    )}
                    size={20}
                />
            </button>

            {isExpanded && link.categories && (
                <div id={`dropdown-${link.id}`} className="bg-accent/20">
                    {link.categories.map((category) => (
                        <MobileCategoryItem
                            key={category.id}
                            category={category}
                            expandedItems={expandedItems}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

interface MobileCategoryItemProps {
    category: IServiceCategory
    expandedItems: Set<string>
    onToggle: (id: string) => void
}

const MobileCategoryItem = ({ category, expandedItems, onToggle }: MobileCategoryItemProps) => {
    const isExpanded = expandedItems.has(category.id)
    const CategoryIcon = category.icon

    return (
        <div className="border-b border-foreground/10 last:border-0">
            <button
                className="w-full h-12 flex items-center justify-between px-4 text-sm font-medium hover:bg-accent/50 transition-colors"
                onClick={() => onToggle(category.id)}
                aria-expanded={isExpanded}
                aria-controls={`category-${category.id}`}
            >
                <span className="flex items-center gap-2">
                    <CategoryIcon />
                    {category.name}
                </span>
                <ChevronRight
                    className={cn(
                        'transition-transform duration-300',
                        isExpanded && "rotate-90"
                    )}
                    size={16}
                />
            </button>

            {isExpanded && (
                <div id={`category-${category.id}`} className="bg-accent/10">
                    {category.subServices.map((subService) => {
                        const SubServiceIcon = subService.icon
                        return (
                            <NavLink
                                key={subService.id}
                                to={`/${subService.href}`}
                                className="h-12 flex items-center gap-2 px-8 text-sm hover:bg-accent/50 transition-colors"
                            >
                                <SubServiceIcon />
                                {subService.name}
                            </NavLink>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

const MobileNavigation = ({ links, isOpen }: MobileNavProps) => {
    // Use Set for O(1) lookup performance
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const handleToggle = useCallback((id: string) => {
        setExpandedItems(prev => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
                // Close all children when parent closes
                links.forEach(link => {
                    if (link.id === id && link.categories) {
                        link.categories.forEach(cat => next.delete(cat.id))
                    }
                })
            } else {
                next.add(id)
            }
            return next
        })
    }, [links])

    // Reset expansion when menu closes
    useEffect(() => {
        if (!isOpen) {
            setExpandedItems(new Set())
        }
    }, [isOpen])

    return (
        <nav className="w-full" role="navigation" aria-label="Mobile navigation">
            <ul className="w-full">
                {links.map((link, index) => (
                    <motion.li
                        key={link.id}
                        className="overflow-hidden border-b border-foreground/30 last:border-0"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.05 + index * 0.02
                            }
                        }}
                    >
                        <MobileMenuItem
                            link={link}
                            expandedItems={expandedItems}
                            onToggle={handleToggle}
                        />
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
}

// ============================================
// DESKTOP NAVIGATION - Improved
// ============================================

interface DesktopServicesDropdownProps {
    categories: IServiceCategory[]
}

const DesktopServicesDropdown = ({ categories }: DesktopServicesDropdownProps) => {
    const [selectedCategory, setSelectedCategory] = useState<IServiceCategory>(categories[0])

    const handleCategoryHover = useCallback((category: IServiceCategory) => {
        setSelectedCategory(category)
    }, [])

    return (
        <NavigationMenuContent className="flex p-0 w-2xl!">
            {/* Categories Panel */}
            <div className="w-1/2 bg-accent/40 rounded-md rounded-tr-none rounded-br-none p-2">
                <span className="text-xs text-gray-200 font-medium uppercase tracking-wider">
                    Categories
                </span>
                <ul className="mt-2 space-y-1" role="menu">
                    {categories.map((category) => {
                        const CategoryIcon = category.icon
                        const isSelected = category.id === selectedCategory.id

                        return (
                            <li key={category.id} role="none">
                                <NavigationMenuLink asChild>
                                    <button
                                        onMouseEnter={() => handleCategoryHover(category)}
                                        onFocus={() => handleCategoryHover(category)}
                                        className={cn(
                                            "w-full flex items-center gap-2 py-3 px-4 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/50 group transition-all duration-300 flex-row",
                                            isSelected && "text-foreground bg-accent/30"
                                        )}
                                        role="menuitem"
                                    >
                                        <CategoryIcon />
                                        <span>{category.name}</span>
                                        <ChevronRight
                                            size={16}
                                            className={cn(
                                                'ml-auto transition-all duration-300',
                                                isSelected ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                                            )}
                                        />
                                    </button>
                                </NavigationMenuLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Services Panel */}
            <div className=" p-2 w-1/2">
                <span className="text-xs text-gray-200 font-medium uppercase tracking-wider">
                    Services
                </span>
                <ul className="mt-2 space-y-1" role="menu">
                    {selectedCategory.subServices.map((subService) => {
                        const SubServiceIcon = subService.icon

                        return (
                            <li key={subService.id} role="none">
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to={`/${subService.href}`}
                                        className="flex items-center gap-2 py-3 px-4 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/50 group transition-all duration-300 flex-row"
                                        role="menuitem"
                                    >
                                        <SubServiceIcon />
                                        <span>{subService.name}</span>
                                        <ArrowRight
                                            size={18}
                                            className="ml-auto -rotate-45 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </NavLink>
                                </NavigationMenuLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </NavigationMenuContent>
    )
}

// ============================================
// MAIN NAVIGATION BAR - Cleaned up
// ============================================

const NavigationBar = () => {
    const location = useLocation()
    // const navbarState = useNavbarScroll()
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    // Transform services once
    const serviceCategories = transformServicesToNavigation()

    // Build navigation links structure
    const navLinks: INavLink[] = [
        {
            id: generateNavId('nav', 'home'),
            name: "Home",
            href: "/",
            type: "link"
        },
        {
            id: generateNavId('nav', 'services'),
            name: "Services",
            href: '',
            type: "dropdown",
            categories: serviceCategories
        },
        {
            id: generateNavId('nav', 'contact'),
            name: "Contact",
            href: "/contact",
            type: "link"
        }
    ]

    // Close mobile menu on route change
    useEffect(() => {
        setIsNavbarOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isNavbarOpen])

    const toggleNavbar = useCallback(() => {
        setIsNavbarOpen(prev => !prev)
    }, [])

    const heroInView = useHeroStore(s => s.heroInView)
    const showAcurve = location.pathname === "/" && heroInView

    return (
        <ResizableNavbar>
            <ResizableNavBody className={cn(isNavbarOpen && "rounded-md!")}>
                <nav
                    className={cn(
                        "top-0 w-full transition-all rounded-full px-6 duration-300",
                        "backdrop-blur-2xl",
                        isNavbarOpen && "backdrop-blur-3xl rounded-md! transition-none",
                        `relative bg-white/15  border border-white/30    backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]    shadow-[0_8px_32px_rgba(0,0,0,0.1)]    before:content-['']    before:absolute before:top-0 before:left-0 before:right-0    before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]`
                    )}
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <div className={cn(
                        'flex flex-col md:flex-row md:justify-between overflow-hidden md:overflow-visible min-h-16 md:items-center h-16',
                        isNavbarOpen && "min-h-[calc(100dvh-16px)] h-[calc(100dvh-16px)]"
                    )}>
                        {/* Logo and Mobile Toggle */}
                        <div className="flex items-center min-h-16 justify-between">
                            <NavLink to="/" aria-label="Acurve Home">
                                <h1 className="text-xl flex gap-2 items-center font-bold 2xl:text-2xl">
                                    <Acurve
                                        variant='gradient'
                                        className={cn(
                                            " size-12",
                                        )} />
                                    <AnimatePresence>
                                        {
                                            showAcurve &&
                                            <motion.span
                                                initial={{
                                                    x: -20,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.7
                                                    }
                                                }}
                                                exit={{
                                                    x: -20,
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.7
                                                    }
                                                }}
                                            >
                                                Acurve
                                            </motion.span>
                                        }
                                    </AnimatePresence>
                                </h1>
                            </NavLink>

                            {/* Mobile Menu Toggle */}
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden"
                                onClick={toggleNavbar}
                                aria-label={isNavbarOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isNavbarOpen}
                            >
                                {isNavbarOpen ? <X size={20} /> : <Menu size={20} />}
                            </Button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-6 lg:gap-10">
                                    {navLinks.map((link) => (
                                        <NavigationMenuItem key={link.id}>
                                            {link.type === "link" ? (
                                                <NavigationMenuLink
                                                    asChild
                                                    className={cn(
                                                        'font-semibold',
                                                        location.pathname === link.href && "before:max-w-24"
                                                    )}
                                                    variant="underline"
                                                >
                                                    <NavLink to={link.href}>{link.name}</NavLink>
                                                </NavigationMenuLink>
                                            ) : (
                                                <>
                                                    <NavigationMenuTrigger className={cn(
                                                        "font-semibold",
                                                    )}>
                                                        {link.name}
                                                    </NavigationMenuTrigger>
                                                    {link.categories && (
                                                        <DesktopServicesDropdown categories={link.categories} />
                                                    )}
                                                </>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Mobile Navigation */}
                        {isNavbarOpen && (
                            <div className="md:hidden flex flex-1 overflow-y-auto">
                                <MobileNavigation
                                    links={navLinks}
                                    isOpen={isNavbarOpen}
                                    onClose={() => setIsNavbarOpen(false)}
                                />
                            </div>
                        )}

                        {/* CTA Button */}
                        <div className="mt-auto mb-6 md:m-0">
                            <NavLink to="/contact">
                                <Button
                                    size="lg"
                                    className={cn(
                                        'rounded-full cursor-pointer flex gap-2 items-center w-full bg-linear-to-r',
                                        blueGradientClass
                                    )}
                                >
                                    <IconRocket size={18} />
                                    <span>Get started</span>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </ResizableNavBody>
        </ResizableNavbar>
    )
}

export default NavigationBar