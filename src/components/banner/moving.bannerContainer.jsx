// import MovingText from "./moving.bannerText";

// export default function MovingContainer() {
//     const roles = ["Designer", "Programmer", "Developer", "Engineer", "Traveler", "Leader"];

//     return (
//         // animate-bannerAnimation
//         <div className="inline-block ">
//             {roles.map(role => (
//                 <MovingText key={role}>{role}</MovingText>
//             ))}
//         </div>
//     )
// }

import { useRef, useEffect } from "react";
import MovingText from "./moving.bannerText";
import { gsap } from "gsap";

export default function MovingContainer() {
    const containerRef = useRef(null);
    const roles = ["Designer", "Programmer", "Developer", "Engineer", "Traveler", "Leader"];
    let xPercent = 0; 
    let direction = -1;

    useEffect(() => {
        const animation = () => {
            gsap.set(containerRef.current, { xPercent: xPercent });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            xPercent += 0.1 * direction; 
            if (xPercent <= -100) {
                xPercent = 0; 
            }
            requestAnimationFrame(animation); 
        };

        animation();
    }, []);

    return (
        <div ref={containerRef} className="inline-block whitespace-nowrap">
            {roles.map(role => (
                <MovingText key={role}>{role}</MovingText>
            ))}
        </div>
    );
}
