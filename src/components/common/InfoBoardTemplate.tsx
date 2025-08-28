"use client";

import Image from "next/image";
import search from "../../../public/img/Search.png";
import PageIconNumberLeft from "../../../public/img/page_number_icon_left.png";
import PageIconNumberRight from "../../../public/img/page_icon_number_right.png";
import "../../styles/common/infoboardtemplete.css";
import StyledLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getDisplayText } from "../../utils/displayText";

type GetItemHref = (item: InfoItem) => string;

type InfoItem = {
  id: number;
  title: string;
  subtitle?: string | null;
  created_at?: Date | null;
};

type Props = {
  title: string;
  data: InfoItem[];
  getItemHref?: GetItemHref;
};

export default function InfoBoardTemplate({ title, data, getItemHref }: Props) {
  const pathName = usePathname();
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    if (pathName === "/notices/recruit") {
      return data.slice(0, 3);
    } else if (pathName === "/notices/info") {
      return data.slice(3, 6);
    }
    return data;
  }, [data, pathName]);

  const totalPageNumber = useMemo(() => Math.ceil(filteredData.length / itemsPerPage), [filteredData.length]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPageNumber));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    const base = pathName.startsWith("/news") ? "/news" : "/notices";

    router.push(`${base}/search-result/${searchKeyword}`);
  };

  return (
    <div className="container">
      <h1 className="board-title">{title}</h1>
      <div className={`flex items-center ${pathName.startsWith("/notices") ? "justify-between" : "justify-end"}`}>
        {pathName.startsWith("/notices") && (
          <ul className="tap-menu-wrapper">
            <li className={pathName === "/notices" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices">전체</StyledLink>
            </li>
            <li className={pathName === "/notices/recruit" ? "tab-menu-line tab-menu-link" : "tab-menu-line"}>
              <StyledLink href="/notices/recruit">모집</StyledLink>
            </li>
            <li className={pathName === "/notices/info" ? "tab-menu-link" : ""}>
              <StyledLink href="/notices/info">공시</StyledLink>
            </li>
          </ul>
        )}

        <form className="search-input-wrapper" onSubmit={handleSearch}>
          <input type="text" className="search-input" placeholder=" 검색어를 입력해주세요" value={searchKeyword} onChange={handleOnChange} />
          <Image src={search} alt="search" className="absolute top-1/2 -translate-y-1/2 right-[8px] cursor-pointer search-icon" onClick={() => handleSearch()} />
        </form>
      </div>
      {currentData.length === 0 ? (
        <>
          <div className="flex justify-center items-center w-full h-[354px] bg-[#F4F4F4] mt-[36px] mb-[220px] text-[#757575] text-lg">검색 결과 없음</div>
        </>
      ) : (
        <>
          <ul className="mt-[36px] border-t-[4px] border-b-[4px] border-black mb-[80px]">
            {currentData.map((item) => (
              <li key={item.id} className="border-b-[2px]">
                <StyledLink href={getItemHref ? getItemHref(item) : `${pathName}/${item.id}`} className="board-list-wrapper">
                  <p>{item.id}</p>
                  <div className="board-list-inner-wrapper">
                    <p className="board-list-title">{`${pathName.startsWith("/news") ? getDisplayText(item.title, item.subtitle) : item.title}`}</p>
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
        </>
      )}
    </div>
  );
}
