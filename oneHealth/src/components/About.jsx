import { Button } from "./helper/Button";
import { ImageDisplay } from "./helper/ImageDisplay";
import { SectionIntro } from "./helper/SectionIntro";

export function About() {
    return (
        <>
            <div
                id="about"
                className="bg-primary text-secondary px-5 py-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 lg:rounded-b-4xl"
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
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi saepe consequuntur voluptatum quod voluptatem est exercitationem atque assumenda neque. Adipisci corrupti saepe perferendis architecto voluptates assumenda autem tempora laboriosam tempore!"
                    />
                </div>

                <div className="flex-1">
                    <ImageDisplay />
                </div>
            </div>
        </>
    );
}
