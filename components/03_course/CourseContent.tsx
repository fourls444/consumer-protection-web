"use client";

import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineScale,
  HiOutlineEye,
  HiOutlineInformationCircle,
  HiOutlineDownload,
  HiOutlineBadgeCheck,
  HiOutlineBookOpen as HiOutlineBookOpenAlt
} from "react-icons/hi";
import styles from "./Course.module.css";
import {
  FaChevronRight
} from "react-icons/fa6";

/**
 * ไอคอนหลอดทดลอง (Flask Icon) สำหรับวิชาวิทยาศาสตร์/วิจัย
 */
const FlaskIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M10 3v7.4a2 2 0 0 1-.6 1.4L4 17.2a2 2 0 0 0-.6 1.4V20a2 2 0 0 0 2 2h13.2a2 2 0 0 0 2-2v-1.4a2 2 0 0 0-.6-1.4L14.6 11.8a2 2 0 0 1-.6-1.4V3" />
    </svg>
);


/**
 * ไอคอนใบประกาศนียบัตร (Certificate Icon)
 */
const CertIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

/**
 * ไอคอนคลื่นไฟฟ้าหัวใจ (Medical/EGC Icon) สำหรับงานคลินิก
 */
const MedicalIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

/**
 * ไอคอนดาวน์โหลด (Download Icon)
 */
const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);


/**
 * ส่วนเนื้อหาหลักสูตรการศึกษาและฝึกอบรม (Course Content)
 */
export default function CourseContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ส่วนแนะนำหลักสูตรฝึกอบรมเฉพาะทาง (Featured Section) */}
      <div className={styles.course}>
        {/* คอลัมน์ซ้าย: การ์ดข้อความหลัก (Main Info Card) */}
        <div className={styles.leftCol}>
          <div className={styles.mainCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <HiOutlineAcademicCap />
              </div>
              <div className={styles.headerInfo}>
                <h2 className={styles.headerTitle}>หลักสูตรฝึกอบรมเฉพาะทาง</h2>
                <p className={styles.headerSub}>โดยอยู่ภายใต้การกำกับและรับรองของสภาเภสัชกรรม</p>
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.mainDesc}>
                ราชวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย ด้านการคุ้มครองผู้บริโภคด้านยา
                หลักสูตรออกแบบเพื่อพัฒนาศักยภาพเภสัชกรให้มีความรู้ ความสามารถและทักษะ
                ในการดำเนินงานด้านการคุ้มครองผู้บริโภค
              </p>

              <div className={styles.tags}>
                <div className={styles.tag}><HiOutlineScale /> กฎหมายยา</div>
                <div className={styles.tag}><HiOutlineEye /> กำกับดูแล</div>
                <div className={styles.tag}><HiOutlineInformationCircle /> เฝ้าระวัง</div>
              </div>

              <button className={styles.downloadBtn}>
                <div className={styles.downloadIcon}>
                  <HiOutlineDownload />
                </div>
                ดาวน์โหลดรายละเอียดหลักสูตร
              </button>
            </div>
          </div>
        </div>

        {/* คอลัมน์ขวา: รูปภาพประกอบและการ์ดย่อย (Image & Sub-cards) */}
        <div className={styles.rightCol}>
          <div className={styles.imageBox}>
            <img
              src="/images/course/Image (การฝึกอบรม).png"
              alt="Training session"
              className={styles.image}
            />
          </div>

          <div className={styles.subGrid}>
            <div className={`${styles.subCard} ${styles.green}`}>
              <HiOutlineBookOpenAlt className={styles.subIcon} />
              <h3 className={styles.subTitle}>การเรียนรู้</h3>
              <p className={styles.subDesc}>
                ภาคทฤษฎีและปฏิบัติ เน้นทักษะวิชาชีพ
              </p>
            </div>
            <div className={`${styles.subCard} ${styles.white}`}>
              <HiOutlineBadgeCheck className={styles.subIcon} style={{ color: '#848b4d' }} />
              <h3 className={styles.subTitle}>การรับรอง</h3>
              <p className={styles.subDesc}>
                ประกาศนียบัตรมาตรฐานวิชาชีพ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* กลุ่มหลักสูตรระยะสั้น (Short-term Courses) */}

      <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะสั้น</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>


            {/*ระยะกลาง*/}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะกลาง</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, บุคลากรสหวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>

            {/*ระยะยาว*/}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะยาว</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><CertIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรระยะสั้น</h3>
                            <p className={styles.cardSubTitle}>(CERTIFICATE IN PHARMACOGENOMICS AND PRECISION MEDICINE)</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            เน้นการปฏิบัติจริงในเวชปฏิบัติ สำหรับเภสัชกรที่ต้องการต่อยอดทักษะการให้คำปรึกษาและแปลผลตรวจ
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>16 หน่วยกิต (ทฤษฎี 2 / ปฏิบัติ 14)</li>
                                <li>ฝึกปฏิบัติจริงในสถานพยาบาลจริง</li>
                                <li>ระยะเวลา: 4 เดือน (เต็มเวลา)</li>
                                <li>คุณสมบัติ: เภสัชกรที่มีใบประกอบวิชาชีพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><MedicalIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรแสดง<br />ความรู้ความชำนาญ</h3>
                            <p className={styles.cardSubTitle}>PHARMACY RESIDENCY TRAINING</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>หัวข้อสำคัญ</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: 134 หน่วยกิต</li>
                                <li>ฝึกระดับเข้มข้นในห้องปฏิบัติการและหอผู้ป่วยเฉพาะทาง</li>
                                <li>คุณสมบัติ: เภสัชกรที่ผ่านเกณฑ์การคัดเลือก ตามมาตรฐานราชวิทยาลัยเภสัชกรรมฯ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <div className={styles.cardHeader1}>
                        <div className={styles.cardIcon}><FlaskIcon /></div>
                        <div>
                            <h3 className={styles.cardTitle}>หลักสูตรอบรม<br />เชิงปฏิบัติการ</h3>
                            <p className={styles.cardSubTitle}>PHARMACOGENOMICS FOR ALLIED HEALTH</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p className={styles.cardDesc}>
                            พื้นฐานที่ต้องรู้เพื่อก้าวทันนวัตกรรม สำหรับเภสัชกรทั่วไปและบุคลากรการแพทย์
                        </p>

                        <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>รายละเอียด</h4>
                            <ul className={styles.detailList}>
                                <li>โครงสร้าง: อบรม 16 ชั่วโมง (2 วัน)</li>
                                <li>ไฮไลท์: บูพื้นฐานความเข้าใจในเภสัชพันธุกรรม, การแพ้ยา, และจริยธรรมการแพทย์เฉพาะบุคคล</li>
                                <li>คุณสมบัติ: เภสัชกร, ทบุมลากรสายสุขภาพ</li>
                            </ul>
                        </div>
                    </div>

                    <button className={styles.downloadBtn1}>
                        <DownloadIcon /> ดาวน์โหลด
                    </button>
                </div>

            </div>
      
    </div>
  );
}
