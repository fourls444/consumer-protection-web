"use client";

import { useState, useEffect } from "react";
import styles from "./RegistrationModal.module.css";

/**
 * RegistrationModal - คอมโพเนนต์บังคับลงทะเบียนก่อนเข้าชมเว็บไซต์
 * ทำหน้าที่เป็น Gatekeeper ตรวจสอบว่าผู้ใช้กรอกชื่อ-นามสกุลหรือยัง
 */
const RegistrationModal = () => {
  // States สำหรับจัดการการเปิดปิดและข้อมูลฟอร์ม
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [triedSubmit, setTriedSubmit] = useState(false); // เช็คว่าเคยกดปุ่มตกลงหรือยัง

  useEffect(() => {
    /**
     * เมื่อโหลดหน้าเว็บ:
     * 1. ลบข้อมูลเดิมออก (ถ้ามี) เพื่อบังคับให้ลงทะเบียนทุกครั้งที่ Refresh
     * 2. เปิด Modal และล็อกการ Scroll ของหน้าหลัก
     */
    localStorage.removeItem("user_registration_info");
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /**
   * ฟังก์ชันจัดการการส่งข้อมูลฟอร์ม
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);

    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (!firstName.trim() || !lastName.trim()) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วนก่อนเข้าใช้งาน");
      return;
    }

    // บันทึกข้อมูลลง localStorage (พร้อม Timestamp)
    const userInfo = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("user_registration_info", JSON.stringify(userInfo));
    setIsOpen(false); // ปิด Modal
    document.body.style.overflow = "auto"; // คืนค่าการ Scroll
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* หัวข้อและคำเตือน */}
        <h2 className={styles.title}>กรุณากรอก ชื่อ-นามสกุล<br />เพื่อเข้าสู่เว็บไซต์</h2>
        <p className={styles.subtitle}>
          ⚠️ เนื้อหาต่อไปนี้คือข้อมูลตัวอย่าง ห้ามนำไปเผยแพร่
        </p>
        <p className={styles.desktopWarning}>
          กรุณาเปิดบนคอมพิวเตอร์
        </p>

        {/* ฟอร์มลงทะเบียน */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* ช่องกรอกชื่อ */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="firstName">
              ชื่อ (First Name)
            </label>
            <input
              type="text"
              id="firstName"
              className={`${styles.input} ${triedSubmit && !firstName.trim() ? styles.inputError : ""}`}
              placeholder="กรอกชื่อของคุณ"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          {/* ช่องกรอกนามสกุล */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="lastName">
              นามสกุล (Last Name)
            </label>
            <input
              type="text"
              id="lastName"
              className={`${styles.input} ${triedSubmit && !lastName.trim() ? styles.inputError : ""}`}
              placeholder="กรอกนามสกุลของคุณ"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          {/* แสดงข้อความแจ้งเตือนความผิดพลาด */}
          {error && (
            <div className={styles.error}>
              ⚠️ {error}
            </div>
          )}

          {/* ปุ่มยืนยัน */}
          <button type="submit" className={styles.submitButton}>
            ตกลง
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
