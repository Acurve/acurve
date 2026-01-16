import { Aws, Azure, DigitalOcean, GoogleCloud, Heroku, Prometheus, Vercel } from "../tech-stack";

export const techStackList = [
    {
        icon: <Aws />,
        className: "border border-blue-800"
    },
    {
        icon: <DigitalOcean />,
        className: "border border-blue-500"
    },
    {
        icon: <Heroku />,
        className: "border border-purple-200"
    },
    {
        icon: <GoogleCloud />,
        className: "border border-yellow-400"
    },
    {
        icon: <Azure />,
        className: "border border-blue-400"
    },
    {
        icon: <Prometheus />,
        className: "border border-orange-500"
    },
    {
        icon: <Vercel />,
        className: "border border-white"
    },
]