import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SvgAnimation = () => {
  const svgRef = useRef(null);

  const breakpoints = [
    { x: 200, y: 500, duration: 1 },
    { x: 400, y: 300, duration: 2 },
    { x: 600, y: 100, duration: 3 },
    { x: 800, y: 500, duration: 4 },
  ];

  const getDistance = (p1, p2) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const path = svgRef.current.querySelector("path");
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length });
    gsap.fromTo(
      path,
      { strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 6 }
    );

    let totalDuration = 6;
    let prevPos = { x: 0, y: 500 };
    for (let i = 0; i < breakpoints.length; i++) {
      const { x, y, duration } = breakpoints[i];
      const distance = getDistance(prevPos, { x, y });
      const partialPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      partialPath.setAttribute("d", `M${prevPos.x},${prevPos.y} L${x},${y}`);
      const partialLength = partialPath.getTotalLength();
      gsap.to(path, {
        strokeDashoffset: -length + partialLength,
        duration: (distance / length) * duration,
        delay: totalDuration,
        ease: "power1.inOut",
        onUpdate: () => {
          const { x: currentX, y: currentY } = path.getPointAtLength(
            path.getTotalLength() - path.style.strokeDashoffset
          );
          gsap.set(path.previousSibling, { x: currentX, y: currentY });
        },
        onComplete: () => {
          if (i === breakpoints.length - 1) {
            gsap.set(path.previousSibling, { display: "none" });
          }
        },
      });
      gsap.to(path.previousSibling, {
        x,
        y,
        duration: (distance / length) * duration,
        delay: totalDuration,
        ease: "power1.inOut",
      });
      prevPos = { x, y };
      totalDuration += duration;
    }
  }, []);

  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 600" ref={svgRef}>
      <circle cx="0" cy="0" r="1" fill="none" stroke="none" strokeWidth="0" />
      <path
        fill="none"
        stroke="#FFB800"
        strokeWidth="2"
        d="M100,500 L1000,500"
      />
    </svg>
  );
};

export default SvgAnimation;
