export function TestimonialsCard({author,text}){
    return (
        <>
            <div className="flex flex-col items-center bg-secondary gap-3 py-16 px-3 rounded-4xl">
                <div className="font-roboto text-xl text-center">{`"${text}"`}</div>
                <div className="text-xl font-lora">- {author}</div>
            </div>
        </>
    )
}