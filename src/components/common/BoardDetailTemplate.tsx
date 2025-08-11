"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import StyledLink from "next/link";
import icon_share from "../../../public/img/icon_share.svg";
import icon_print from "../../../public/img/icon_print.svg";
import icon_arrowup from "../../../public/img/icon_arrowup.svg";
import icon_arrowdown from "../../../public/img/icon_arrowdown.svg";
import "../../styles/common/boarddetailtemplate.css";

type BoardDetailItem = {
  id: number;
  title: string;
  created_at?: Date | null;
  subtitle?: string | null;
  contents?: string | null;
  news_image?: string | null;
  detail_info?: string | null;
  additional_info?: string | null;
};

type Props = {
  title: string;
  data: BoardDetailItem[];
};

export default function BoardDetailTemplate({ title, data }: Props) {
  const pathName = usePathname();

  const currentId = Number(pathName.split("/").pop());
  const selectedItem = data.find((item) => item.id === currentId);
  const isNewsPage = pathName.startsWith("/news/");

  console.log(selectedItem);

  if (!selectedItem) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const sortedData = [...data].sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateA - dateB;
  });

  const currentIndex = sortedData.findIndex((item) => item.id === selectedItem.id);
  const previousItem = currentIndex > 0 ? sortedData[currentIndex - 1] : null;
  const nextItem = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1] : null;

  const getDisplayText = (title: string, subtitle?: string | null) => {
    return [title, subtitle].filter(Boolean).join(" ");
  };

  const formatDate = (date: Date | null | undefined) => {
    return date?.toISOString().split("T")[0] || "";
  };

  return (
    <div className="container">
      <h1 className="board-detail-title">{title}</h1>
      <div>
        <h2 className="board-detail-subtitle">{isNewsPage ? getDisplayText(selectedItem.title, selectedItem.subtitle) : selectedItem.title}</h2>
        <p className="board-detail-date">{formatDate(selectedItem.created_at)}</p>
        <div className="board-detail-icon-wrapper">
          <Image className="board-detail-icon" src={icon_share} alt="icon_share" />
          <Image src={icon_print} alt="icon_print" />
        </div>
        <div className="board-detail-contents-wrapper">
          <div className="board-detail-contents">
            <p className="pb-[10px] text-center">{selectedItem.contents}</p>
            <div>
              {!isNewsPage ? (
                <>
                  <p className="board-detail-info-marker leading-[33.6px]">{selectedItem.detail_info}</p>
                  <p className="board-detail-info-marker">{selectedItem.additional_info}</p>
                </>
              ) : null}
            </div>
          </div>
          {isNewsPage && selectedItem.news_image && <Image src={selectedItem.news_image} width={859} height={638} alt="news_image" />}
        </div>
      </div>
      {/* <div className="py-[24px]">첨부파일</div> */}
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
