"use client";

import StyledLink from "next/link";
import "../../styles/main/noticesection.css";

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

      const sortedData = data.sort((a: Notice, b: Notice) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      return setNotices(sortedData.slice(0, 3));
    };
    noticeList();
  }, []);

  console.log(notices.length);

  return (
    <>
      <div className="container flex justify-between mt-[320px] mb-[320px]">
        <div className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[57px]"></div>
          <div className="my-[8px]">
            <h2 className="notice-section-title">공지사항</h2>
          </div>
        </div>
        <div className="border-b-2 border-black">
          {notices.map((notice, index) => (
            <StyledLink key={index} className="notice-list-wrapper" href={`/notices/${notice.id}`}>
              <div>{notices.length - index}</div>
              <div className="notice-list-inner-wrapper">
                <p className="notice-title">{notice.title}</p>
                <p className="notice-date">{notice.created_at.split("T")[0]}</p>
              </div>
            </StyledLink>
          ))}
        </div>
      </div>
    </>
  );
}
