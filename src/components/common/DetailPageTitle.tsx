"use client";

import StyledLink from "next/link";
import "../../styles/common/detailpagetitle.css";
import { usePathname } from "next/navigation";

type DetailPageTitleProps = {
  title: string;
};

export default function DetailPageTitle({ title }: DetailPageTitleProps) {
  const pathName = usePathname();
  const currentSubmenu = pathName.split("/").pop();

  const aboutSubMenu = [
    {
      title: "핵심철학",
      path: "philosophy",
    },
    {
      title: "빛나래문화센터",
      path: "facility",
    },
    {
      title: "오시는길",
      path: "location",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="about-common-title">{title}</h1>
        <ul className="about-common-tabmenu">
          {aboutSubMenu.map((menu, index) => {
            const isActive = currentSubmenu === menu.path;
            return (
              <li key={index} className="relative">
                <StyledLink href={`/about/${menu.path}`} className="hover:opacity-80 transition-opacity">
                  {menu.title}
                </StyledLink>
                {isActive && <div className="absolute w-full h-[4px] bg-black mt-[24px] left-0"></div>}
              </li>
            );
          })}
        </ul>
        <div className="w-full h-[1px] bg-[#C6C6C6] mb-[160px] mt-[24px]"></div>
      </div>
    </>
  );
}
