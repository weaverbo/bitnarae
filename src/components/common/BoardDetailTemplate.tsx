"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import StyledLink from "next/link";
import "../../styles/common/boarddetailtemplate.css";

type BoardDetailItem = {
  id: number;
  title: string;
  created_at?: Date | null;
  subtitle?: string | null;
  contents?: string | null;
  news_image: string | null;
};

type Props = {
  title: string;
  data: BoardDetailItem[];
};

export default function BoardDetailTemplate({ title, data }: Props) {
  const pathName = usePathname();

  const SelectBoardDetailItem = data.filter((i) => i.id === Number(pathName.split("/").pop()));
  const isNewsPage = pathName.startsWith("/news/");

  return (
    <div className="container">
      <h1>{title}</h1>
      <div>
        <h2>{`${isNewsPage ? SelectBoardDetailItem[0].title + SelectBoardDetailItem[0].subtitle : SelectBoardDetailItem[0].title}`}</h2>
        <p>{SelectBoardDetailItem[0].created_at?.toISOString().split("T")[0]}</p>
        {isNewsPage && SelectBoardDetailItem[0].news_image && <Image src={SelectBoardDetailItem[0].news_image} width={859} height={638} alt="news_image" />}
        <div>{SelectBoardDetailItem[0].contents}</div>
      </div>
      <StyledLink href={`${isNewsPage ? "/news" : "/notices"}`}>목록으로</StyledLink>
    </div>
  );
}
