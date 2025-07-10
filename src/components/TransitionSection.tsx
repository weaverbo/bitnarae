import Image from "next/image";
import transition from "../../public/img/transitionImg-min.png";

export default function TransitionSection() {
  return (
    <>
      <div className="position relative">
        <Image src={transition} alt="transitionImg-min" />
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="absolute inset-0 text-center text-white text-[64px] mt-[160px]">
          <p className="leading-[77px]">빛나래문화재단은</p>
          <p>언제나 활짝 열려 있습니다.</p>
        </div>
      </div>
    </>
  );
}
