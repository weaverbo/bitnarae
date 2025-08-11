"use client";

import Image from "next/image";
import search from "../../../public/img/Search.png";
import PageIconNumberLeft from "../../../public/img/page_number_icon_left.png";
import PageIconNumberRight from "../../../public/img/page_icon_number_right.png";
import "../../styles/common/infoboardtemplete.css";
import StyledLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";

type InfoItem = {
  id: number;
  title: string;
  subtitle?: string | null;
  created_at?: Date | null;
};

type Props = {
  title: string;
  data: InfoItem[];
};

export default function InfoBoardTemplate({ title, data }: Props) {
  const pathName = usePathname();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPageNumber = useMemo(() => Math.ceil(data.length / itemsPerPage), [data.length]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPageNumber));
  };

  return (
    <div className="container">
      <h1 className="text-center text-[42px] my-[160px]">{title}</h1>
      <div className={`flex items-center ${pathName.startsWith("/notices") ? "justify-between" : "justify-end"}`}>
        {pathName.startsWith("/notices") && (
          <ul className="tap-menu-wrapper">
            <li className={pathName === "/notices" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices">전체</StyledLink>
            </li>
            <li className={pathName === "/notices/recruit" ? "px-[24px] tab-menu-link" : "px-[24px]"}>
              <StyledLink href="/notices/recruit">모집</StyledLink>
            </li>
            <li className={pathName === "/notices/info" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices/info">공시</StyledLink>
            </li>
          </ul>
        )}
        <div className="search-input-wrapper">
          <input type="text" className="border-b border-black w-full h-full placeholder-[#898989]" placeholder=" 검색어를 입력해주세요" />
          <Image src={search} alt="search" width={24} height={24} className="absolute top-1/2 -translate-y-1/2 right-[8px]" />
        </div>
      </div>
      <ul className="mt-[36px] border-t-[4px] border-b-[4px] border-black mb-[80px]">
        {currentData.map((item) => (
          <li key={item.id} className="border-b-[2px]">
            <StyledLink href={`${pathName}/${item.id}`} className="board-list-wrapper">
              <p>{item.id}</p>
              <div className="board-list-inner-wrapper">
                <p className="board-list-title">{`${pathName === "/news" ? item.title + item.subtitle : item.title}`}</p>
                <p className="board-list-date">{item.created_at?.toISOString().split("T")[0]}</p>
              </div>
            </StyledLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-[16px] mt-[80px] mb-[160px]">
        <button onClick={handlePrevPage}>
          <Image src={PageIconNumberLeft} width={12} height={22} alt="page_icon_number_left" />
        </button>
        {Array.from({ length: totalPageNumber }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)} className={`pagenation-button ${currentPage === pageNumber ? "font-medium text-black" : "text-[#DDDDDD]"}`}>
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage}>
          <Image src={PageIconNumberRight} width={12} height={22} alt="page_icon_number_right" />
        </button>
      </div>
    </div>
  );
}
