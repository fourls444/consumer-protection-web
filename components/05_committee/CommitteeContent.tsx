"use client";

import styles from "./Committee.module.css";

const chairman = {
  name: "ชื่อ นามสกุล",
  position: "ตำแหน่ง",
  description: "คำอธิบาย",
  image: "/images/committee/img (1).png",
};

const committeeMembers = [
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
  {
    name: "ชื่อ นามสกุล",
    position: "ตำแหน่ง",
    image: "/images/committee/img (1).png",
  },
];

export default function CommitteeContent() {
  return (
    <div className={styles.committeeWrapper}>
      {/* Hero Quote Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroQuote}>
            &ldquo;ผสานพลังแห่งความเชี่ยวชาญและวิสัยทัศน์
            <br />
            เพื่อยกระดับการคุ้มครองผู้บริโภคอย่างยั่งยืน&rdquo;
          </h2>
          <p className={styles.heroSubtext}>
            คณะกรรมการบริหารผู้ทรงคุณวุฒิ มุ่งมั่นขับเคลื่อนมาตรฐานวิชาชีพสู่ความเป็นเลิศในระดับสากล
          </p>
        </div>

        {/* Chairman Card - overlapping the hero */}
        <div className={styles.chairmanCardWrapper}>
          <div className={styles.chairmanCard}>
            <div className={styles.chairmanImageContainer}>
              <div className={styles.chairmanBgImage}></div>
              <img
                src={chairman.image}
                alt={chairman.name}
                className={styles.chairmanImage}
              />
            </div>
            <div className={styles.chairmanInfo}>
              <h3 className={styles.chairmanName}>{chairman.name}</h3>
              <p className={styles.chairmanPosition}>{chairman.position}</p>
              <p className={styles.chairmanDescription}>{chairman.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid Section */}
      <section className={styles.membersSection}>
        <div className={styles.membersGrid}>
          {committeeMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberImageContainer}>
                <div className={styles.memberBgImage}></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
