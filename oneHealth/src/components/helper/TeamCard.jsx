export function TeamCard({img,name,profession}){
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="">
                    <img src={img} alt="doctor image" className="rounded-4xl w-11/12 h-96" />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-lora text-3xl">{name}</div>
                    <div className="text-xl font-mont">{profession}</div>
                </div>
            </div>
        </>
    )
}