"use client";
import { motion, AnimatePresence, useInView } from "motion/react";
import * as React from "react";

export default function HeaderMotion({ text }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-0.5 justify-center p-10 ">
      <AnimatePresence>
        {(text || "").split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-xl text-center sm:text-4xl tracking-tighter md:text-6xl md:leading-[4rem] font-marker font-normal italic"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
