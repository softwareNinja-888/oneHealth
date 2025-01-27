import { SectionIntro } from "./helper/SectionIntro";
import { Button } from "./helper/Button";

export function Team(){
    return (
        <>
            <div className="bg-otherPurple text-primary px-5 flex flex-col gap-4 py-20">
                <SectionIntro header={<Button text="Meet The Team" bg="bg-primary" color="text-otherPurple" width="w-52" fntSize="text-xl"/>}  name="The Heart of Our Care" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo, doloremque accusamus id doloribus voluptate illum aliquam deleniti enim deserunt facere, ab consectetur officia at incidunt corrupti, culpa veritatis nihil?'/>
            </div>
        </>
    )
}