"use client";

import { useState } from "react";
import Banner from "@/components/ui/Banner";
import IntroSection from "@/components/home/IntroSection";
import Sidebar from "@/components/home/Sidebar";
import HistoryContent from "@/components/history/HistoryContent";
import HighlightSection from "@/components/home/HighlightSection";

// Styling Imports
import layoutStyles from "@/components/home/HomeLayout.module.css";
import visionStyles from "@/components/vision/Vision.module.css";
import curriculumStyles from "@/components/curriculum/Curriculum.module.css";
import expertiseStyles from "@/components/expertise/Expertise.module.css";
import committeeStyles from "@/components/committee/Committee.module.css";
import logoStyles from "@/components/logo/Logo.module.css";
import contactStyles from "@/components/contact/Contact.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("history");

  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <HistoryContent />;
      case "vision":
        return (
          <>
            <h1 className={visionStyles.contentTitle}>วิสัยทัศน์และพันธกิจ</h1>
            <p className={visionStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
      case "curriculum":
        return (
          <>
            <h1 className={curriculumStyles.contentTitle}>ข้อมูลหลักสูตร</h1>
            <p className={curriculumStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
      case "expertise":
        return (
          <>
            <h1 className={expertiseStyles.contentTitle}>สาขาความเชี่ยวชาญ</h1>
            <p className={expertiseStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
      case "committee":
        return (
          <>
            <h1 className={committeeStyles.contentTitle}>คณะกรรมการบริหาร</h1>
            <p className={committeeStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
      case "logo":
        return (
          <>
            <h1 className={logoStyles.contentTitle}>ตราสัญลักษณ์</h1>
            <p className={logoStyles.description}>กำลังเตรียมข้อมูล...</p>
          </>
        );
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
    </main>
  );
}
