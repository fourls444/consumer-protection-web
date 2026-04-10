import styles from "./BannerSection.module.css";

export default function BannerSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img src="/images/favicon.png" alt="Royal College Logo" className={styles.logo} />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>วิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ</h1>
                    <h2 className={styles.titleEn}>College of Pharmacy and Health Consumer Protection</h2>
                </div>
            </div>
        </section>
    );
}
