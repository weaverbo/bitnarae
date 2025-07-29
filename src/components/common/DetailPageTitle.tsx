"use client";

import StyledLink from "next/link";
import { useState } from "react";

type DetailPageTitleProps = {
  title: string;
};

export default function DetailPageTitle({ title }: DetailPageTitleProps) {
  const [hoverdIndex, setHoveredIndex] = useState(0);

  const aboutSubMenu = ["핵심철학", "빛나래문화센터", "오시는길"];

  return (
    <>
      <div className="container">
        <h1 className="text-center text-[42px] my-[160px] font-bold">{title}</h1>
        <ul className="flex justify-center gap-[165px] text-[36px]">
          {aboutSubMenu.map((menu, index) => (
            <li key={index} className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(0)}>
              <StyledLink href="/about">{menu}</StyledLink>
              {hoverdIndex === index && <div className="absolute w-full h-[4px] bg-black mt-[24px]"></div>}
            </li>
          ))}
        </ul>
        <div className="w-full h-[1px] bg-[#C6C6C6] mb-[160px] mt-[24px]"></div>
      </div>
    </>
  );
}
