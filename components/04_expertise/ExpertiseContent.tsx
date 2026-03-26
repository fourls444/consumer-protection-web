"use client";

import styles from "./Expertise.module.css";

/**
 * ข้อมูลสาขาความเชี่ยวชาญเฉพาะทาง (Expertise Specializations)
 */
const expertiseData = [
  {
    id: 1,
    title: "สาขา 1",
    description: "การดูแลผู้ป่วยโรคกายในและโรคเรื้อรัง",
    image: "/images/expertise/img1.png",
  },
  {
    id: 2,
    title: "สาขา 2",
    description: "การใช้ยาต้านจุลชีพและควบคุมการติดเชื้อ",
    image: "/images/expertise/img2.jpg",
  },
  {
    id: 3,
    title: "สาขา 3",
    description: "การดูแลผู้ป่วยเด็กและทารก",
    image: "/images/expertise/img3.png",
  },
  {
    id: 4,
    title: "สาขา 4",
    description: "การดูแลผู้ป่วยมะเร็งด้วยเคมีบำบัด",
    image: "/images/expertise/img4.jpg",
  },
  {
    id: 5,
    title: "สาขา 5",
    description: "การดูแลผู้ป่วยไตวายและฟอกเลือด",
    image: "/images/expertise/img5.png",
  },
  {
    id: 6,
    title: "สาขา 6",
    description: "การดูแลผู้ป่วยโรคหัวใจและความดันโลหิตสูง",
    image: "/images/expertise/img6.png",
  },
];

/**
 * ส่วนแสดงเนื้อหาสาขาความเชี่ยวชาญ (Expertise Content)
 * แสดงในรูปแบบ Grid Card
 */
export default function ExpertiseContent() {
  return (
    <section className={styles.expertiseSection}>
      <h2 className={styles.title}>สาขาความเชี่ยวชาญ</h2>
      
      {/* ตารางแสดงสาขาความเชี่ยวชาญ */}
      <div className={styles.expertiseGrid}>
        {expertiseData.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* รูปภาพประกอบสาขา */}
            <div className={styles.imageBox}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
            {/* รายละเอียดภายในการ์ด */}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
