"use client";

import styles from "./IntroSection.module.css";
import { FaSearch } from "react-icons/fa";
import { LuListFilter, LuChevronDown } from "react-icons/lu";

export default function IntroSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/img.png"
            alt="Pharmacy Practice"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.overlayTitle}>วิทยาลัยคุ้มครองผู้บริโภคด้านยา</h3>
            <p className={styles.overlaySubtitle}>
              (The College of Pharmaceutical and Health Consumer Protection of Thailand : CPHCP)
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Text & Search */}
      <div className={styles.contentSection}>
        <h2 className={styles.headline}>
          “จากองค์ความรู้ สู่การสร้างผู้เชี่ยวชาญ <br />
          เพื่อการคุ้มครองผู้บริโภคด้านยาและสุขภาพของประเทศ”
        </h2>
        <p className={styles.description}>
          ราชวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย
          ก่อตั้งขึ้นเพื่อพัฒนาความเชี่ยวชาญ มาตรฐานวิชาชีพ
          และองค์ความรู้ด้านการคุ้มครองผู้บริโภคในระบบสาธารณสุขของประเทศ
        </p>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

          <div className={styles.inputGroup}>
            <div className={styles.dropdown}>
              <LuListFilter className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>
            
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="ค้นหาเลขที่ใบอนุญาต"
                className={styles.searchInput}
              />
            </div>

            <button className={styles.searchButton}>ค้นหา</button>
          </div>
        </div>
      </div>
    </section>
  );
}
