import { Button } from "./helper/Button";
import charity from '/ui/charity.png'
import healthcare from '/ui/healthcare.png'
import community from '/ui/community.png'
import { BenefitCard } from "./helper/BenefitCard";
import { SectionIntro } from "./helper/SectionIntro";

export function Benefits(){

    // TEXT FOR COMPONENTS
    const introText = 'Our healthcare services are built on trust, convenience, and expertise. We eliminate the hassle of long wait times by delivering top-quality, patient-centered care directly to you—because your health deserves nothing less.'

    const care ='We believe healthcare should be more than just treatment—it should be about genuine care and support. Our team is dedicated to providing compassionate, patient-centered services that prioritize your comfort, dignity, and well-being.'

    const team = 'Our highly skilled and experienced medical professionals are committed to delivering exceptional care with expertise and empathy. With a strong foundation in medical excellence, we ensure you receive the best treatment possible.'

    const approach = 'Your health needs are unique, and so is our approach. We tailor our services to fit your specific requirements, lifestyle, and preferences, ensuring that you receive care that truly works for you.'
    return (
        <>
            <div id="benefits" className=" flex flex-col gap-20 px-5 py-20 bg-primary z-10">
                <div className="flex flex-col gap-8 text-secondary lg:max-w-6/12">
                    <SectionIntro header={<Button text="Benefits" bg="bg-secondary" color="text-primary" width="w-52" fntSize="text-2xl"/>} name='Why We Stand Out' text={introText}/>
                </div>
                <div className="flex flex-col gap-28">
                    <BenefitCard img={charity} color='bg-otherPurple' name='Compassionate Care' text={care}/>
                    <BenefitCard position="items-end" img={healthcare} color='bg-secondary' name='Profesional Team' text={team}/>
                    <BenefitCard img={community} color='bg-otherLight' name='Personailsed Approach' text={approach}/>
        
                </div>
            </div>
        </>
    )
}