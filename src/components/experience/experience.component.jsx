import { useRef, useEffect, useState } from "react";
import { experienceModel } from "../../models/experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ExperienceComponent = () => {
    const expRef = useRef([]); 
    const textRefs = useRef([]); 
    const detailsRef = useRef([]); 
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        expRef.current.forEach((expItem, index) => {
            gsap.fromTo(
                expItem, 
                {
                    opacity: 0,
                    y: 100,
                }, 
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: expItem,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            const [date, employer, title, subtitle] = textRefs.current[index];
            gsap.fromTo(
                [date, employer, title, subtitle],
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "ease.inOut",
                    duration: 0.8,
                    stagger: 0.1, 
                    scrollTrigger: {
                        trigger: expItem,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, []);

    useEffect(() => {
        if (expandedIndex !== null) {
            // const detailsItems = detailsRef.current[expandedIndex]?.querySelectorAll("li");
            const detailsItems = detailsRef.current[expandedIndex]?.querySelectorAll("li");
            if (detailsItems) {
                gsap.fromTo(
                    detailsItems,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "ease.inOut",
                        duration: 0.5,
                        stagger: 0.1, 
                    }
                );
            }
        }
    }, [expandedIndex]);

    const handleJobClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="">
            {experienceModel.map((experience, index) => (
                <div 
                    key={index} 
                    className="w-[80vw] border-b border-white border-opacity-30 min-h-[8.333vw] flex items-start justify-between py-4 my-8 cursor-pointer"
                    ref={(el) => (expRef.current[index] = el)} // Reference for the experience container
                    onClick={() => handleJobClick(index)}
                >
                    {index % 2 === 0 ? (
                        <>
                            <img src={experience.logo} alt="logo" className="w-[5.278vw]" />
                            <div className="flex flex-col justify-end gap-2">
                                <div className="flex items-center gap-4 justify-end">
                                    <p 
                                        className="font-syne text-white text-right opacity-70 uppercase font-bold"
                                        ref={(el) => (textRefs.current[index] = [el, textRefs.current[index]?.[1], textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[0]} // Date ref
                                    >
                                        {experience.date}
                                    </p>
                                    <p className="font-syne text-white text-right opacity-70 uppercase font-bold">||</p>
                                    <p 
                                        className="font-syne text-white text-right opacity-70 uppercase font-bold"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], el, textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[1]} // Employer ref
                                    >
                                        {experience.employer}
                                    </p>
                                </div>

                                <div className="h-[0.1vw] w-[5vw] ml-auto opacity-30"></div>
                                <div className="flex flex-col justify-end">
                                    <h4 
                                        className="uppercase font-anton text-white text-[2.222vw] text-right"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], el, textRefs.current[index]?.[3]])[2]} // Title ref
                                    >
                                        {experience.title}
                                    </h4>
                                    <p 
                                        className="font-syne text-white text-right font-bold"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], textRefs.current[index]?.[2], el])[3]} // Subtitle ref
                                    >
                                        {experience.subtitle}
                                    </p>
                                </div>

                                {expandedIndex === index && (
                                    <div 
                                        className="mt-4 p-4 flex items-end"
                                        ref={(el) => (detailsRef.current[index] = el)} 
                                    >
                                        <ul className="text-left text-[1vw] text-white">
                                            {experience.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-[1.111vw] justify-end">
                                                    <span className="text-white text-[1.667vw] font-syne font-semibold mb-2 opacity-80 ">{detail}</span>
                                                    <div className="w-[1.111vw] h-[1.111vw] bg-white opacity-30"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col justify-start gap-2">
                                <div className="flex items-center gap-4">
                                    <p 
                                        className="font-syne text-white text-left opacity-70 uppercase font-bold"
                                        ref={(el) => (textRefs.current[index] = [el, textRefs.current[index]?.[1], textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[0]} // Employer ref
                                    >
                                        {experience.employer}
                                    </p>
                                    <p className="font-syne text-white text-left opacity-70 uppercase font-bold">||</p>
                                    <p 
                                        className="font-syne text-white text-left opacity-70 uppercase font-bold"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], el, textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[1]} // Date ref
                                    >
                                        {experience.date}
                                    </p>
                                </div>
                                <div className="h-[0.1vw] w-[5vw] mr-auto opacity-30"></div>
                                <div className="flex flex-col justify-start">
                                    <h4 
                                        className="uppercase font-anton text-white text-[2.222vw] text-left"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], el, textRefs.current[index]?.[3]])[2]} // Title ref
                                    >
                                        {experience.title}
                                    </h4>
                                    <p 
                                        className="font-syne text-white text-left font-bold"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], textRefs.current[index]?.[2], el])[3]} // Subtitle ref
                                    >
                                        {experience.subtitle}
                                    </p>
                                </div>
                                {expandedIndex === index && (
                                    <div 
                                        className="mt-4 p-4"
                                        ref={(el) => (detailsRef.current[index] = el)} // Reference for the details (expanded text)
                                    >
                                        <ul className="text-left text-[1vw] text-white">
                                            {experience.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-[1.111vw]">
                                                    <div className="w-[1.111vw] h-[1.111vw] bg-gray"></div>
                                                    <span className="text-white text-[1.667vw] font-anton mb-2">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <img src={experience.logo} alt="logo" className="w-[5.278vw]" />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;


