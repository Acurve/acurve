
import Section from "@/components/layout/Section"
import { cn } from "@/lib/utils"
import { IconRocket } from "@tabler/icons-react"
import { NavLink } from "react-router"
import Container from "@/components/layout/Container"
import HeroBackgroundParticles from "./HeroBackgroundParticles"
import FollowShimmerButton from "@/components/ui/follow-shimmer-button"
import { useHeroStore } from "@/store/useHeroStore"
import { useEffect, useRef } from "react"
import Animate from "@/components/animations/Animate"


const Hero = () => {
    const heroSectionRef = useRef<HTMLDivElement | null>(null)
    const setHeroInView = useHeroStore((s) => s.setHeroInView)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHeroInView(entry.isIntersecting)
            },
            {
                threshold: 0.4, // tweak for UX
            }
        )

        if (heroSectionRef.current) observer.observe(heroSectionRef.current)
        return () => observer.disconnect()
    }, [])


    return (


        <div ref={heroSectionRef}>
            <Section className="relative mask-b-from-80% mask-radial-at-center mask-radial-from-30%">
                <HeroBackgroundParticles className="z-0" />
                <Container className=" w-full h-screen justify-center items-center flex">
                    <div className=" space-y-10 h-max">

                        <div className="space-y-4">



                            <h1 className={cn(" text-3xl min-[480px]:text-4xl md:text-5xl lg:text-7xl font-bold  mx-auto text-center  relative  tracking-tighter leading-tight  flex flex-col gap-4")}

                            >
                                <Animate type="fade-up" duration={1}>

                                    Digital solutions that move
                                </Animate>
                                <Animate type="fade-up" duration={1}>

                                    Brand forwards
                                </Animate>
                            </h1>

                            <Animate type="fade-up" duration={1} delay={0.5}>

                                <p
                                    className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-center relative">
                                    We engineer high-performance automation and digital ecosystems that
                                    <span className="text-white font-medium mx-2">
                                        streamline complexity
                                    </span>
                                    and
                                    <span className="text-white font-medium mx-2">
                                        accelerate growth
                                    </span>
                                    for manufacturing and professional service leaders.
                                </p>
                            </Animate>
                        </div>
                        <Animate type="fade-up" duration={1} delay={1}>

                            <div
                                className="cta-buttons flex gap-4 justify-center z-10"
                            >

                                <NavLink to="/contact" className="relative group/getStartedBtn">
                                    <FollowShimmerButton className="flex gap-2 cursor-pointer">
                                        <IconRocket className="size-6" />
                                        <span className="text-xl">Get started</span>
                                    </FollowShimmerButton>
                                </NavLink>
                            </div>
                        </Animate>
                    </div>
                </Container>

            </Section>
        </div>
    )
}

export default Hero

