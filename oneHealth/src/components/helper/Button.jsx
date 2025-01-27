export function Button({text="",font='mont',width='36',bg='bg-primary', color='text-secondary',fntSize="text-md",position="center"}){
    return(
        <>
            <div className={`flex ${fntSize} w-${width} justify-${position} ${bg} ${color} rounded-full py-3 px-3 font-${font} font-bold `}>{text}</div>
        </>
    )
}