/* eslint-disable no-undef */
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { imageModel } from '../../models/imageModel';

// import image1 from '../../assets/myImages/image1.png';
// import image2 from '../../assets/myImages/image2.png';
// import image3 from '../../assets/myImages/image3.png';
// import image4 from '../../assets/myImages/image4.png';
// import image5 from '../../assets/myImages/image5.png';
// import image6 from '../../assets/myImages/image6.png';

// import image1 from '/image1.png';
// import image2 from '/image2.png';
// import image3 from '/image3.png';
// import image4 from '/image4.png';
// import image5 from '/image5.png';
// import image6 from '/image6.png';

// const image1 = require('../../assets/myImages/image1.png').default;
// const image2 = require('../../assets/myImages/image2.png').default;
// const image3 = require('../../assets/myImages/image3.png').default;
// const image4 = require('../../assets/myImages/image4.png').default;
// const image5 = require('../../assets/myImages/image5.png').default;
// const image6 = require('../../assets/myImages/image6.png').default;


const AboutImage = () => {
  const sectionRef = useRef(null); // Section reference
  const [initialPoints, setInitialPoints] = useState({ x: 0, y: 0 });
  const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 });
  // const imgUrl = gsap.utils.random([image1, image2, image3, image4, image5, image6], true);
  const imgUrl = gsap.utils.random(imageModel.map(img => img.image), true);
  // const imgUrl = gsap.utils.random(
  //   [
  //     "/image1.png",
  //     "/image2.png",
  //     "/image3.png",
  //     "/image4.png",
  //     "/image5.png",
  //     "/image6.png"
  //   ],
  //   true
  // );
  
  

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const handleMouse = ({ clientX, clientY }) => {
    const section = sectionRef.current;

    if (section) {
      // Get the bounding rectangle of the section
      const rect = section.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      setInitialPoints({ x: relativeX, y: relativeY });

      const distance = Math.sqrt(
        Math.pow(movedPoints.x - relativeX, 2) + Math.pow(movedPoints.y - relativeY, 2)
      );

      const getImageDimensions = () => {
        if (window.innerWidth > 768) {
          return { height: 200, width: 200 };
        } else {
          return { height: 100, width: 100 };
        }
      };
      
      // Inside the handleMouseOrTouch function
      const { height, width } = getImageDimensions();

      if (distance > 70) {
        const img = new Image();
        // img.src = imgUrl();
        img.src = imgUrl();

        gsap.set(img, {
          height: height,
          width: width,
          position: 'absolute',
          top: relativeY,
          left: relativeX,
          xPercent: -50,
          yPercent: -50,
          pointerEvents: 'none',
          willChange: 'transform',
        });

        gsap.timeline()
          .from(img, {
            scale: 1,
            opacity: 0,
            ease: 'back.inOut',
            duration: 0.1,
          })
          .from(img, {
            rotation: cursorVelocity.x * 0.1,
            x: cursorVelocity.x,
            y: cursorVelocity.y,
            duration: 1,
          }, '<')
          .to(img, {
            scale: 0,
            opacity: 0,
            ease: 'back.inOut',
            onComplete: () => img.remove(),
          }, '-=0.2');

        // Append image to the section (not document body)
        // section.appendChild(img);
        section.appendChild(img);
        setMovedPoints({ x: relativeX, y: relativeY });
        
      }
    }
  };

  const tick = () => {
    setSmoothMouse({
      x: lerp(smoothMouse.x, movedPoints.x, 0.1),
      y: lerp(smoothMouse.y, movedPoints.y, 0.1),
    });

    setCursorVelocity({
      x: movedPoints.x - initialPoints.x,
      y: movedPoints.y - initialPoints.y,
    });
  };

  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (event) => {
      handleMouse(event);
    };
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      handleMouse(touch);
    };

    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('touchmove', handleTouchMove, { passive: false });
      gsap.ticker.add(tick);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('touchmove', handleTouchMove);
        gsap.ticker.remove(tick);
      }
    };
  }, [movedPoints, cursorVelocity, smoothMouse]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[20vw] w-full" 
    >
      {/* The images will appear inside this div */}
    </div>
  );
};

export default AboutImage;



