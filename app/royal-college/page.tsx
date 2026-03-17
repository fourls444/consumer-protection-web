"use client";
import CommitteeSection from "../committee/CommitteeSection";
import EmblemSection from "../emblem/EmblemSection";
import LocationSection from "../location/LocationSection";
import { useState } from "react";
import styles from "./royalcollege.module.css";
export default function RoyalCollegePage() {
    const [activeTab, setActiveTab] = useState(0);

    const menuItems = [
        "ประวัติความเป็นมา",
        "คณะกรรมการบริหาร",
        "ตราสัญลักษณ์",
        "สถานที่ตั้งราชวิทยาลัย"
    ];

    return (
        <div>

            <section className={styles.hero}></section>

            {/* SECTION */}
            <section className={styles.aboutSection}>

                {/* LEFT IMAGE */}
                <div className={styles.imageBox}>
                    <img src="/images/home/Container.png" alt="group" />


                </div>

                {/* RIGHT CONTENT */}
                <div className={styles.content}>
                    <p>
                        ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย ก่อตั้งขึ้นตามปณิธาน
                        ที่มุ่งมั่นของสภาเภสัชกรรมเพื่อเป็นองค์กรหลักในการกำกับดูแล
                        มาตรฐานทางวิชาการ และพัฒนาทักษะวิชาชีพเชิงลึก โดยการรวมกลุ่มของวิทยาลัยชำนาญการทั้ง 7 สาขา มุ่งเน้น
                        การสร้างผู้เชี่ยวชาญที่มีความรู้ความสามารถเป็นที่ยอมรับ
                        ในระดับสากลเพื่อสวัสดิการและสุขภาวะที่ดีของประชาชน
                    </p>

                    {/* STATS */}
                    <div className={styles.stats}>

                        <div className={styles.statCard}>
                            <div className={styles.statContent}>
                                <h3>7</h3>
                                <p>วิทยาลัยเฉพาะทาง</p>
                            </div>
                            <img src="/images/home/icon9.png" alt="" />
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statContent}>
                                <h3>1500+</h3>
                                <p>สมาชิกทั่วประเทศ</p>
                            </div>
                            <img src="/images/home/icon10.png" alt="" />
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statContent}>
                                <h3>200+</h3>
                                <p>หลักสูตรอบรม/ปี</p>
                            </div>
                            <img src="/images/home/icon9.png" alt="" />
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statContent}>
                                <h3>50+</h3>
                                <p>งานวิจัยตีพิมพ์/ปี</p>
                            </div>
                            <img src="/images/home/icon11.png" alt="" />
                        </div>

                    </div>
                </div>

            </section>

            {/* SECTION: HISTORY */}
            <section className={styles.historySection}>

                {/* LEFT MENU */}
                <div className={styles.historyMenu}>
                    <h3>เกี่ยวกับราชวิทยาลัยเภสัชกรรม<br />แห่งประเทศไทย</h3>

                    <ul>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT CONTENT */}
                <div className={styles.historyContent}>

                    {activeTab === 0 && (
                        <>
                            <h2>
                                "จากปณิธานในการยกระดับมาตรฐานการประกอบวิชาชีพ
                                เภสัชกรรมสู่การจัดตั้งสถาบันทางวิชาการชั้นสูงของเภสัชกรไทย"
                            </h2>

                            <p className={styles.subText}>
                                ความเป็นมาของราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย มีจุดเริ่มต้นจากแนวคิด
                                การพัฒนาวิชาชีพอย่างต่อเนื่องเพื่อรองรับความก้าวหน้าของวิชาการ
                            </p>

                            {/* TIMELINE */}
                            <div className={styles.timeline}>

                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        พ.ศ. 2478 - 2480
                                        <br />
                                        จุดเริ่มต้นแนวคิด
                                    </div>
                                    <p>
                                        ประกาศใช้พระราชบัญญัติควบคุมการประกอบโรคศิลปะ
                                        เพื่อกำหนดมาตรฐานวิชาชีพเภสัชกรรมในประเทศไทย
                                    </p>
                                </div>

                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        พ.ศ. 2565 - 2567
                                        <br />
                                        การวางรากฐานและพัฒนา
                                    </div>
                                    <p>
                                        มีการจัดตั้งคณะทำงานเพื่อพัฒนาหลักสูตรและมาตรฐาน
                                        รวมถึงการเตรียมความพร้อมในการจัดตั้งราชวิทยาลัย
                                    </p>
                                </div>

                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        15 พฤศจิกายน 2567
                                        <br />
                                        การประกาศจัดตั้ง
                                    </div>
                                    <p>
                                        จัดตั้งราชวิทยาลัยเภสัชกรรมแห่งประเทศไทยอย่างเป็นทางการ
                                    </p>
                                </div>

                                <div className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        ปัจจุบัน (พ.ศ. 2568 เป็นต้นไป)
                                        <br />
                                        การขับเคลื่อนสู่อนาคต
                                    </div>
                                    <p>
                                        มุ่งเน้นการพัฒนาองค์ความรู้และยกระดับวิชาชีพเภสัชกรรม
                                        สู่มาตรฐานสากล
                                    </p>
                                </div>

                            </div>
                        </>
                    )}

                    {activeTab === 1 && (
                        <CommitteeSection />
                    )}

                    {activeTab === 2 && (
                        <EmblemSection />
                    )}

                    {activeTab === 3 && (
                        <LocationSection />
                    )}

                </div>

            </section>

            {/* SECTION: 7 COLLEGES */}
            <section className={styles.collegesSection}>
                <div className={styles.collegesHeader}>
                    <h2>ราชวิทยาลัยเภสัชกรรมทั้ง 7 วิทยาลัย</h2>
                    <p>
                        เป็นองค์กรภายใต้สภาเภสัชกรรม ที่มุ่งเน้นการส่งเสริมและพัฒนาศักยภาพทางวิชาชีพเภสัชกรรมอย่างต่อเนื่อง<br />
                        และสร้างมาตรฐานการศึกษาภายหลังปริญญา ทั้งในระดับประกาศนียบัตรวิชาชีพเภสัชกรรม หนังสืออนุมัติและวุฒิบัตรฯ<br />
                        สาขาความเชี่ยวชาญเฉพาะทางต่างๆ เพื่อยกระดับองค์ความรู้วิชาชีพให้เป็นมาตรฐานสากล
                    </p>
                </div>

                <div className={styles.collegesGrid}>
                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services1.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services2.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services3.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services4.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services5.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services6.png')" }}>
                    </div>

                    <div className={styles.collegeCard} style={{ backgroundImage: "url('/images/services/Services7.png')" }}>
                    </div>
                </div>
            </section>

            {/* SECTION: MEETINGS */}
            <section className={styles.meetingsSection}>
                <div className={styles.meetingsHeader}>
                    <h2>การประชุม</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.meetingsList}>
                    {/* ITEM 1 */}
                    <div className={styles.meetingItem}>
                        <div className={styles.dateBoxWrapper}>
                            <div className={styles.dateBox}>
                                <h3>2</h3>
                                <span>พ.ค.</span>
                            </div>
                            <div className={styles.verticalDivider}></div>
                        </div>

                        <div className={styles.meetingContent}>
                            <h4>สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้นการบริบาลทางเภสัชกรรม(สาขาปฐมภูมิ) รุ่นที่ 5</h4>

                            <div className={styles.meetingDetail}>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/MapPin.png" alt="location" className={styles.iconImg} />
                                    <span>ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Calendar.png" alt="calendar" className={styles.iconImg} />
                                    <span>วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Users.png" alt="users" className={styles.iconImg} />
                                    <span>ผู้เข้าร่วม : <span className={styles.spacing}>บุคคลทั่วไป</span> <span className={styles.tagGreen}>เภสัชกร</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Tag.png" alt="tag" className={styles.iconImg} />
                                    <span>หมวดหมู่ : ราชวิทยาลัย</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.meetingImage}>
                            <img src="/images/section3/img1.png" alt="meeting 1" />
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className={styles.meetingItem}>
                        <div className={styles.dateBoxWrapper}>
                            <div className={styles.dateBox}>
                                <h3>1</h3>
                                <span>มี.ค.</span>
                            </div>
                            <div className={styles.verticalDivider}></div>
                        </div>

                        <div className={styles.meetingContent}>
                            <h4>Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future</h4>

                            <div className={styles.meetingDetail}>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/MapPin.png" alt="location" className={styles.iconImg} />
                                    <span>ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Calendar.png" alt="calendar" className={styles.iconImg} />
                                    <span>วันที่จัดประชุม : 02 มี.ค. 2569 - 13 มี.ค. 2569</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Users.png" alt="users" className={styles.iconImg} />
                                    <span>ผู้เข้าร่วม : <span className={styles.tagGreen}>เภสัชกร</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Tag.png" alt="tag" className={styles.iconImg} />
                                    <span>หมวดหมู่ : ราชวิทยาลัย</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.meetingImage}>
                            <img src="/images/section3/img2.png" alt="meeting 2" />
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className={styles.meetingItem}>
                        <div className={styles.dateBoxWrapper}>
                            <div className={styles.dateBox}>
                                <h3>13</h3>
                                <span>ก.พ.</span>
                            </div>
                            <div className={styles.verticalDivider}></div>
                        </div>

                        <div className={styles.meetingContent}>
                            <h4>การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สุขภาพ(ไทย) รุ่นที่ 3</h4>

                            <div className={styles.meetingDetail}>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/MapPin.png" alt="location" className={styles.iconImg} />
                                    <span>ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Calendar.png" alt="calendar" className={styles.iconImg} />
                                    <span>วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Users.png" alt="users" className={styles.iconImg} />
                                    <span>ผู้เข้าร่วม : <span className={styles.spacing}>บุคคลทั่วไป</span> <span className={styles.spacing2}>จำนวน : 100 คน</span></span>
                                </div>
                                <div className={styles.detailRow}>
                                    <img src="/images/section3/Tag.png" alt="tag" className={styles.iconImg} />
                                    <span>หมวดหมู่ : ราชวิทยาลัย</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.meetingImage}>
                            <img src="/images/section3/img3.png" alt="meeting 3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: NEWS & HIGHLIGHTS */}
            <section className={styles.newsSection}>
                <div className={styles.newsContainer}>
                    {/* HIGHLIGHTS */}
                    <div className={styles.newsHeader}>
                        <h2>เรื่องเด่น</h2>
                        <div className={styles.newsNav}>
                            <button className={styles.navBtn}>&lt;</button>
                            <button className={styles.navBtn}>&gt;</button>
                        </div>
                    </div>

                    <div className={styles.featuredCard}>
                        <div className={styles.featuredImage}>
                            <img src="/images/section4/img.png" alt="featured" />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                            <h3>หลักสูตรวิชาชีพเภสัชกรรมที่สภาเภสัชกรรมให้การรับรอง</h3>
                            <p>
                                หลักสูตรการฝึกอบรมระยะสั้น ที่มีระยะเวลา การฝึกอบรม ไม่น้อยกว่า 16 สัปดาห์<br />
                                เป็นหลักสูตรที่จัดทำขึ้นยาใครรอยจากหลักสูตรการฝึกอบรมระยะสั้นสาขา...
                            </p>
                            <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                        </div>
                    </div>

                    <div className={styles.paginationDots}>
                        <div className={styles.dotActive}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>

                    {/* NEWS */}
                    <div className={styles.newsRowHeader}>
                        <h2>ข่าวสาร</h2>
                        <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                    </div>

                    <div className={styles.newsGrid}>
                        <div className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src="/images/section4/Container1.png" alt="news 1" />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>สภาเภสัชกรรมเปิดตัวหลักสูตรเภสัชศาสตรมหาบัณฑิต สาขาเภสัชกรรมคลินิก</h4>
                                <p>สภาเภสัชกรรมเปิดตัวหลักสูตรใหม่ล่าสุด! หลักสูตรเภสัชศาสตรมหาบัณฑิต สาขาเภสัชกรรมคลินิก มุ่งเน้นการพัฒนาเภสัชกรให้มีความเชี่ยวชาญ...</p>
                            </div>
                        </div>

                        <div className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src="/images/section4/Container 2.png" alt="news 2" />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>สภาเภสัชกรรมอนุมัติหลักสูตรใหม่: เภสัชกรผู้เชี่ยวชาญด้านการบริบาลผู้สูงอายุ</h4>
                                <p>สภาเภสัชกรรมอนุมัติหลักสูตรใหม่: เภสัชกรผู้เชี่ยวชาญด้านการบริบาลผู้ป่วยสูงอายุ หลักสูตรระยะสั้นที่ออกแบบมาเพื่อเพิ่มพูนความรู้และทักษะในการดูแลผู้สูงอายุ...</p>
                            </div>
                        </div>

                        <div className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src="/images/section4/Container 3.png" alt="news 3" />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>ประกาศรับสมัคร: หลักสูตรเภสัชศาสตรบัณฑิต สาขาการจัดการเภสัชสนเทศ</h4>
                                <p>เปิดรับสมัคร: หลักสูตรวิชาศาสตรมหาบัณฑิต สาขาเภสัชกรรมดิจิทัล มุ่งเน้นการใช้เทคโนโลยีสารสนเทศในการจัดการยาและเวชภัณฑ์ เหมาะสำหรับเภสัชกรที่ต้องการพัฒนาทักษะด้านดิจิทัล...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}