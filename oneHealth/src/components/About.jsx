import { Button } from "./helper/Button";
import { ImageDisplay } from "./helper/ImageDisplay";
import { SectionIntro } from "./helper/SectionIntro";

export function About() {
    const aboutText = 'At One Health, we bring exceptional healthcare to you. Whether you’re managing a chronic condition, recovering from an injury, or simply need personalized care, our team provides tailored treatments and unwavering support—right in the comfort of your home. Your health, your home, our priority.'


    return (
        <>
            <div
                id="about"
                className="bg-primary text-secondary px-5 py-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 "
            >
                {/* SectionIntro and ImageDisplay side by side on larger screens */}
                <div className="flex-1 self-center">
                    <SectionIntro
                        header={
                            <Button
                                text="About Us"
                                bg="bg-otherLight"
                                color="text-primary"
                                width="w-52"
                                fntSize="text-xl"
                            />
                        }
                        name="Passion-Driven Care, Delivered to Your Door"
                        text={aboutText}
                    />
                </div>

                <div className="flex-1">
                    <ImageDisplay />
                </div>
            </div>
        </>
    );
}
