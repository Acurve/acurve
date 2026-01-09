
import FAQs from "./faqs/FAQs"
import Hero from "./hero/Hero"
import OurServices from "./services/OurServices"
import WhyChooseus from "./why-choose-us/WhyChooseUs"
import FirstClient from "@/components/shared/FirstClient"
import { NavbarObserver } from "@/components/layout/NavbarObserver"


const Home = () => {

    return (
        <div>
            <NavbarObserver theme="dark">
                <Hero />
            </NavbarObserver>

            <NavbarObserver theme="light">
                <OurServices />
            </NavbarObserver>

            <NavbarObserver theme="dark">

                <WhyChooseus />
            </NavbarObserver>

            <FAQs />
            <FirstClient />
        </div>
    )
}

export default Home
