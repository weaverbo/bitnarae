"use client";

import StyledLink from "next/link";
import Image from "next/image";
import icon_arrow from "../../../public/img/icon_arrow.svg";
import { useEffect, useState } from "react";
import SlideLeftFade from "../ui/SlideLeftFade";

// import newsImg_1 from "../../../public/img/newsImg1-min.png";
// import newsImg_2 from "../../../public/img/newsImg2-min.png";
// import newsImg_3 from "../../../public/img/newsImg3-min.png";
import "../../styles/main/newssection.css";
import { useInView } from "react-intersection-observer";

export default function NewsSection() {
  const [hoveredNewsId, setHoveredNewsId] = useState<number | null>(null);

  type News = {
    id: number;
    title: string;
    news_image: string;
    subtitle: string;
  };

  const [newsItems, setNewsItems] = useState<News[]>([]);

  const [onInViewRef, inView] = useInView({
    threshold: 1,
  });

  // const newsItems = [
  //   {
  //     id: 1,
  //     title: "빛나래문화재단, 지역 아동센터와 함께",
  //     subtitle: "예술 교육 프로그램 시작",
  //     src: newsImg_1,
  //   },
  //   {
  //     id: 2,
  //     title: "빛나래문화재단, 지역 문화 축제",
  //     subtitle: "'빛마루' 성황리 개최",
  //     src: newsImg_2,
  //   },
  //   {
  //     id: 3,
  //     title: "빛나래문화재단, 신진 예술가 참여",
  //     subtitle: "'빛그림' 공모전 개최",
  //     src: newsImg_3,
  //   },
  // ];

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
      <div className="container new-section-wrapper">
        <div ref={onInViewRef} key={inView ? "in" : "out"}>
          <SlideLeftFade className="flex gap-[24px]">
            <div className="news-section-title-mark"></div>
            <div className="my-[8px]">
              <h2 className="news-section-title">재단소식</h2>
              <div className="new-section-subtext">
                <p className="subtext-line">빛나래문화재단의 새로운 소식과</p>
                <p>협력과 성장의 활동을 전합니다.</p>
              </div>
            </div>
          </SlideLeftFade>
        </div>
        <div className="flex my-[80px] gap-[32px] overflow-x-scroll scrollbar-hide w-screen">
          {newsItems.map((newsItem, i) => (
            <StyledLink href={`/news/${newsItem.id}`} key={i} onMouseEnter={() => setHoveredNewsId(newsItem.id)} onMouseLeave={() => setHoveredNewsId(null)} className="news-card-wrapper">
              <div className="news-card-inner">
                <Image fill className="rounded-[50px] object-cover z-0" src={newsItem.news_image} alt="news_image" />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[50px]"></div>
                <div className={`news-card-title-wrapper ${hoveredNewsId === newsItem.id ? "new-card-title-hovered" : "new-card-title-defalut "}`}>
                  <p className="new-card-title-line">{newsItem.title}</p>
                  <p>{newsItem.subtitle}</p>
                </div>
                <div className={`transition-opacity duration-300 ease-in-out delay-100 ${hoveredNewsId === newsItem.id ? "opacity-100" : "opacity-0"}`}>
                  <div className="news-card-link">
                    <Image className="w-[31.5px] h-[31.5px]" src={icon_arrow} alt="icon_arrow" />
                  </div>
                </div>
              </div>
              <div className={`absolute h-[2px] w-full mt-[80px] bg-black transition-all duration-300 ease-in-out ${hoveredNewsId === newsItem.id ? "opacity-100" : "opacity-0"}`} />
              <div className="news-card-track"></div>
            </StyledLink>
          ))}
        </div>
      </div>
    </>
  );
}
