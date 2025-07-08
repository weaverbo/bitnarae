import Image from "next/image";
import mainImage from "../../public/img/mainImg.png";

export default function HeroSection() {
  return (
    <div>
      <Image className="postion relative z-0" src={mainImage} alt="main-image" />
    </div>
  );
}
