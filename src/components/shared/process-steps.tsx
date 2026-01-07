import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    steps: Step[];
    image: string;
    imageAlt: string;
}

export function ProcessSteps({  steps, image, imageAlt }: ProcessStepsProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="py-20">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Sticky Image */}
                    <div className="hidden lg:block h-fit sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl overflow-hidden border border-border/50 h-96"
                        >
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step, index) => {
                            const stepProgress = useTransform(
                                scrollYProgress,
                                [index * 0.1, (index + 1) * 0.1 + 0.2],
                                [0, 1]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Step Number Circle */}
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20">
                                            {step.number}
                                        </div>

                                        {/* Step Content */}
                                        <div className="pt-2 flex-grow">
                                            <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Animated Line Connector */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="absolute left-7 top-20 w-0.5 h-20 bg-gradient-to-b from-primary/60 to-primary/20 origin-top"
                                            style={{
                                                scaleY: stepProgress,
                                            }}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile Image - Shown only on small screens */}
                    <div className="lg:hidden rounded-2xl overflow-hidden border border-border/50 h-96">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
