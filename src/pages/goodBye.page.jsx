import { useRef, useState, useEffect } from "react";
import { goodByeModel } from "../models/goodbye";
import SplitType from "split-type";
import { gsap } from "gsap/gsap-core";
import Button from "../components/header/button.component";

const GoodBye = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);

  const animateText = (index) => {
    const splitText = new SplitType(textRefs.current[index], {
      types: "chars",
    });

    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.05,
        ease: "ease.inOut",
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % goodByeModel.length;
      setActiveIndex(nextIndex);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  useEffect(() => {
    animateText(activeIndex);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-dark py-[20vw] sm:py-[10vw]">
      <div className="h-[15vw] sm:h-[7vw] flex items-start overflow-hidden">
        {goodByeModel.map((byeText, index) => (
          <h1
            ref={(el) => (textRefs.current[index] = el)}
            key={byeText.id}
            className={`text-center text-white font-syne font-extrabold text-[7vw] sm:text-[5vw] ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {byeText.farewell}
          </h1>
        ))}
      </div>
      <div className="flex flex-col flex-grow items-center justify-end w-[80vw]">
        <p className="text-white text-center text-[3.429vw] sm:text-[1.667vw] text-opacity-80 font-anton uppercase w-[60vw] sm:w-[31.25vw] mb-6">
          Feel free to drop me a line. It would be a pleasure to help you with
          your inquiry!
        </p>
        <div className="w-full h-[0.3vw] sm:h-[0.15vw] bg-white mb- opacity-50"></div>
        <h1 className="text-center text-white font-anton font-extrabold text-[7vw] sm:text-[5vw] m-3">
          {" "}
          <a href="mailto:example@example.com">gulamsulaman@gmail.com</a>
        </h1>
        <div className="w-full h-[0.3vw] sm:h-[0.15vw] bg-white mb-6 opacity-50"></div>
        <div className="flex flex-wrap items-center justify-center w-full text-white">
          <Button
            href="https://www.instagram.com/abir_sulaman/"
            className="opacity-70 hover:opacity-100 transition-all ease-in-out"
          >
            Instagram
          </Button>
          <Button
            href="https://www.linkedin.com/in/gulamsulaman"
            className="opacity-70 hover:opacity-100 transition-all ease-in-out"
          >
            Linkedin
          </Button>
          <Button
            href="https://drive.google.com/file/d/1ecfc1KdpvKSpZyztwU2Akjsa5MrKyKt3/view?usp=share_link"
            className="opacity-70 hover:opacity-100 transition-all ease-in-out"
          >
            Resume
          </Button>
          <Button
            href="https://dribbble.com/AbirSulaman"
            className="opacity-70 hover:opacity-100 transition-all ease-in-out"
          >
            Dribbble
          </Button>
          <Button
            href="https://github.com/gulamchy"
            className="opacity-70 hover:opacity-100 transition-all ease-in-out"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoodBye;
