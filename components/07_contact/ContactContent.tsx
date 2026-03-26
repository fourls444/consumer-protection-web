"use client";

import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import styles from "./Contact.module.css";

/**
 * ส่วนแสดงข้อมูลการติดต่อ (Contact Content)
 */
export default function ContactContent() {
  return (
    <div className={styles.contactWrapper}>
      {/* ตารางแสดงข้อมูล แบ่งเป็น 2 คอลัมน์ (คำอธิบาย : ข้อมูลติดต่อ) */}
      <div className={styles.contactGrid}>
        {/* คอลัมน์ซ้าย: รูปภาพและคำอธิบายเบื้องต้น */}
        <div className={styles.leftCol}>
          <div className={styles.imageBox}>
            <img 
              src="/images/contact/Rectangle 679.png" 
              alt="กิจกรรมของวิทยาลัย" 
              className={styles.contactImage} 
            />
          </div>
          <div className={styles.descSection}>
            <h2 className={styles.descTitle}>
              เกี่ยวกับวิทยาลัย คุ้มครองผู้บริโภคด้านยาและสุขภาพ
            </h2>
            <p className={styles.descText}>
              วิทยาลัยเภสัชบำบัด ตั้งอยู่ภายในอาคารสัญลักษณ์แห่งวิชาชีพ
              สาธารณสุขไทย เราพร้อมอำนวยความสะดวกในด้าน
              การสอบวุฒิบัตร การรับรองหลักสูตร
              และการประสานงานกับสถาบันฝึกอบรมทั่วประเทศ
              เพื่อขับเคลื่อนมาตรฐานการบริบาลทางเภสัชกรรมให้ก้าวไกล
            </p>
          </div>
        </div>

        {/* คอลัมน์ขวา: การ์ดข้อมูติดต่อสีเขียว */}
        <div className={styles.rightCol}>
          <div className={styles.contactCard}>
            <h2 className={styles.cardHeader}>วิทยาลัยคุ้มครองผู้บริโภคด้านยา</h2>
            
            {/* รายการข้อมูลติดต่อ */}
            <div className={styles.infoList}>
              {/* ที่อยู่ */}
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <HiOutlineLocationMarker />
                </div>
                <div className={styles.infoText}>
                  <strong className={styles.infoLabel}>ที่อยู่</strong>
                  <p>
                    ชั้น 8 อาคารมหิตลาธิเบศร กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4
                    ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                  </p>
                </div>
              </div>

              {/* เวลาทำการ */}
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <HiOutlineClock />
                </div>
                <div className={styles.infoText}>
                  <strong className={styles.infoLabel}>เวลาทำการ</strong>
                  <p>วันจันทร์ - ศุกร์ | 08.30 - 16.30 น. <br /> (ยกเว้นวันหยุดนักขัตฤกษ์)</p>
                </div>
              </div>

              {/* เบอร์โทรศัพท์ */}
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <HiOutlinePhone />
                </div>
                <div className={styles.infoText}>
                  <strong className={styles.infoLabel}>โทรศัพท์</strong>
                  <p>02-591-9992 ต่อ 7</p>
                </div>
              </div>

              {/* อีเมล */}
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <HiOutlineMail />
                </div>
                <div className={styles.infoText}>
                  <strong className={styles.infoLabel}>อีเมล</strong>
                  <p>cphcp.th@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
