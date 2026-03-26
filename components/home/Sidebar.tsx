"use client";

import styles from "./Sidebar.module.css";

/**
 * รายการเมนูใน Sidebar
 */
const menuItems = [
  { id: "history", name: "ประวัติความเป็นมา" },
  { id: "vision", name: "วิสัยทัศน์และพันธกิจ" },
  { id: "course", name: "ข้อมูลหลักสูตร" },
  { id: "expertise", name: "สาขาความเชี่ยวชาญ" },
  { id: "committee", name: "คณะกรรมการบริหาร" },
  { id: "emblem", name: "ตราสัญลักษณ์" },
  { id: "contact", name: "ติดต่อและสถานที่ตั้ง" },
];

/**
 * อินเตอร์เฟสสำหรับ Props ของ Sidebar
 */
interface SidebarProps {
  activeTab: string; // ID ของแท็บที่กำลังเปิดอยู่
  onTabChange: (id: string) => void; // ฟังก์ชันเรียกเมื่อมีการคลิกเปลี่ยนแท็บ
}

/**
 * ส่วนแถบเมนูด้านข้าง (Sidebar)
 * ใช้สำหรับสลับเนื้อหาหลักในหน้า Home
 */
export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* คำขวัญหรือพาดหัวประจำ Sidebar */}
      <h3 className={styles.sidebarTitle}>
        “ปกป้องสิทธิผู้บริโภค<br></br>
        สร้างสังคมสุขภาพดี”
      </h3>

      {/* รายการปุ่มเมนู */}
      {menuItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`${styles.menuItem} ${isActive ? styles.activeItem : ""}`}
            style={{ width: '100%', cursor: 'pointer', display: 'block', marginBottom:"10px"}}
          >
            {item.name}
          </button>
        );
      })}
    </aside>
  );
}
