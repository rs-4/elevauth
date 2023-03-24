import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ImageFadeIn = ({
  src,
  alt,
  opacity1,
  opacity2,
  duration,
  delay,
  easing,
  className,
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: opacity1 },
      { opacity: opacity2, duration: duration, delay: delay, ease: easing }
    );
  }, []);

  return <img src={src} alt={alt} className={className} ref={imageRef} />;
};

export default ImageFadeIn;
