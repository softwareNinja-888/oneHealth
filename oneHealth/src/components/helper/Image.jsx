export function Image({img, position='',animation=""}){
    return(
        <>
            <img src={img} alt="" className={`col-span-2 max-w-9/12 rounded-4xl h-48 ${position} `} />
        </>
    )
}