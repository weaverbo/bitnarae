import HeroSection from "@/components/HeroSection";
import HeroSubText from "@/components/HeroSubText";
import ActivitiesSection from "@/components/ProgramSection";
import TransitionSection from "@/components/TransitionSection";
import NewsSection from "@/components/NewsSection";
import NoticeSection from "@/components/NoticeSection";

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
