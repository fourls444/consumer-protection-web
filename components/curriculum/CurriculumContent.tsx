"use client";

import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineScale,
  HiOutlineEye,
  HiOutlineInformationCircle,
  HiOutlineDownload,
  HiOutlineBookOpen,
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineBookOpen as HiOutlineBookOpenAlt,
  HiOutlineHeart,
  HiOutlineSearch
} from "react-icons/hi";
import styles from "./Curriculum.module.css";

const curriculumObjectives = [
  {
    icon: <HiOutlineTrendingUp />,
    title: "พัฒนาศักยภาพเภสัชกร",
    description: "ให้มีความเชี่ยวชาญด้านการคุ้มครองผู้บริโภคด้านยาและสุขภาพ",
  },
  {
    icon: <HiOutlineBookOpen />,
    title: "ส่งเสริมองค์ความรู้",
    description: "ด้านกฎหมายและระบบกำกับดูแลผลิตภัณฑ์สุขภาพ",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "สร้างเครือข่าย",
    description: "ผู้เชี่ยวชาญในการคุ้มครองผู้บริโภคในระบบสาธารณสุข",
  },
  {
    icon: <HiOutlineBadgeCheck />,
    title: "ยกระดับมาตรฐาน",
    description: "วิชาชีพเภสัชกรรมในสาขาการคุ้มครองผู้บริโภค",
  },
];

const courseStructureRow1 = [
  {
    icon: <HiOutlineScale />,
    title: "ระบบกฎหมายและนโยบาย",
    description: "ศึกษากฎหมายยาและกฎระเบียบที่เกี่ยวข้องกับการคุ้มครองผู้บริโภค",
    image: "/images/curriculum/img1.jpg",
  },
  {
    icon: <HiOutlineEye />,
    title: "การกำกับดูแลผลิตภัณฑ์",
    description: "เรียนรู้กระบวนการกำกับดูแลและตรวจสอบคุณภาพผลิตภัณฑ์",
    image: "/images/curriculum/img2.png",
  },
  {
    icon: <HiOutlineInformationCircle />,
    title: "การเฝ้าระวังความปลอดภัย",
    description: "เรียนรู้กระบวนการกำกับดูแลและตรวจสอบคุณภาพผลิตภัณฑ์",
    image: "/images/curriculum/img3.png",
  },
];

const courseStructureRow2 = [
  {
    icon: <HiOutlineHeart />,
    title: "จริยธรรมทางวิชาชีพ",
    description: "หลักการคุ้มครองสิทธิผู้บริโภคและจรรยาบรรณวิชาชีพ",
    image: "/images/curriculum/img4.png",
  },
  {
    icon: <HiOutlineSearch />,
    title: "การวิจัยและพัฒนา",
    description: "วิธีการวิจัยเพื่อพัฒนางานคุ้มครองผู้บริโภคอย่างเป็นระบบ",
    image: "/images/curriculum/img5.png",
  },
];

export default function CurriculumContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.curriculum}>
        {/* Left Column - Large Card */}
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

        {/* Right Column - Image and Sub cards */}
        <div className={styles.rightCol}>
          <div className={styles.imageBox}>
            <img
              src="/images/curriculum/Image (การฝึกอบรม).png"
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

      {/* Objectives Section */}
      <div className={styles.objectives}>
        <div className={styles.objBadge}>
          <HiOutlineLightBulb /> เป้าหมายหลักสูตร
        </div>
        <h2 className={styles.objTitle}>วัตถุประสงค์ของหลักสูตร</h2>
        <p className={styles.objSubtitle}>เป้าหมายในการพัฒนาผู้เชี่ยวชาญด้านการคุ้มครองผู้บริโภค</p>

        <div className={styles.objGrid}>
          {curriculumObjectives.map((obj, i) => (
            <div key={i} className={styles.objCard}>
              <div className={styles.objIconBox}>
                {obj.icon}
              </div>
              <div className={styles.objInfo}>
                <h4 className={styles.objCardTitle}>{obj.title}</h4>
                <p className={styles.objCardDesc}>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structure Section */}
      <div className={styles.structSection}>
        <div className={styles.objBadge}>
          <HiOutlineBookOpenAlt /> เนื้อหาการเรียนรู้
        </div>
        <h2 className={styles.objTitle}>โครงสร้างหลักสูตร</h2>
        <p className={styles.objSubtitle}>ภาคทฤษฎีและภาคปฏิบัติ เน้นการพัฒนาทักษะเชิงวิชาชีพ</p>

        <div className={styles.structGrid}>
          {courseStructureRow1.map((item, i) => (
            <div key={i} className={styles.structCard}>
              <div className={styles.structCardHeader}>
                <div className={styles.structCardHeaderText}>
                  <div className={styles.structIconBox}>{item.icon}</div>
                  <h4 className={styles.structCardTitle}>{item.title}</h4>
                </div>
                <div className={styles.structCardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.structCardImage} />
                </div>
              </div>
              <div className={styles.structCardBottom}>
                <p className={styles.structCardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.structGrid} ${styles.structGridRow2}`}>
          {courseStructureRow2.map((item, i) => (
            <div key={i} className={styles.structCard} style={{ flex: 1 }}>
              <div className={styles.structCardHeader}>
                <div className={styles.structCardHeaderText}>
                  <div className={styles.structIconBox}>{item.icon}</div>
                  <h4 className={styles.structCardTitle}>{item.title}</h4>
                </div>
                <div className={styles.structCardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.structCardImage} />
                </div>
              </div>
              <div className={styles.structCardBottom}>
                <p className={styles.structCardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
