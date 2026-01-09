import { Outlet } from "react-router"
import NavigationBar from "./Navbar"
import Footer from "./Footer"
import { NavbarProvider } from "./NavbarContext"
import ScrollToTop from "./ScrollToTop"



const MainLayout = () => {
    return (
        <div>
            <NavbarProvider>
                <ScrollToTop />
                <NavigationBar />
                <Outlet />
                <Footer />
            </NavbarProvider>
        </div>
    )
}

export default MainLayout
