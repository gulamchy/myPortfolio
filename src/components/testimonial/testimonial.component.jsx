import { useEffect, useState, useRef } from "react";
import { testimonials } from "../../models/testimonial.js";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialText() {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);
  const buttonRefs = useRef([]);
  const sectionRef = useRef(null);

  const animateText = (index) => {
    const splitText = new SplitType(textRefs.current[index], {
      types: "lines",
      tagName: "div",
    });

    const lines = splitText.lines;
    lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.className = "line-wrapper overflow-hidden";
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
        ease: "ease.inOut",
        onComplete: () => splitText.revert(),
      }
    );
  };

  // const scrollIntoView = (index) => {
  //   const section = sectionRef.current;
  //   const button = buttonRefs.current[index];

  //   // Check if the section is in view
  //   if (section && button) {
  //     const sectionRect = section.getBoundingClientRect();
  //     const buttonRect = button.getBoundingClientRect();

  //     if (
  //       buttonRect.top > sectionRect.top ||
  //       buttonRect.bottom < sectionRect.bottom
  //     ) {
  //       button.scrollIntoView({
  //         behavior: "smooth",
  //         inline: "nearest",
  //       });
  //     }
  //   }
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      setActiveIndex(nextIndex);
      // if (buttonRefs.current[nextIndex]){
      //   scrollIntoView(nextIndex);
      // }
    }, 5000);

    return () => {
      clearInterval(interval)
    };
  }, [activeIndex]);

  useEffect(() => {
    animateText(activeIndex);
  }, [activeIndex]);


  const handleButtonClick = (index) => {
    setActiveIndex(index);
    animateText(index);
    // if (buttonRefs.current[index]){
    //   scrollIntoView(index);
    // }
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-between w-[80vw] h-full  py-6"
    >
      <div className="w-full h-full overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (textRefs.current[index] = el)}
            className={`overflow-hidden uppercase text-[6vw] sm:text-[3.5vw] text-center font-anton top-0 transition-opacity duration-500 h-[85.25vw] sm:h-[27vw] ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {testimonial.comment}
          </div>
        ))}
      </div>

      <div className="w-full h-[0.5vw] sm:h-[0.15vw] bg-white mb-6"></div>
      <div className="flex items-center space-x-4 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap inline-block">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            ref={(el) => (buttonRefs.current[index] = el)}
            className={`transition-all ease-in-out inline-block px-4 py-2 rounded transition duration-200 font-syne uppercase font-bold flex items-center gap-4 text-start ${
              activeIndex === index ? "text-dark" : "text-white"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <div
              className={`inline-block w-[2.5vw] sm:w-[1vw] h-[2.5vw] sm:h-[1vw] mb-4 ${
                activeIndex === index
                  ? "bg-dark rounded-full"
                  : "border rounded-full"
              }`}
            ></div>
            <div>
              {testimonial.firstName}
              <br />
              {testimonial.lastName}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
