import styles from "./Header.module.css";

/**
 * ส่วนหัวของเว็บไซต์ (Header)
 * แสดงแถบสีเขียวด้านบนสุดพร้อมโลโก้และชื่อวิทยาลัย
 */
export default function Header() {
  return (
    <header className={styles.header}>
      {/* ส่วนแถบด้านบน (Top Banner) */}
      <div className={styles.topBanner}>
        {/* พื้นที่แสดงโลโก้และชื่อองค์กร (Branding Area) */}
        <div className={styles.brandArea}>
          <img
            src="/images/icon.png"
            alt="Pharmacy Council Logo"
            className={styles.logo}
          />
          <div>
            <h1 className={styles.brandTitle}>
              วิทยาลัยการคุ้มครองผู้บริโภคด้านยา
            </h1>
            <p className={styles.brandSubtitle}>
              THE COLLEGE OF PHARMACEUTICAL AND HEALTH CONSUMER PROTECTION
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}