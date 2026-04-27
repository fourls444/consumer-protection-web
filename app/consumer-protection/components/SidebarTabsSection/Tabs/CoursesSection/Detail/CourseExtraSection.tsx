"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaGraduationCap, FaUsers, FaBookOpen } from "react-icons/fa6";
import styles from "../CourseDetail.module.css";

interface CourseOffered {
  code: string;
  branch: string;
  title: string;
  desc: string;
  seats: number;
}

interface CourseExtraSectionProps {
  coursesOffered: CourseOffered[];
}

export default function CourseExtraSection({ coursesOffered }: CourseExtraSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.fullWidthSection} ${styles.revealing} ${isVisible ? styles.revealingVisible : ""}`}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleRow}>
          <FaGraduationCap className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>สาขาวิชาที่เปิดสอน</h2>
        </div>
        <p className={styles.sectionSubtitle}>
          เลือกสาขาวิชาที่ตรงกับความสนใจและเป้าหมายของคุณ
        </p>
      </div>

      <div className={`${styles.courseGrid} ${styles.revealStagger} ${isVisible ? styles.revealStaggerVisible : ""}`}>
        {coursesOffered.map((course, idx) => (
          <div key={idx} className={styles.courseCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.branchTag}>{course.branch}</span>
                <span className={styles.courseCode}>{course.code}</span>
              </div>
              <h3 className={styles.courseCardTitle}>{course.title}</h3>
              <p className={styles.courseCardDesc}>{course.desc}</p>
            </div>
            
            <div className={styles.cardStats}>
              <div className={styles.statItem}>
                <div className={styles.statLabel}>
                   <FaUsers size={16} />
                   <span>จำนวนรับ</span>
                </div>
                <span className={styles.statValue}>{course.seats} คน</span>
              </div>
              <Link href="/consumer-protection/expertise/1" style={{ width: '100%' }}>
                <button className={styles.detailBtn}>
                   <FaBookOpen size={14} /> ดูรายละเอียด
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
