"use client";

import Image from "next/image";
import IconMapPin from "../../../public/img/IconMapPin.svg";
import Icon_Subway from "../../../public/img/icon_subway.svg";
import MainLineBus from "../../../public/img/icon_mainLineBus.svg";
import branchLineBus from "../../../public/img/icon_branchLineBus.svg";
import IconCautionMarker from "../../../public/img/IconCautionMark.svg";
import "../../styles/details/locationdetails.css";

export default function LocationDetails() {
  return (
    <>
      <div className="container">
        <div className="location-details-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25287.00915864727!2d126.89152440395982!3d37.60507385980577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98334382af81%3A0xb3a402dedfa0ff09!2z7ISc7Jq47Yq567OE7IucIOydgO2Pieq1rCDsl63stIzrj5k!5e0!3m2!1sko!2skr!4v1754012112632!5m2!1sko!2skr"
            className="location-details-map"
            style={{ border: 0, borderRadius: 20 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="location-details-inner">
            <div>
              <h1 className="location-details-title">빛나래문화센터 오시는 길</h1>
              <div className="location-details-address">
                <Image src={IconMapPin} alt="bitnarae" className="location-details-icon" />
                <p>서울특별시 은평구 은평로 111</p>
              </div>
            </div>
            <div>
              <h2 className="location-details-subtitle">지하철 이용 시</h2>
              <div className="flex items-center gap-[12px] mb-[16px]">
                <Image className="location-details-icon" src={Icon_Subway} alt="subway" />
                <p className="subway-line-info">6호선 이용 시</p>
              </div>
              <p className="subway-info-description">응암역 3번 출구 도보 10분</p>
            </div>
            <div>
              <h3 className="location-details-subtitle">버스 이용 시</h3>
              <div>
                <div className="bus-info-type-inner">
                  <Image className="location-details-icon" src={MainLineBus} alt="mainLineBus" />
                  <p className="bus-info-type">간선버스 이용 시</p>
                </div>
                <p className="bus-info-description-wrapper">
                  <span className="bus-info-description-highlight">702A, 702B</span> 신진과학기술고교,이마트은평점 하차
                </p>
              </div>
              <div className="bus-info-type-wrapper">
                <div className="bus-info-type-inner">
                  <Image className="location-details-icon" src={branchLineBus} alt="branchLineBus" />
                  <p className="bus-info-type">지선버스 이용 시</p>
                </div>
                <div className="bus-info-description-wrapper flex flex-col gap-[12px]">
                  <p>
                    <span className="bus-info-description-highlight">7212</span> 신진과학기술고교,이마트은평점 하차
                  </p>
                  <p>
                    <span className="bus-info-description-highlight">7022</span> 서부경찰서 하차
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className=" location-details-alert">
                <Image className="location-details-icon" src={IconCautionMarker} alt="cautionMarker" />
                <p className="location-details-alert-message">문의사항은 아래 대표메일 또는 대표전화를 이용 부탁드립니다.</p>
              </div>
              <div className="flex flex-col gap-[8px] ml-[36px] font-[500]">
                <p className="text-[20px]">
                  <span className="mr-[8px]">대표메일</span>info@bitnarae.com
                </p>
                <p className="text-[20px]">
                  <span className="mr-[8px]">대표전화</span>1111-1111
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
