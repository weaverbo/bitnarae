"use client";

import { useEffect, useState } from "react";

export default function NoticeSection() {
  type Notice = {
    id: number;
    title: string;
    created_at: string;
  };

  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const noticeList = async (): Promise<void> => {
      const res = await fetch("/api/notice");
      const data = await res.json();
      console.log(data, "여기 데이터에요!");
      return setNotices(data);
    };
    noticeList();
  }, []);

  return (
    <>
      <div className="container flex gap-[320px] justify-between">
        <div className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[57px]"></div>
          <div className="my-[8px]">
            <h2 className="text-[48px] font-semibold">공지사항</h2>
          </div>
        </div>
        <div>
          {notices.map((notice, index) => (
            <div key={index} className="border-t-2 border-black w-[930px] flex justify-between px-[80px] py-[32px] text-[24px]">
              <div className="flex gap-[24px]">
                <span>{notice.id}</span>
                <p>{notice.title}</p>
              </div>
              <p>{notice.created_at}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
