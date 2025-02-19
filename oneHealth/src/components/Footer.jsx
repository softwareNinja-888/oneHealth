import { Button } from "./helper/Button"
import { FormFooter } from "./helper/FormFooter"

import logo from '/nlogo.avif'
export function Footer(){
    return (
        <>
            <div className="bg-[#0d5d40] pt-20">
                <div className="lg:flex lg:justify-between lg:items-center lg:px-20 lg:gap-0 w-screen`">
                  <div className="hidden w-full h-96 lg:flex lg:flex-col lg:justify-between lg:items-start">
                    <div className="">
                      {/*<Button text="One Health" bg="bg-secondary" color="text-primary" width="w-72" fntSize="text-3xl"  />*/}
                        <img src={logo} alt="logo" className="w-72" />
                    </div>

                    <div className="text-secondary font-lora text-xl flex flex-col gap-16">
                      <div className="">+27 83 356 7893 <br /> info@site.com</div>
                      <div className="">500 Terry Frnachise St. <br /> San Francisco, CA 94158</div>
                    </div>
                  </div>
                  <div className="">
                    <div id="contact" className="text-4xl font-lora font-bold text-center text-secondary mb-16">Contact Us</div>
                    <FormFooter/>
                  </div>
                </div>
                <div className="flex justify-center py-6">
                    <div className="text-sm text-center text-secondary">&copy; 2025 by Salt and Light Ministries</div>
                </div>
            </div>
        </>
    )
}
