"use client";

import Image from "next/image";
import icon_arrow from "../../public/img/icon_arrow.svg";
import { useEffect, useState } from "react";
import StyledLink from "next/link";

export default function NewsSection() {
  type News = {
    id: number;
    title: string;
    news_image: string;
    subtitle: string;
  };

  const [newsItems, setNewsItems] = useState<News[]>([]);

  useEffect(() => {
    const newsList = async (): Promise<void> => {
      const res = await fetch("/api/news");
      const data = await res.json();
      return setNewsItems(data);
    };
    newsList();
  }, []);

  return (
    <>
      <div className="container mt-[160px]">
        <div className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[150px]"></div>
          <div className="my-[8px]">
            <h2 className="text-[48px] font-semibold">재단소식</h2>
            <div className="text-[32px] mt-[16px]">
              <p className="leading-[38px]">빛나래문화재단의 새로운 소식과</p>
              <p>협력과 성장의 활동을 전합니다.</p>
            </div>
          </div>
        </div>
        <div className="flex my-[80px] gap-[32px]">
          {newsItems.map((newsItem, i) => (
            <div key={i}>
              <div className="w-[780px] h-[520px] position relative">
                <Image fill className=" rounded-[50px] object-cover z-0" src={newsItem.news_image} alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[50px]"></div>
                <div className="absolute z-10 inset-0 text-white pt-[362px] pl-[32px] text-xl">
                  <p className="leading-[38px]">{newsItem.title}</p>
                  <p>{newsItem.subtitle}</p>
                  <StyledLink href={"/"}>
                    <Image className="w-[31.5px] h-[31.5px] mt-[13.25px]" src={icon_arrow} alt="icon_arrow" />
                  </StyledLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#d6d6d6] w-screen h-[2px] mt-[80px] mb-[160px]"></div>
      </div>
    </>
  );
}
