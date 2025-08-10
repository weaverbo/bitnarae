import { prisma } from "@/lib/prisma";
import InfoBoardTemplate from "../../../components/common/InfoBoardTemplate";

export default async function News() {
  const data = await prisma.news.findMany();

  return (
    <>
      <InfoBoardTemplate title="재단소식" data={data} />
    </>
  );
}
