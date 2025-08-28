"use client";

import programing_1 from "../../../public/img/programImg1-min.png";
import programing_2 from "../../../public/img/programImg2-min.png";
import programing_3 from "../../../public/img/programImg3-min.png";
import "../../styles/details/programactivitiesdetails.css";
import Image from "next/image";
import { useState } from "react";

export default function ProgramActivities() {
  const [hoveredDetails, setHoveredDetails] = useState<{ [programId: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });

  console.log(hoveredDetails);

  const handleMouseEnter = (programId: number, detailId: number) => {
    setHoveredDetails((prev) => ({ ...prev, [programId]: detailId }));
  };

  console.log(hoveredDetails);

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
      image: programing_2,
      subtitle: "마음껏 창작하는 작업터",
      title: "빛공방",
      pragraph_1: "연 2회 공모를 통해 선정된 예술가들에게",
      pragraph_2: "창작 지원금과 작업 공간을 제공합니다.",
      pragraph_3: "완성 작품은 재단 주최 전시회에서 공개합니다.",
      details: [
        {
          id: 1,
          title: "전문 예술 환경 제공",
          pragraph_1: "회화, 조형, 문학 등 분야별 맞춤 시설을 갖춘",
          pragraph_2: "전용 작업실에서 집중 창작이 가능합니다.",
        },
        {
          id: 2,
          title: "창작 영감을 북돋는 공간 구성",
          pragraph_1: "자연광, 재료실, 휴게 라운지까지 갖춘",
          pragraph_2: "창작자 친화적 복합 공간을 운영합니다.",
        },
        {
          id: 3,
          title: "완성작 전시 연계 지원",
          pragraph_1: "완성된 창작물은 재단 전시회나 낭독회 등을 통해",
          pragraph_2: "시민들과 직접 소통할 수 있는 기회를 마련합니다.",
        },
      ],
    },
    {
      id: 3,
      image: programing_3,
      subtitle: "우리 동네 문화 놀이터",
      title: "빛마당",
      pragraph_1: "다양한 문화 콘텐츠를 지역 곳곳에서 운영하며",
      pragraph_2: "지역 사회의 문화적 접근성을 높입니다.",
      pragraph_3: "시민 작품 공유로 지역 문화에 활기를 더합니다.",
      details: [
        {
          id: 1,
          title: "다양한 예술 창작 체험",
          pragraph_1: "다양한 분야를 아우르는 프로그램 구성으로",
          pragraph_2: "관심사와 성향을 폭넓게 반영해 운영합니다.",
        },

        {
          id: 2,
          title: "현직 예술가와 협업",
          pragraph_1: "시민과 예술가가 함께하는 열린 체험을 통해",
          pragraph_2: "창작과 소통의 즐거움을 나눕니다.",
        },
        {
          id: 3,
          title: "작품 발표 연계",
          pragraph_1: "동료, 이웃과 서로 소통하는 시간과",
          pragraph_2: "새로운 가능성을 발견하는 기회를 제공합니다.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="program_activity_details_title">재단활동</h1>
        {programs.map((program, index) => (
          <div key={index} className="program_activity_details_wrapper">
            <h2 className="program_activity_details_subtitle">{program.subtitle}</h2>
            <h3 className="program_activity_detail_section_title">{program.title}</h3>
            <div className="program_activity_detail_section_description">
              <p>{program.pragraph_1}</p>
              <p className="leading-[45px]">{program.pragraph_2}</p>
              <p>{program.pragraph_3}</p>
            </div>
            <div className="program_activity_detail_section_container">
              <div className="program_activity_detail_image_wrapper">
                <Image className="program_activity_detail_section_img" src={program.image} alt="programimg_1" />
              </div>
              <div>
                <div className="program_activity_detail_section_wrapper">
                  {programs[index].details.map((detail, index) => (
                    <div key={index} className="flex">
                      <div className="program_activity_detail_section"> {hoveredDetails[program.id] === detail.id && <div className="section_selected_track" />}</div>
                      <article className="section_container" onMouseEnter={() => handleMouseEnter(program.id, detail.id)} onMouseLeave={() => handleMouseLeave(program.id)}>
                        <h4 className={`underline underline-offset-4 ${hoveredDetails[program.id] === detail.id ? "font-bold" : ""}`}>{detail.title}</h4>
                        <div className={`mt-[16px] ${hoveredDetails[program.id] === detail.id ? "font-bold" : ""}`}>
                          <p>{detail.pragraph_1}</p>
                          <p className="leading-[34px]">{detail.pragraph_2}</p>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
