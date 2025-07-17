"use client";

import { motion } from "framer-motion";

export default function HeroSubText() {
  return (
    <>
      <div className="text-center text-4xl py-[150px]">
        <div>
          <div className="overflow-hidden inline-block">
            <motion.p className="" initial={{ x: 650 }} animate={{ x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              일상 속에서 창작의 자유와
            </motion.p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden inline-block">
            <motion.p className="" initial={{ x: -650 }} animate={{ x: 0 }} transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}>
              예술을 경험할 수 있도록
            </motion.p>
          </div>
        </div>
        <div className="overflow-hidden inline-block">
          <motion.div initial={{ x: 750, opacity: 1 }} animate={{ x: 0 }} transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}>
            <div className="flex items-center">
              <div className="w-[388px] h-[76px] bg-black">
                <motion.span className="flex justify-center p-[5px] text-white text-[60px]" initial={{ x: -650, opacity: 1 }} animate={{ x: 0 }} transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}>
                  빛나래 문화재단
                </motion.span>
              </div>
              <span>이 함께합니다.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
