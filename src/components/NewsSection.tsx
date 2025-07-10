import Image from "next/image";
import newsImage1 from "../../public/img/newsImg1-min.png";
import newsImage2 from "../../public/img/newsImg2-min.png";
import newsImage3 from "../../public/img/newsImg3-min.png";
import icon_arrow from "../../public/img/icon_arrow.svg";

export default function NewsSection() {
  // 데이터베이스 만들기
  const news = [
    {
      src: newsImage1,
      paragraph_1: "빛나래문화재단, 지역 아동센터와 함께",
      paragraph_2: "예술 교육 프로그램 시작",
    },
    {
      src: newsImage2,
      paragraph_1: "빛나래문화재단, 지역 문화 축제",
      paragraph_2: "'빛마루' 성황리 개최",
    },
    {
      src: newsImage3,
      paragraph_1: "빛나래문화재단",
      paragraph_2: "모전 개최",
    },
  ];

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
          {news.map((content, i) => (
            <div key={i}>
              <div className="w-[780px] h-[520px] position relative">
                <Image className="w-[780px] h-[520px] rounded-[50px] object-cover z-0" src={content.src} alt="newsImg1" />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[50px]"></div>
                <div className="absolute z-10 inset-0 text-white pt-[362px] pl-[32px] text-xl">
                  <p className="leading-[38px]">{content.paragraph_1}</p>
                  <p>{content.paragraph_2}</p>
                  <Image className="w-[31.5px] h-[31.5px] mt-[13.25px]" src={icon_arrow} alt="icon_arrow" />
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
