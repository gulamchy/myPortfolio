import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AboutTextModel } from "../../models/aboutText";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {

    const textRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        textRef.current.forEach((el) => {
            const splitText = new SplitType(el, { types: "words" });

            gsap.from(
                splitText.words,
                {
                    opacity: 0.2,
                    ease: "ease.inOut",
                    stagger: 0.1, 
                    delay: 1, 
                    scrollTrigger: {
                        trigger: el, 
                        scroller: containerRef.current,
                        start: "top top", 
                        end: "bottom 100%", 
                        scrub: true, 
                        toggleActions: "play none none reverse", 
                        markers: false,
                    },
                },
            );
        });

        return () => {
            textRef.current.forEach((el) => {
                if (el) {
                    SplitType.revert(el); 
                }
            });
        };
    }, []);
    

    return(
        <div 
            ref={containerRef}
            className="overflow-hidden h-full overflow-y-scroll no-scrollbar overflow-auto"
        >
            {AboutTextModel.map((aboutText, index) => (
                <div 
                    key={`container-${index}`}
                    className="overflow-hidden flex"
                >
                    <p 
                        ref={(el) => (textRef.current[index] = el)} 
                        key={aboutText.id} 
                        className="text-white w-[80vw] text-[5vw] sm:text-[3.5vw] text-center text-balance font-anton transition-opacity duration-500"
                    >
                        {aboutText.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default AboutText;