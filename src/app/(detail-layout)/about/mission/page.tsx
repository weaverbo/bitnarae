"use client";

import Image from "next/image";
import missionImg from "../../../../../public/img/missionImg.png";
import circleNo1 from "../../../../../public/img/circleNo1.svg";
import circleNo2 from "../../../../../public/img/circleNo2.svg";
import circleNo3 from "../../../../../public/img/circleNo3.svg";
import circleNo4 from "../../../../../public/img/circleNo4.svg";
import hoveredNo1 from "../../../../../public/img/hoveredNo1.svg";
import hoveredNo2 from "../../../../../public/img/hoveredNo2.svg";
import hoveredNo3 from "../../../../../public/img/hoveredNo3.svg";
import hoveredNo4 from "../../../../../public/img/hoveredNo4.svg";
import { motion } from "framer-motion";
import { useAnimatedInView } from "../../../../hooks/useAnimatedInView";

import "../../../../styles/mission.css";
import { useState } from "react";

export default function Mission() {
  const missionHeader = useAnimatedInView({ threshold: 0.8 });
  const missionBody1 = useAnimatedInView({ threshold: 0.8 });
  const missionBody2 = useAnimatedInView({ threshold: 0.8 });
  const missionBody3 = useAnimatedInView({ threshold: 0.8 });
  const missionBody4 = useAnimatedInView({ threshold: 0.8 });
  const visionHeader = useAnimatedInView({ threshold: 0.8 });
  const visionBody1 = useAnimatedInView({ threshold: 0.8 });
  const visionBody2 = useAnimatedInView({ threshold: 0.8 });
  const valueHeader = useAnimatedInView({ threshold: 0.8 });
  const valueBody1 = useAnimatedInView({ threshold: 0.8 });
  const valueBody2 = useAnimatedInView({ threshold: 0.8 });


  const [hoveredStates, setHoveredStates] = useState(Array(8).fill(false));

  const handleMouseEnter = (index: number) => {
    setHoveredStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <>
      <div className="container">
        <div>
          <div className="border-b border-bg-[#C6C6C6] pb-[25px] mb-[194px] flex justify-between">
            <div>
              <div ref={missionHeader.ref}>
                {missionHeader.hasAnimated && (
                  <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}>
                    <div className="flex items-center gap-[16px]">
                      <div className="mission-section-title-mark " />
                      <span className="mission-section-subtitle">MISSION</span>
                    </div>
                    <h1 className="mission-section-title">우리가 지키는 사명</h1>
                  </motion.div>
                )}
              </div>
              <div className="text-xl flex flex-col gap-[60px] mt-[160px] mb-[185px]">
                <div ref={missionBody1.ref}>
                  {missionBody1.hasAnimated && (
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
                      <p>
                        <span className="font-bold">빛나래문화재단</span>은 예술로 사람과 사회에 가
                      </p>
                      <p className="leading-[44.8px]">치를 더하고자 태어났습니다.</p>
                    </motion.div>
                  )}
                </div>
                <div ref={missionBody2.ref}>
                  {missionBody2.hasAnimated && (
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}>
                      <p>
                        <span className="font-bold">예술을 모두에게</span>
                      </p>
                      <p className="leading-[44.8px]">지역, 계층, 세대에 관계 없이</p>
                      <p>누구나 누릴 수 있는 환경을 만듭니다.</p>
                    </motion.div>
                  )}
                </div>
                <div ref={missionBody3.ref}>
                  {missionBody3.hasAnimated && (
                    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}>
                      <p>
                        <span className="font-bold">예술을 일상으로</span>
                      </p>
                      <p className="leading-[44.8px]">일상 속 충만함을 위해</p>
                      <p>온몸으로 느끼는 예술 경험을 제공합니다.</p>
                    </motion.div>
                  )}
                </div>
                <div ref={missionBody4.ref}>
                  {missionBody4.hasAnimated && (
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}>
                      <p>
                        <span className="font-bold">예술을 자기답게</span>
                      </p>
                      <p className="leading-[44.8px]">특별한 재능보다 표현의 의지를 존중하며</p>
                      <p>모두에게 창작의 기회를 엽니다.</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Image src={missionImg} alt="mission_thumnail" className="mission-thumnail" />
            </motion.div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between border-b border-bg-[#C6C6C6] pb-[160px] mb-[194px]">
            <div ref={visionHeader.ref}>
              {visionHeader.hasAnimated && (
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <div className="flex items-center gap-[16px]">
                    <div className="mission-section-title-mark " />
                    <span className="mission-section-subtitle">VISION</span>
                  </div>
                  <h1 className="mission-section-title">우리가 꿈꾸는 미래</h1>
                </motion.div>
              )}
            </div>
            <div className="flex flex-col gap-[160px] mt-[236px]">
              <div ref={visionBody1.ref}>
                {visionBody1.hasAnimated && (
                  <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-between w-[796px]">
                    <div className="text-xl w-[318px]" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                      <Image src={hoveredStates[0] ? hoveredNo1 : circleNo1} alt="1" className="mb-[16px]" />
                      <div className={`${hoveredStates[0] ? "underline underline-offset-4" : ""}`}>
                        <p>제약 없이 평등하게 누리는</p>
                        <p className="t leading-[48px]">문화예술 조기교육 지원</p>
                      </div>
                    </div>
                    <div className="text-xl w-[318px]" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                      <Image src={hoveredStates[1] ? hoveredNo2 : circleNo2} alt="2" className="mb-[16px]" />
                      <div className={`${hoveredStates[1] ? "underline underline-offset-4" : ""}`}>
                        <p>자유롭게 창작할 수 있도록</p>
                        <p className="t leading-[48px]">신진 예술가 지원</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={visionBody2.ref}>
                {visionBody2.hasAnimated && (
                  <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-between w-[796px]">
                    <div className="text-xl w-[318px]" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                      <Image src={hoveredStates[2] ? hoveredNo3 : circleNo3} alt="3" className="mb-[16px]" />
                      <div className={`${hoveredStates[2] ? "underline underline-offset-4" : ""}`}>
                        <p>누구나 창작할 수 있는</p>
                        <p className="t leading-[48px]">시민 예술 생태계 조성</p>
                      </div>
                    </div>
                    <div className="text-xl w-[318px]" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                      <Image src={hoveredStates[3] ? hoveredNo4 : circleNo4} alt="4" className="mb-[16px]" />
                      <div className={`${hoveredStates[3] ? "underline underline-offset-4" : ""}`}>
                        <p>예술가와 시민이 함께</p>
                        <p className="t leading-[48px]">성장하는 문화 기반 구축</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between border-b border-bg-[#C6C6C6] pb-[160px] mb-[194px]">
            <div ref={valueHeader.ref}>
              {valueHeader.hasAnimated && (
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <div className="flex items-center gap-[16px]">
                    <div className="mission-section-title-mark " />
                    <span className="mission-section-subtitle">VALUE</span>
                  </div>
                  <h1 className="mission-section-title">우리가 따르는 가치</h1>
                </motion.div>
              )}
            </div>
            <div className="flex flex-col gap-[160px] mt-[236px]">
              <div ref={valueBody1.ref}>
                {valueBody1.hasAnimated && (
                  <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-between w-[774px]">
                    <div className="text-xl w-[307px]" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)}>
                      <div className="w-full h-[1px] bg-black mb-[32px]" />
                      <div className={`${hoveredStates[4] ? "underline underline-offset-4 font-bold" : ""}`}>
                        <span>포용</span>
                        <p className="mt-[16px]">세대와 배경을 넘어</p>
                        <p className="t leading-[44.8px]">누구나 문화의 주체</p>
                      </div>
                    </div>
                    <div className="text-xl w-[307px]" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={() => handleMouseLeave(5)}>
                      <div className="w-full h-[1px] bg-black mb-[32px]" />
                      <div className={`${hoveredStates[5] ? "underline underline-offset-4 font-bold" : ""}`}>
                        <span>창의</span>
                        <p className="mt-[16px]">시도와 표현을 존중하고</p>
                        <p className="t leading-[44.8px]">창작의 자유 지지</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={valueBody2.ref}>
                {valueBody2.hasAnimated && (
                  <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex justify-between w-[774px]">
                    <div className="text-xl w-[307px]" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={() => handleMouseLeave(6)}>
                      <div className="w-full h-[1px] bg-black mb-[32px]" />
                      <div className={`${hoveredStates[6] ? "underline underline-offset-4 font-bold" : ""}`}>
                        <span>연결</span>
                        <p className="mt-[16px]">예술과 일상 잇는</p>
                        <p className="t leading-[48px]">문화의 다리</p>
                      </div>
                    </div>
                    <div className="text-xl w-[307px]" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={() => handleMouseLeave(7)}>
                      <div className="w-full h-[1px] bg-black mb-[32px]" />
                      <div className={`${hoveredStates[7] ? "underline underline-offset-4 font-bold" : ""}`}>
                        <span>성장</span>
                        <p className="mt-[16px]">개인과 공동체가 함께</p>
                        <p className="t leading-[44.8px]">지속적 성장 추구</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
