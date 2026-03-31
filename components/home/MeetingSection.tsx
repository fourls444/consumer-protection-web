"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBookmark, HiChevronRight } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import styles from "./MeetingSection.module.css";

// รายการข้อมูลวาระการประชุม (จำลอง)
const meetingList = [
  {
    day: "2",
    month: "พ.ค.",
    title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้น การจัดการร้านยาคุณภาพ รุ่นที่ 7",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    cpe: "12.0",
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
    cpe: "8.5",
    tags: [
      { name: "เภสัชกร", active: true },
    ],
    category: "ราชวิทยาลัย",
    image: "/images/meeting/img (1).png",
  },
  {
    day: "13",
    month: "ก.พ.",
    title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาเภสัชกรรมคลินิก) รุ่นที่ 5",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    cpe: "10.0",
    tags: [
      { name: "บุคคลทั่วไป", active: false },
    ],
    category: "ราชวิทยาลัย",
    image: "/images/meeting/img (2).png",
  },
];

/**
 * ส่วนแสดงรายการวาระการประชุม (Meetings & Events)
 */
export default function MeetingSection() {
  return (
    <section className={styles.meeting}>
      {/* ส่วนหัวของ Section */}
      <header className={styles.header}>
        <h2 className={styles.title}>
          การประชุมวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ
        </h2>
        <Link href="/meetings" className={styles.seeAll}>
          ดูทั้งหมด <HiChevronRight />
        </Link>
      </header>

      {/* รายการวาระการประชุม */}
      <div className={styles.list}>
        {meetingList.map((meeting, index) => (
          <div key={index} className={styles.item}>
            {/* ส่วนแสดงวันที่ (ฝั่งซ้าย) */}
            <div className={styles.date}>
              <span className={styles.day}>{meeting.day}</span>
              <span className={styles.month}>{meeting.month}</span>
            </div>

            {/* ส่วนแสดงรายละเอียดเนื้อหา (กลาง) */}
            <div className={styles.content}>
              <div className={styles.titleWrapper}>
                <h3 className={styles.meetingTitle}>{meeting.title}</h3>
                {/* ป้ายกำกับคะแนน CPE (ถ้ามี) */}
                {meeting.cpe && (
                  <div className={styles.cpeBadge}>
                    <FaGraduationCap className={styles.cpeIcon} />
                    <span>CPE {meeting.cpe} หน่วยกิต</span>
                  </div>
                )}
              </div>

              {/* รายละเอียดเพิ่มเติม: สถานที่, วันที่, แท็กกลุ่มเป้าหมาย */}
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <HiOutlineLocationMarker className={styles.icon} />
                  <span>{meeting.location}</span>
                </div>
                <div className={styles.detailRow}>
                  <HiOutlineCalendar className={styles.icon} />
                  <span>{meeting.date}</span>
                </div>
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
                <div className={styles.detailRow}>
                  <HiOutlineBookmark className={styles.icon} />
                  <span>หมวดหมู่ : {meeting.category}</span>
                </div>
              </div>
            </div>

            {/* ส่วนแสดงรูปภาพประกอบ (ขวา) */}
            <div className={styles.imageWrapper}>
              <Image
                src={meeting.image}
                alt={meeting.title}
                width={340}
                height={200}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

