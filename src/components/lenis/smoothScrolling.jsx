import { ReactLenis } from "@studio-freight/react-lenis";

// eslint-disable-next-line react/prop-types
function SmoothScrolling({ children }) {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
