"use client";

import Image from "next/image";
import mainImg from "../../public/img/mainImg-min.jpg";
import "../styles/herosection.css";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SlideUpFade from "./ui/SlideUpFade";

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const [onInViewRef, hasAnimated] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    if (hasAnimated) {
      const timers = [
        setTimeout(() => setStep(1), 1200),
        setTimeout(() => setStep(2), 2500),
        setTimeout(() => setStep(3), 2800),
        setTimeout(() => setStep(4), 4100),
        setTimeout(() => setStep(5), 4400),
        setTimeout(() => setStep(6), 6000),
        setTimeout(() => setStep(7), 9000),
        setTimeout(() => setStep(8), 10000),
        setTimeout(() => setStep(9), 11000),
        setTimeout(() => setStep(10), 12000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [hasAnimated]);

  // 2. 전체적인 애니메이션 좀 더 매끄럽게 다듬기
  const renderText = () => {
    return (
      <>
        <div className="hero-side-text">
          <AnimatePresence>
            {step >= 1 && step < 5 && (
              // 3. 위치 밀리는 부분 수정하기
              <motion.p key="text-1" className="side-text-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                작은 불꽃 하나
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 2 && step < 5 && (
              <motion.p key="text-2" className="side-text-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                세상을 밝히는 시작
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {step >= 6 && step < 9 && (
          <SlideUpFade className="hero-text" key="text-5">
            빛나래문화재단
          </SlideUpFade>
        )}

        <div className="hero-side-text">
          <AnimatePresence>
            {step >= 3 && step < 5 && (
              <motion.p key="text-3" className="side-text-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                당신의 일상에
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 4 && step < 5 && (
              <motion.p key="text-4" className="side-text-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                문화의 불꽃을
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative" ref={onInViewRef}>
        <motion.div
          // initial 값이 왜 false인가 어떤 원리인가?
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
          <Image src={mainImg} alt="main-image" className="w-full h-full object-cover absolute z-8 relative" />
          {/* 1. 원 모양으로 opacity 주는 문제랑 */}
          {step >= 5 && step < 10 && <div className="absolute inset-0 bg-black/50 z-9"></div>}
        </motion.div>

        <div className="container hero-sidetext-wrapper">{renderText()}</div>
      </div>
    </>
  );
}
