"use client";

import React, { useState } from "react";
import {
  FaLightbulb,
  FaBookOpen,
  FaBriefcase,
  FaWrench,
  FaCircleCheck,
} from "react-icons/fa6";
import styles from "../ExpertiseDetail.module.css";

interface CurriculumData {
  year: string;
  subjects: string[];
}

interface CareerData {
  title: string;
  desc: string;
  salary: string;
}

interface ExpertiseContentProps {
  description: string;
  objectives: string[];
  curriculumData: CurriculumData[];
  skills: string[];
  careers: CareerData[];
}

export default function ExpertiseContent({
  description,
  objectives,
  curriculumData,
  skills,
  careers,
}: ExpertiseContentProps) {
  const [activeTab, setActiveTab] = useState("objectives");

  return (
    <div className={styles.contentArea}>
      {/* Card: About */}
      <section className={styles.card}>
        <h2 className={styles.cardTitle}>เกี่ยวกับสาขาวิชา</h2>
        <p className={styles.description}>{description}</p>
      </section>

      {/* Card: Tabs & Content */}
      <section className={styles.card}>
        <div className={styles.tabsContainer}>
          {[
            { id: "objectives", label: "วัตถุประสงค์" },
            { id: "curriculum", label: "หลักสูตร" },
            { id: "skills", label: "ทักษะ" },
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

        <div className={styles.tabContent}>
          {activeTab === "objectives" && (
            <div>
              <div className={styles.contentHeader}>
                <FaLightbulb className={styles.bulbIcon} />
                <h3 className={styles.contentTitle}>วัตถุประสงค์การเรียนรู้</h3>
              </div>
              <p className={`${styles.description} ${styles.tabDescription}`}>
                หลังจากจบการศึกษา นักศึกษาจะมีคุณสมบัติดังนี้:
              </p>
              <ul className={styles.objectiveList}>
                {objectives.map((obj, i) => (
                  <li key={i} className={styles.objectiveItem}>
                    <FaCircleCheck className={styles.checkIcon} />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "curriculum" && (
            <div>
              <div className={styles.contentHeader}>
                <FaBookOpen className={styles.bulbIcon} />
                <h3 className={styles.contentTitle}>โครงสร้างหลักสูตรตามปีการศึกษา</h3>
              </div>
              <p className={styles.categorySubLabel}>
                รายวิชาสำคัญแบ่งตามปีการศึกษา
              </p>
              {curriculumData.map((data, idx) => (
                <div key={idx} className={styles.yearSection}>
                  <h4 className={styles.yearTitle}>{data.year}</h4>
                  <div className={styles.subjectList}>
                    {data.subjects.map((sub, i) => (
                      <div key={i} className={styles.subjectItem}>
                        <div className={styles.bullet}></div>
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "skills" && (
            <div>
              <div className={styles.contentHeader}>
                <FaWrench className={styles.bulbIcon} />
                <h3 className={styles.contentTitle}>ทักษะที่จะได้รับ</h3>
              </div>
              <p className={styles.categorySubLabel}>
                ทักษะและความสามารถที่นักศึกษาจะพัฒนาในสาขานี้
              </p>
              <div className={styles.subjectList}>
                {skills.map((skill, i) => (
                  <div key={i} className={styles.subjectItem}>
                    <div className={styles.bullet}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "career" && (
            <div>
              <div className={styles.contentHeader}>
                <FaBriefcase className={styles.bulbIcon} />
                <h3 className={styles.contentTitle}>เส้นทางอาชีพ</h3>
              </div>
              <p className={styles.categorySubLabel}>
                ตำแหน่งงานและค่าตอบแทนโดยประมาณ
              </p>
              <div className={styles.careerList}>
                {careers.map((career, i) => (
                  <div key={i} className={styles.careerCard}>
                    <h4 className={styles.jobTitle}>{career.title}</h4>
                    <p className={styles.jobDesc}>{career.desc}</p>
                    <div className={styles.salaryTag}>{career.salary}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
