import { prisma } from "@/lib/prisma";
import BoardDetailTemplate from "@/components/common/BoardDetailTemplate";

export default async function NoticeDetail() {
  const data = await prisma.notice.findMany();

  return (
    <>
      <BoardDetailTemplate title="공지사항" data={data} />
    </>
  );
}
