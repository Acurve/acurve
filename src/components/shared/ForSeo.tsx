import { Helmet } from "react-helmet-async";

type ServiceSchemaProps = {
    serviceName: string;
    serviceDescription: string;
    areaServed?: "India";
};

type ForSeoProps = {
    title: string;
    description: string;
    path: string;
    type?: "website";
    image?: string;
    serviceSchema?: ServiceSchemaProps;
};

const ForSeo = ({
    title,
    description,
    path,
    type = "website",
    image = "https://www.acurve.in/acurve.png",
    serviceSchema,
}: ForSeoProps) => {
    const BASE_URL = "https://www.acurve.in"
    const url = `${BASE_URL}${path}`;


    const schema = serviceSchema
        ? {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": serviceSchema.serviceName,
            "description": serviceSchema.serviceDescription,
            "provider": {
                "@type": "Organization",
                "name": "Acurve",
                "url": BASE_URL
            },
            ...(serviceSchema.areaServed && {
                "areaServed": {
                    "@type": "Country",
                    "name": serviceSchema.areaServed
                }
            }),
            "url": url
        }
        : null;



    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default ForSeo;