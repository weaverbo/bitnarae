"use client";

import programing_1 from "../../public/img/programImg1-min.png";
import programing_2 from "../../public/img/programImg2-min.png";
import programing_3 from "../../public/img/programImg3-min.png";
import Image from "next/image";
import { useState } from "react";

export default function ProgramDetails() {
  const [hoveredDetails, setHoveredDetails] = useState<{ [programId: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });

  // {1: 2, 2: 1, 3: 1} 첫번째 id 1값의 details 2를 눌렀을 때,
  // {1: 3, 2: 1, 3: 1} 첫번째 id 1값의 details 3를 눌렀을 때,

  console.log(hoveredDetails);

  const handleMouseEnter = (programId: number, detailId: number) => {
    setHoveredDetails((prev) => ({ ...prev, [programId]: detailId }));
  };

  const handleMouseLeave = (programId: number) => {
    setHoveredDetails((prev) => ({ ...prev, [programId]: 1 }));
  };

  const programs = [
    {
      id: 1,
      image: programing_1,
      subtitle: "꿈을 싹틔우는 배움터",
      title: "빛움터",
      pragraph_1: "아이들이 예술 창작 활동으로 창의력을 키우고",
      pragraph_2: "마음껏 자기를 표현할 수 있도록 지원합니다.",
      pragraph_3: "연말 빛움발표회를 통해 아이들의 가능성을 응원합니다.",
      details: [
        {
          id: 1,
          title: "예술 분야 기초 교육 제공",
          pragraph_1: "예술의 기초부터 차근차근 배우며",
          pragraph_2: "스스로 창작할 수 있는 토대를 마련합니다.",
        },
        {
          id: 2,
          title: "전문 예술가 직접 지도",
          pragraph_1: "현직 예술가와의 만남을 통해",
          pragraph_2: "생생한 감각과 살아있는 창작을 경험합니다.",
        },
        {
          id: 3,
          title: "맞춤 소규모 교육 운영",
          pragraph_1: "연령과 발달 단계에 맞춘 프로그램으로",
          pragraph_2: "아이들의 개성과 속도를 존중합니다.",
        },
      ],
    },
    {
      id: 2,
      image: programing_1,
      subtitle: "꿈을 싹틔우는 배움터",
      title: "빛움터",
      pragraph_1: "아이들이 예술 창작 활동으로 창의력을 키우고",
      pragraph_2: "마음껏 자기를 표현할 수 있도록 지원합니다.",
      pragraph_3: "연말 빛움발표회를 통해 아이들의 가능성을 응원합니다.",
      details: [
        {
          id: 1,
          title: "예술 분야 기초 교육 제공",
          pragraph_1: "예술의 기초부터 차근차근 배우며",
          pragraph_2: "스스로 창작할 수 있는 토대를 마련합니다.",
        },
        {
          id: 2,
          title: "전문 예술가 직접 지도",
          pragraph_1: "현직 예술가와의 만남을 통해",
          pragraph_2: "생생한 감각과 살아있는 창작을 경험합니다.",
        },
        {
          id: 3,
          title: "맞춤 소규모 교육 운영",
          pragraph_1: "연령과 발달 단계에 맞춘 프로그램으로",
          pragraph_2: "아이들의 개성과 속도를 존중합니다.",
        },
      ],
    },
    {
      id: 3,
      image: programing_1,
      subtitle: "꿈을 싹틔우는 배움터",
      title: "빛움터",
      pragraph_1: "아이들이 예술 창작 활동으로 창의력을 키우고",
      pragraph_2: "마음껏 자기를 표현할 수 있도록 지원합니다.",
      pragraph_3: "연말 빛움발표회를 통해 아이들의 가능성을 응원합니다.",
      details: [
        {
          id: 1,
          title: "예술 분야 기초 교육 제공",
          pragraph_1: "예술의 기초부터 차근차근 배우며",
          pragraph_2: "스스로 창작할 수 있는 토대를 마련합니다.",
        },
        {
          id: 2,
          title: "전문 예술가 직접 지도",
          pragraph_1: "현직 예술가와의 만남을 통해",
          pragraph_2: "생생한 감각과 살아있는 창작을 경험합니다.",
        },
        {
          id: 3,
          title: "맞춤 소규모 교육 운영",
          pragraph_1: "연령과 발달 단계에 맞춘 프로그램으로",
          pragraph_2: "아이들의 개성과 속도를 존중합니다.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="border-b border-[#C6C6C6] py-[160px] text-center text-[42px]">재단활동</h1>
        {programs.map((program, index) => (
          <div key={index} className="w-full border-b border-[#C6C6C6] py-[160px] text-center">
            <h2 className="text-xl">{program.subtitle}</h2>
            <h3 className="text-4xl mt-[16px] mb-[80px]">{program.title}</h3>
            <div className="text-xl mt-[80px] mb-[160px]">
              <p>{program.pragraph_1}</p>
              <p className="leading-[45px]">{program.pragraph_2}</p>
              <p>{program.pragraph_3}</p>
            </div>
            <div className="flex justify-center items-center">
              <Image className="object-cover rounded-[20px]" src={program.image} alt="programimg_1" width={720} height={498} />
              <div>
                {programs[index].details.map((detail, index) => (
                  <div key={index} className="flex">
                    <div className="relative bg-[#d6d6d6] w-[4px] h-[166px] ml-[160px] mr-[80px]"> {hoveredDetails[program.id] === detail.id && <div className="absolute bg-black h-full w-[4px] mr-[240px]" />}</div>
                    <article className="h-[166px] py-[24px] text-left flex flex-col justify-center " onMouseEnter={() => handleMouseEnter(program.id, detail.id)} onMouseLeave={() => handleMouseLeave(program.id)}>
                      <h4 className="underline underline-offset-4">{detail.title}</h4>
                      <div className="mt-[16px]">
                        <p>{detail.pragraph_1}</p>
                        <p className="leading-[34px]">{detail.pragraph_2}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
