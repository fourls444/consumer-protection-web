"use client";

import { useState } from "react";
// Import UI Components
import Banner from "@/components/ui/Banner";
import IntroSection from "@/components/home/IntroSection";
import Sidebar from "@/components/home/Sidebar";
// Import Dynamic Contents
import HistoryContent from "@/components/01_history/HistoryContent";
import VisionContent from "@/components/02_vision/VisionContent";
import CourseContent from "@/components/03_course/CourseContent";
import ExpertiseContent from "@/components/04_expertise/ExpertiseContent";
import CommitteeContent from "@/components/05_committee/CommitteeContent";
import HighlightSection from "@/components/home/HighlightSection";
import MeetingSection from "@/components/home/MeetingSection";
import NewsSection from "@/components/home/NewsSection";
import EmblemContent from "@/components/06_emblem/EmblemContent";
import ContactContent from "@/components/07_contact/ContactContent";
import RegistrationModal from "@/components/ui/RegistrationModal";

// Styling Imports
import layoutStyles from "@/components/home/HomeLayout.module.css";

/**
 * หน้าหลัก (Home Page)
 * ทำหน้าที่รวบรวมทุกส่วนของหน้าเว็บและจัดการการเปลี่ยนเนื้อหาผ่าน Sidebar
 */
export default function Home() {
  // State สำหรับเก็บค่าแท็บที่กำลังเลือกอยู่ (Default เป็น history)
  const [activeTab, setActiveTab] = useState("history");

  /**
   * ฟังก์ชันสำหรับเลือก Render เนื้อหาตามแท็บที่ถูกเลือก
   */
  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <HistoryContent />;
      case "vision":
        return <VisionContent />;
      case "course":
        return <CourseContent />;
      case "expertise":
        return <ExpertiseContent />;
      case "committee":
        return <CommitteeContent />;

      case "emblem":
        return <EmblemContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <HistoryContent />;
    }
  };

  return (
    <main>
      {/* Modal บังคับลงทะเบียนชื่อ (แสดงเฉพาะเมื่อไม่มีข้อมูลใน localStorage) */}
      <RegistrationModal />

      {/* ส่วนแบนเนอร์ด้านบน */}
      <Banner />

      {/* ส่วนแนะนำเนื้อหาเบื้องต้น */}
      <IntroSection />

      {/* ส่วนเนื้อหาหลักที่มี Sidebar และพื้นที่แสดงรายละเอียดตามแท็บ */}
      <div className={layoutStyles.container}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className={layoutStyles.contentArea}>
          {renderContent()}
        </div>
      </div>

      {/* ส่วน Highlight รูปภาพแกลเลอรี */}
      <HighlightSection />

      {/* ส่วนการประชุมล่าสุด */}
      <MeetingSection />

      {/* ส่วนข่าวประชาสัมพันธ์ */}
      <NewsSection />
    </main>
  );
}
