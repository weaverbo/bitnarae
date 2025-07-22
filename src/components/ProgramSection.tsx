"use client";

import Image from "next/image";
import programimg_1 from "../../public/img/programImg1-min.png";
import programimg_2 from "../../public/img/programImg2-min.png";
import programimg_3 from "../../public/img/programImg3-min.png";
import icon_arrow from "../../public/img/icon_arrow.svg";
import "../styles/programsection.css";
import StyledLink from "next/link";
import SlideLeftFade from "./ui/SlideLeftFade";
import { motion } from "framer-motion";
import { useAnimatedInView } from "../hooks/useAnimatedInView";

export default function ProgramSection() {
  const { ref: onInViewRef1, inView: inView1 } = useAnimatedInView({ threshold: 0.8 });
  const { ref: onInViewRef2, hasAnimated: hasAnimated2 } = useAnimatedInView();
  const { ref: onInViewRef3, hasAnimated: hasAnimated3 } = useAnimatedInView();
  const { ref: onInViewRef4, hasAnimated: hasAnimated4 } = useAnimatedInView();

  return (
    <>
      <div className="container mt-[160px] mb-[320px]">
        <div ref={onInViewRef1} key={inView1 ? "in" : "out"}>
          <SlideLeftFade className="flex gap-[24px]">
            <div className="notice-section-title-mark"></div>
            <div className="my-[8px]">
              <h2 className="notice-section-title">재단활동</h2>
              <div className="notice-section-subtext">
                <p className="subtext-line">창작과 배움, 향유의 과정을 통해</p>
                <p>문화가 일상이 되는 사회를 만들어갑니다.</p>
              </div>
            </div>
          </SlideLeftFade>
        </div>
        <div className="flex gap-[32px] mt-[80px]">
          <div className="program-container" ref={onInViewRef2}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated2 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="w-full h-full">
              <Image className="w-full h-full object-cover rounded-[50px] relative" src={programimg_1} alt="programimg_1" />
              <div className="image-overlay rounded-[50px] absolute"></div>
            </motion.div>
            <div className="program-caption-wrapper">
              <p className="program-cation-top">빛움터</p>
              <p className="program-caption-bottom">꿈을 싹틔우는 배움터</p>
            </div>
          </div>
          <div className="program-container" ref={onInViewRef3}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated3 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="w-full h-full">
              <Image className="w-full h-full object-cover rounded-[50px] rounded-tr-[300px]" src={programimg_2} alt="programimg_1" />
              <div className="image-overlay rounded-[50px] rounded-tr-[300px]"></div>
            </motion.div>
            <div className="program-caption-wrapper">
              <p className="program-cation-top">빛공방</p>
              <p className="program-caption-bottom">마음껏 창작하는 작업터</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] mt-[32px]">
          <div className="program-container" ref={onInViewRef4}>
            <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={hasAnimated4 ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} className="w-full h-full">
              <Image className="w-full h-full object-cover rounded-[50px] rounded-bl-[300px]" src={programimg_3} alt="programimg_1" />
              <div className="image-overlay rounded-[50px] rounded-bl-[300px]"></div>
            </motion.div>
            <div className="program-caption-wrapper">
              <p className="program-cation-top">빛마당</p>
              <p className="program-caption-bottom">우리 동네 문화 놀이터</p>
            </div>
          </div>
          <div className="program-container bg-black rounded-[50px] rounded-br-[300px]">
            <div className="absolute top-[10px] left-[10px] text-white pt-[329px] pl-[157px]">
              <StyledLink className="text-[64px] font-regular pb-[8px] flex items-center gap-[8px]" href="/">
                자세히 알아보기
                <span>
                  <Image className="w-[44.25px] h-[44.25px]" src={icon_arrow} alt="icon_arrow" />
                </span>
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
