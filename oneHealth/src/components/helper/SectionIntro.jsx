export function SectionIntro({ header, name, text = "" }) {
    return (
        <>
            <div className="flex flex-col gap-10">
                {header}
                <div className="text-4xl lg:text-6xl font-lora font-bold">
                    {name}
                </div>
                {text === "" ? null : (
                    <div className="text-lg lg:text-2xl font-roboto leading-relaxed">
                        {text}
                    </div>
                )}
            </div>
        </>
    );
}
