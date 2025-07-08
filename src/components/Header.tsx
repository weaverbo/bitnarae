export default function Header() {
  return (
    <div className="position absolute z-10 bg-white/10 w-full">
      <div className="flex items-center justify-between container py-[64px]">
        <div className="flex text-white items-center gap-[8px]">
          <h1 className="text-2xl font-semibold">빛나래문화재단</h1>
          <div className="w-[2px] h-[38px] bg-white"></div>
          <div className="text-[16px] font-semibold leading-[19px]">
            <p>BITNARAE</p>
            <p>FOUNDATION OF CULTURE</p>
          </div>
        </div>
        <ul className="flex gap-[24px] text-lg text-white">
          <li>재단소개</li>
          <li>재단활동</li>
          <li>재단소식</li>
          <li>공지사항</li>
        </ul>
      </div>
    </div>
  );
}
