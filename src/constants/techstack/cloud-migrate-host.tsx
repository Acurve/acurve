import { Aws, Azure, DigitalOcean, Docker, GithubActions, GoogleCloud, Heroku, K8s, Prometheus, Vercel } from "../tech-stack";

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
        icon: <K8s />,
        className: "border border-blue-400"
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
        icon: <Docker />,
        className: "border border-blue-300"
    },
    {
        icon: <Prometheus />,
        className: "border border-orange-500"
    },
    {
        icon: <GithubActions />,
        className: "border border-blue-500"
    },
    {
        icon: <Vercel />,
        className: "border border-white"
    },
]