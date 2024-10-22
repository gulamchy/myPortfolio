
import AboutImage from "../components/about/aboutImage.component";
import AboutText from "../components/about/aboutText.component";

export default function About() {
    return (
    <div className="min-h-screen w-full flex flex-col justify-evenly bg-dark px-8 py-8"> 
        <div className="flex flex-grow items-center justify-center bg-dark">
            <div className="flex flex-col items-center justify-between h-full w-full">
                <h2 className=" font-syne font-extrabold text-white text-[6.667vw] bottom-0">About</h2>
                <div className="relative h-[20vw] w-full">
                    <AboutImage />
                </div>
            </div>
        </div>
         <div className="flex flex-grow justify-center overflow-hidden h-[40vw] py-8">
            <AboutText />
        </div>
        {/* <ImageTrail /> */}
    </div>
    )
}