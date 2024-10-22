import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
    const pageRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        // Handle mouse movement
        const handleMouseMove = (e) => {
          const x = Math.round((e.clientX / window.innerWidth) * 100);
          const y = Math.round((e.clientY / window.innerHeight) * 100);
    
            gsap.to(
                overlayRef.current, 
                {
                    '--x': `${x}%`,
                    '--y': `${y}%`,
                    delay: 0.1,
                    ease: 'back.out',
                }
            );
        };

        const handleTouchMove = (e) => {
            // Get the touch point's coordinates
            const touch = e.touches[0];
            const x = Math.round((touch.clientX / window.innerWidth) * 100);
            const y = Math.round((touch.clientY / window.innerHeight) * 100);

            gsap.to(overlayRef.current, {
                '--x': `${x}%`,
                '--y': `${y}%`,
                delay: 0.1,
                ease: 'back.out',
            });
        };

        ScrollTrigger.create({
            trigger: overlayRef.current,
            start: "top 50%", 
            end: "bottom 20%", 
            scrub: true, 
            onUpdate: (self) => {
              const progress = self.progress; // Progress of scroll (0 to 1)
              const scale = 1 + progress * 1.5; // Scale clip-path from 1 to 2.5
              gsap.to(overlayRef.current, {
                clipPath: `circle(${scale * 15}vw at var(--x, 50%) var(--y, 50%))`,
              });
            },
          });

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleMouseMove);
        };
    },[]);



    return (
        <div 
            ref={pageRef}
            className="relative"
        >
            <div className="absolute flex flex-col items-center justify-center h-screen w-screen py-8 bg-dark">
                <div className="flex flex-col items-center justify-evenly rounded-full h-[50vw] w-[50vw]">
                    <p className="text-white text-center uppercase text-[2vw] sm:text[1.389vw] font-anton w-[37vw] sm:w-[36vw]"></p>
                    <h3 className="font-syne font-extrabold text-white text-[6.667vw]"></h3>
                    <div className="flex justify-between items-center w-[38vw] py-[1.667vw]">
                        <span className="text-[1.5vw] font-normal text-white">

                        </span>
                        <span className="text-[1.5vw] font-normal text-white text-right">

                        </span>
                    </div>
                </div>
            </div>

            <div 
                ref={overlayRef}
                className="sticky bottom-0 absolute flex flex-col items-center justify-center h-screen w-screen bg-white py-8"
                style={{
                    clipPath: `circle(25vw at var(--x, 50%) var(--y, 50%))`,
                    transition: 'clip-path 100ms',
                  }}
            
            >
                <div className="flex flex-col items-center justify-evenly rounded-full h-[50vw] w-[50vw]">
                    <p className="text-dark text-center uppercase text-[2vw] sm:text[1.389vw] font-anton w-[37vw] sm:w-[36vw]">I am so happy that you stopped by. I would to hear from you. Feel free to reach out.</p>
                    <h3 className="font-syne font-extrabold text-dark text-[6.667vw]">Thanks</h3>
                    <div className="flex justify-between items-center w-[38vw] border-t border-dark border-t-[.3vw] sm:border-t-[.15vw] py-[1.667vw]">
                        <span className="text-[1.5vw] font-normal text-dark font-syne">
                        Based in Seattle
                        </span>
                        <span className="text-[1.5vw] font-normal text-dark text-right font-syne">
                        All rights reserved © 2024
                        </span>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Footer;