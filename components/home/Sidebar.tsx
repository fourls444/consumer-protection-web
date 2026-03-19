"use client";

import styles from "./Sidebar.module.css";

const menuItems = [
  { id: "history", name: "ประวัติความเป็นมา" },
  { id: "vision", name: "วิสัยทัศน์และพันธกิจ" },
  { id: "curriculum", name: "ข้อมูลหลักสูตร" },
  { id: "expertise", name: "สาขาความเชี่ยวชาญ" },
  { id: "committee", name: "คณะกรรมการบริหาร" },
  { id: "logo", name: "ตราสัญลักษณ์" },
  { id: "contact", name: "ติดต่อและสถานที่ตั้ง" },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>
        “ปกป้องสิทธิผู้บริโภค <br />
        สร้างสังคมสุขภาพดี”
      </h2>
      {menuItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`${styles.menuItem} ${isActive ? styles.activeItem : ""}`}
            style={{ width: '100%', cursor: 'pointer', display: 'block' }}
          >
            {item.name}
          </button>
        );
      })}
    </aside>
  );
}
