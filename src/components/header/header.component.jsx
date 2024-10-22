// Import
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Local Files
import logo from '../../assets/logo/logo.png';
import Button from './button.component';


export default function Header() {
    const logoRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            logoRef.current,
            { y: '50%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.5 }
        )
        .fromTo(
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

    return(
        <div className="flex items-center justify-between px-4 py-8">
            <div className="overflow-hidden" >
                <img ref={logoRef} src={logo} alt="Gulam Sulaman" className="h-6" />
            </div>
            <div className="overflow-hidden" >
                <div className="flex items-center gap-2">
                    <Button href="mailto:example@example.com">Email Me</Button>
                    <Button href="#" className="border border-dark border-opacity-25">My Resume</Button>
                </div>
            </div>
        </div>
    )
};