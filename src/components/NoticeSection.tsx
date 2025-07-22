"use client";

import { useEffect, useState } from "react";
import StyledLink from "next/link";
import "../styles/noticesection.css";

export default function NoticeSection() {
  type Notice = {
    id: number;
    title: string;
    created_at: string;
  };

  const [notices, setNotices] = useState<Notice[]>([]);

  // useEffect(() => {
  //   const noticeList = async (): Promise<void> => {
  //     const res = await fetch("/api/notice");
  //     const data = await res.json();

  //     return setNotices(data);
  //   };
  //   noticeList();
  // }, []);

  return (
    <>
      <div className="container flex justify-between mt-[320px] mb-[320px]">
        <div className="flex gap-[24px]">
          <div className="bg-black w-[2px] h-[57px]"></div>
          <div className="my-[8px]">
            <h2 className="notice-section-title">공지사항</h2>
          </div>
        </div>
        {/* <div className="border-b-2 border-black">
          {notices.map((notice, index) => (
            <StyledLink key={index} className="notice-list-wrapper" href={"/"}>
              <div className="flex gap-[24px]">
                <span>{notice.id}</span>
                <p>{notice.title}</p>
              </div>
              <p>{notice.created_at.split("T")[0]}</p>
            </StyledLink>
          ))}
        </div> */}
      </div>
    </>
  );
}
