import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "@/components/common/InfoBoardTemplate";

type Params = { keyword: string };

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function NewsSearchResult({ params, searchParams }: { params: Params; searchParams?: SearchParams }) {
  const keyword = decodeURIComponent(params.keyword ?? "").trim();

  const data = await prisma.news.findMany({
    where: keyword
      ? {
          OR: [{ title: { contains: keyword, mode: "insensitive" } }, { subtitle: { contains: keyword, mode: "insensitive" } }],
        }
      : undefined,
  });

  return <InfoBoardTemplate title="재단소식" data={data} />;
}
