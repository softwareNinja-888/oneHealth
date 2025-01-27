export function Button({text="",font='mont',width='w-36',bg='bg-primary', color='text-secondary',fntSize="text-md",position="center"}){
    return(
        <>
            <div className={`flex ${fntSize} ${width} justify-${position} ${bg} ${color} rounded-full py-3 px-3 font-${font} font-bold `}>{text}</div>
        </>
    )
}