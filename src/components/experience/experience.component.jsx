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
                    className="w-[80vw] border-b border-white border-opacity-30 min-h-[8.333vw] flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between py-4 my-8 cursor-pointer"
                    // className="w-[80vw] border-b border-white border-opacity-30 min-h-[8.333vw] flex items-start justify-between py-4 my-8 cursor-pointer"
                    ref={(el) => (expRef.current[index] = el)}
                    onClick={() => handleJobClick(index)}
                >
                    {index % 2 === 0 ? (
                        <>
                            <img src={experience.logo} alt="logo" className="w-[12vw] sm:w-[5.833vw] mb-4" />
                            <div className="flex flex-col justify-center sm:justify-end gap-2">
                                <div className="flex items-center gap-4 justify-center sm:justify-end">
                                    <p
                                        className="font-syne text-white text-center sm:text-right text-opacity-70 uppercase font-bold text-[2.917vw] sm:text-[0.972vw]"
                                        ref={(el) => (textRefs.current[index] = [el, textRefs.current[index]?.[1], textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[0]} 
                                    >
                                        {experience.date}
                                    </p>
                                    <p className="font-syne text-white text-center sm:text-right text-opacity-70 uppercase font-bold text-[2.917vw] sm:text-[0.972vw]">||</p>
                                    <p 
                                        className="font-syne text-white uppercase font-bold text-center sm:text-right text-opacity-70  text-[2.917vw] sm:text-[0.972vw]"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], el, textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[1]}
                                    >
                                        {experience.employer}
                                    </p>
                                </div>

                                <div className="h-[0.1vw] w-[5vw] ml-auto opacity-30"></div>
                                <div className="flex flex-col justify-center sm:justify-end">
                                    <h4 
                                        className="uppercase font-anton text-white text-[6vw] sm:text-[2.222vw] text-center sm:text-right"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], el, textRefs.current[index]?.[3]])[2]}
                                    >
                                        {experience.title}
                                    </h4>
                                    <p 
                                        className="font-syne font-bold  text-white text-center sm:text-right text-[2.917vw] sm:text-[0.972vw] text-opacity-70"
                                        ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], textRefs.current[index]?.[2], el])[3]}
                                    >
                                        {experience.subtitle}
                                    </p>
                                </div>

                                {expandedIndex === index && (
                                    <div 
                                        className="mt-4 p-4 flex items-center sm:items-end"
                                        ref={(el) => (detailsRef.current[index] = el)} 
                                    >
                                        <ul>
                                            {experience.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-[1.111vw] justify-center sm:justify-end pb-8">
                                                    <span className="text-white text-[3.429vw] sm:text-[1.389vw] text-center sm:text-right font-syne font-semibold mb-2 text-opacity-90 w-full sm:w-[56vw]">{detail}</span>
                                                    <div className="w-[1.111vw] h-[1.111vw] bg-white opacity-30 invisible sm:visible"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                                <div className="flex flex-col justify-start gap-2 order-2 sm:order-1">
                                    <div className="flex items-center gap-4 justify-center sm:justify-start">
                                        <p 
                                            className="font-syne text-white uppercase font-bold text-center sm:text-left text-opacity-70  text-[2.917vw] sm:text-[0.972vw]"
                                            ref={(el) => (textRefs.current[index] = [el, textRefs.current[index]?.[1], textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[0]}
                                        >
                                            {experience.employer}
                                        </p>
                                        <p className="font-syne text-white uppercase font-bold text-center sm:text-left text-opacity-70  text-[2.917vw] sm:text-[0.972vw]">||</p>
                                        <p 
                                            className="font-syne text-white uppercase font-bold text-center sm:text-left text-opacity-70  text-[2.917vw] sm:text-[0.972vw]"
                                            ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], el, textRefs.current[index]?.[2], textRefs.current[index]?.[3]])[1]}
                                        >
                                            {experience.date}
                                        </p>
                                    </div>
                                    <div className="h-[0.1vw] w-[5vw] mr-auto opacity-30"></div>
                                    <div className="flex flex-col justify-center sm:justify-start">
                                        <h4 
                                            className="uppercase font-anton text-white text-[6vw] sm:text-[2.222vw] text-center sm:text-left"
                                            ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], el, textRefs.current[index]?.[3]])[2]}
                                        >
                                            {experience.title}
                                        </h4>
                                        <p 
                                            className="font-syne text-white font-bold text-center sm:text-left  text-[2.917vw] sm:text-[0.972vw] text-opacity-70"
                                            ref={(el) => (textRefs.current[index] = [textRefs.current[index]?.[0], textRefs.current[index]?.[1], textRefs.current[index]?.[2], el])[3]}
                                        >
                                            {experience.subtitle}
                                        </p>
                                    </div>
                                    {expandedIndex === index && (
                                        <div 
                                            className="mt-4 p-4 flex items-center sm:items-start"
                                            ref={(el) => (detailsRef.current[index] = el)} 
                                        >
                                            <ul >
                                                {experience.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-center gap-[1.111vw] justify-center sm:justify-start pb-8">
                                                        <div className="w-[1.111vw] h-[1.111vw] bg-white opacity-30 invisible sm:visible"></div>
                                                        <span className="text-white text-[3.429vw] sm:text-[1.389vw] text-center sm:text-left font-syne font-semibold mb-2 text-opacity-90 w-full sm:w-[56vw]">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <img src={experience.logo} alt="logo" className="mb-4 w-[10.938vw] sm:w-[5.833vw] order-1 sm:order-2" />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;


