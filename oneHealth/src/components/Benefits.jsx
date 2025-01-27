import { Button } from "./helper/Button";
import charity from '/ui/charity.png'
import healthcare from '/ui/healthcare.png'
import community from '/ui/community.png'
import { BenefitCard } from "./helper/BenefitCard";

export function Benefits(){
    return (
        <>
            <div className="bg-primary">

                <Button text="Benefits"/>
                <div className="">
                    <div className="">Why We Stand Out</div>
                    <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, expedita voluptates corrupti deserunt autem laudantium rerum commodi nulla cum obcaecati consequatur magni minus explicabo culpa qui amet, ut enim ipsum.</div>
                </div>
                <div className="flex flex-col gap-28">
                    <BenefitCard img={charity} color='bg-otherPurple' name='Compassionate Care' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
                    <BenefitCard position="end" img={healthcare} color='bg-secondary' name='Proffesional Team' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
                    <BenefitCard img={community} color='bg-otherLight' name='Personailsed Approach' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab mollitia accusantium distinctio iusto qui perspiciatis architecto earum dicta, dignissimos similique adipisci, reprehenderit cum velit repellendus ducimus praesentium, ad debitis?'/>
        
                </div>
            </div>
        </>
    )
}