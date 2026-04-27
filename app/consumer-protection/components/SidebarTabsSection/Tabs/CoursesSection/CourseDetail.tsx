"use client";

import React from "react";
import styles from "./CourseDetail.module.css";
import CourseHero from "./Detail/CourseHero";
import CourseSidebar from "./Detail/CourseSidebar";
import CourseContent from "./Detail/CourseContent";
import CourseExtraSection from "./Detail/CourseExtraSection";
import {
  FaUsers,
  FaGraduationCap,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";

export default function CourseDetail() {
  const objectives = [
    "มีความรู้ความเข้าใจในวิทยาศาสตร์เภสัชกรรม การใช้ยา และเภสัชบำบัด",
    "สามารถให้บริการทางเภสัชกรรมและดูแลผู้ป่วยด้วยความเชี่ยวชาญ",
    "มีทักษะในการประเมินปัญหาการใช้ยา แก้ไข และป้องกันผลข้างเคียง",
    "มีจรรยาบรรณวิชาชีพ คุณธรรม และจริยธรรมในการปฏิบัติงาน",
    "สามารถทำงานร่วมกับทีมสหวิชาชีพและสื่อสารได้อย่างมีประสิทธิภาพ",
  ];

  const highlights = [
    "หลักสูตรได้รับการรับรองจากสภาเภสัชกรรม",
    "อาจารย์ผู้สอนมีประสบการณ์สูง",
    "อาจารย์ผู้สอนมีประสบการณ์การศึกษาไม่ต่ำกว่า 15 ปี",
    "ห้องปฏิบัติการทันสมัยระดับสากล",
    "ความร่วมมือกับโรงพยาบาลชั้นนำกว่า 50 แห่ง",
    "อัตราการมีงานทำสูงถึง 97%",
    "โอกาสแลกเปลี่ยนนักศึกษาต่างประเทศ",
  ];

  const infoItems = [
    { icon: <FaClock />, label: "ระยะเวลา", value: "6 ปี" },
    { icon: <FaCalendarDays />, label: "ปีการศึกษา", value: "2569" },
    { icon: <FaUsers />, label: "จำนวนรับ", value: "80 คน" },
    { icon: <FaGraduationCap />, label: "การรับรอง", value: "สภาเภสัชกรรม" },
  ];

  const coursesOffered = [
    {
      code: "CP-201",
      branch: "เภสัชบำบัด",
      title: "เภสัชบำบัดผู้ป่วยเฉพาะทาง",
      desc: "มุ่งเน้นการดูแลผู้ป่วยโรคเรื้อรัง โรคมะเร็ง และโรคทางระบบประสาท",
      seats: 20,
    },
    {
      code: "CP-202",
      branch: "คลินิก",
      title: "เภสัชกรรมคลินิก",
      desc: "ศึกษาการใช้ยาในโรงพยาบาล การติดตามผลการรักษา",
      seats: 25,
    },
    {
      code: "CP-203",
      branch: "ชุมชน",
      title: "เภสัชกรรมชุมชน",
      desc: "เน้นบริการเภสัชกรรมในชุมชน ร้านขายยา และการส่งเสริมสุขภาพ",
      seats: 15,
    },
    {
      code: "IP-204",
      branch: "อุตสาหการ",
      title: "เภสัชกรรมอุตสาหการ",
      desc: "ศึกษาการผลิตยา การควบคุมคุณภาพ และการพัฒนาผลิตภัณฑ์ยา",
      seats: 15,
    },
    {
      code: "PH-205",
      branch: "สาธารณสุข",
      title: "เภสัชสาธารณสุข",
      desc: "มุ่งเน้นการบริหารจัดการระบบยา นโยบายสาธารณสุข และระบาดวิทยา",
      seats: 10,
    },
    {
      code: "HC-206",
      branch: "การดูแล",
      title: "เภสัชกรรมการดูแลสุขภาพ",
      desc: "บูรณาการการดูแลสุขภาพแบบองค์รวม การให้คำปรึกษาและติดตามผู้ป่วย",
      seats: 15,
    },
  ];

  return (
    <div className={styles.detailContainer}>
      <CourseHero
        bannerSrc="/images/courses/img.png"
        badge="ปริญญาตรี 6 ปี"
        title={
          <>
            หลักสูตรเภสัชศาสตร์บัณฑิต <br /> สาขาวิชาเภสัชบำบัด
          </>
        }
        profilePic="/images/news/img.png"
        profileText="โดย วิทยาลัยเภสัชบำบัด"
      />

      <main className={styles.mainLayout}>
        <CourseContent objectives={objectives} />
        <CourseSidebar
          ctaTitle="สนใจสมัครเรียน?"
          ctaSubtitle="เริ่มต้นเส้นทางเภสัชกรกับเรา"
          infoItems={infoItems}
          highlights={highlights}
        />
      </main>

      <CourseExtraSection coursesOffered={coursesOffered} />
    </div>
  );
}
