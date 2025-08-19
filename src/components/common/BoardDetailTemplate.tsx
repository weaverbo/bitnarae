"use client";
import { usePathname } from "next/navigation";
import { getDisplayText } from "../../utils/displayText";
import Image from "next/image";
import StyledLink from "next/link";
import icon_share from "../../../public/img/icon_share.svg";
import icon_print from "../../../public/img/icon_print.svg";
import icon_arrowup from "../../../public/img/icon_arrowup.svg";
import icon_arrowdown from "../../../public/img/icon_arrowdown.svg";
import icon_download from "../../../public/img/icon_download.svg";

import ShareMenu from "../common/ShareMenu";
import "../../styles/common/boarddetailtemplate.css";
import { useState } from "react";

type BoardDetailItem = {
  id: number;
  title: string;
  created_at?: Date | null;
  subtitle?: string | null;
  contents?: string | null;
  news_image?: string | null;
  detail_info?: string | null;
  additional_info?: string | null;
  attachment_path?: string | null;
  attachment_name?: string | null;
};

type Props = {
  title: string;
  data: BoardDetailItem[];
};

export default function BoardDetailTemplate({ title, data }: Props) {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const currentId = Number(pathName.split("/").pop());
  const selectedItem = data.find((item) => item.id === currentId);

  if (!selectedItem) {
    return null;
  }

  const isNewsPage = pathName.startsWith("/news/");

  const sortedData = [...data].sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateA - dateB;
  });

  const currentIndex = sortedData.findIndex((item) => item.id === selectedItem?.id);
  const previousItem = currentIndex > 0 ? sortedData[currentIndex - 1] : null;
  const nextItem = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1] : null;

  const getAttachmentHref = (path?: string | null) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
  };

  const formatDate = (date: Date | null | undefined) => {
    return date?.toISOString().split("T")[0] || "";
  };

  const handleMainShare = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div className="container">
      <h1 className="board-detail-title">{title}</h1>
      <h2 className="board-detail-subtitle">{isNewsPage ? getDisplayText(selectedItem.title, selectedItem.subtitle) : selectedItem.title}</h2>
      <p className="board-detail-date">{formatDate(selectedItem.created_at)}</p>
      <div className="board-detail-icon-wrapper">
        <div className="relative">
          <button type="button" className="board-detail-icon cursor-pointer border-0 bg-transparent p-0" onClick={handleMainShare} title="공유">
            <Image src={icon_share} alt="share" />
          </button>
          {isOpen && <ShareMenu pathName={pathName} isNewsPage={isNewsPage} title={selectedItem.title} subtitle={selectedItem.subtitle ?? undefined} onClose={() => setIsOpen(false)} />}
        </div>
        <Image src={icon_print} alt="icon_print" onClick={() => window.print()} />
      </div>
      <div className="board-detail-contents-wrapper">
        {!selectedItem.contents && !selectedItem.detail_info && !selectedItem.additional_info && (!isNewsPage || !selectedItem.news_image) ? (
          <div className="board-detail-contents">
            <p className="text-center text-lg">게시물이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="board-detail-contents">
              <p className={`${isNewsPage ? "leading-[33.6px] tracking-wide" : "pb-[10px] text-center"}`}>{selectedItem.contents}</p>
            </div>
            {!isNewsPage ? (
              <div>
                <p className={`${selectedItem.detail_info ? "board-detail-info-marker" : "leading-[33.6px]"}`}>{selectedItem.detail_info}</p>
                <p className={`${selectedItem.additional_info ? "board-detail-info-marker leading-[33.6px]" : "leading-[33.6px]"}`}>{selectedItem.additional_info}</p>
              </div>
            ) : null}
            {isNewsPage && selectedItem.news_image && <Image className="mt-[80px]" src={selectedItem.news_image} width={859} height={638} alt="news_image" />}
          </>
        )}
      </div>
      {!isNewsPage ? (
        <>
          <div className="bg-[#E7E7E7] my-[24px] mx-[16px] py-[24px] px-[32px]">
            <div className="flex items-center gap-[24px]">
              <div className="board-fileupload-title ">첨부파일</div>
              {selectedItem.attachment_name ? (
                <div className="w-full flex items-center justify-between cursor-pointer">
                  <div>
                    <a href={getAttachmentHref(selectedItem.attachment_path)} className="board-fileupload-filename">
                      {selectedItem.attachment_name}
                    </a>
                  </div>
                  <div>
                    <a href={getAttachmentHref(selectedItem.attachment_path)}>
                      <Image src={icon_download} alt="icon_download" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-center justify-between cursor-pointer">
                  <div className="file-empty-message">첨부된 파일이 없습니다</div>
                  <Image src={icon_download} alt="icon_download" />
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
      <div className="flex flex-col gap-[24px] border-t-4 border-black pl-[42px] py-[24px]">
        {previousItem && (
          <div className="flex items-center gap-[16px]">
            <Image src={icon_arrowup} alt="icon_arrowup" />
            <span>이전글</span>
            <StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${previousItem.id}` : `/notices/${previousItem.id}`}`}>
              {getDisplayText(previousItem.title, previousItem.subtitle)}
            </StyledLink>
          </div>
        )}
        {nextItem && (
          <div className="flex items-center gap-[16px]">
            <Image src={icon_arrowdown} alt="icon_arrowdown" />
            <span>다음글</span>
            <StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${nextItem.id}` : `/notices/${nextItem.id}`}`}>
              {getDisplayText(nextItem.title, nextItem.subtitle)}
            </StyledLink>
          </div>
        )}
      </div>
      <button className="board-detail-navigation-button">
        <StyledLink href={`${isNewsPage ? "/news" : "/notices"}`}>목록으로</StyledLink>
      </button>
    </div>
  );
}
