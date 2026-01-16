
import FAQs from "./faqs/FAQs"
import Hero from "./hero/Hero"
import OurServices from "./services/OurServices"
import WhyChooseus from "./why-choose-us/WhyChooseUs"
import FirstClient from "@/components/shared/FirstClient"


const Home = () => {

    return (
        <div>
            <Hero />
            <OurServices />

            <WhyChooseus />

            <FAQs />
            <FirstClient />
        </div>
    )
}

export default Home
