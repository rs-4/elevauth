import { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedText = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: -100,
        opacity: 0,
        rotation: -20,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.9)",
      }
    );
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedText;
