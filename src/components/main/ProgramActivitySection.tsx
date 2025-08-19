"use client";

import Image from "next/image";
import programimg_1 from "../../../public/img/programImg1-min.png";
import programimg_2 from "../../../public/img/programImg2-min.png";
import programimg_3 from "../../../public/img/programImg3-min.png";
import icon_arrow from "../../../public/img/icon_arrow.svg";
import "../../styles/main/programactivitysection.css";
import StyledLink from "next/link";
import SlideLeftFade from "../ui/SlideLeftFade";
import SlideUpFade from "../ui/SlideUpFade";
import { motion } from "framer-motion";
import { useAnimatedInView } from "../../hooks/useAnimatedInView";
import { useState } from "react";

export default function ProgramActivitySection() {
  const { ref: onInViewRef1, inView: inView1 } = useAnimatedInView({ threshold: 0.8 });
  const { ref: onInViewRef2, hasAnimated: hasAnimated2 } = useAnimatedInView();
  const { ref: onInViewRef3, hasAnimated: hasAnimated3 } = useAnimatedInView();
  const { ref: onInViewRef4, hasAnimated: hasAnimated4 } = useAnimatedInView();

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <>
      <div className="container program-activity-section-wrapper">
        <div ref={onInViewRef1} key={inView1 ? "in" : "out"}>
          <SlideLeftFade className="flex gap-[24px]">
            <div className="program-activity-section-title-mark"></div>
            <div className="my-[8px]">
              <h2 className="program-activity-section-title">재단활동</h2>
              <div className="program-activity-section-subtext">
                <p className="subtext-line">창작과 배움, 향유의 과정을 통해</p>
                <p>문화가 일상이 되는 사회를 만들어갑니다.</p>
              </div>
            </div>
          </SlideLeftFade>
        </div>
        <div className="program-activity-group-top">
          <div className="program-activity-container" ref={onInViewRef2} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated2 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="w-full h-full">
              <Image className="w-full h-full object-cover rounded-[50px] relative" src={programimg_1} alt="programimg_1" />
              <div className="image-overlay rounded-[50px]"></div>
            </motion.div>
            <div className="program-activity-caption-wrapper">
              <p className="program-activity-cation-top">빛움터</p>
              <div className="program-activity-caption-bottom-wrapper">{hovered && <SlideUpFade className="program-activity-caption-bottom">꿈을 싹틔우는 배움터</SlideUpFade>}</div>
            </div>
          </div>
          <div className="program-activity-container" ref={onInViewRef3} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated3 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="w-full h-full">
              <Image className="w-full h-full object-cover  program-activity-image-tr" src={programimg_2} alt="programimg_1" />
              <div className="image-overlay image-overlay-tr"></div>
            </motion.div>
            <div className="program-activity-caption-wrapper">
              <p className="program-activity-cation-top">빛공방</p>
              <div className="program-activity-caption-bottom-wrapper">{hovered2 && <SlideUpFade className="program-activity-caption-bottom">마음껏 창작하는 작업터</SlideUpFade>}</div>
            </div>
          </div>
        </div>
        <div className="program-activity-group-bottom">
          <div className="program-activity-container" ref={onInViewRef4} onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated4 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} className="w-full h-full">
              <Image className="w-full h-full object-cover image-overlay-bl" src={programimg_3} alt="programimg_1" />
              <div className="image-overlay image-overlay-bl"></div>
            </motion.div>
            <div className="program-activity-caption-wrapper">
              <p className="program-activity-cation-top">빛마당</p>
              <div className="program-activity-caption-bottom-wrapper">{hovered3 && <SlideUpFade className="program-activity-caption-bottom">우리 동네 문화 놀이터</SlideUpFade>}</div>
            </div>
          </div>
          <div className="program-activity-container bg-black program-activity-image-br" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <motion.div initial={{ y: 0 }} animate={hovered ? { y: -20 } : { y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="program-activity-link-wrapper">
              <StyledLink className="program-activity-link" href="/program-activity">
                자세히 알아보기
                <span>
                  <Image className="w-[44.25px] h-[44.25px]" src={icon_arrow} alt="icon_arrow" />
                </span>
              </StyledLink>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
