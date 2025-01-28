import { Button } from "./helper/Button";
import charity from '/ui/charity.png'
import healthcare from '/ui/healthcare.png'
import community from '/ui/community.png'
import { BenefitCard } from "./helper/BenefitCard";
import { SectionIntro } from "./helper/SectionIntro";

export function Benefits(){
    return (
        <>
            <div id="benefits" className=" flex flex-col gap-20 px-5 py-20 bg-primary lg:rounded-b-4xl  lg:rounded-t-4xl z-10">
                <div className="flex flex-col gap-8 text-secondary lg:max-w-6/12">
                    <SectionIntro header={<Button text="Benefits" bg="bg-secondary" color="text-primary" width="w-52" fntSize="text-2xl"/>} name='Why We Stand Out' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, expedita voluptates corrupti deserunt autem laudantium rerum commodi nulla cum obcaecati consequatur magni minus explicabo culpa qui amet, ut enim ipsum.'/>
                </div>
                <div className="flex flex-col gap-28">
                    <BenefitCard img={charity} color='bg-otherPurple' name='Compassionate Care' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
                    <BenefitCard position="items-end" img={healthcare} color='bg-secondary' name='Profesional Team' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
                    <BenefitCard img={community} color='bg-otherLight' name='Personailsed Approach' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
        
                </div>
            </div>
        </>
    )
}