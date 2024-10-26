import AboutImage from "../components/about/aboutImage.component";
import AboutText from "../components/about/aboutText.component";

export default function About() {
    return (
    <div className="min-h-screen w-full flex flex-col justify-start bg-dark py-[20vw] sm:py-[10vw]"> 
            <div className="flex flex-col items-center justify-between h-full w-full top-0">
                <h2 className="font-syne font-extrabold text-white text-[10vw] sm:text-[6.667vw]">About</h2>
                <div className="relative h-[20vw] w-full">
                    <AboutImage />
                </div>
            </div>
            <div className="flex justify-center overflow-hidden  h-[120.833vw] sm:h-[40vw] py-8">
                <AboutText />
            </div>
    </div>
    )
}