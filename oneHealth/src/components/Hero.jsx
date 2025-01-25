import back from '/health.avif'
import { Button } from './helper/Button'
export function Hero(){
    return (
        <>
            <div className="">
                <div className="">
                    <img src={back} alt="background" className="w-screen h-72" />
                </div>
                <div className="bg-secondary text-primary px-5 flex flex-col gap-4 py-9">
                    <div className="font-lora text-3xl">Discover Quality Care</div>
                    <div className="font-mont text-xl ">Cutomized and Reliable Health Care Right at your Home</div>
                    <div className="font-roboto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus earum quisquam facilis sint nesciunt iste maiores laborum quibusdam eligendi atque sequi, quasi doloremque adipisci fugiat dicta rem at hic!</div>
                    
                    <Button text='Contact Us' bg='secondary' color='primary'/>
                </div>
            </div>
        </>
    )
}