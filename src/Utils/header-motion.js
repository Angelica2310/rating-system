"use client";
import { motion, AnimatePresence, useInView } from "motion/react";
import * as React from "react";

export default function HeaderMotion({ text }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-0.5 justify-center p-10 md:text-4xl md:leading-[4rem]">
      <AnimatePresence>
        {(text || "").split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              fontFamily: '"Kranky", serif',
              fontSize: "50px",
            }}
            className="header-motion"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
