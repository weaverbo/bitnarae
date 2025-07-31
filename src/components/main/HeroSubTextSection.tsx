"use client";
import "../../styles/main/herosubtextsection.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroSubTextSection() {
  const [onInViewRef, inView] = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  return (
    <>
      <div className="herosubtext" ref={onInViewRef}>
        <div>
          <div className="subtext-wrapper">
            {inView && (
              <motion.p initial={{ x: 650 }} animate={{ x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                일상 속에서 창작의 자유와
              </motion.p>
            )}
          </div>
        </div>
        <div>
          <div className="subtext-wrapper">
            {inView && (
              <motion.p initial={{ x: -650 }} animate={{ x: 0 }} transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}>
                예술을 경험할 수 있도록
              </motion.p>
            )}
          </div>
        </div>
        <div className="subtext-wrapper">
          {inView && (
            <motion.div initial={{ x: 750, opacity: 1 }} animate={{ x: 0 }} transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}>
              <div className="flex items-center">
                <div className="subtext-highlight-box">
                  <motion.span className="highlight-text" initial={{ x: -650, opacity: 1 }} animate={{ x: 0 }} transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}>
                    빛나래문화재단
                  </motion.span>
                </div>
                <span>이 함께합니다.</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
