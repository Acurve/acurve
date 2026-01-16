import Animate from "@/components/animations/Animate";
import type { Benefit } from "@/constants/benefit-list";
import { motion, useMotionValue, useTransform } from "motion/react";


interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}
const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, white, transparent)`
  );

  return (
    <Animate type="fade-up" delay={index * 0.1}>


      <div
        onMouseMove={onMouseMove}
        className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-r  bg-white/5 backdrop-blur-[20px] bg-size-[32px] p-8 md:p-10  transition-all duration-500  hover:border-white/20"
      >
        {/* Spotlight for Glass Texture */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)`,
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
        />

        <div className="relative z-10">
          {/* Floating Icon Container */}
          <div className="relative mb-8 inline-flex">
            <div
              className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
              style={{ backgroundColor: benefit.accentColor }}
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
              {benefit.icon}
            </div>
          </div>

          <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white/90">
            {benefit.title}
          </h3>
          <p className="text-base leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">
            {benefit.description}
          </p>
        </div>

        {/* Modern Card Footer/Indicator */}
        <div className="mt-10 flex items-center gap-4">
          <div
            className="h-1.5 w-1.5 rounded-full transition-all duration-500 group-hover:scale-150"
            style={{ backgroundColor: benefit.accentColor }}
          />
          <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
        </div>
      </div>

    </Animate>
  );
};

export default BenefitCard