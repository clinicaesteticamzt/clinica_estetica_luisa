"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  offset = 80,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: offset }
      }
      transition={{
        duration: 0.9,
        delay: isInView ? delay : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
