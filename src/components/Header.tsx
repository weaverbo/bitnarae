"use client";

import StyledLink from "next/link";
import SlideLeftFade from "../components/ui/SlideLeftFade";
import "../styles/header.css";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const [onInViewRef, inView] = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  return (
    <div className="absolute z-10 bg-white/10 w-full">
      <div className="container flex items-center justify-between py-[64px]">
        <div className="flex text-white items-center gap-[8px]">
          <h1 className="header-title">빛나래문화재단</h1>
          <div ref={onInViewRef}>
            {inView && (
              <SlideLeftFade className="flex items-center gap-[8px]">
                <div className="header-slogan-mark"></div>
                <div className="header-slogan">
                  <p>BITNARAE</p>
                  <p>FOUNDATION OF CULTURE</p>
                </div>
              </SlideLeftFade>
            )}
          </div>
        </div>
        <ul className="flex gap-[24px] text-lg text-white">
          <li>
            <StyledLink className="header-menu-link" href={"/"}>
              재단소개
            </StyledLink>
          </li>
          <li>
            <StyledLink className="header-menu-link" href={"/"}>
              재단활동
            </StyledLink>
          </li>
          <li>
            <StyledLink className="header-menu-link" href={"/"}>
              재단소식
            </StyledLink>
          </li>
          <li>
            <StyledLink className="header-menu-link" href={"/"}>
              공지사항
            </StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
