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
                        markers: false,
                        toggleActions: "play none none reverse", 
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
            className="h-full overflow-y-scroll no-scrollbar overflow-auto"
            data-lenis-prevent
        >
            {AboutTextModel.map((aboutText, index) => (
                <div 
                    key={`container-${index}`}
                    className="flex"
                >
                    <p 
                        ref={(el) => (textRef.current[index] = el)} 
                        key={aboutText.id} 
                        className="text-white w-[80vw] text-[5vw] sm:text-[3.5vw] text-center text-balance font-anton transition-opacity duration-500"
                    >
                        {/* {aboutText.text} */}
                        I was born and raised in the beautiful city of Sylhet, Bangladesh, where my passion for technology first blossomed. After completing my undergraduate degree in Computer Science there, I moved to the USA to pursue my graduate studies. I am currently enrolled in the Master&apos;s program in Computer Science at Western Washington University in Bellingham, Washington. I absolutely love the lush greenery, majestic mountains, and the refreshing rain of Washington. Each rainy day here brings back fond memories of home, reminding me of Sylhet&apos;s charm. <br/><br/>My career began as a UI designer in 2018, and I&apos;ve had the privilege of working with innovative companies, including Datacube.ai, a business analytics and KPI data visualization. I joined the team as one of the early designers, and it was an exciting experience to help transform their product from a basic template site into a fully interactive and scalable SaaS platform for B2B clients. <br/><br/>As I progressed through my academic and design career, surprisingly, my passion for software engineering grew more. This led me to delve into essential tools and technologies. Over time, I have developed strong technical skills in Python, C++, JavaScript MERN stack development, and iOS development. I am particularly passionate about accessibility and inclusive software development, a focus that has deepened through my research at the KIND lab under the mentorship of Dr. Yasmine Elglaly. I thrive on creating solutions that are not only powerful and efficient but also user-friendly and accessible to everyone. <br/><br/>My research involves extensive data processing and deep analysis, which has allowed me to build a solid foundation in Machine Learning and Natural Language Processing. I now enjoy working at the intersection of design, software engineering, and machine learning, where I can innovate and make a real difference. <br/><br/>Outside of my professional pursuits, I&apos;m dedicated to giving back to my community. I served as club president during my undergraduate years, and I continue to support others whenever I can. Currently, I provide technical assistance to Seattle Sayidas, a modest clothing brand, helping to empower their mission. In my downtime, I love hiking, watching movies, and spending time with friends.
                    </p>
                </div>
            ))}
        </div>
    )
}

export default AboutText;