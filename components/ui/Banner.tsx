"use client";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <img
          src="/images/icon.png"
          alt="Logo"
          className={styles.logo}
        />
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
