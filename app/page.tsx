"use client";

import { useState } from "react";
import Banner from "@/components/ui/Banner";
import IntroSection from "@/components/home/IntroSection";
import Sidebar from "@/components/home/Sidebar";
import HistoryContent from "@/components/history/HistoryContent";
import VisionContent from "@/components/vision/VisionContent";
import CurriculumContent from "@/components/curriculum/CurriculumContent";
import ExpertiseContent from "@/components/expertise/ExpertiseContent";
import CommitteeContent from "@/components/committee/CommitteeContent";
import HighlightSection from "@/components/home/HighlightSection";
import EventSection from "@/components/home/EventSection";
import NewsSection from "@/components/home/NewsSection";
import LogoContent from "@/components/logo/LogoContent";

// Styling Imports
import layoutStyles from "@/components/home/HomeLayout.module.css";
import visionStyles from "@/components/vision/Vision.module.css";
import curriculumStyles from "@/components/curriculum/Curriculum.module.css";
import logoStyles from "@/components/logo/Logo.module.css";
import contactStyles from "@/components/contact/Contact.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("history");

  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <HistoryContent />;
      case "vision":
        return <VisionContent />;
      case "curriculum":
        return <CurriculumContent />;
      case "expertise":
        return <ExpertiseContent />;
      case "committee":
        return <CommitteeContent />;

      case "logo":
        return <LogoContent />;
      case "contact":
        return (
          <>
            <h1 className={contactStyles.contentTitle}>ติดต่อและสถานที่ตั้ง</h1>
            <p className={contactStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
      default:
        return <HistoryContent />;
    }
  };

  return (
    <main>
      <Banner />
      <IntroSection />
      <div className={layoutStyles.container}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className={layoutStyles.contentArea}>
          {renderContent()}
        </div>
      </div>
      <HighlightSection />
      <EventSection />
      <NewsSection />
    </main>
  );
}
