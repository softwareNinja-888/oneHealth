import { SectionIntro } from "./helper/SectionIntro"
import { Button } from "./helper/Button"
import { TestimonialsCard } from "./helper/TestimonialsCard"

export function Testimonials(){
    const Testimonials = {
        'Alex Chan': 'I was at my lowest, struggling with a chronic illness, and felt like I had no options left. The doctors here didn’t just treat me—they gave me hope. Their unwavering support and expert care have completely transformed my life. I am healthier, happier, and finally living without constant pain. I will forever be grateful.',
        'Sarah Johnson': 'After a serious accident, I was told I might never walk properly again. But this team believed in me when I didn’t believe in myself. The surgeons, therapists, and support staff worked tirelessly to help me heal. Now, I’m not only walking—I’m running! They gave me back my independence and my future.',
        'Maria Rodriguez': 'Years of anxiety and depression left me feeling lost, but the psychologists here changed everything. Their guidance helped me rebuild my confidence, find inner peace, and take control of my life again. I never thought I’d feel this strong and free. They didn’t just help me recover—they helped me rediscover myself.',

    }

    console.log(Testimonials.keys)

    return (
        <>
            <div id="testimonials" className="bg-otherLight px-5 py-20  text-primary flex flex-col gap-16 ">
                <div className="">
                    <SectionIntro header={<Button text="Testimonials" bg="bg-secondary" color="text-primary" width="w-52" fntSize="text-xl"/>}  name="Real Stories, Real Impact" />
                </div>
                <div className="flex flex-col gap-16 lg:flex-row">
                    {Object.keys(Testimonials).map((author)=>{
                        return(
                            <TestimonialsCard author={author} text={Testimonials[author]}/>
                        )

                    })}
               {/*     <TestimonialsCard author='Alex Chan' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>
                    <TestimonialsCard author='Sarah Johnson' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>
                    <TestimonialsCard author='Maria Rodriguez' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae libero odio illo quasi eaque molestias obcaecati inventore atque ad est. Blanditiis quisquam asperiores, vitae fugiat quia dolorum? A, voluptates libero.'/>*/}
                </div>
            </div>
        </>
    )
}