"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaFileLines, 
  FaHeartPulse, 
  FaFlask, 
  FaDownload, 
  FaMagnifyingGlass,
  FaArrowLeft,
  FaGraduationCap
} from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "./AllCourses.module.css";

const COURSES_DATA = [
  {
    id: 1,
    category: "short",
    title: "หลักสูตรระยะสั้น",
    subtitle: "(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)",
    desc: "เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ",
    icon: <FaFileLines size={24} color="#fff" />,
    details: [
      "16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)",
      "ฝึกปฏิบัติจริงในสถานพยาบาลจริง",
      "ระยะเวลา: 4 เดือน (เต็มเวลา)",
      "คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ"
    ]
  },
  {
    id: 2,
    category: "short",
    title: "หลักสูตรแสดงความรู้ความชำนาญ",
    subtitle: "PHARMACY RESIDENCY TRAINING",
    desc: "พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์",
    icon: <FaHeartPulse size={24} color="#fff" />,
    details: [
      "โครงสร้าง: 134 หน่วยกิต",
      "ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง",
      "คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก"
    ]
  },
  {
    id: 3,
    category: "short",
    title: "หลักสูตรอบรมเชิงปฏิบัติการ",
    subtitle: "PHARMACOGENOMICS FOR ALLIED HEALTH",
    desc: "พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์",
    icon: <FaFlask size={24} color="#fff" />,
    details: [
      "โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)",
      "ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม",
      "คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ"
    ]
  },
  {
    id: 4,
    category: "middle",
    title: "หลักสูตรระยะกลาง",
    subtitle: "ADVANCED PHARMACY PRACTICE",
    desc: "ยกระดับทักษะการบริบาลเภสัชกรรมสู่ระดับผู้เชี่ยวชาญ",
    icon: <FaFileLines size={24} color="#fff" />,
    details: [
      "ระยะเวลา: 1 ปี",
      "เน้นการคิดวิเคราะห์เชิงคลินิก",
      "ฝึกปฏิบัติในโรงพยาบาลเครือข่าย"
    ]
  },
  {
    id: 5,
    category: "long",
    title: "หลักสูตรระยะยาว (Residency)",
    subtitle: "SPECIALIZED PHARMACY RESIDENCY",
    desc: "หลักสูตรฝึกอบรมเภสัชกรประจำบ้าน เพื่อความเชี่ยวชาญเฉพาะทาง",
    icon: <FaGraduationCap size={24} color="#fff" />,
    details: [
      "ระยะเวลา: 3 ปี",
      "วุฒิบัตรแสดงความรู้ความชำนาญ",
      "ได้รับการรับรองจากสภาเภสัชกรรม"
    ]
  }
];

export default function AllCoursesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && ["short", "middle", "long"].includes(cat)) {
      setActiveTab(cat);
    }
  }, [searchParams]);

  const filteredCourses = COURSES_DATA.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || course.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className={styles.pageContainer}>
      {/* --- Hero Section (Mirroring CourseDetail) --- */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/courses/img.png"
            alt="All Courses Banner"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <button onClick={() => router.back()} className={styles.backBtn}>
          <FaArrowLeft size={14} /> ย้อนกลับ
        </button>

        <div className={styles.heroContent}>
          <div className={styles.categoryTag}>สถาบันการศึกษา</div>
          <h1 className={styles.title}>หลักสูตรทั้งหมด</h1>
          <p className={styles.heroSubtitle}>
             ค้นหาหลักสูตรที่เหมาะสมกับคุณ เพื่อพัฒนาศักยภาพและทักษะวิชาชีพเภสัชกรรม
          </p>
        </div>
      </section>

      {/* --- Search & Filter Section --- */}
      <div className={styles.mainLayout}>
        <div className={styles.contentArea}>
          <div className={styles.controlsRow}>
            <div className={styles.searchWrapper}>
              <FaMagnifyingGlass className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="ค้นหาชื่อหลักสูตร..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.filterTabs}>
              <button 
                className={`${styles.tab} ${activeTab === "all" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("all")}
              >
                ทั้งหมด
              </button>
              <button 
                className={`${styles.tab} ${activeTab === "short" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("short")}
              >
                ระยะสั้น
              </button>
              <button 
                className={`${styles.tab} ${activeTab === "middle" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("middle")}
              >
                ระยะกลาง
              </button>
              <button 
                className={`${styles.tab} ${activeTab === "long" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("long")}
              >
                ระยะยาว
              </button>
            </div>
          </div>

          {/* --- Grid --- */}
          {filteredCourses.length > 0 ? (
            <div className={styles.cardsGrid}>
              {filteredCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <Link href={`/consumer-protection/course/${course.id}`} className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIcon}>{course.icon}</div>
                      <div>
                        <h3 className={styles.cardTitle}>{course.title}</h3>
                        <p className={styles.cardSubTitle}>{course.subtitle}</p>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <p className={styles.cardDesc}>{course.desc}</p>
                      <div className={styles.detailSection}>
                        <h4 className={styles.detailTitle}>รายละเอียด</h4>
                        <ul className={styles.detailList}>
                          {course.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>

                  <button className={styles.downloadBtnFull}>
                    <FaDownload size={16} /> ดาวน์โหลด
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <Image src="/images/news/img.png" alt="No results" width={200} height={150} className={styles.noResultsImg} />
              <h3>ไม่พบหลักสูตรที่คุณค้นหา</h3>
              <p>ลองใช้คำค้นหาอื่นหรือเปลี่ยนหมวดหมู่ดูนะครับ</p>
              <button onClick={() => {setSearchQuery(""); setActiveTab("all");}} className={styles.resetBtn}>
                รีเซ็ตการค้นหา
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
