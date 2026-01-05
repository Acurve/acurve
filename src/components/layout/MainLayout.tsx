import { Outlet } from "react-router"
import NavigationBar from "./Navbar"
import Footer from "./Footer"



const MainLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
