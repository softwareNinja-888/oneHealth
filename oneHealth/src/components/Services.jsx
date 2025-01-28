import { Button } from "./helper/Button";
import { ServiceCard } from "./helper/ServiceCard";

import health from '/health.avif'
import care from '/nursePscy.avif'
import surgery from '/maleNurse.avif'
import { SectionIntro } from "./helper/SectionIntro";

export function Services(){
    return (
        <>
            <div id="services" className="bg-otherLight px-5 py-20 flex flex-col gap-32">
                <div className="text-primary ">
                    <SectionIntro header={<Button text="Our Services" bg="bg-primary" color="text-secondary" fntSize="text-xl" width="w-52"  />} name='Discover Our Service'/>
                </div>
                <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
                    <ServiceCard img={health} color="otherPurple" service="Personalised Care" description="Tailored to Your Needs"/>
                    <ServiceCard img={care} color="secondary" service="Skilled Nursing" description="Professional Medical Assitance" middle={true}/>
                    <ServiceCard img={surgery} color="primary" service="Therapy Services " description="Rehabilitation and Support"/>
                </div>

                {/* <div className="flex flex-col gap-4">
                    <img src={care} alt="service image" className="h-72 rounded-4xl w-11/12" />
                    <div className="flex gap-2">
                        <div className="self-center">
                            <BulletPoint size='14px'/>
                        </div>
                        <div className="">
                            <div className="font-lora text-3xl">Personalised Care</div>
                            <div className="font-roboto text-lg">Tailored to Your Needs</div>
                        </div>
                    </div>
                </div> */}
            </div> 
        </>
    )
}