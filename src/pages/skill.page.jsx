import Button from "../components/header/button.component";
import { useRef, useEffect } from "react";
import { skillModel } from "../models/skillModel";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const skillRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    
    skillRefs.current.forEach((el, i) => {
      gsap.to(el, 
      {
        scale: 1 - ((skillRefs.current.length - i)  * 0.05),
        transformOrigin: "top center",
        ease: "ease.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
          toggleActions: "play none none reverse", 
        },
        
      });
    });

    imgRefs.current.forEach((el) => {
      gsap.fromTo(el, {
        scale: 2,
      },
      {
        scale: 1,
        ease: "ease.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
          toggleActions: "play none none reverse", 
        },
      }
    )
    });

  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray items-center py-[20vw] sm:py-[10vw]">
      <h1 className="font-syne font-extrabold text-dark text-[10vw] sm:text-[6.667vw] flex items-start justify-center text-center leading-none mb-[10vw] sm:mb-[5vw]">
        Skills
      </h1>
      <div className="w-full">
        {skillModel.map((skill, index) => (
            <div
                key={index}
                className="w-full flex flex-col items-center sticky top-0"
            >
                <div
                    className="relative mb-[10vw] sm:mb-[5vw] bg-white flex flex-col sm:flex-row px-[4.444vw] py-[8.333vw] sm:py-[4.444vw] w-[80vw] gap-[2.222vw] sm:gap-0"
                    ref={(el) => (skillRefs.current[index] = el)}
                    style={{
                      position: "relative",
                      top: `calc(${window.innerWidth >= 640 ? '5vw' : '10vw'} + ${index * 2.5}vw)`,
                    }}
                >
                    <div className="flex flex-col items-start justify-end pr-[2.222vw]">
                    <h2 className="text-dark uppercase text-[7.5vw] sm:text-[5vw] leading-none font-anton">{skill.title}</h2>
                    <h2 className="text-gray uppercase text-[7.5vw] sm:text-[5vw] leading-none font-anton mb-[2.222vw] w-[25.5vw]">{skill.category}</h2>
                    <ul className="flex flex-wrap sm:flex-col gap-[1.111vw] sm:gap-0">
                        {skill.language.map((point, i) => (
                        <div key={i} className="flex items-center gap-[1.111vw]">
                            <div className="w-[1.111vw] h-[1.111vw] bg-gray"></div>
                            <li className="text-dark text-[3.333vw] sm:text-[1.667vw] uppercase font-anton ">{point}</li>
                        </div>
                        ))}
                    </ul>
                    </div>

                    <div className="flex flex-col justify-start items-center object-cover overflow-hidden">
                      <img 
                        src={skill.img} 
                        alt={skill.title} 
                        className="w-full sm:w-[20.833vw] h-[57.143vw] sm:h-[27.778vw] object-cover" 
                        ref={(el) => (imgRefs.current[index] = el)}
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start mt-[2.222vw]">
                    <h3 className="font-bold font-syne text-[5vw] sm:text-[1.667vw] pl-0 sm:pl-[2.778vw]">{skill.projectTitle}</h3>
                    <div className="flex gap-4 font-syne font-semibold text-gray pl-0 sm:pl-[2.778vw] mb-[5vw] sm:mb-[1.667vw] text-[2.917vw] sm:text-[0.972vw]">
                        <p>{skill.projectRole}</p>
                        <span>|</span>
                        <p>{skill.projectDate}</p>
                    </div>
                    <Button href={skill.link} className="ml-0 sm:ml-[2.778vw] mb-[5vw] sm:mb-[1.667vw] border border-dark border-opacity-25 opacity-70 hover:opacity-100 transition-all ease-in-out">
                        Check out
                    </Button>
                    <div>
                        {skill.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-[1.111vw] mb-[1.667vw]">
                            <div className="w-[5vw] sm:w-[1.667vw] h-[0.417vw] sm:h-[0.139vw] bg-gray"></div>
                            <div className="text-[2.917vw] sm:text-[0.972vw] text-dark font-syne w-full sm:w-[22.222vw]">
                            {point}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;



