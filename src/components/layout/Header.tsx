"use client";

import StyledLink from "next/link";
import SlideLeftFade from "../ui/SlideLeftFade";
import "../../styles/utilities/header.css";
import { useInView } from "react-intersection-observer";
import { useHeroAnimationStore } from "../../store/HeroAnimationStore";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import icon_hambuger from "../../../public/img/icon_hamburger.svg";
import icon_close from "../../../public/img/icon_close.png";
import dynamic from "next/dynamic";

function HeaderInner() {
  const [onInViewRef, inView] = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const isHeroAnimationDone = useHeroAnimationStore((state) => state.isHeroAnimationDone);
  const setIsHeaderAnimationDone = useHeroAnimationStore((state) => state.setIsHeaderAnimationDone);

  const pathName = usePathname();

  useEffect(() => {
    if (inView && isHeroAnimationDone) {
      setIsHeaderAnimationDone(true);
    }
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathName, setIsOpen]);

  const isMax880 = useMediaQuery({ maxWidth: 880 });
  const isMax393 = useMediaQuery({ maxWidth: 393 });

  return (
    <div className={pathName === "/" ? "absolute z-10 bg-white/10 w-full" : "w-full"}>
      {isMax880 ? (
        <div className="container header-wrapper">
          <div className={`flex items-center gap-[8px] ${pathName === "/" ? "text-white" : "text-black"}`}>
            <StyledLink className="header-title" href="/">
              빛나래문화재단
            </StyledLink>
            <div ref={onInViewRef}>
              {!isMax393 && ((pathName === "/" && inView && isHeroAnimationDone) || (pathName !== "/" && inView)) && (
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
          <div>
            <Image src={icon_hambuger} width={43} height={43} alt="icon_hambuger" onClick={() => setIsOpen(true)} />
          </div>
          {isOpen && (
            <div className="fixed bg-white top-0 left-0 z-50 w-full h-full flex justify-between px-[80px] pt-[128px]">
              <ul className={`flex flex-col gap-[64px] text-lg ${pathName === "/" ? "text-white" : "text-black"}`}>
                <li>
                  <StyledLink className="header-menu-link text-black" href={"/about/philosophy"}>
                    재단소개
                  </StyledLink>
                </li>
                <li>
                  <StyledLink className="header-menu-link text-black" href={"/program-activity"}>
                    재단활동
                  </StyledLink>
                </li>
                <li>
                  <StyledLink className="header-menu-link text-black" href={"/news"}>
                    재단소식
                  </StyledLink>
                </li>
                <li>
                  <StyledLink className="header-menu-link text-black" href={"/notices"}>
                    공지사항
                  </StyledLink>
                </li>
              </ul>
              <div>
                <Image className="mt-[-15px]" src={icon_close} width={43} height={43} alt="icon_close" onClick={() => setIsOpen(false)} />
              </div>
            </div>
          )}
        </div>
      ) : (
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
              <StyledLink className="header-menu-link" href={"/program-activity"}>
                재단활동
              </StyledLink>
            </li>
            <li>
              <StyledLink className="header-menu-link" href={"/news"}>
                재단소식
              </StyledLink>
            </li>
            <li>
              <StyledLink className="header-menu-link" href={"/notices"}>
                공지사항
              </StyledLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

const Header = dynamic(() => Promise.resolve(HeaderInner), {
  ssr: false,
});

export default Header;
