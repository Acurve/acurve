import { motion } from 'motion/react'
import  {type ReactNode } from 'react'

type FeaturesProps = {
    featuresList: {
        icon: ReactNode,
        title: string,
        description: string
    }[]
}
const Features = ({ featuresList }: FeaturesProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
            {featuresList.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
                >
                    {feature.icon}
                    <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    )
}

export default Features
