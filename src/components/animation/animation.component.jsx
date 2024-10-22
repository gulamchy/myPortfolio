import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';




// eslint-disable-next-line react/prop-types
export default function Animation ({ text, active, tagName }){
    const textRef = useRef(null);

    // Function to animate lines
    const animateLines = () => {
        const splitText = new SplitType(textRef.current, { 
            types: 'lines',
            tagName: `${tagName}`, 
        });

        const lines = splitText.lines;

        lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.className = 'line-wrapper overflow-hidden';
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.fromTo(
            lines,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.05,
                ease: 'ease.inOut',
                onComplete: () => splitText.revert(), 
            }
        );
    };

    // Function to animate characters

    // const animateCharacters = () => {
    //     const splitText = new SplitType(textRef.current, { 
    //         types: 'chars',
    //         tagName: 'span', 
    //     });

    //     const chars = splitText.chars;

    //     gsap.fromTo(
    //         chars,
    //         { opacity: 0, scale: 0.8, y: 50 },
    //         {
    //             opacity: 1,
    //             scale: 1,
    //             y: 0,
    //             duration: 0.5,
    //             stagger: 0.02,
    //             ease: 'back.out(1.7)',
    //             onComplete: () => splitText.revert(), 
    //         }
    //     );
    // };

    // Trigger both animations when the component becomes active
    useEffect(() => {
        if (active) {
            animateLines(); 
            // if(tagName!='div') {   // Animate lines
            //     animateCharacters(); 
            // } // Animate characters
        }
    }, [active]);

    return (
        <div ref={textRef} className="split-me overflow-hidden uppercase text-[6vw] sm:text-[3.5vw] text-center font-anton top-0 transition-opacity duration-500 h-[85.25vw] sm:h-[27vw]">
            {text}
        </div>
    );

};

