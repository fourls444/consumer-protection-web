import styles from "./Logo.module.css";

/**
 * ไอคอนข้อมูลพื้นฐาน (Icon สำหรับการ์ดอธิบายสัญลักษณ์)
 */
const InfoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a7536" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

/**
 * ส่วนแสดงรายละเอียดตราสัญลักษณ์ของวิทยาลัย (Logo Content)
 * อธิบายความหมายของส่วนต่างๆ ในโลโก้
 */
export default function LogoContent() {
    return (
        <section className={styles.section}>
            {/* แถวบน: แสดงโลโก้หลักและการ์ดอธิบาย 3 ชุดแรก */}
            <div className={styles.topRow}>
                {/* การ์ดโลโก้หลัก (Logo Card) */}
                <div className={styles.logoCard}>
                    <div className={styles.logoTop}>
                        <img src="/images/logo/logo.png" alt="CPPGx Logo" className={styles.logoImage} />
                        <span className={styles.quoteIcon}>&rdquo;</span>
                    </div>
                    <div>
                        <h3 className={styles.logoTitle}>
                            ตราสัญลักษณ์ของวิทยาลัยการคุ้มครองผู้บริโภคด้านยา<br/>และสุขภาพแห่งประเทศไทย
                        </h3>
                        <p className={styles.logoDesc}>
                            สื่อถึงบทบาทของวิทยาลัยในการพัฒนาความเชี่ยวชาญทางวิชาชีพ การส่งเสริมองค์ความรู้ และการคุ้มครองความปลอดภัยของผู้บริโภคด้านยาและผลิตภัณฑ์สุขภาพในประเทศไทย
                        </p>
                    </div>
                </div>

                {/* คอลัมน์ขวา: การ์ดอธิบายสัญลักษณ์ดาว, มือ, และวงรี */}
                <div className={styles.rightColumn}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><InfoIcon /></div>
                        <div>
                            <h4 className={styles.infoTitle}>รูปดาว</h4>
                            <p className={styles.infoDesc}>
                                สื่อถึงความเป็นเลิศทางวิชาการ มาตรฐานวิชาชีพ และการพัฒนาความรู้ด้านการคุ้มครองผู้บริโภค
                            </p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><InfoIcon /></div>
                        <div>
                            <h4 className={styles.infoTitle}>รูปมือหรือเปลวพลังด้านล่าง</h4>
                            <p className={styles.infoDesc}>
                                สื่อถึงการคุ้มครอง การสนับสนุน และการดูแลความปลอดภัยของผู้บริโภคด้านยาและสุขภาพ
                            </p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><InfoIcon /></div>
                        <div>
                            <h4 className={styles.infoTitle}>วงรีของตราสัญลักษณ์</h4>
                            <p className={styles.infoDesc}>
                                สื่อถึงความเป็นองค์กรวิชาการที่มีความเป็นสากล และความร่วมมือของเครือข่ายผู้เชี่ยวชาญทั้งในและต่างประเทศ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* แถวล่าง: การ์ดอธิบายสัญลักษณ์งูพันถ้วยยา และความหมายของสี */}
            <div className={styles.bottomRow}>
                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <div>
                        <h4 className={styles.infoTitle}>งูพันถ้วยยา (Bowl of Hygieia)</h4>
                        <p className={styles.infoDesc}>
                            สัญลักษณ์สากลของวิชาชีพเภสัชกรรม แสดงถึงองค์ความรู้ด้านยา การดูแลสุขภาพ และบทบาทของเภสัชกรในการใช้ยาอย่างปลอดภัย
                        </p>
                    </div>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><InfoIcon /></div>
                    <div>
                        <h4 className={styles.infoTitle}>สีเขียว</h4>
                        <p className={styles.infoDesc}>
                            สื่อถึงสุขภาพ ความปลอดภัย ความสมดุล และความยั่งยืนของระบบสาธารณสุข
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
