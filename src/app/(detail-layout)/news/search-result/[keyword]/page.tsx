import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "@/components/common/InfoBoardTemplate";

type Params = { keyword: string };

export default async function NewsSearchResult({ params }: { params: Promise<Params> }) {
  const { keyword: raw } = await params;
  const keyword = decodeURIComponent(raw ?? "").trim();

  const data = await prisma.news.findMany({
    where: keyword
      ? {
          OR: [{ title: { contains: keyword, mode: "insensitive" } }, { subtitle: { contains: keyword, mode: "insensitive" } }],
        }
      : undefined,
  });

  return <InfoBoardTemplate title="재단소식" data={data} />;
}
