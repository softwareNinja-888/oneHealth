import { SectionIntro } from "./helper/SectionIntro";
import { Button } from "./helper/Button";
import { TeamCard } from "./helper/TeamCard";

import gp from '/gp.avif'
import gp2 from '/gp2.avif'
import psychologist from '/psychologistNew.avif'
import surgen from '/surgen.avif'

export function Team(){
    return (
        <>
            <div id="team" className="bg-otherPurple text-primary px-5 flex flex-col gap-16 py-20 lg:rounded-b-4xl lg:-mt-0 z-0 ">
                <div className="lg:max-w-8/12">
                    <SectionIntro header={<Button text="Meet The Team" bg="bg-primary" color="text-otherPurple" width="w-52" fntSize="text-xl"/>}  name="The Heart of Our Care" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo, doloremque accusamus id doloribus voluptate illum aliquam deleniti enim deserunt facere, ab consectetur officia at incidunt corrupti, culpa veritatis nihil?'/>

                </div>
                <div className="flex flex-col gap-16 lg:flex-row lg:gap-2 lg:justify-center">
                    <TeamCard name='John Doe' profession='General Practitioner ' img={gp}/>
                    <TeamCard name='John Doe' profession='Spine Surgen (MD)' img={surgen}/>
                    <TeamCard name='Jane Smith' profession='Psychologist (Psych)' img={psychologist}/>
                </div>
            </div>
        </>
    )
}