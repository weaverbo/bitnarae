"use client";

import Image from "next/image";
import search from "../../../public/img/Search.png";
import PageIconNumberLeft from "../../../public/img/page_number_icon_left.png";
import PageIconNumberRight from "../../../public/img/page_icon_number_right.png";
import "../../styles/common/infoboardtemplete.css";
import StyledLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type InfoItem = {
  id: number;
  title: string;
  subtitle?: string | null;
  created_at?: Date | null;
};

type Props = {
  title: string;
  data: InfoItem[];
};

export default function InfoBoardTemplate({ title, data }: Props) {
  const pathName = usePathname();

  return (
    <div className="container">
      <h1 className="text-center text-[42px] my-[160px]">{title}</h1>
      <div className={`flex items-center ${pathName.startsWith("/notices") ? "justify-between" : "justify-end"}`}>
        {pathName.startsWith("/notices") && (
          <ul className="flex text-[24px]">
            <li className={pathName === "/notices" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices">전체</StyledLink>
            </li>
            <li className={pathName === "/notices/recruit" ? "px-[24px] tab-menu-link" : "px-[24px]"}>
              <StyledLink href="/notices/recruit">모집</StyledLink>
            </li>
            <li className={pathName === "/notices/info" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices/info">공시</StyledLink>
            </li>
          </ul>
        )}
        <div className="relative w-[300px] h-[34px]">
          <input type="text" className="border-b border-black w-full h-full placeholder-[#898989]" placeholder=" 검색어를 입력해주세요" />
          <Image src={search} alt="search" width={24} height={24} className="absolute top-1/2 -translate-y-1/2 right-[8px]" />
        </div>
      </div>
      <ul className="mt-[36px] border-t-[4px] border-b-[4px] border-black mb-[80px]">
        {data.map((item) => (
          <li key={item.id} className="border-b-[2px]">
            <StyledLink href={`${pathName}/${item.id}`}>
              <div className="mx-[32px] flex gap-[32px] py-[32px]">
                <p>{item.id}</p>
                <p className="w-[1334px]">{`${pathName === "/news" ? item.title + item.subtitle : item.title}`}</p>
                <p>{item.created_at?.toISOString().split("T")[0]}</p>
              </div>
            </StyledLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-[16px] mt-[80px] mb-[160px]">
        <Image src={PageIconNumberLeft} width={12} height={22} alt="page_icon_number_left" />
        <p>1</p>
        <Image src={PageIconNumberRight} width={12} height={22} alt="page_icon_number_right" />
      </div>
    </div>
  );
}
