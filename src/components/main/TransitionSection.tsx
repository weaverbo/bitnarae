"use client";

import Image from "next/image";
import transition from "../../../public/img/transitionImg-min.png";
import "../../styles/main/transitionsection.css";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TransitionSection() {
  const [showText, setShowText] = useState(false);

  const [onInViewRef, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [inView]);

  return (
    <>
      <div className="relative w-full h-screen" ref={onInViewRef}>
        <Image src={transition} fill className={`object-cover transition-opacity duration-1000 ease-out delay-200 ${inView ? "opacity-100" : "opacity-0"}`} alt="transitionImg-min" />
        <div className={`absolute inset-0 bg-black bg-opacity-35 transition-opacity duration-1000 ease-out delay-200 ${inView ? "opacity-100" : "opacity-0"}`} />
        {showText && (
          <div className="transitionsection-caption-wrapper">
            <motion.p
              className="leading-[77px]"
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                opacity: 0,
                y: 2,
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              빛나래문화재단은
            </motion.p>
            <motion.p
              className="leading-[77px]"
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                opacity: 0,
                y: 2,
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              언제나 활짝 열려 있습니다.
            </motion.p>
          </div>
        )}
      </div>
    </>
  );
}
