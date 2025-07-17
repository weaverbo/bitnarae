"use client";

import Image from "next/image";
import programimg_1 from "../../public/img/programImg1-min.png";
import programimg_2 from "../../public/img/programImg2-min.png";
import programimg_3 from "../../public/img/programImg3-min.png";
import icon_arrow from "../../public/img/icon_arrow.svg";
import "../styles/activitiessection.css";
import StyledLink from "next/link";
import SlideLeftFade from "../components/ui/SlideLeftFade";

export default function ActivitiesSection() {
  return (
    <>
      <div className="container mb-[160px]">
        <SlideLeftFade className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[150px]"></div>
          <div className="my-[8px]">
            <h2 className="text-[48px] font-semibold">재단활동</h2>
            <div className="text-[32px] mt-[16px]">
              <p className="leading-[38px]">창작과 배움, 향유의 과정을 통해</p>
              <p>문화가 일상이 되는 사회를 만들어갑니다.</p>
            </div>
          </div>
        </SlideLeftFade>
        <div className="flex gap-[32px] mt-[80px]">
          <div className="activity-container">
            <Image className="w-full h-full object-cover rounded-[50px]" src={programimg_1} alt="programimg_1" />
            <div className="image-overlay rounded-[50px]"></div>
            <div className="absolute top-[10px] left-[10px] text-white text-center pt-[329px] pl-[216px]">
              <p className="text-[64px] font-semibold pb-[8px]">빛움터</p>
              <p className="text-[36px]">꿈을 싹틔우는 배움터</p>
            </div>
          </div>
          <div className="activity-container">
            <Image className="w-full h-full object-cover rounded-[50px] rounded-tr-[300px]" src={programimg_2} alt="programimg_1" />
            <div className="image-overlay rounded-[50px] rounded-tr-[300px]"></div>
            <div className="absolute top-[10px] left-[10px] text-white text-center pt-[329px] pl-[216px]">
              <p className="text-[64px] font-semibold pb-[8px]">빛공방</p>
              <p className="text-[36px]">마음껏 창작하는 작업터</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] mt-[32px]">
          <div className="activity-container">
            <Image className="w-full h-full object-cover rounded-[50px] rounded-bl-[300px]" src={programimg_3} alt="programimg_1" />
            <div className="image-overlay rounded-[50px] rounded-bl-[300px]"></div>
            <div className="absolute top-[10px] left-[10px] text-white text-center pt-[329px] pl-[216px]">
              <p className="text-[64px] font-semibold pb-[8px]">빛마당</p>
              <p className="text-[36px]">우리 동네 문화 놀이터</p>
            </div>
          </div>
          <div className="activity-container bg-black rounded-[50px] rounded-br-[300px]">
            <div className=" absolute top-[10px] left-[10px] text-white pt-[329px] pl-[157px]">
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
