"use client";

import React from "react";
import { 
  FaFileArrowDown, 
  FaBookOpen, 
  FaCircleCheck 
} from "react-icons/fa6";
import styles from "../ExpertiseDetail.module.css";

interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ExpertiseSidebarProps {
  infoItems: InfoItem[];
  highlights: string[];
}

export default function ExpertiseSidebar({ infoItems, highlights }: ExpertiseSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* 💳 CTA Card */}
      <div className={styles.floatingCard}>
        <div className={styles.cardHeader}>
          <h3>สนใจสมัครเรียนสาขานี้?</h3>
          <p>ดาวน์โหลดเอกสารหรือสมัครเรียนได้เลยตอนนี้</p>
        </div>
        <button className={styles.applyBtn}>
          <FaBookOpen size={14} /> <span>สมัครเรียน</span>
        </button>
        <button className={styles.downloadBtn}>
          <FaFileArrowDown size={14} /> <span>ดาวน์โหลดเอกสาร</span>
        </button>
      </div>

      {/* Sidebar Card: Important Info */}
      <div className={styles.sidebarCard}>
        <h3 className={styles.sidebarTitle}>ข้อมูลสำคัญ</h3>
        <div className={styles.infoList}>
          {infoItems.map((item, idx) => (
            <div key={idx} className={styles.infoItem}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Card: Highlights */}
      <div className={styles.sidebarCard}>
        <h3 className={styles.sidebarTitle}>จุดเด่น</h3>
        <ul className={styles.highlightList}>
          {highlights.map((text, i) => (
            <li key={i} className={styles.highlightItem}>
              <FaCircleCheck className={styles.circleCheckIcon} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
