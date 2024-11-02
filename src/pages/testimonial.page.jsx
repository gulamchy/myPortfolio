import Button from "../components/header/button.component";
import TestimonialText from "../components/testimonial/testimonial.component";

const Testimonial = ()=> {
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray py-[20vw] sm:py-[10vw]">

            <div className="h-[22vw] sm:h-[13vw] w-full">
                <div className="relative h-full flex items-start justify-center"> 
                    <p className="font-anton text-[50vw] sm:text-[30vw] text-white absolute leading-none">&ldquo;</p>
                    <p className="absolute z-10 bottom-0 text-center text-dark font-syne  text-[2.5vw] sm:text-[1.111vw]">Messages of Love & Support</p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full ">
                <TestimonialText />
            </div>
            <div className="mt-auto flex justify-center">
                <Button href="mailto:gulamsulaman@gmail.com" className="bg-white font-syne font-bold">Send your good words</Button>
            </div>
            <span className="text-white font-syne py-4 text-[1.714vw] sm:text-[0.833vw]">Include your name and profession please</span>
        </div>
        
    )
};

export default Testimonial;