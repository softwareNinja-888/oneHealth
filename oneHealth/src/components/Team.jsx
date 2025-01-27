import { SectionIntro } from "./helper/SectionIntro";
import { Button } from "./helper/Button";
import { TeamCard } from "./helper/TeamCard";

import doctorGp from '/doctorGp.avif'
// import Counselor from '/counselor.avif'
import psychologist from '/psychologist.avif'
import spineSurgen from '/spineSurgen.avif'
import doctorGp2 from '/doctorGp2.avif'

export function Team(){
    return (
        <>
            <div id="team" className="bg-otherPurple text-primary px-5 flex flex-col gap-16 py-20">
                <SectionIntro header={<Button text="Meet The Team" bg="bg-primary" color="text-otherPurple" width="w-52" fntSize="text-xl"/>}  name="The Heart of Our Care" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo, doloremque accusamus id doloribus voluptate illum aliquam deleniti enim deserunt facere, ab consectetur officia at incidunt corrupti, culpa veritatis nihil?'/>
                <div className="flex flex-col gap-16">
                    <TeamCard name='John Doe' profession='General Practitioner (GP)' img={doctorGp}/>
                    <TeamCard name='David Brown' profession='General Practitioner (GP)' img={doctorGp2}/>
                    <TeamCard name='John Doe' profession='Spine Surgen (MD)' img={spineSurgen}/>
                    <TeamCard name='Jane Smith' profession='General Practitioner (Psych)' img={psychologist}/>
                </div>
            </div>
        </>
    )
}