export function SectionIntro({header, name, text}){
    return (
        <>    
            <div className="flex flex-col gap-10">
                {header}
                <div className="text-3xl font-lora">{name}</div>
                <div className="text-lg font-roboto">{text}</div>
            </div>
        </>
    )
}