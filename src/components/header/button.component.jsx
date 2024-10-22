/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Button({ children, href, onClick, className = '', ...props }) {
    const buttonsRef = useRef(null);
    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            buttonsRef.current,
            { y: '50%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.5 },
            '-=0.2' // Overlap slightly with the logo animation
        );

        // Clean up the timeline on component unmount
        return () => {
            timeline.kill();
        };
    }, []);

    if (href) {
        return (
            <a 
                ref={buttonsRef}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-4 sm:px-8 transition-all flex items-center justify-center py-[1.111vw] sm:py-[1.667vw] rounded-full h-11 font-syne font-semibold text-[3.333vw] md:text-[1.667vw] lg:text-[1.111vw] ${className}`}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button 
            ref={buttonsRef} 
            onClick={onClick} 
            className={`px-4 sm:px-8 transition-all border border-dark border-opacity-25 py-[1.111vw] sm:py-[1.667vw] rounded-full h-11 font-syne font-semibold text-[3.333vw] md:text-[1.667vw] lg:text-[1.111vw] ${className}`}
            {...props}
        >
            {children}
        </button>
        
    );
}
