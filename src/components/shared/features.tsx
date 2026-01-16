import React, { type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, MotionValue } from 'motion/react';

/**
 * Type Definitions
 */
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

interface FeaturesProps {
  featuresList: Feature[];
}

/**
 * Premium Feature Card with Mouse-Tracking Spotlight Effect
 * Enhanced with refined glassmorphism and animated borders
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/8 bg-linear-to-b from-zinc-900/50 to-zinc-950/50 p-10 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)]"
    >
      {/* Dynamic Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Internal Content Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 bg-white/5 blur-[50px] transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      <div className="relative z-10">
        {/* Icon Container with Nested Glassmorphism */}
        <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-zinc-100 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/8 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          {feature.icon}
        </div>
        
        <h3 className="mb-4 font-display text-2xl font-medium tracking-tight text-white/90 transition-colors group-hover:text-white">
          {feature.title}
        </h3>
        
        <p className="text-base leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
          {feature.description}
        </p>
      </div>

      {/* Refined Bottom Progress/Accent Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <motion.div 
        className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
      />
    </motion.div>
  );
};

const Features: React.FC<FeaturesProps> = ({ featuresList }) => {
  if (!featuresList) return null;

  return (
    <section className="relative pt-10 w-full">
      {/* Multi-layered Ambient Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-150 w-full -translate-x-1/2 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2 bg-white/2 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 h-75 w-75 bg-white/1 blur-[100px] rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuresList.map((feature, i) => (
          <FeatureCard key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Features;