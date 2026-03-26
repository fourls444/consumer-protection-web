"use client";

import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight, HiOutlineChevronRight } from "react-icons/hi";
import styles from "./NewsSection.module.css";

/**
 * รายการข่าวสารตัวอย่าง
 */
const newsList = [
  {
    category: "ข่าวประชาสัมพันธ์",
    title: "วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ จัดโครงการอบรมพัฒนาศักยภาพเภสัชกร",
    description: "หลักสูตรนี้เป็นส่วนหนึ่งของโครงการพัฒนาศักยภาพเภสัชกร จัดโดยวิทาลัยคุ้มครองผู้บริโภคและสุขภาพ...",
    image: "/images/news/img (1).png",
    active: true,
  },
  {
    category: "ข่าวรับสมัครเภสัชกร",
    title: "วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ ประกาศรับสมัครเภสัชกรเข้าร่วมโครงการพัฒนาศักยภาพ เรื่อง การจัดการยาในระบบบริการสุขภาพ ปี...",
    description: "เปิดรับสมัครเภสัชกร เข้าร่วมอบรมหลักสูตรระยะสั้น กว่า 15 สัปดาห์ ออกแบบมาเพื่อเพิ่มพูนทักษะและความรู้ด้านการจัดการยาในโรงพยาบาล",
    image: "/images/news/img (2).png",
    active: false,
  },
  {
    category: "ข่าวประชาสัมพันธ์",
    title: "วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ จัดประชุมวิชาการเรื่อง บทบาทเภสัชกรในการคุ้มครองผู้บริโภคด้านยาและเอกลักษณ์สุขภาพ",
    description: "หลักสูตรการฝึกอบรมระยะสั้น ที่มีระยะเวลาการฝึกอบรม 20 สัปดาห์ขึ้นไป",
    image: "/images/news/img (3).png",
    active: true,
  },
];

/**
 * ส่วนแสดงข่าวสารและกิจกรรมเด่น (News Section)
 */
export default function NewsSection() {
  return (
    <section className={styles.news}>
      {/* ส่วนตกแต่งพื้นหลังลายคลื่น (Decorative Wavy Background) */}
      <div className={styles.bgDecoration}>
        <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eef0e4" />
              <stop offset="100%" stopColor="#e0e3cc" />
            </linearGradient>
            <linearGradient id="wave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e8d1" />
              <stop offset="100%" stopColor="#d3d7b4" />
            </linearGradient>
            <linearGradient id="wave3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8dbae" />
              <stop offset="100%" stopColor="#c5c99b" />
            </linearGradient>
          </defs>
          <path d="M1440,100 C1000,400 400,600 0,650 L0,800 L1440,800 Z" fill="url(#wave1)" />
          <path d="M1440,350 C900,550 400,700 0,730 L0,800 L1440,800 Z" fill="url(#wave2)" />
          <path d="M1440,600 C1000,700 500,780 0,780 L0,800 L1440,800 Z" fill="url(#wave3)" />
        </svg>
      </div>

      <div className={styles.container}>
        {/* ส่วนข่าวเด่น (Featured News Slider) */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>เรื่องเด่นวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ</h2>
          <div className={styles.controls}>
            <button className={styles.arrowBtn} aria-label="Previous News"><HiChevronLeft /></button>
            <button className={styles.arrowBtn} aria-label="Next News"><HiChevronRight /></button>
          </div>
        </div>

        {/* การ์ดข่าวเด่นหน้าแรก */}
        <div className={styles.featured}>
          <div className={styles.cardImageWrapper} style={{ height: 'auto', gridColumn: '1' }}>
            <img 
              src="/images/news/img.png" 
              alt="Featured News" 
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.category}>ข่าวประชาสัมพันธ์</span>
            <h3 className={styles.featuredTitle}>
              วิทยาลัยคุ้มครองผู้บริโภคและสุขภาพ จัดอบรมเชิงปฏิบัติการ เรื่อง การใช้ยาปฏิชีวนะอย่างสมเหตุผล
            </h3>
            <p className={styles.featuredDesc}>
              หลักสูตรนี้เป็นส่วนหนึ่งของการอบรมเชิงปฏิบัติการ โดยเน้นการให้ความรู้และทักษะในการใช้ยาอย่างถูกต้องตามแนวทางการรักษา
            </p>
            <button className={styles.readMore}>อ่านเพิ่มเติม</button>
          </div>
        </div>
        
        {/* จุดนำทางสำหรับสไลด์ข่าว (Pagination Dots) */}
        <div className={styles.pagination}>
            <span className={styles.activeDot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>

        {/* ส่วนรายการข่าวสารทั่วไป (Latest News Grid) */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>ข่าวสารวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ</h2>
          <Link href="/news" className={styles.seeAll}>
            ดูทั้งหมด <HiOutlineChevronRight />
          </Link>
        </div>

        {/* ตารางรายการข่าว */}
        <div className={styles.grid}>
          {newsList.map((news, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className={styles.cardImage}
                />
                <span className={`${styles.category} ${styles.cardCategory}`}>
                  {news.category}
                </span>
              </div>
              <div className={styles.cardInfo}>
                <h4 className={styles.cardTitle}>{news.title}</h4>
                <p className={styles.cardDesc}>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
