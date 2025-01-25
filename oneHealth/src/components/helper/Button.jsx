export function Button({text="",font='mont',width='36',bg='primary', color='secondary'}){
    return(
        <>
            <div className={`flex w-${width} justify-center border border-${bg} bg-${bg} text-${color} rounded-full py-3 px-3 font-${font} font-bold pr`}>{text}</div>
        </>
    )
}