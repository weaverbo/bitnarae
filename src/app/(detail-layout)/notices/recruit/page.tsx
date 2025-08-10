import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "../../../../components/common/InfoBoardTemplate";

export default async function Recruit() {
  const data = await prisma.notice.findMany();

  return (
    <>
      <InfoBoardTemplate title="공지사항" data={data} />
    </>
  );
}
