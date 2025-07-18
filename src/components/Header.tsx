"use client";

import StyledLink from "next/link";
import SlideLeftFade from "../components/ui/SlideLeftFade";

// 여기 애니메이션이 사용자가 화면 맨 끝으로 갔다가 Header가 화면에 보였을 때 애니메이션을 재 실행되게 할것인지?
export default function Header() {
  return (
    <div className="position absolute z-10 bg-white/10 w-full">
      <div className="flex items-center justify-between container py-[64px]">
        <div className="flex text-white items-center gap-[8px]">
          <h1 className="text-2xl font-semibold">빛나래문화재단</h1>
          <SlideLeftFade className="flex items-center gap-[8px]">
            <div className="w-[2px] h-[38px] bg-white"></div>
            <div className="text-[16px] font-semibold leading-[19px]">
              <p>BITNARAE</p>
              <p>FOUNDATION OF CULTURE</p>
            </div>
          </SlideLeftFade>
        </div>
        <ul className="flex gap-[24px] text-lg text-white">
          <li>
            <StyledLink href={"/"}>재단소개</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>재단활동</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>재단소식</StyledLink>
          </li>
          <li>
            <StyledLink href={"/"}>공지사항</StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
