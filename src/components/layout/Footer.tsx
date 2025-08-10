import StyleLink from "next/link";
import Image from "next/image";
import icon_insta from "../../../public/img/icon_insta.svg";
import icon_nblog from "../../../public/img/icon_nblog.svg";
import icon_youtube from "../../../public/img/icon_youtube.svg";
import "../../styles/utilities/footer.css";

export default function Footer() {
  return (
    <div className="bg-background text-white">
      <div className="container flex justify-between border-b border-white pt-[150px] pb-[80px]">
        <ul className="footer-top-layout">
          <li>
            <StyleLink href="/">재단소개</StyleLink>
          </li>
          <li>
            <StyleLink href="/">재단활동</StyleLink>
          </li>
          <li>
            <StyleLink href="/">재단소식</StyleLink>
          </li>
          <li>
            <StyleLink href="/">공지사항</StyleLink>
          </li>
        </ul>
        <ul className="footer-top-layout">
          <li>
            <StyleLink href="/">SNS 저작물 이용 동의서</StyleLink>
          </li>
          <li>
            <StyleLink href="/">개인정보처리방침</StyleLink>
          </li>
          <li>
            <StyleLink href="/">주무관청</StyleLink>
          </li>
        </ul>
      </div>
      <div className="container flex justify-between py-[150px] items-center">
        <div className="flex flex-col text-4xl">
          <span>BITNARAE</span>
          <span className="leading-[76px]">FOUNDATION OF</span>
          <span>CULTURE</span>
        </div>
        <div className="flex flex-col text-lg gap-[12px] text-right text-[#777777]">
          <ul className="flex justify-end gap-[37px] pb-[19px]">
            <StyleLink href="/">
              <Image className="sns-img" src={icon_insta} alt="main-image" />
            </StyleLink>
            <StyleLink href="/">
              <Image className="sns-img" src={icon_nblog} alt="main-image" />
            </StyleLink>
            <StyleLink href="/">
              <Image className="sns-img" src={icon_youtube} alt="main-image" />
            </StyleLink>
          </ul>
          <span>주소 서울특별시 은평구 은평로 111</span>
          <span>문의 1111-11111 / info@bitnarae.com</span>
          <span>평일 9:00~18:00 (점심시간 12:00~13:00) / 주말 공휴일 휴무</span>
          <span>Copyright © 빛나래문화재단 All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
