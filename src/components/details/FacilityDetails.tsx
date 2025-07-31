"use client";

import Image from "next/image";
import "../../styles/details/facilitydetails.css";
import center1_1 from "../../../public/img/center1-1-min.png";
import center1_2 from "../../../public/img/center1-2-min.png";
import center1_3 from "../../../public/img/center1-3-min.png";
import center2_1 from "../../../public/img/center2-1-min.png";
import center2_2 from "../../../public/img/center2-2-min.png";
import center3_1 from "../../../public/img/center3-1-min.png";
import center3_2 from "../../../public/img/center3-2-min.png";
import center3_3 from "../../../public/img/center3-3-min.png";
import center4_1 from "../../../public/img/center4-1-min.png";
import center4_2 from "../../../public/img/center4-2-min.png";
import { useState } from "react";
import { hover } from "framer-motion";
import { div } from "framer-motion/client";

export default function FacilityDetails() {
  const [hovered, setHovered] = useState(Array(10).fill(false));

  const facilityImg = [
    { id: 1, src: center1_1, name: "빛놀이터" },
    { id: 2, src: center1_2, name: "빛창작터" },
    { id: 3, src: center1_3, name: "빛나래터" },
    { id: 4, src: center2_1, name: "화가의방" },
    { id: 5, src: center2_2, name: "작가의방" },
    { id: 7, src: center3_1, name: "빛배움터" },
    { id: 8, src: center3_2, name: "빛담음터" },
    { id: 9, src: center3_3, name: "빛결터" },
    { id: 10, src: center4_1, name: "빛소극장" },
    { id: 11, src: center4_2, name: "빛갤러리" },
  ];

  const handleMouseEnter = (index: number) => {
    setHovered((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHovered((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <>
      <div className="container mb-[74px]">
        <div className="facility_details_title_wrapper">
          <p className="facility_details_subtitle">예술이 피어나는 공간</p>
          <h1 className="facility_details_title">빛나래 문화센터</h1>
        </div>
        <div className="facility_details_block_wrapper">
          <div className="facility_details_blcok_inner">
            <div className="facility_details_block_title_line" />
            <h2 className="facility_details_block_title">빛움터 공간</h2>
            <div className="facility_details_block_title_summary">
              <p>놀이와 창작을 통해</p>
              <p className="summary-line">스스로 자라나는</p>
              <p>예술 놀이터</p>
            </div>
          </div>
          <div className="facility_details_block_image-wrapper">
            {facilityImg.slice(0, 3).map((img, index) => (
              <div key={index} className="facility_details_block_image-inner" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                <Image className="facility_details_block_image" src={img.src} alt="facilityImg" />
                <div className={`facility_details_block_image-overlay ${hovered[index] ? "opacity-50" : "opacity-0"}`} />
                <div className={`facility_details_block_image-hover ${hovered[index] ? "opacity-100" : "opacity-0"}`}>{facilityImg[index].name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="facility_details_block_wrapper">
          <div className="facility_details_blcok_inner">
            <div className="facility_details_block_title_line" />
            <h2 className="facility_details_block_title">빛공방 공간</h2>
            <div className="facility_details_block_title_summary">
              <p>창작자들이</p>
              <p className="summary-line">온전히 몰입할 수 있는</p>
              <p>예술 작업터</p>
            </div>
          </div>
          <div className="facility_details_block_image-wrapper-other">
            {facilityImg.slice(3, 5).map((img, index) => (
              <div key={index} className="facility_details_block_image-inner" onMouseEnter={() => handleMouseEnter(index + 3)} onMouseLeave={() => handleMouseLeave(index + 3)}>
                <Image className="facility_details_block_image" src={img.src} alt="facilityImg" />
                <div className={`facility_details_block_image-overlay ${hovered[index + 3] ? "opacity-50" : "opacity-0"}`} />
                <div className={`facility_details_block_image-hover ${hovered[index + 3] ? "opacity-100" : "opacity-0"}`}>{facilityImg[index + 3].name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="facility_details_block_wrapper">
          <div className="facility_details_blcok_inner">
            <div className="facility_details_block_title_line" />
            <h2 className="facility_details_block_title">빛마당 공간</h2>
            <div className="facility_details_block_title_summary ">
              <p>일상 속</p>
              <p className="summary-line">예술 감각을 깨우는</p>
              <p>문화의 뜰</p>
            </div>
          </div>
          <div className="facility_details_block_image-wrapper">
            {facilityImg.slice(5, 8).map((img, index) => (
              <div key={index} className="facility_details_block_image-inner" onMouseEnter={() => handleMouseEnter(index + 5)} onMouseLeave={() => handleMouseLeave(index + 5)}>
                <Image className="facility_details_block_image" src={img.src} alt="facilityImg" />
                <div className={`facility_details_block_image-overlay ${hovered[index + 5] ? "opacity-50" : "opacity-0"}`} />
                <div className={`facility_details_block_image-hover ${hovered[index + 5] ? "opacity-100" : "opacity-0"}`}>{facilityImg[index + 5].name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="facility_details_block_wrapper">
          <div className="facility_details_blcok_inner">
            <div className="facility_details_block_title_line" />
            <h2 className="facility_details_block_title">빛울림 공간</h2>
            <div className="facility_details_block_title_summary ">
              <p>표현하는 마음과</p>
              <p className="summary-line">귀기울이는 마음이</p>
              <p>닿는 문화의 장</p>
            </div>
          </div>
          <div className="facility_details_block_image-wrapper">
            {facilityImg.slice(8, 10).map((img, index) => (
              <div key={index} className="facility_details_block_image-inner" onMouseEnter={() => handleMouseEnter(index + 8)} onMouseLeave={() => handleMouseLeave(index + 8)}>
                <Image className="facility_details_block_image" src={img.src} alt="facilityImg" />
                <div className={`facility_details_block_image-overlay ${hovered[index + 8] ? "opacity-50" : "opacity-0"}`} />
                <div className={`facility_details_block_image-hover ${hovered[index + 8] ? "opacity-100" : "opacity-0"}`}>{facilityImg[index + 8].name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
