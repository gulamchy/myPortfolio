// import { useRef, useState, useEffect } from 'react';
// import gsap from 'gsap';
// import image1 from '../../assets/myImages/image1.png';
// import image2 from '../../assets/myImages/image2.png';
// import image3 from '../../assets/myImages/image3.png';
// import image4 from '../../assets/myImages/image4.png';
// import image5 from '../../assets/myImages/image5.png';
// import image6 from '../../assets/myImages/image6.png';

// const AboutImage = () => {
//   const sectionRef = useRef(null); // Reference to the container div
// //   const [initialPoints, setInitialPoints] = useState({ x: 0, y: 0 });
//   const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
//   const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 }); // Smooth mouse positions
// //   const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 });

//   const imgUrls = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//   ];

//   const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

//   const lerp = (start, end, factor) => start * (1 - factor) + end * factor; // Linear interpolation function

//   const handleMouse = (event) => {
//     const section = sectionRef.current;
//     const { clientX: x, clientY: y } = event;

//     // Get the bounding rectangle of the section to adjust the mouse coordinates
//     const rect = section.getBoundingClientRect();

//     // Calculate the mouse position relative to the section
//     const relativeX = x - rect.left;
//     const relativeY = y - rect.top;

//     // Apply lerp for smooth transitions
//     const smoothX = lerp(smoothMouse.x, relativeX, 0.1);
//     const smoothY = lerp(smoothMouse.y, relativeY, 0.1);

//     setSmoothMouse({ x: smoothX, y: smoothY });

//     const distance = Math.sqrt(
//       Math.pow(movedPoints.x - smoothX, 2) + Math.pow(movedPoints.y - smoothY, 2)
//     );

//     if (distance > 100) {
//       const img = new Image();
//       img.src = imgUrl();
//       gsap.set(img, {
//         height: 200,
//         width: 200,
//         position: 'absolute',
//         top: smoothY,
//         left: smoothX,
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
//           ease: 'back.inOut',
//           duration: 0.01,
//         })
//         .from(
//           img,
//           {
//             rotation: smoothX * 0.01,
//             // x: x,
//             // y: y,
//             // y: cursorVelocity.y,
//             duration: 1,
//           },
//           '<'
//         )
//         .to(
//           img,
//           {
//             scale: 0,
//             opacity: 0,
//             ease: 'back.inOut',
//             onComplete: () => img.remove(),
//           },
//           '-=0.2'
//         );

//         sectionRef.current.appendChild(img);
//         setMovedPoints({ x: smoothX, y: smoothY });
//         console.log(smoothX, smoothY);
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
//   }, [smoothMouse, movedPoints]); // Dependencies on movedPoints and smoothMouse

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-[20vw] w-full"
//     >
//       {/* Interactive Area */}
//     </div>
//   );
// };

// export default AboutImage;



// import { useRef, useState, useEffect } from 'react';
// import gsap from 'gsap';
// import image1 from '../../assets/myImages/image1.png';
// import image2 from '../../assets/myImages/image2.png';
// import image3 from '../../assets/myImages/image3.png';
// import image4 from '../../assets/myImages/image4.png';
// import image5 from '../../assets/myImages/image5.png';
// import image6 from '../../assets/myImages/image6.png';

// const AboutImage = () => {
//   const sectionRef = useRef(null); // Reference to the container div
//   const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
//   const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 }); // Smooth mouse positions
//   const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 }); // Velocity of the cursor

//   const imgUrls = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//   ];

//   // Helper function to pick a random image
//   const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

//   // Linear interpolation function for smooth transitions
//   const lerp = (start, end, factor) => start * (1 - factor) + end * factor;

//   const handleMouse = (event) => {
//     const section = sectionRef.current;
//     const { clientX: x, clientY: y } = event;

//     // Get the bounding rectangle of the section to adjust the mouse coordinates
//     const rect = section.getBoundingClientRect();
//     const relativeX = x - rect.left;
//     const relativeY = y - rect.top;

//     // Apply lerp for smooth transitions
//     const smoothX = lerp(smoothMouse.x, relativeX, 0.1);
//     const smoothY = lerp(smoothMouse.y, relativeY, 0.1);

//     setSmoothMouse({ x: smoothX, y: smoothY });

//     // Calculate the velocity based on the distance moved
//     const velocityX = smoothX - movedPoints.x;
//     const velocityY = smoothY - movedPoints.y;

//     setCursorVelocity({ x: velocityX, y: velocityY });

//     // Calculate the distance between previous and current smooth positions
//     const distance = Math.sqrt(
//       Math.pow(movedPoints.x - smoothX, 2) + Math.pow(movedPoints.y - smoothY, 2)
//     );

//     // Only trigger the image animation when the distance exceeds 100
//     if (distance > 100) {
//       const img = new Image();
//       img.src = imgUrl();
//       gsap.set(img, {
//         height: 200,
//         width: 200,
//         position: 'absolute',
//         top: smoothY,
//         left: smoothX,
//         xPercent: -50,
//         yPercent: -50,
//         pointerEvents: 'none',
//         willChange: 'transform',
//       });

//       // Animate the image with GSAP
//       gsap
//         .timeline()
//         .from(img, {
//           scale: 1,
//           opacity: 0,
//           ease: 'back.inOut',
//           duration: 0.01,
//         })
//         .from(
//           img,
//           {
//             rotation: velocityX * 0.01, // Add rotation based on velocity
//             x: velocityX, // Offset the image animation by velocity
//             y: -velocityY, // Offset the image animation by velocity
//             duration: 0.8,
//           },
//           '<'
//         )
//         .to(
//           img,
//           {
//             scale: 0,
//             opacity: 0,
//             ease: 'back.inOut',
//             onComplete: () => img.remove(),
//           },
//           '-=0.2'
//         );

//       // Append the image to the section
//       section.appendChild(img);

//       // Update moved points to prevent redundant animations
//       setMovedPoints({ x: smoothX, y: smoothY });
//     }
//   };

//   useEffect(() => {
//     const section = sectionRef.current;

//     if (section) {
//       // Attaching mousemove event when the component mounts
//       section.addEventListener('mousemove', handleMouse);
//     }

//     return () => {
//       if (section) {
//         // Cleaning up the event listener when the component unmounts
//         section.removeEventListener('mousemove', handleMouse);
//       }
//     };
//   }, [smoothMouse, movedPoints, cursorVelocity]); // Dependencies on smoothMouse, movedPoints, and cursorVelocity

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-[20vw] w-full"
//     >
//       {/* Interactive Area */}
//     </div>
//   );
// };

// export default AboutImage;


// import { useRef, useState, useEffect } from 'react';
// import gsap from 'gsap';
// import image1 from '../../assets/myImages/image1.png';
// import image2 from '../../assets/myImages/image2.png';
// import image3 from '../../assets/myImages/image3.png';
// import image4 from '../../assets/myImages/image4.png';
// import image5 from '../../assets/myImages/image5.png';
// import image6 from '../../assets/myImages/image6.png';

// const AboutImage = () => {
//   const sectionRef = useRef(null); // Reference to the container div
//   const [movedPoints, setMovedPoints] = useState({ x: 0, y: 0 });
//   const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 }); // Smooth mouse positions
//   const [cursorVelocity, setCursorVelocity] = useState({ x: 0, y: 0 }); // Velocity of the cursor
//   const [imagesLoaded, setImagesLoaded] = useState(false); // State to track if images are preloaded

//   const imgUrls = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//   ];

//   // Helper function to pick a random image
//   const imgUrl = () => imgUrls[Math.floor(Math.random() * imgUrls.length)];

//   // Linear interpolation function for smooth transitions
//   const lerp = (start, end, factor) => start * (1 - factor) + end * factor;

//   // Preload images
//   const preloadImages = () => {
//     const promises = imgUrls.map((src) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = resolve;
//       });
//     });

//     // Wait for all images to be preloaded
//     Promise.all(promises).then(() => {
//       setImagesLoaded(true); // Set imagesLoaded to true once all images are preloaded
//     });
//   };

//   const handleMouse = (event) => {
//     if (!imagesLoaded) return; // Only run if images are preloaded

//     const section = sectionRef.current;
//     const { clientX: x, clientY: y } = event;

//     // Get the bounding rectangle of the section to adjust the mouse coordinates
//     const rect = section.getBoundingClientRect();
//     const relativeX = x - rect.left;
//     const relativeY = y - rect.top;

//     // Apply lerp for smooth transitions
//     const smoothX = lerp(smoothMouse.x, relativeX, 0.1);
//     const smoothY = lerp(smoothMouse.y, relativeY, 0.1);

//     setSmoothMouse({ x: smoothX, y: smoothY });

//     // Calculate the velocity based on the distance moved
//     const velocityX = smoothX - movedPoints.x;
//     const velocityY = smoothY - movedPoints.y;

//     setCursorVelocity({ x: velocityX, y: velocityY });

//     // Calculate the distance between previous and current smooth positions
//     const distance = Math.sqrt(
//       Math.pow(movedPoints.x - smoothX, 2) + Math.pow(movedPoints.y - smoothY, 2)
//     );
//     console.log(movedPoints.x, movedPoints.y);

//     // Only trigger the image animation when the distance exceeds 100
//     if (distance > 70) {
//       const img = new Image();
//       img.src = imgUrl();
//       gsap.set(img, {
//         height: 200,
//         width: 200,
//         position: 'absolute',
//         top: smoothY,
//         left: smoothX,
//         xPercent: -50,
//         yPercent: -50,
//         pointerEvents: 'none',
//         willChange: 'transform',
//       });

//       // Animate the image with GSAP
//       gsap
//         .timeline()
//         .from(img, {
//           scale: 1,
//           opacity: 0,
//           ease: 'back.inOut',
//           duration: 0.01,
//         })
//         .from(
//           img,
//           {
//             rotation: velocityX * 0.01, // Add rotation based on velocity
//             x: -velocityX, // Offset the image animation by velocity
//             y: -velocityY, // Offset the image animation by velocity
//             duration: 1,
//           },
//           '<'
//         )
//         .to(
//           img,
//           {
//             scale: 0,
//             opacity: 0,
//             ease: 'back.inOut',
//             onComplete: () => img.remove(),
//           },
//           '-=0.2'
//         );

//       // Append the image to the section
//       section.appendChild(img);

//       // Update moved points to prevent redundant animations
//       setMovedPoints({ x: smoothX, y: smoothY });
//     }
//   };

//   useEffect(() => {
//     preloadImages(); // Preload images when the component mounts
//     const section = sectionRef.current;

//     if (section) {
//       // Attaching mousemove event when the component mounts
//       section.addEventListener('mousemove', handleMouse);
//     }

//     return () => {
//       if (section) {
//         // Cleaning up the event listener when the component unmounts
//         section.removeEventListener('mousemove', handleMouse);
//       }
//     };
//   }, [smoothMouse, movedPoints, cursorVelocity, imagesLoaded]); // Dependencies on smoothMouse, movedPoints, cursorVelocity, and imagesLoaded

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-[20vw] w-full"
//     >
//       {!imagesLoaded && <div>Loading images...</div>} {/* Show a loading message while images are being preloaded */}
//     </div>
//   );
// };

// export default AboutImage;