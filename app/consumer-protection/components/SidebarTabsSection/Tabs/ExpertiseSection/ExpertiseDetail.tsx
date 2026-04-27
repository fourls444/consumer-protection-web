"use client";

import React from "react";
import styles from "./ExpertiseDetail.module.css";
import ExpertiseHero from "./Detail/ExpertiseHero";
import ExpertiseSidebar from "./Detail/ExpertiseSidebar";
import ExpertiseContent from "./Detail/ExpertiseContent";
import {
  FaUsers,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa6";

export default function ExpertiseDetail() {
  const objectives = [
    "มีความรู้เชิงลึกในเภสัชวิทยาคลินิก",
    "สามารถให้บริการเภสัชกรรมในโรงพยาบาลได้อย่างมืออาชีพ",
    "มีทักษะในการติดตามและประเมินผลการรักษา",
    "เข้าใจระบบสุขภาพและการทำงานของโรงพยาบาล",
    "สามารถใช้เทคโนโลยีและระบบสารสนเทศทางการแพทย์",
  ];

  const curriculumData = [
    {
      year: "ปีที่ 1",
      subjects: [
        "พื้นฐานเภสัชศาสตร์คลินิก",
        "กายวิภาคและสรีรวิทยาทางคลินิก",
        "เภสัชวิทยาคลินิกเบื้องต้น",
        "การประเมินผู้ป่วย",
      ],
    },
    {
      year: "ปีที่ 2",
      subjects: [
        "เภสัชกรรมคลินิกขั้นสูง",
        "ระบบสุขภาพและโรงพยาบาล",
        "การใช้ยาอย่างสมเหตุผล",
        "การจัดการยาในโรงพยาบาล",
      ],
    },
    {
      year: "ปีที่ 3",
      subjects: [
        "เภสัชกรรมคลินิกเฉพาะทาง",
        "การดูแลผู้ป่วยผู้สูงอายุ",
        "เภสัชกรรมเด็ก",
        "เภสัชบำบัดโรคติดเชื้อ",
      ],
    },
    {
      year: "ปีที่ 4",
      subjects: [
        "ฝึกงานคลินิกในโรงพยาบาล",
        "โครงการพัฒนาระบบบริการ",
        "สัมมนาเภสัชกรรมคลินิก",
        "การเตรียมความพร้อมสู่วิชาชีพ",
      ],
    },
  ];

  const highlights = [
    "หลักสูตรได้รับการรับรองจากสภาเภสัชกรรม",
    "อาจารย์ผู้สอนมีประสบการณ์สูง",
    "มีโรงพยาบาลเครือข่ายฝึกงานกว่า 50 แห่ง",
    "ห้องปฏิบัติการทันสมัยครบครัน",
    "อัตราการมีงานทำสูงถึง 97%",
    "โอกาสทำงานในโรงพยาบาลชั้นนำ",
  ];

  const infoItems = [
    { icon: <FaUsers />, label: "จำนวนรับ", value: "25 คน" },
    { icon: <FaChartLine />, label: "อัตราการมีงานทำ", value: "97%" },
    { icon: <FaGraduationCap />, label: "ระดับปริญญา", value: "ปริญญาตรี 6 ปี" },
  ];

  const careers = [
    {
      title: "เภสัชกรคลินิก",
      desc: "ให้บริการเภสัชกรรมในโรงพยาบาล",
      salary: "30,000 - 55,000 บาท/เดือน",
    },
    {
      title: "เภสัชกรผู้เชี่ยวชาญด้านยา",
      desc: "ให้คำปรึกษาเกี่ยวกับการใช้ยาในโรงพยาบาล",
      salary: "40,000 - 65,000 บาท/เดือน",
    },
    {
      title: "ผู้จัดการเภสัชกรรมโรงพยาบาล",
      desc: "บริหารจัดการแผนกเภสัชกรรม",
      salary: "50,000 - 90,000 บาท/เดือน",
    },
  ];

  return (
    <div className={styles.detailContainer}>
      <ExpertiseHero
        bannerSrc="/images/expertise/card1.jpg"
        badge="สภาเภสัชกรรม"
        title="สาขา 1"
        subtitle="หลักสูตรเภสัชศาสตรบัณฑิต"
      />

      <main className={styles.mainLayout}>
        <ExpertiseContent
          description="สาขาเภสัชกรรมคลินิกมุ่งเน้นการพัฒนาความรู้และทักษะในการดูแลผู้ป่วยในโรงพยาบาล การประเมินความเหมาะสมของการใช้ยา การติดตามและป้องกันผลข้างเคียงจากยา และการทำงานร่วมกับทีมสหวิชาชีพเพื่อให้ผู้ป่วยได้รับการรักษาที่ดีที่สุด"
          objectives={objectives}
          curriculumData={curriculumData}
          skills={[
            "การประเมินและติดตามผลการรักษา",
            "การจัดการปัญหาการใช้ยา",
            "ทักษะการทำงานเป็นทีม",
            "การใช้ระบบสารสนเทศโรงพยาบาล",
            "การให้คำปรึกษาด้านยา",
          ]}
          careers={careers}
        />
        <ExpertiseSidebar
          infoItems={infoItems}
          highlights={highlights}
        />
      </main>
    </div>
  );
}
