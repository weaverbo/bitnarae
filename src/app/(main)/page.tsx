import HeroSection from "@/components/main/HeroSection";
import HeroSubText from "@/components/main/HeroSubTextSection";
import ActivitiesSection from "@/components/main/ProgramSection";
import TransitionSection from "@/components/main/TransitionSection";
import NewsSection from "@/components/main/NewsSection";
import NoticeSection from "@/components/main/NoticeSection";

export default function main() {
  return (
    <>
      <div className="h-[1071px]">
        <HeroSection />
      </div>
      <HeroSubText />
      <ActivitiesSection />
      <TransitionSection />
      <NewsSection />
      <NoticeSection />
    </>
  );
}
