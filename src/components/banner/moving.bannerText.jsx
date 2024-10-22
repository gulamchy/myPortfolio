// eslint-disable-next-line react/prop-types
export default function MovingText({children}) {
    return(
        // <div className="inline-block">
        //     <h1 className="text-white text-[1.944vw] font-syne font-extrabold inline-block">{children}</h1>
        //     <div className="h-[0.25vw] w-[4vw] bg-white inline-block mx-[1vw] my-[0.5vw]"></div>
        // </div>
        <div className="inline-block">
            <h1 className="text-white text-[2.917vw] sm:text-[1.944vw] font-syne font-extrabold inline-block">{children}</h1>
            <div className="h-[0.25vw] w-[4vw] bg-white inline-block mx-[1vw] my-[0.5vw]"></div>
        </div>
    )
}