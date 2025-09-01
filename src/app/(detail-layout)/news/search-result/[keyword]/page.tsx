import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "@/components/common/InfoBoardTemplate";

type Params = { keyword: string };
type PageProps = { params: Params };

export default async function NewsSearchResult({ params }: PageProps) {
  const resolved = await params;
  const keyword = decodeURIComponent(resolved.keyword ?? "").trim();

  const data = await prisma.news.findMany({
    where: keyword
      ? {
          OR: [{ title: { contains: keyword, mode: "insensitive" } }, { subtitle: { contains: keyword, mode: "insensitive" } }],
        }
      : undefined,
  });

  return <InfoBoardTemplate title="재단소식" data={data} />;
}
