import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "@/components/common/InfoBoardTemplate";

type Params = { keyword: string };

export default async function NoticeSearchResult({ params }: { params: Promise<Params> }) {
  const { keyword: raw } = await params;
  const keyword = decodeURIComponent(raw ?? "").trim();

  const data = await prisma.notice.findMany({
    where: keyword
      ? {
          OR: [{ title: { contains: keyword, mode: "insensitive" } }],
        }
      : undefined,
  });

  return (
    <>
      <InfoBoardTemplate title="공지사항" data={data} />
    </>
  );
}
