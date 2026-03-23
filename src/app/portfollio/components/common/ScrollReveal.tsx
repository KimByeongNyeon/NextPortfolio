"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  overflow?: boolean;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ children, width = "100%", overflow = true, direction = "up", delay = 0, duration = 0.5, className = "" }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getInitialDirection = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  const getVisibleDirection = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        overflow: "visible",
      }}
      className={`${className} w-full overflow-visible`}
    >
      <motion.div
        variants={{
          hidden: getInitialDirection(),
          visible: getVisibleDirection(),
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        style={{
          width: "100%",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        className="w-full overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
