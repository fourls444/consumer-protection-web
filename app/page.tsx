"use client";

import { useState } from "react";
import Banner from "@/components/ui/Banner";
import IntroSection from "@/components/home/IntroSection";
import Sidebar from "@/components/home/Sidebar";
import HistoryContent from "@/components/01_history/HistoryContent";
import VisionContent from "@/components/02_vision/VisionContent";
import CurriculumContent from "@/components/03_curriculum/CurriculumContent";
import ExpertiseContent from "@/components/04_expertise/ExpertiseContent";
import CommitteeContent from "@/components/05_committee/CommitteeContent";
import HighlightSection from "@/components/home/HighlightSection";
import EventSection from "@/components/home/EventSection";
import NewsSection from "@/components/home/NewsSection";
import LogoContent from "@/components/06_logo/LogoContent";
import ContactContent from "@/components/07_contact/ContactContent";
import RegistrationModal from "@/components/ui/RegistrationModal";

// Styling Imports
import layoutStyles from "@/components/home/HomeLayout.module.css";

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
        return <ContactContent />;
      default:
        return <HistoryContent />;
    }
  };

  return (
    <main>
      <RegistrationModal />
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
