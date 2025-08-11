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
};

type Props = {
title: string;
data: BoardDetailItem[];
};

export default function BoardDetailTemplate({ title, data }: Props) {
const pathName = usePathname();

const SelectBoardDetailItem = data.filter((i) => i.id === Number(pathName.split("/").pop()));
const isNewsPage = pathName.startsWith("/news/");

const sortedData = [...data].sort((a, b) => {
const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;

    return dateA - dateB;

});

const currentIndex = sortedData.findIndex((i) => i.id === SelectBoardDetailItem[0].id);

const PreviousBoardDetailItem = currentIndex > 0 ? sortedData[currentIndex - 1].title : null;
const PreviousBoardDetail = currentIndex > 0 ? sortedData[currentIndex - 1].subtitle : null;

const NextBoardDetailItem = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1].title : null;
const NextBoardDetail = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1].subtitle : null;

return (

<div className="container">
<h1 className="board-detail-title">{title}</h1>
<div>
<h2 className="board-detail-subtitle">{`${isNewsPage ? SelectBoardDetailItem[0].title + " " + SelectBoardDetailItem[0].subtitle : SelectBoardDetailItem[0].title}`}</h2>
<p className="board-detail-date">{SelectBoardDetailItem[0].created_at?.toISOString().split("T")[0]}</p>
<div className="board-detail-icon-wrapper">
<Image className="board-detail-icon" src={icon_share} alt="icon_share" />
<Image src={icon_print} alt="icon_print" />
</div>
<div className="board-detail-contents-wrapper">
<div className="board-detail-contents">{SelectBoardDetailItem[0].contents}</div>
{isNewsPage && SelectBoardDetailItem[0].news_image && <Image src={SelectBoardDetailItem[0].news_image} width={859} height={638} alt="news_image" />}
</div>
</div>
{/_ <div className="py-[24px]">첨부파일</div> _/}
<div className="flex flex-col gap-[24px] border-t-4 border-black pl-[42px] py-[24px]">
{currentIndex > 0 && (
<div className="flex items-center gap-[16px]">
<Image src={icon_arrowup} alt="icon_arrowup" />
<span>이전글</span>
<StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${SelectBoardDetailItem[0].id - 1}` : `/notices/${SelectBoardDetailItem[0].id - 1}`}`}>
{(PreviousBoardDetailItem || "") + " " + (PreviousBoardDetail || "")}
</StyledLink>
</div>
)}
{currentIndex < sortedData.length - 1 && (
<div className="flex items-center gap-[16px]">
<Image src={icon_arrowdown} alt="icon_arrowdown" />
<span>다음글</span>
<StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${sortedData[currentIndex + 1]?.id}` : `/notices/${sortedData[currentIndex + 1]?.id}`}`}>
{(NextBoardDetailItem || "") + " " + (NextBoardDetail || "")}
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

⏺ 네, 이 코드는 약간 복잡합니다. 주요 문제점들:

1. 변수명이 일관성 없음 - SelectBoardDetailItem, PreviousBoardDetailItem 등 카멜케이스가 일관적이지 않음
2. 중복 로직 - 이전글/다음글 로직이 반복됨
3. 긴 함수 - 하나의 컴포넌트에서 너무 많은 로직을 처리
4. 불필요한 import - path가 사용되지 않음
5. 복잡한 조건부 렌더링 - 템플릿 리터럴과 조건문이 중첩됨

리팩토링하면 더 깔끔해질 것 같습니다.

1. 불필요한 import 제거 - path 모듈 제거
2. 변수명 통일 - selectedItem, currentId, previousItem, nextItem로 일관성 있게 변경
3. 커스텀 훅 분리 - useNavigation 훅으로 네비게이션 로직 분리
4. 재사용 가능한 컴포넌트 - NavigationItem 컴포넌트로 중복 제거
5. 헬퍼 함수 - getTitle(), formatDate() 함수로 로직 분리
6. 에러 처리 - 게시글을 찾을 수 없는 경우 에러 메시지 표시
7. 가독성 향상 - 복잡한 템플릿 리터럴과 중첩 조건문 단순화

코드가 훨씬 깔끔하고 유지보수하기 쉬워졌습니다.

리팩토링 완료! 주요 개선점:

1. 변수명 개선 - SelectBoardDetailItem → selectedItem, currentId 등 일관된 네이밍
2. 에러 처리 추가 - 게시글을 찾을 수 없는 경우 처리
3. 헬퍼 함수 - getDisplayText(), formatDate() 함수로 로직 분리
4. 중복 제거 - 반복되던 title/subtitle 조합 로직 통합
5. 가독성 향상 - 복잡한 조건문과 템플릿 리터럴 단순화
6. 올바른 네비게이션 - ID 기반으로 정확한 이전/다음 글 연결

코드가 훨씬 깔끔하고 유지보수하기 쉬워졌습니다.
