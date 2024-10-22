import { useRef, useEffect } from "react";
import Button from "../header/button.component";
import MovingContainer from "./moving.bannerContainer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import 'remixicon/fonts/remixicon.css';


gsap.registerPlugin(ScrollTrigger);

export default function MiddleText() {
    const gulamRef = useRef(null);
    const chyRef = useRef(null);
    const iconRef = useRef(null);
    const iconRef2 = useRef(null);



    useEffect(() => {
        const splitGulam = new SplitType(gulamRef.current, { types: "chars" });
        const splitChy = new SplitType(chyRef.current, { types: "chars" });

        const gulamTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: gulamRef.current,
                start: "top 50%",  // Adjust as necessary
                end: "top+=60% top",
                toggleActions: "play reverse play reverse", // Play and reverse on enter/leave
                onLeave: () => gulamTimeline.reverse(),
                onEnterBack: () => gulamTimeline.play(),
            }
        });

        gulamTimeline.from(splitGulam.chars, {
            opacity: 0,
            y: 50,
            duration: 0.85,
            stagger: 0.05,
            ease: "power3.inOut",
        });

        // Animation for 'Choudhury'
        const chyTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: chyRef.current,
                start: "top center",
                end: "top+=60% top",
                toggleActions: "play reverse play reverse", // Reverse on leave and play again on enter
                onLeave: () => chyTimeline.reverse(),
                onEnterBack: () => chyTimeline.play(),
            }
        });

        chyTimeline.from(splitChy.chars, {
            opacity: 0,
            y: -50,
            duration: 0.85,
            stagger: 0.05,
            ease: "power3.inOut",
        });

        const animateIcon = () => {
            gsap.to(iconRef.current, {
                y: 7,  // Move down 10 pixels
                duration: 0.5,
                yoyo: true, // Reverse the animation
                repeat: -1, // Repeat indefinitely
                ease: "power4.Out",
            });
            gsap.to(iconRef2.current, {
                y: 7,  // Move down 10 pixels
                duration: 0.5,
                yoyo: true, // Reverse the animation
                repeat: -1, // Repeat indefinitely
                ease: "power4.Out",
            });
        };

        animateIcon();

    }, []);
    // },[gulamRef])

    return(
        <div className="flex flex-col justify-between min-h-screen">
            <div className="relative flex flex-col items-center flex-grow"> 
                <div className="z-0 flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 
                        ref={gulamRef}
                        className="text-dark font-anton uppercase text-[20vw] sm:text-[18vw] pb-4 sm:p-0 leading-none flex"
                    >
                        Gulam
                    </h1>
                    <h1 
                        ref={chyRef}
                        className="text-dark font-anton uppercase text-[20vw] sm:text-[18vw]  pt-4 sm:p-0 leading-none flex"
                    >
                        Choudhury
                    </h1>
                </div>

                <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-dark overflow-x-auto no-scrollbar w-[90vw] sm:w-[80vw] h-[20vw] sm:h-[10.417vw] whitespace-nowrap inline-block flex items-center">
                        <MovingContainer />
                        <MovingContainer />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4 py-8 transition all">
                
                <div>
                    <h4 className="font-syne font-semibold text-dark opacity-50 hidden sm:flex items-center text-[3.333vw] md:text-[1.667vw] lg:text-[1.111vw] ">
                        Scroll Down  <i ref={iconRef2}className="ri-corner-right-down-line"></i>
                    </h4>
                    <h4 className="font-syne font-semibold text-dark opacity-50 sm:hidden flex items-center text-[3.333vw] md:text-[1.667vw] lg:text-[1.111vw]">
                    <i ref={iconRef}className="ri-corner-right-down-line"></i>
                    </h4>
                </div>

                <div className="flex items-center">
                    <Button href="https://www.instagram.com/abir_sulaman/">Instagram</Button>
                    <Button href="https://www.linkedin.com/in/gulamsulaman">Linkedin</Button>
                    <Button href="https://github.com/gulamchy">Github</Button>
                </div>

            </div>
        </div>
    )
}