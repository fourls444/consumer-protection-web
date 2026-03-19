"use client";

import Link from "next/link";
import {
    FaGlobe,
    FaFacebookF,
    FaTiktok,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { SiLine } from "react-icons/si";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Left Column: Contact info */}
                <div className={styles.contactSection}>
                    <h1 className={styles.mainTitle}>ติดต่อสภาเภสัชกรรม</h1>
                    <div className={styles.contactInfo}>
                        <p className={styles.address}>
                            สำนักงานเลขาธิการสภาเภสัชกรรม อาคารมหิตลาธิเบศร ชั้น 8 กระทรวงสาธารณสุข เลขที่ 88/19 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ อำเภอเมือง จังหวัดนนทบุรี 11000
                        </p>

                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>โทรศัพท์ : </span>
                            <span>0 2591 9992 (คู่สายอัตโนมัติ)</span>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>โทรสาร : </span>
                            <span>0 2591 9996</span>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactLabel}>Email : </span>
                            <span>pharthai@pharmacycouncil.org</span>
                        </div>

                        <div className={styles.socialChannels}>
                            <p className={styles.sectionTitle}>ช่องทางการติดต่อสภาเภสัชกรรม</p>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIconCircle} title="Website"><FaGlobe /></div>
                                <div className={styles.socialIconCircle} title="Facebook"><FaFacebookF /></div>
                                <div className={styles.socialIconCircle} title="Line"><SiLine /></div>
                                <div className={styles.socialIconCircle} title="Email"><FaEnvelope /></div>
                                <div className={styles.socialIconCircle} title="Tiktok"><FaTiktok /></div>
                                <div className={styles.socialIconCircle} title="Youtube"><FaYoutube /></div>
                                <div className={styles.socialIconCircle} title="Location"><FaMapMarkerAlt /></div>
                                <div className={styles.socialIconCircle} title="Phone"><FaPhoneAlt /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content Wrapper */}
                <div className={styles.rightContent}>
                    {/* Statistics Section - Top Right */}
                    <div className={styles.statsContainer}>
                        <span>สถิติการเข้าชม </span>
                        <span className={styles.statValue}>76,065,271</span>
                        <span className={styles.statDivider}>|</span>
                        <span>ออนไลน์ </span>
                        <span className={styles.statValue}>1,402</span>
                    </div>

                    {/* Extensions Block */}
                    <div className={styles.extensionSection}>
                        <h3 className={styles.sectionTitle}>หมายเลขภายในหน่วยงานต่าง ๆ</h3>
                        <div className={styles.extensionGrid}>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 1</span>
                                <span>ฝ่ายทะเบียนสภาเภสัชกรรม</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 5</span>
                                <span>ศูนย์อำนวยการเลือกตั้งสมาชิกสภาเภสัชกรรม</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 2</span>
                                <span>ฝ่ายจัดการประชุมและสัมมนาสภาเภสัชกรรม</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 6</span>
                                <span>สำนักงานรับรองระบบเภสัชกรรม</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 3</span>
                                <span>ฝ่ายกฎหมายสภาเภสัชกรรม</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 7</span>
                                <span>วิทยาลัยการคุ้มครองผู้บริโภคด้านยา</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 4</span>
                                <span>ศูนย์การศึกษาต่อเนื่องทางเภสัชศาสตร์ (CCPE)</span>
                            </div>
                            <div className={styles.extensionItem}>
                                <span className={styles.extKey}>กด 0</span>
                                <span>ประชาสัมพันธ์</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className={styles.servicesBlock}>
                        <h3 className={styles.sectionTitle}>บริการส่วนอื่น</h3>
                        <div className={styles.serviceLinks}>
                            <Link href="#" className={styles.serviceLinkItem}>คำถามที่พบบ่อย</Link>
                            <Link href="#" className={styles.serviceLinkItem}>คู่มือการใช้งาน</Link>
                            <Link href="#" className={styles.serviceLinkItem}>ดาวน์โหลดแบบฟอร์ม</Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}