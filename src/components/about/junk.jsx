
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import image1 from '../../assets/myImages/image1.png';
import image2 from '../../assets/myImages/image2.png';
import image3 from '../../assets/myImages/image3.png';
import image4 from '../../assets/myImages/image4.png';
import image5 from '../../assets/myImages/image5.png';
import image6 from '../../assets/myImages/image6.png';

const AboutImage = () => {
  const sectionRef = useRef(null); // Reference to the container div
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

  const imgUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    // 'https://static.vecteezy.com/system/resources/thumbnails/036/556/240/small_2x/ai-generated-skull-art-illustrations-for-stickers-tshirt-design-poster-etc-png.png',
    // 'https://static.vecteezy.com/system/resources/previews/024/807/192/non_2x/cat-wear-sunglass-kawaii-cute-sticker-ai-generated-png.png',
    // 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-cute-pink-star-sticker-vector-png-image_6896227.png',
    // 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-this-is-a-cartoon-sticker-with-an-oozing-mouth-vector-png-image_6898538.png',
    // 'https://www.clker.com//cliparts/0/c/3/8/11971225631225539648molumen_small_funny_angry_monster.svg.hi.png',
    // 'https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-vector-image-of-scary-mouth-with-teeth-and-tongue-png-image_12612691.png',
  ];

  const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

  const lerp = (start, end, factor) => start * (1 - factor) + end * factor; // Linear interpolation function

  const createImage = (x, y) => {
    const img = new Image();
    img.src = imgUrl();
    gsap.set(img, {
      height: 150,
      width: 150,
      position: 'absolute',
      top: y,
      left: x,
      xPercent: -50,
      yPercent: -50,
      pointerEvents: 'none',
      willChange: 'transform',
    });

    gsap
      .timeline()
      .from(img, {
        scale: 1,
        opacity: 0,
        ease: 'power2.in',
        duration: 0.1,
      })
      .to(img, {
        delay: 0.5, // Delay before starting removal
        scale: 0,
        opacity: 0,
        ease: 'power2.inOut',
        onComplete: () => img.remove(),
      });

    sectionRef.current.appendChild(img); // Append image to the section
  };

  const handleMouseMove = (event) => {
    const section = sectionRef.current;
    const { clientX: x, clientY: y } = event;

    // Get the bounding rectangle of the section
    const rect = section.getBoundingClientRect();

    // Calculate the mouse position relative to the section
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    // Update smooth mouse position using lerp
    setSmoothMouse((prev) => ({
      x: lerp(prev.x, relativeX, 0.1),
      y: lerp(prev.y, relativeY, 0.1),
    }));
  };

  useEffect(() => {
    const section = sectionRef.current;
    let lastDistance = 0; // Track the last distance moved

    const onMouseMove = (event) => {
      handleMouseMove(event);
      
      const distance = Math.sqrt(
        Math.pow(smoothMouse.x - lastDistance, 2) +
        Math.pow(smoothMouse.y - lastDistance, 2)
      );

      // Create an image only if the mouse has moved significantly
      if (distance > 300) {
        createImage(smoothMouse.x, smoothMouse.y);
        lastDistance = distance; // Update last distance
      }
    };

    section.addEventListener('mousemove', onMouseMove); // Attaching mousemove event

    return () => {
      section.removeEventListener('mousemove', onMouseMove); // Clean up
    };
  }, [smoothMouse]); // Dependencies

  return (
    <div
      ref={sectionRef}
      className="relative h-[20vw] w-full"
    >
      {/* Interactive Area */}
    </div>
  );
};

export default AboutImage;

// // import { useRef, useState, useEffect } from 'react';
// // import gsap from 'gsap';

// // const AboutImage = () => {
// //     const sectionRef = useRef(null);
// //     const [initialPoints, setInitialPoints] = useState({ x: 0, y: 0 });
// //     const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
// //     // eslint-disable-next-line no-unused-vars
// //     const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
// //     const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 });

// //   const lerp = (x, y, a) => x * (1 - a) + y * a;

// //   const imgUrls = [
// //     'https://static.vecteezy.com/system/resources/thumbnails/036/556/240/small_2x/ai-generated-skull-art-illustrations-for-stickers-tshirt-design-poster-etc-png.png',
// //     'https://static.vecteezy.com/system/resources/previews/024/807/192/non_2x/cat-wear-sunglass-kawaii-cute-sticker-ai-generated-png.png',
// //     'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-cute-pink-star-sticker-vector-png-image_6896227.png',
// //     'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-this-is-a-cartoon-sticker-with-an-oozing-mouth-vector-png-image_6898538.png',
// //     'https://www.clker.com//cliparts/0/c/3/8/11971225631225539648molumen_small_funny_angry_monster.svg.hi.png',
// //     'https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-vector-image-of-scary-mouth-with-teeth-and-tongue-png-image_12612691.png',
// //   ];

// //   const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

// //   const handleMouse = (event) => {
// //     const { x, y } = event;
// //     setInitialPoints({ x, y });

// //     const distance = Math.sqrt(
// //       Math.pow(movedPoints.x - x, 2) + Math.pow(movedPoints.y - y, 2)
// //     );

// //     if (distance > 50) {
// //       const img = new Image();
// //       img.src = imgUrl();
// //       gsap.set(img, {
// //         height: 100,
// //         width: 100,
// //         position: 'absolute',
// //         top: y,
// //         left: x,
// //         xPercent: -50,
// //         yPercent: -50,
// //         pointerEvents: 'none',
// //         willChange: 'transform',
// //       });

// //       gsap
// //         .timeline()
// //         .from(img, {
// //           scale: 1,
// //           opacity: 0,
// //           ease: 'power2.in',
// //           duration: 0.1,
// //         })
// //         .from(
// //           img,
// //           {
// //             rotation: cursorVelocity.x * 0.1,
// //             x: cursorVelocity.x,
// //             y: cursorVelocity.y,
// //             duration: 1,
// //           },
// //           '<'
// //         )
// //         .to(
// //           img,
// //           {
// //             scale: 0,
// //             opacity: 0,
// //             ease: 'power2.inOut',
// //             onComplete: () => img.remove(),
// //           },
// //           '-=0.2'
// //         );

// //       document.body.appendChild(img);
// //       setMovedPoints({ x, y });
// //     }
// //   };

// // //   const tick = () => {
// // //     setSmoothMouse((prevSmooth) => ({
// // //       x: lerp(prevSmooth.x, movedPoints.x, 0.1),
// // //       y: lerp(prevSmooth.y, movedPoints.y, 0.1),
// // //     }));

// // //     setCursorVelocity({
// // //       x: movedPoints.x - initialPoints.x,
// // //       y: movedPoints.y - initialPoints.y,
// // //     });
// // //   };

// //   useEffect(() => {
// //     // const sectionRef = sectionRef.current;
// //     // sectionRef.addEventListener('mousemove', handleMouse);
// //     // // const ticker = gsap.ticker.add(tick);

// //     // return () => {
// //     //     sectionRef.removeEventListener('mousemove', handleMouse);
// //     // //   ticker.kill();
// //     // };

// //     const section = sectionRef.current;

// //     if (section) {
// //       section.addEventListener('mousemove', handleMouse);
// //     }

// //     return () => {
// //       if (section) {
// //         section.removeEventListener('mousemove', handleMouse);
// //       }
// //     };
// //   }, [movedPoints, cursorVelocity]);

// //   return (
// //     <div
// //         ref={sectionRef}
// //         className="h-[20vw] w-full overflow-hidden"
// //     >

// //     </div>
// //   ); 
// // };

// // export default AboutImage;

// import { useRef, useState, useEffect } from 'react';
// import gsap from 'gsap';

// const AboutImage = () => {
//   const sectionRef = useRef(null); // Reference to the container div
//   const [initialPoints, setInitialPoints] = useState({ x: 0, y: 0 });
//   const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
//   const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 });

//   const imgUrls = [
//     'https://static.vecteezy.com/system/resources/thumbnails/036/556/240/small_2x/ai-generated-skull-art-illustrations-for-stickers-tshirt-design-poster-etc-png.png',
//     'https://static.vecteezy.com/system/resources/previews/024/807/192/non_2x/cat-wear-sunglass-kawaii-cute-sticker-ai-generated-png.png',
//     'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-cute-pink-star-sticker-vector-png-image_6896227.png',
//     'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-this-is-a-cartoon-sticker-with-an-oozing-mouth-vector-png-image_6898538.png',
//     'https://www.clker.com//cliparts/0/c/3/8/11971225631225539648molumen_small_funny_angry_monster.svg.hi.png',
//     'https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-vector-image-of-scary-mouth-with-teeth-and-tongue-png-image_12612691.png',
//   ];

//   const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

//   const handleMouse = (event) => {
//     // const { clientX: x, clientY: y } = event; // Using clientX and clientY for proper coordinates
//     // const distance = Math.sqrt(
//     //   Math.pow(movedPoints.x - x, 2) + Math.pow(movedPoints.y - y, 2)
//     // );

//     const section = sectionRef.current;
//     const { clientX: x, clientY: y } = event;

//     // Get the bounding rectangle of the section to adjust the mouse coordinates
//     const rect = section.getBoundingClientRect();

//     // Calculate the mouse position relative to the section
//     const relativeX = x - rect.left;
//     const relativeY = y - rect.top;

//     const distance = Math.sqrt(
//         Math.pow(movedPoints.x - relativeX, 2) + Math.pow(movedPoints.y - relativeY, 2)
//     );


//     if (distance > 50) {
//       // Create a new image element and apply the gsap animation
//       const img = new Image();
//       img.src = imgUrl();
//       gsap.set(img, {
//         height: 100,
//         width: 100,
//         position: 'absolute',
//         top: relativeY,
//         left: relativeX,
//         xPercent: -50,
//         yPercent: -50,
//         pointerEvents: 'none',
//         willChange: 'transform',
//       });

//       gsap
//         .timeline()
//         .from(img, {
//           scale: 1,
//           opacity: 0,
//           ease: 'power2.in',
//           duration: 0.1,
//         })
//         .from(
//           img,
//           {
//             rotation: cursorVelocity.x * 0.1,
//             x: cursorVelocity.x,
//             y: cursorVelocity.y,
//             duration: 1,
//           },
//           '<'
//         )
//         .to(
//           img,
//           {
//             scale: 0,
//             opacity: 0,
//             ease: 'power2.inOut',
//             onComplete: () => img.remove(),
//           },
//           '-=0.2'
//         );

//     //   document.body.appendChild(img);
//         sectionRef.current.appendChild(img);
//       setMovedPoints({ x:relativeX, y:relativeY });
//     }
//   };

//   useEffect(() => {
//     const section = sectionRef.current;

//     if (section) {
//       section.addEventListener('mousemove', handleMouse); // Attaching mousemove event
//     }

//     return () => {
//       if (section) {
//         section.removeEventListener('mousemove', handleMouse); // Cleaning up
//       }
//     };
//   }, [movedPoints, cursorVelocity]); // Dependencies on movedPoints and cursorVelocity

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-[20vw] w-full overflow-hidden"
//     //   style={{ backgroundColor: 'lightgray' }} // To make the area visible for testing
//     >
//       {/* Interactive Area */}
//     </div>
//   );
// };

// export default AboutImage;



// new //
