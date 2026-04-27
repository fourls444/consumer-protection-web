import Image from "next/image";
import styles from "./CoursesSection.module.css";
import Link from "next/link";
import {
  FaChevronRight,
  FaFileLines,
  FaHeartPulse,
  FaFlask,
  FaDownload,
  FaUser,
  FaPenToSquare,
  FaGraduationCap,
  FaGavel,
  FaEye,
  FaShieldHalved,
  FaBook,
  FaRibbon,
  FaFile
} from "react-icons/fa6";


export default function CoursesSection() {
    return (
        <section className={styles.coursesWrapper}>
            <div className={styles.sectionHeader}>
                {/* <h2 className={styles.mainTitle}></h2> */}
            </div>

            {/* ================= TOP SECTION ================= */}
            <div className={styles.topSection}>
                {/* Left side: Main Course Card */}
                <div className={styles.mainCourseCard}>
                    <div className={styles.mainCourseHeader}>
                        <div className={styles.mainCourseIcon}><FaGraduationCap size={24} /></div>
                        <div className={styles.mainCourseTitleBlock}>
                            <h3 className={styles.mainCourseTitle}>หลักสูตรฝึกอบรมเฉพาะทาง</h3>
                            <p className={styles.mainCourseSub}>โดยอยู่ภายใต้การกำกับและรับรองของสภาเภสัชกรรม</p>
                        </div>
                    </div>
                    <div className={styles.mainCourseBody}>
                        <p className={styles.mainCourseDesc}>
                            ราชวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย ด้านการคุ้มครองผู้บริโภคด้านยา หลักสูตรออกแบบเพื่อพัฒนาศักยภาพเภสัชกรให้มีความรู้ ความสามารถและทักษะ ในการดำเนินงานด้านการคุ้มครองผู้บริโภค
                        </p>
                        <div className={styles.tagsRow}>
                            <span className={styles.tag}><FaGavel size={14} /> กฎหมายยา</span>
                            <span className={styles.tag}><FaEye size={14} /> กำกับดูแล</span>
                            <span className={styles.tag}><FaShieldHalved size={14} /> เฝ้าระวัง</span>
                        </div>
                        <button className={styles.downloadBtnLarge}>
                            <div className={styles.btnIconCircle}><FaDownload size={14} /></div>
                            ดาวน์โหลดรายละเอียดหลักสูตร
                        </button>
                    </div>
                </div>

                {/* Right side: Top Image & Small Cards */}
                <div className={styles.rightSideContainer}>
                    <div className={styles.topImageContainer}>
                        <Image src="/images/courses/img.png" alt="Course featured" width={480.5} height={256} className={styles.topFeaturedImage} priority />
                    </div>
                    <div className={styles.twoSmallCards}>
                        <div className={styles.smallCardGreen}>
                            <div className={styles.smCardIcon}><FaBook size={24} /></div>
                            <div className={styles.smCardText}>
                                <h4>การเรียนรู้</h4>
                                <p>ภาคทฤษฎีและปฏิบัติ<br/>เน้นทักษะวิชาชีพ</p>
                            </div>
                        </div>
                        <div className={styles.smallCardWhite}>
                            <div className={styles.smCardIconWhite}><FaRibbon size={24} /></div>
                            <div className={styles.smCardTextWhite}>
                                <h4>การรับรอง</h4>
                                <p>ประกาศนียบัตรมาตรฐานวิชาชีพ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MIDDLE SECTION: 3 CARDS ================= */}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะสั้น</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFileLines size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaHeartPulse size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFlask size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

            </div>

            {/*หลักสูตรกลาง*/}
            {/* HEADING */}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะกลาง</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFileLines size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaHeartPulse size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFlask size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

            </div>
            


            {/*หลักระยะยาว*/}
            <div className={styles.rowHeader}>
                <h2 className={styles.rowTitle}>หลักสูตรระยะยาว</h2>

                <button className={styles.viewAllBtn}>ดูทั้งหมด <FaChevronRight style={{ fontSize: '10px', marginLeft: '4px' }} /></button>

            </div>

            {/* 3 COURSE CARDS */}
            <div className={styles.cardsRow}>

                {/* CARD 1 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFileLines size={24} color="#fff" /></div>
                            <div>
                                <h3 className={styles.cardTitle}>หลักสูตรระยะยาว</h3>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 2 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaHeartPulse size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

                {/* CARD 3 */}
                <div className={styles.courseCard}>
                    <Link href="/consumer-protection/course/1" className={styles.cardContentLink} data-tooltip="คลิกเพื่อดูรายละเอียด">
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}><FaFlask size={24} color="#fff" /></div>
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
                    </Link>

                    <button className={styles.downloadBtnFull}>
                        <FaDownload size={16} /> ดาวน์โหลด
                    </button>
                </div>

            </div>

           

           
        </section>
    );
}
