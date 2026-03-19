"use client";

import { HiOutlineUserCircle, HiOutlineChatAlt2 } from "react-icons/hi";
import styles from "./Logo.module.css";

const logoDetails = [
  {
    icon: <HiOutlineUserCircle />,
    title: "รูปดาว",
    description: "สื่อถึงความเป็นเลิศทางวิชาการ มาตรฐานวิชาชีพ และการพัฒนาความรู้ด้านการคุ้มครองผู้บริโภค",
  },
  {
    icon: <HiOutlineUserCircle />,
    title: "รูปมือหรือเปลวพลังด้านล่าง",
    description: "สื่อถึงการคุ้มครอง การสนับสนุน และการดูแลความปลอดภัยของผู้บริโภคด้านยาและสุขภาพ",
  },
  {
    icon: <HiOutlineUserCircle />,
    title: "วงรีของตราสัญลักษณ์",
    description: "สื่อถึงความเป็นองค์กรวิชาการที่มีความเป็นสากล และความร่วมมือของเครือข่ายผู้เชี่ยวชาญทั้งในและต่างประเทศ",
  },
];

const bottomDetails = [
  {
    icon: <HiOutlineUserCircle />,
    title: "งูพันถ้วยยา (Bowl of Hygieia)",
    description: "สัญลักษณ์สากลของวิชาชีพเภสัชกรรม แสดงถึงองค์ความรู้ด้านยา การดูแลสุขภาพ และบทบาทของเภสัชกรในการใช้ยาอย่างปลอดภัย",
  },
  {
    icon: <HiOutlineUserCircle />,
    title: "สีเขียว",
    description: "สื่อถึงสุขภาพ ความปลอดภัย ความสมดุล และความยั่งยืนของระบบสาธารณสุข",
  },
];

export default function LogoContent() {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.topGrid}>
        {/* Main Logo Card */}
        <div className={styles.mainLogoCard}>
          <div className={styles.quoteIcon}>
            <HiOutlineChatAlt2 />
          </div>
          <div className={styles.logoImageContainer}>
            <img 
              src="/images/logo/logo.png" 
              alt="วิทยาลัยการคุ้มครองผู้บริโภคด้านยา logo" 
              className={styles.logoImage} 
            />
          </div>
          <div className={styles.logoInfo}>
            <h2 className={styles.mainLogoTitle}>
              ตราสัญลักษณ์ของวิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพแห่งประเทศไทย
            </h2>
            <p className={styles.mainLogoDesc}>
              สื่อถึงบทบาทของวิทยาลัยในการพัฒนาความเชี่ยวชาญทางวิชาชีพ การส่งเสริมองค์ความรู้ และการคุ้มครองความปลอดภัยของผู้บริโภคด้านยาและผลิตภัณฑ์สุขภาพในประเทศไทย
            </p>
          </div>
        </div>

        {/* Side Grid of 3 Cards */}
        <div className={styles.sideGrid}>
          {logoDetails.map((item, index) => (
            <div key={index} className={styles.sideCard}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid of 2 Cards */}
      <div className={styles.bottomGrid}>
        {bottomDetails.map((item, index) => (
          <div key={index} className={styles.bottomCard}>
            <div className={styles.cardIcon}>{item.icon}</div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
