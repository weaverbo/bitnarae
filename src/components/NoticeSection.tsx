export default function NoticeSection() {
  // 데이터베이스 만들기
  return (
    <>
      <div className="container flex gap-[320px] justify-between">
        <div className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[57px]"></div>
          <div className="my-[8px]">
            <h2 className="text-[48px] font-semibold">공지사항</h2>
          </div>
        </div>
        <div className="border-t-2 border-black w-[930px] flex justify-between px-[80px] py-[32px] text-[24px]">
          <div className="flex gap-[24px]">
            <span>1</span>
            <p>2024 빛나래 문화재단 후원금 사용 명세</p>
          </div>
          <p>2024-12-31</p>
        </div>
      </div>
    </>
  );
}
