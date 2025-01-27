export function BenefitCard({img,color,name,text,position="start"}){

    // FIND WAY TO DYNAMICALLY DISPLAY COLOR

    return (
        <>
            <div className={`flex flex-col gap-10  items-${position}`}>
                <div className={`flex justify-center w-28 h-28 ${color} rounded-full p-3 `}>
                    <img src={img} alt="charity hands" className="" />
                </div>
                <div className={`flex flex-col gap-4 ${color} text-primary px-4 py-10 rounded-4xl`}>
                    <div className="font-lora text-3xl">{name}</div>
                    <div className="font-roboto text-lg ">{text}</div>
                </div>
            </div>
        </>
    )
}