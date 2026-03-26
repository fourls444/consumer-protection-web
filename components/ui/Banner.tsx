"use client";

import styles from "./Banner.module.css";

/**
 * ส่วนแบนเนอร์หลักของเว็บไซต์ (Hero Banner)
 * แสดงโลโก้วิทยาลัย ชื่อภาษาไทย และชื่อภาษาอังกฤษ
 */
export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        {/* โลโก้วิทยาลัย */}
        <img
          src="/images/icon.png"
          alt="Logo"
          className={styles.logo}
        />
        {/* กลุ่มข้อความชื่อวิทยาลัย */}
        <div className={styles.textGroup}>
          <h1 className={styles.title}>
            วิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ
          </h1>
          <p className={styles.subtitle}>
            College of Pharmacy and Health Consumer Protection
          </p>
        </div>
      </div>
    </section>
  );
}
