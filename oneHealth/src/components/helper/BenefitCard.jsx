export function BenefitCard({img,color,name,text,position="items-start"}){

    // FIND WAY TO DYNAMICALLY DISPLAY COLOR

    const direction = position === 'items-end' ? 'lg:flex-row-reverse' : '';
    console.log(direction)

    return (
        <>
            <div className={`flex flex-col lg:flex-row ${direction} lg:px-10 lg:gap-30 gap-10 lg:items-center lg:justify-center md:${position}`}>
                <div className={`flex justify-center w-28 h-28 ${color} px-3 rounded-full p-6  lg:h-32 lg:max-w-[40%] `}>
                    <img src={img} alt="charity hands" className="" />
                </div>
                <div className={`flex  flex-col gap-4 ${color} text-primary px-4 py-10 rounded-4xl lg:w-[55%] `}>
                    <div className="font-lora text-3xl">{name}</div>
                    <div className="font-roboto text-lg ">{text}</div>
                </div>
            </div>
        </>
    )
}