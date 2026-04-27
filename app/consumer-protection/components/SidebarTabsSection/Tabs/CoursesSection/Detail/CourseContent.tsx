"use client";

import React, { useState } from "react";
import { FaAward, FaCircleCheck, FaBookOpen, FaUsers, FaBriefcase } from "react-icons/fa6";
import styles from "../CourseDetail.module.css";

interface CourseContentProps {
  objectives: string[];
}

export default function CourseContent({ objectives }: CourseContentProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculumItems = [
    { label: "วิชาศึกษาทั่วไป", value: "30 หน่วยกิต" },
    { label: "วิชาแกน", value: "80 หน่วยกิต" },
    { label: "วิชาเอก", value: "100 หน่วยกิต" },
    { label: "วิชาเลือกเสรี", value: "10 หน่วยกิต" },
  ];

  const admissionConditions = [
    "สำเร็จการศึกษาระดับมัธยมศึกษาตอนปลายสายวิทย์-คณิต",
    "มีผลการเรียนเฉลี่ยสะสม (GPAX) ไม่ต่ำกว่า 3.00",
    "ผ่านการสอบคัดเลือก สอบสัมภาษณ์ และตรวจสุขภาพ",
    "มีความสนใจในวิทยาศาสตร์สุขภาพและการดูแลผู้ป่วย",
    "มีคะแนนวิชาเคมี ชีววิทยา และคณิตศาสตร์ที่ดี",
  ];

  const careers = [
    "เภสัชกรโรงพยาบาล",
    "เภสัชกรชุมชนและร้านขายยา",
    "เภสัชกรอุตสาหกรรมยา",
    "เภสัชกรวิจัยและพัฒนา",
    "เภสัชกรโรงพยาบาล (Clinical Pharmacist)",
    "เภสัชกรสาธารณสุข",
    "อาจารย์และนักวิชาการ",
    "ผู้ประกอบการธุรกิจเภสัชกรรม",
  ];

  return (
    <div className={styles.contentArea}>
      {/* Tabs Menu */}
      <div className={styles.tabsContainer}>
        {[
          { id: "overview", label: "ภาพรวม" },
          { id: "curriculum", label: "หลักสูตร" },
          { id: "admission", label: "การรับสมัคร" },
          { id: "career", label: "อาชีพ" },
        ].map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab Content Cards */}
      <section className={styles.card}>
        {/* Contents for Overview (Default) */}
        {activeTab === "overview" && (
          <>
            <div className={styles.cardHeaderRow}>
              <FaAward className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>วัตถุประสงค์ของหลักสูตร</h2>
            </div>
            <p className={styles.description}>
              หลักสูตรนี้มุ่งเน้นพัฒนานักศึกษาให้มีความรู้ความสามารถและทักษะในด้านต่างๆ 
              เพื่อก้าวสู่การเป็นเภสัชกรที่มีประสิทธิภาพ
            </p>
            <ul className={styles.objectiveList}>
              {objectives.map((obj, i) => (
                <li key={i} className={styles.objectiveItem}>
                  <FaCircleCheck className={styles.checkIcon} />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Contents for Curriculum */}
        {activeTab === "curriculum" && (
          <>
            <div className={styles.cardHeaderRow}>
              <FaBookOpen className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>โครงสร้างหลักสูตร</h2>
            </div>
            <p className={styles.curriculumInfo}>
              จำนวนหน่วยกิตรวมตลอดหลักสูตร: 220 หน่วยกิต
            </p>
            <div className={styles.curriculumList}>
              {curriculumItems.map((item, idx) => (
                <div key={idx} className={styles.curriculumItem}>
                  <span className={styles.curriculumLabel}>{item.label}</span>
                  <span className={styles.curriculumValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Contents for Admission */}
        {activeTab === "admission" && (
          <>
            <div className={styles.cardHeaderRow}>
              <FaUsers className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>คุณสมบัติผู้สมัคร</h2>
            </div>
            <p className={styles.description}>
              ผู้สมัครเข้าศึกษาต้องมีคุณสมบัติดังต่อไปนี้
            </p>
            <ul className={styles.objectiveList}>
              {admissionConditions.map((cond, i) => (
                <li key={i} className={styles.objectiveItem}>
                  <FaCircleCheck className={styles.checkIcon} />
                  <span>{cond}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Contents for Career */}
        {activeTab === "career" && (
          <>
            <div className={styles.cardHeaderRow}>
              <FaBriefcase className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>อาชีพที่สามารถประกอบได้</h2>
            </div>
            <p className={styles.description}>
              หลังจากจบการศึกษานักศึกษาสามารถประกอบอาชีพในสายงานต่างๆ 
            </p>
            <div className={styles.careerGrid}>
              {careers.map((career, i) => (
                <div key={i} className={styles.careerItem}>
                  <FaCircleCheck className={styles.careerIcon} />
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
