import { SectionIntro } from "./helper/SectionIntro"
import { Button } from "./helper/Button"
import { TestimonialsCard } from "./helper/TestimonialsCard"

export function Testimonials(){

    return (
        <>
            <div className="bg-otherLight px-5 py-20  text-primary flex flex-col gap-16 ">
                 <SectionIntro header={<Button text="Testimonials" bg="bg-secondary" color="text-primary" width="w-52" fntSize="text-xl"/>}  name="Real Stories, Real Impact" />
                 <TestimonialsCard author='Alex Chan' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>
                 <TestimonialsCard author='Sarah Johnson' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>
                 <TestimonialsCard author='Maria Rodriguez' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>
            </div>
        </>
    )
}