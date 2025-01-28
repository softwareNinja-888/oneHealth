import back from '/nurse2.avif'
import { Button } from './helper/Button'
export function Hero(){

    function toContact(){
        const contactSection = document.getElementById("contact")
        contactSection ? contactSection.scrollIntoView({behavior:"smooth"}) : null;
    }
    
    return (

        <>
            <div className="bg-secondary mt-32">
                <div className="">
                    <img src={back} alt="background" className="w-screen size-auto" />
                </div>
                <div className=" text-primary px-5 flex flex-col gap-4 py-20">
                    <div className="font-lora text-3xl">Discover Quality Care</div>
                    <div className="font-mont text-xl">Cutomized and Reliable Health Care Right at your Home</div>
                    <div className="font-roboto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus earum quisquam facilis sint nesciunt iste maiores laborum quibusdam eligendi atque sequi, quasi doloremque adipisci fugiat dicta rem at hic!</div>
                    
                    <div className="mt-10" >
                        <a onClick={()=>{toContact()}}>
                            <Button text='Contact Us' bg='bg-primary' color='text-secondary' width='w-52' fntSize='text-2xl' action={true} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}