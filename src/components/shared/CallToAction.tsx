
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import Section from "../layout/Section";
import Container from "../layout/Container";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

const CallToAction = () => {
    return (
        <Section className="relative mx-auto flex w-full  items-center justify-center min-h-max">

            <Container>
                <DottedGlowBackground
                    className="pointer-events-none mask-radial-to-80% mask-radial-at-center opacity-20 dark:opacity-100"
                    opacity={1}
                    gap={10}
                    radius={1.6}
                    colorLightVar="--color-neutral-500"
                    glowColorLightVar="--color-neutral-600"
                    colorDarkVar="--color-neutral-500"
                    glowColorDarkVar="--color-sky-800"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={1.6}
                    speedScale={1}
                />

                <div className="relative z-10 flex w-full flex-col items-center justify-center space-y-8 px-8 py-16 text-center ">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-center text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl md:text-left dark:text-neutral-400">
                            Ready to transform{" "}
                            <span className="font-bold dark:text-white">Your Business </span>?
                        </h2>
                        <p className="mt-4 text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
                            Unlock your true business potential and much more.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <NavLink to="/contact">

                            <Button className="transition-all duration-300 cursor-pointer scale-125 hover:scale-110 rounded-full">
                                Get started
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </Section >
    );
}


export default CallToAction;