import Image from "next/image";
import mainImg from "../../public/img/mainImg-min.jpg";
import "../styles/herosection.css";

export default function HeroSection() {
  return (
    <div className="postion relative">
      <Image src={mainImg} className="w-full h-full object-cover" alt="main-image" />
      <div className="container hero-sidetext-wrapper">
        <div className="hero-side-text">
          <p className="side-text-line">작은 불꽃 하나</p>
          <p>세상을 밝히는 시작</p>
        </div>
        <p className="hero-text">빛나래문화재단</p>
        <div className="hero-side-text">
          <p className="side-text-line">당신의 일상에</p>
          <p>문화의 불꽃을</p>
        </div>
      </div>
    </div>
  );
}
