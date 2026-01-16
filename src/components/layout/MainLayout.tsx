import { Outlet } from "react-router"
import NavigationBar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])

    return (
        <div>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                }}
            />
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
            <ScrollToTop />
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
