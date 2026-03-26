"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBookmark, HiChevronRight } from "react-icons/hi";
import styles from "./MeetingSection.module.css";

/**
 * ข้อมูลรายการการประชุม
 */
const meetingList = [
  {
    day: "2",
    month: "พ.ค.",
    title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้น การจัดการร้านยาคุณภาพ รุ่นที่ 7",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    tags: [
      { name: "บุคคลทั่วไป", active: false },
      { name: "เภสัชกร", active: true },
    ],
    category: "รายวิทยาลัย",
    image: "/images/meeting/img.png",
  },
  {
    day: "1",
    month: "มี.ค.",
    title: "CPHCP Innovation Forum 2026: Empowering Pharmacists for a Healthier Tomorrow",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    tags: [
      { name: "เภสัชกร", active: true },
    ],
    category: "ราชวิทยาลัย",
    image: "/images/meeting/img (1).png",
  },
  {
    day: "13",
    month: "ก.พ.",
    title: "การฝึกอบรม ประกาศนียาวุโสวิชาชีพเภสัชกรรม (สาขาเภสัชกรรมคลินิก) รุ่นที่ 5",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    tags: [
      { name: "บุคคลทั่วไป", active: false },
    ],
    category: "ราชวิทยาลัย",
    image: "/images/meeting/img (2).png",
  },
];

/**
 * ส่วนแสดงรายการการประชุม (Meeting Section)
 */
export default function MeetingSection() {
  return (
    <section className={styles.meeting}>
      {/* ส่วนหัวข้อการประชุมและลิงก์ดูทั้งหมด */}
      <header className={styles.header}>
        <h2 className={styles.title}>
          การประชุมวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ
        </h2>
        <Link href="/meetings" className={styles.seeAll}>
          ดูทั้งหมด <HiChevronRight />
        </Link>
      </header>

      {/* รายการการประชุม */}
      <div className={styles.list}>
        {meetingList.map((meeting, index) => (
          <div key={index} className={styles.item}>
            {/* กล่องแสดงวันที่ (Day & Month) */}
            <div className={styles.date}>
              <span className={styles.day}>{meeting.day}</span>
              <span className={styles.month}>{meeting.month}</span>
            </div>

            {/* เนื้อหารายละเอียดการประชุม */}
            <div className={styles.content}>
              <h3 className={styles.meetingTitle}>{meeting.title}</h3>
              <div className={styles.details}>
                {/* สถานที่ */}
                <div className={styles.detailRow}>
                  <HiOutlineLocationMarker className={styles.icon} />
                  <span>{meeting.location}</span>
                </div>
                {/* วันที่จัดงาน */}
                <div className={styles.detailRow}>
                  <HiOutlineCalendar className={styles.icon} />
                  <span>{meeting.date}</span>
                </div>
                {/* กลุ่มเป้าหมายและจำนวน */}
                <div className={styles.tagContainer}>
                  <div className={styles.detailRow}>
                    <HiOutlineUsers className={styles.icon} />
                    <span>ผู้เข้าร่วม :</span>
                  </div>
                  {meeting.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className={`${styles.tag} ${tag.active ? styles.tagActive : ""}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                  <span style={{ color: '#475569', marginLeft: '0.5rem' }}>
                    จำนวน : {meeting.attendees}
                  </span>
                </div>
                {/* หมวดหมู่ */}
                <div className={styles.detailRow}>
                  <HiOutlineBookmark className={styles.icon} />
                  <span>หมวดหมู่ : {meeting.category}</span>
                </div>
              </div>
            </div>

            {/* รูปภาพประกอบการประชุม */}
            <div className={styles.imageWrapper}>
              <img 
                src={meeting.image} 
                alt={meeting.title} 
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
