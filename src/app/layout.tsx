import "../styles/globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${pretendard.className}`}>
        <Header />
        <div className="overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
