"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBookmark, HiChevronRight } from "react-icons/hi";
import styles from "./EventSection.module.css";

const eventList = [
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
    image: "/images/event/img.png",
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
    image: "/images/event/img (1).png",
  },
  {
    day: "13",
    month: "ก.พ.",
    title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาเภสัชกรรมคลินิก) รุ่นที่ 5",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    date: "วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569",
    attendees: "100 คน",
    tags: [
      { name: "บุคคลทั่วไป", active: false },
    ],
    category: "ราชวิทยาลัย",
    image: "/images/event/img (2).png",
  },
];

export default function EventSection() {
  return (
    <section className={styles.event}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          การประชุมวิทยาลัยคุ้มครองผู้บริโภคด้านยาและสุขภาพ
        </h2>
        <Link href="/events" className={styles.seeAll}>
          ดูทั้งหมด <HiChevronRight />
        </Link>
      </header>

      <div className={styles.list}>
        {eventList.map((event, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.date}>
              <span className={styles.day}>{event.day}</span>
              <span className={styles.month}>{event.month}</span>
            </div>

            <div className={styles.content}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <HiOutlineLocationMarker className={styles.icon} />
                  <span>{event.location}</span>
                </div>
                <div className={styles.detailRow}>
                  <HiOutlineCalendar className={styles.icon} />
                  <span>{event.date}</span>
                </div>
                <div className={styles.tagContainer}>
                  <div className={styles.detailRow}>
                    <HiOutlineUsers className={styles.icon} />
                    <span>ผู้เข้าร่วม :</span>
                  </div>
                  {event.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className={`${styles.tag} ${tag.active ? styles.tagActive : ""}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                  <span style={{ color: '#475569', marginLeft: '0.5rem' }}>
                    จำนวน : {event.attendees}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <HiOutlineBookmark className={styles.icon} />
                  <span>หมวดหมู่ : {event.category}</span>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <img 
                src={event.image} 
                alt={event.title} 
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
