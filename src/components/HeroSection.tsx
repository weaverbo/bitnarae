import Image from "next/image";
import mainImg from "../../public/img/mainImg-min.jpg";

export default function HeroSection() {
  return (
    <div className="postion relative">
      <Image src={mainImg} alt="main-image" />
      <div className="container absolute inset-0 flex justify-between items-center sp text-white font-regular mt-[171px]">
        <div className="text-[36px]">
          <p className="leading-[50px]">작은 불꽃 하나</p>
          <p>세상을 밝히는 시작</p>
        </div>
        <p className="text-[64px] font-semibold">빛나래문화재단</p>
        <div className="text-[36px]">
          <p className="leading-[50px]">당신의 일상에</p>
          <p>문화의 불꽃을</p>
        </div>
      </div>
    </div>
  );
}
