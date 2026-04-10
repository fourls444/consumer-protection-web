"use client";

import Image from "next/image";
import { HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineGlobeAlt } from "react-icons/hi";
import styles from "./VisionMissionSection.module.css";

/**
 * ข้อมูลการ์ดพันธกิจและวิสัยทัศน์ (Vision & Mission Cards)
 */
const visionCards = [
  {
    icon: <HiOutlineAcademicCap />,
    title: "Academic Excellence",
    description: "พัฒนาองค์ความรู้และมาตรฐานวิชาชีพด้านการคุ้มครองผู้บริโภค",
    image: "/images/vision/Container.png",
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: "Expert Training",
    description: "ผลิตเภสัชกรวุฒิบัตรที่มีทักษะการวิเคราะห์และจัดการระบบยาเชิงรุก",
    image: "/images/vision/Container (1).png",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Consumer Advocacy",
    description: "เป็นกระบอกเสียงและเกราะป้องกันสิทธิการเข้าถึงยาที่ปลอดภัยของประชาชน",
    image: "/images/vision/Container (2).png",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: "Networking",
    description: "สร้างความร่วมมือระหว่างหน่วยงานรัฐ ภาคประชาสังคม และสากล",
    image: "/images/vision/Container (3).png",
  },
];

/**
 * ส่วนแสดงวิสัยทัศน์และพันธกิจ (Vision Content)
 */
export default function VisionMissionSection() {
  return (
    <div className={styles.vision}>
      {/* พาดหัววิสัยทัศน์ */}
      <h2 className={styles.visionHeader}>
        “มุ่งยกระดับร้านยาคุณภาพสู่มาตรฐานสากล ผ่านการพัฒนาเกณฑ์การรันรองสถานประกอบการ เสริมศักยภาพเภสัชกร และสร้างความเชื่อมั่นให้ประชาชน”
      </h2>

      {/* รายการการ์ดพันธกิจ */}
      <div className={styles.cardList}>
        {visionCards.map((card, index) => (
          <div key={index} className={styles.card}>
            {/* เนื้อหาภายในการ์ด (Icon, Title, Description) */}
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
            
            {/* รูปภาพประกอบการ์ด */}
            <div className={styles.cardImageWrapper}>
              <img 
                src={card.image} 
                alt={card.title} 
                className={styles.cardImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
