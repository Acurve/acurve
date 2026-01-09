// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router'
// // Constants - self-documenting, easy to tune
// const SCROLL_THRESHOLDS = {
//     TRANSPARENT: 70,
//     BLUR: 600,
// } as const

// type NavbarState = 'transparent' | 'blur' | 'solid'

// export function useNavbarScroll() {
//     const pathName = useLocation().pathname
//     const [navbarState, setNavbarState] = useState<NavbarState>('transparent')

//     if (pathName !== "") return "solid"
//     useEffect(() => {
//         let ticking = false

//         const updateNavbarState = () => {
//             const scrollY = window.scrollY

//             let newState: NavbarState
//             if (scrollY < SCROLL_THRESHOLDS.TRANSPARENT) {
//                 newState = 'transparent'
//             } else if (scrollY < SCROLL_THRESHOLDS.BLUR) {
//                 newState = 'blur'
//             } else {
//                 newState = 'solid'
//             }

//             // Only update state if it actually changed
//             setNavbarState(prev => prev === newState ? prev : newState)
//             ticking = false
//         }

//         const handleScroll = () => {
//             // Throttle using requestAnimationFrame
//             if (!ticking) {
//                 window.requestAnimationFrame(updateNavbarState)
//                 ticking = true
//             }
//         }

//         window.addEventListener('scroll', handleScroll, { passive: true })

//         // Call once to set initial state
//         updateNavbarState()

//         return () => window.removeEventListener('scroll', handleScroll)
//     }, []) // ← DEPENDENCY ARRAY
//     return navbarState
// }
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const SCROLL_THRESHOLDS = {
    LIGHT: 600,
    DARK: 4500,
} as const


type NavbarState = 'dark' | 'light'

export function useNavbarScroll() {
    const pathName = useLocation().pathname
    const [navbarState, setNavbarState] = useState<NavbarState>('dark')

    useEffect(() => {
        if (pathName !== "/") return

        let ticking = false

        const updateNavbarState = () => {
            const scrollY = window.scrollY

            let newState: NavbarState
            if (scrollY >= SCROLL_THRESHOLDS.LIGHT && scrollY <= SCROLL_THRESHOLDS.DARK) {
                newState = 'light'
            } else if (scrollY >= SCROLL_THRESHOLDS.DARK) {
                newState = 'dark'
            } else {
                newState = 'dark'
            }

            setNavbarState(prev => prev === newState ? prev : newState)
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbarState)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        updateNavbarState()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathName]) // Add pathName to dependency array

    return navbarState
}