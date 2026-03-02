
import { Helmet } from "react-helmet-async"
import FAQs from "./faqs/FAQs"
import Hero from "./hero/Hero"
import OurServices from "./services/OurServices"
import WhyChooseus from "./why-choose-us/WhyChooseUs"
import FirstClient from "@/components/shared/FirstClient"


const Home = () => {
    const forSeo = {
        title: "Acurve - Software & Marketing Solutions for Business Growth",
        description: "Accelerate your business with Acurve's cutting-edge software and data-driven marketing.",
        url: "https://www.acurve.in",
        image: "https://www.acurve.in/acurve.png",
        type: "website",
    }
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Acurve",
        "url": forSeo.url,
        "logo": forSeo.image,
        "sameAs": []
    }
    return (
        <>
            <Helmet>
                {/* Basic SEO */}
                <title>{forSeo.title}</title>
                <meta name="description" content={forSeo.description} />
                <link rel="canonical" href={forSeo.url} />

                {/* Open Graph */}
                <meta property="og:title" content={forSeo.title} />
                <meta property="og:description" content={forSeo.description} />
                <meta property="og:type" content={forSeo.type} />
                <meta property="og:url" content={forSeo.url} />
                <meta property="og:image" content={forSeo.image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={forSeo.title} />
                <meta name="twitter:description" content={forSeo.description} />
                <meta name="twitter:image" content={forSeo.image} />

                {/* JSON-LD */}

                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>

            </Helmet>

            <div>
                <Hero />
                <OurServices />

                <WhyChooseus />

                <FAQs />
                <FirstClient />
            </div>
        </>
    )
}

export default Home
