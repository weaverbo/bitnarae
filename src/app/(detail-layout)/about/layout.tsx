import DetailPageTitle from "../../../components/common/DetailPageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <DetailPageTitle title="재단소개" />
        {children}
      </div>
    </>
  );
}
