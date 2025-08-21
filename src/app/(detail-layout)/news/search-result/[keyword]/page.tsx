// app/(detail-layout)/news/search-result/[keyword]/page.tsx
import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "@/components/common/InfoBoardTemplate";

type Params = { keyword: string };

export default async function NewsSearchResult({ params }: { params: Promise<Params> }) {
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
