"use client";

import StyledLink from "next/link";
import SlideLeftFade from "../ui/SlideLeftFade";
import "../../styles/utilities/header.css";
import { useInView } from "react-intersection-observer";
import { useHeroAnimationStore } from "../../store/HeroAnimationStore";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [onInViewRef, inView] = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  const isHeroAnimationDone = useHeroAnimationStore((state) => state.isHeroAnimationDone);
  const setIsHeaderAnimationDone = useHeroAnimationStore((state) => state.setIsHeaderAnimationDone);

  const pathName = usePathname();

  useEffect(() => {
    if (inView && isHeroAnimationDone) {
      setIsHeaderAnimationDone(true);
    }
  });

  return (
    <div className={pathName === "/" ? "absolute z-10 bg-white/10 w-full" : "w-full"}>
      <div className="container flex items-center justify-between py-[64px]">
        <div className={`flex items-center gap-[8px] ${pathName === "/" ? "text-white" : "text-black"}`}>
          <StyledLink className="header-title" href="/">
            빛나래문화재단
          </StyledLink>
          <div ref={onInViewRef}>
            {((pathName === "/" && inView && isHeroAnimationDone) || (pathName !== "/" && inView)) && (
              <SlideLeftFade key={pathName} className="flex items-center gap-[8px]">
                <div className={`header-slogan-mark ${pathName === "/" ? "bg-white" : "bg-black"}`}></div>
                <div className="header-slogan">
                  <p>BITNARAE</p>
                  <p>FOUNDATION OF CULTURE</p>
                </div>
              </SlideLeftFade>
            )}
          </div>
        </div>
        <ul className={`flex gap-[24px] text-lg  ${pathName === "/" ? "text-white" : "text-black"}`}>
          <li>
            <StyledLink className="header-menu-link" href={"/about/philosophy"}>
              재단소개
            </StyledLink>
          </li>
          <li>
            <StyledLink className="header-menu-link" href={"/program"}>
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
