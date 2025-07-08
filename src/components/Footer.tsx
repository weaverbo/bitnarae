import StyleLink from "next/link";
import Image from "next/image";
import "../styles/footer.css";
import insta from "../../public/img/insta.png";
import blog from "../../public/img/blog.png";
import youtube from "../../public/img/youtube.png";

export default function Footer() {
  return (
    <div className="bg-background text-white">
      <div className="flex container justify-between border-b border-white pt-[150px] pb-[80px]">
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
      <div className="flex justify-between py-[150px] items-center container">
        <div className="flex flex-col text-4xl ">
          <span>BITNARAE</span>
          <span className="leading-[76px]">FOUNDATION OF</span>
          <span>CULTURE</span>
        </div>
        <div className="flex flex-col text-lg gap-[12px] text-right text-[#777777]">
          <ul className="flex justify-end gap-[37px] pb-[19px]">
            <StyleLink href="/">
              <Image src={insta} alt="main-image" />
            </StyleLink>
            <StyleLink href="/">
              <Image src={blog} alt="main-image" />
            </StyleLink>
            <StyleLink href="/">
              <Image src={youtube} alt="main-image" />
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
