import { prisma } from "@/lib/prisma";
import BoardDetailTemplate from "@/components/common/BoardDetailTemplate";

export default async function NewsDetail() {
  const data = await prisma.news.findMany();

  return (
    <>
      <BoardDetailTemplate title="재단소식" data={data} />
    </>
  );
}
