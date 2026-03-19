import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top Banner (Green) */}
      <div className={styles.topBanner}>
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