import { BulletPoint } from "./BulletPoint"
export function ServiceCard({img,color="primary",service,description, middle=false }){
    return (
        <>
            <div className={`flex flex-col gap-4  ${middle ? 'lg:mt-20' : ''} `}>
                <img src={img} alt="service image" className="h-72 lg:h-96 rounded-4xl w-11/12 lg:w-12/12" />
                <div className="flex gap-2">
                    <div className="self-center">
                        <BulletPoint size='14px' color={color}/>
                    </div>
                    <div className="">
                        <div className="font-lora text-3xl">{service}</div>
                        <div className="font-roboto text-lg">{description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}