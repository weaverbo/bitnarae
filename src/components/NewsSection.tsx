"use client";

import Image from "next/image";
import icon_arrow from "../../public/img/icon_arrow.svg";
import { useEffect, useState } from "react";
import StyledLink from "next/link";
import SlideLeftFade from "../components/ui/SlideLeftFade";
import { useAnimateOnInView } from "../hook/useAnimateOnInView";
import newsImg_1 from "../../public/img/newsImg1-min.png";
import newsImg_2 from "../../public/img/newsImg2-min.png";
import newsImg_3 from "../../public/img/newsImg3-min.png";
import { div } from "framer-motion/client";

export default function NewsSection() {
  const [hoveredNewsId, setHoveredNewsId] = useState<number | null>(null);

  // type News = {
  //   id: number;
  //   title: string;
  //   news_image: string;
  //   subtitle: string;
  // };

  // const [newsItems, setNewsItems] = useState<News[]>([]);
  const { onInViewRef, animationKey } = useAnimateOnInView();

  const newsItems = [
    {
      id: 1,
      title: "빛나래문화재단, 지역 아동센터와 함께",
      subtitle: "예술 교육 프로그램 시작",
      src: newsImg_1,
    },
    {
      id: 2,
      title: "빛나래문화재단, 지역 문화 축제",
      subtitle: "'빛마루' 성황리 개최",
      src: newsImg_2,
    },
    {
      id: 3,
      title: "빛나래문화재단, 신진 예술가 참여",
      subtitle: "'빛그림' 공모전 개최",
      src: newsImg_3,
    },
  ];

  // useEffect(() => {
  //   const newsList = async (): Promise<void> => {
  //     const res = await fetch("/api/news");
  //     const data = await res.json();
  //     return setNewsItems(data);
  //   };
  //   newsList();
  // }, []);

  return (
    <>
      <div className="container mt-[320px]">
        <div ref={onInViewRef}>
          <SlideLeftFade className="flex gap-[24px]" animationKey={animationKey}>
            <div className="bg-black w-[2px] h-[150px]"></div>
            <div className="my-[8px]">
              <h2 className="text-[48px] font-semibold">재단소식</h2>
              <div className="text-[32px] mt-[16px]">
                <p className="leading-[38px]">빛나래문화재단의 새로운 소식과</p>
                <p>협력과 성장의 활동을 전합니다.</p>
              </div>
            </div>
          </SlideLeftFade>
        </div>

        <div className="flex my-[80px] gap-[32px] overflow-x-scroll scrollbar-hide w-screen relative">
          {newsItems.map((newsItem, i) => (
            // 왜 아래 div 코드를 빼면 문제가 생기는지
            <div key={i} onMouseEnter={() => setHoveredNewsId(newsItem.id)} onMouseLeave={() => setHoveredNewsId(null)} className="relative w-[780px]">
              <div className="w-[780px] h-[520px] relative">
                <Image fill className="rounded-[50px] object-cover z-0" src={newsItem.src} alt="news_image" />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[50px]"></div>
                <div className={`absolute z-10 inset-0 text-white pl-[32px] text-xl transition-all duration-300 ease-in-out ${hoveredNewsId === newsItem.id ? "pt-[362px]" : "pt-[412px]"}`}>
                  <p className="leading-[38px]">{newsItem.title}</p>
                  <p>{newsItem.subtitle}</p>
                </div>
                <div className={`relative transition-opacity duration-300 ease-in-out delay-100 ${hoveredNewsId === newsItem.id ? "opacity-100" : "opacity-0"}`}>
                  <StyledLink href="/" className="absolute top-[446px] left-[32px]">
                    <Image className="w-[31.5px] h-[31.5px]" src={icon_arrow} alt="icon_arrow" />
                  </StyledLink>
                </div>
              </div>
              <div className={`absolute h-[2px] w-full mt-[80px] bg-black transition-all duration-300 ease-in-out ${hoveredNewsId === newsItem.id ? "opacity-100" : "opacity-0"}`} />
              <div className="bg-[#d6d6d6] min-w-[930px] h-[2px] mt-[80px] z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* {newsItems.map((newsItem, i) => (
            <div key={i} onClick={() => setSelectedNewsId(newsItem.id)}>
              <div className="w-[780px] relative">
                <Image fill className="rounded-[50px] object-cover z-0" src={newsItem.news_image} alt="news_image" />
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
          ))} */
}
