import { Docker, GithubActions, Grafana, K8s, Kafka, Postman, Prometheus, RabbitMq } from "../tech-stack";

export const techStackList = [
    {
        icon:<Docker/>,
        className:"border border-cyan-600",
    },
    {
        icon:<K8s/>,
        className:"border border-blue-400",
    },
    {
        icon:<Postman/>,
        clasName:"border border-orange-500"
    },
    {
        icon:<GithubActions/>,
        className:"border border-blue-600",
    },
    {
        icon:<Grafana/>,
        className:"border border-orange-600",
    },
    {
        icon:<Prometheus/>,
        className:"border border-orange-900",
    },
    {
        icon:<Kafka/>,
        className:"border border-white",
    },
    {
        icon:<RabbitMq/>,
        className:"border border-orange-700",
    },
]