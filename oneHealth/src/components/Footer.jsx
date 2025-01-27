import { FormFooter } from "./helper/FormFooter"
export function Footer(){
    return (
        <>
            <div className="bg-primary pt-20">
                <div id="contact" className="text-4xl font-lora font-bold text-center text-secondary mb-16">Contact Us</div>
                <FormFooter/>
                <div className=" py-6 text-secondary">
                    <div className="text-sm text-center dark:text-black">&copy; 2025 by Salt and Light Ministries</div>
                </div>
            </div>
        </>
    )
}