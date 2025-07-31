"use client";

import Image from "next/image";
import mainImg from "../../../public/img/mainImg-min.jpg";
import "../../styles/main/herosection.css";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHeroAnimationStore } from "../../store/HeroAnimationStore";
import SlideUpFade from "../ui/SlideUpFade";

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const [onInViewRef, hasAnimated] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const setHeroAnimationDone = useHeroAnimationStore((state) => state.setIsHeroAnimationDone);
  const isHeaderAnimationDone = useHeroAnimationStore((state) => state.isHeaderAnimationDone);

  useEffect(() => {
    setTimeout(() => {
      setHeroAnimationDone(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (hasAnimated && isHeaderAnimationDone) {
      const timers = [
        setTimeout(() => setStep(1), 1800),
        setTimeout(() => setStep(2), 2400),
        setTimeout(() => setStep(3), 3000),
        setTimeout(() => setStep(4), 3600),
        setTimeout(() => setStep(5), 6000),
        setTimeout(() => setStep(6), 8000),
        setTimeout(() => setStep(7), 10000),
        setTimeout(() => setStep(8), 12000),
        setTimeout(() => setStep(9), 14000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [hasAnimated, isHeaderAnimationDone]);

  const renderText = () => {
    return (
      <>
        <div className="hero-side-text">
          <motion.p className="side-text-line" initial={false} animate={{ opacity: step >= 1 && step < 5 ? 1 : 0 }} transition={{ duration: 0.6 }}>
            작은 불꽃 하나
          </motion.p>

          <motion.p className="side-text-line" initial={false} animate={{ opacity: step >= 2 && step < 5 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            세상을 밝히는 시작
          </motion.p>
        </div>

        <AnimatePresence>
          {step >= 6 && step < 8 && (
            <SlideUpFade className="hero-text" withExit>
              빛나래문화재단
            </SlideUpFade>
          )}
        </AnimatePresence>
        <div className="hero-side-text">
          <motion.p className="side-text-line" initial={false} animate={{ opacity: step >= 3 && step < 5 ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            당신의 일상에
          </motion.p>
          <motion.p className="side-text-line" initial={false} animate={{ opacity: step >= 4 && step < 5 ? 1 : 0 }} transition={{ duration: 0.6, delay: 1 }}>
            문화의 불꽃을
          </motion.p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative" ref={onInViewRef}>
        <motion.div
          initial={false}
          animate={{
            width: hasAnimated ? "100%" : "905px",
            height: hasAnimated ? "1071px" : "905px",
            borderRadius: hasAnimated ? "0px" : "9999px",
            y: hasAnimated ? 0 : 166,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="overflow-hidden mx-auto "
        >
          <Image src={mainImg} alt="main-image" className="w-full h-full object-cover" />
        </motion.div>
        <AnimatePresence>
          {step > 5 && step < 9 && (
            <motion.div
              className="absolute inset-0 bg-black/50 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              style={{
                background: `radial-gradient(circle at center,rgba(0, 0, 0, 0.5) 150px,rgba(0, 0, 0, 0.7) 450px)`,
                backgroundPosition: "center 66px",
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className="container hero-sidetext-wrapper">{renderText()}</div>
      </div>
    </>
  );
}
