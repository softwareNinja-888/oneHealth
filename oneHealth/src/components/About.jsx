import { Button } from "./helper/Button";
import { ImageDisplay } from "./helper/ImageDisplay";

export function About(){
    return (
        <>
            <div className="bg-primary text-secondary px-5 flex flex-col gap-4 py-9">
                <Button text="About Us" bg="otherLight" color="primary" width="44"/>
                <div className="font-lora text-3xl">Passion-Driven Care, Delivered to Your Door</div>
                <div className="font-roboto text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi saepe consequuntur voluptatum quod voluptatem est exercitationem atque assumenda neque. Adipisci corrupti saepe perferendis architecto voluptates assumenda autem tempora laboriosam tempore!</div>
                <ImageDisplay/>
            </div>
        </>
    )
}