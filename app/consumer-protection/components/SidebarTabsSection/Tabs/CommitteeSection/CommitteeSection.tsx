import styles from "./CommitteeSection.module.css";

const MEMBERS = [
    {
        image: "/images/committee/member1.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "คำอธิบาย",
    },
    {
        image: "/images/committee/member2.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "รองประธาน",
    },
    {
        image: "/images/committee/member3.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member4.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member5.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง.",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member6.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member7.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
     {
        image: "/images/committee/member8.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member9.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member10.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member11.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member12.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member13.png",
        name: "ชื่อ นามสกุล",
        role: "ตำแหน่ง",
        position: "กรรมการ",
    },
    
   
  
];

export default function CommitteeSection() {
    const chairman = MEMBERS[0];
    const otherMembers = MEMBERS.slice(1);

    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>"ผสานพลังแห่งความเชี่ยวชาญและวิสัยทัศน์<br></br>เพื่อยกระดับการคุ้มครองผู้บริโภคอย่างยั่งยืน"</h2>
                <p>
                    คณะกรรมการบริหารผู้ทรงคุณวุฒิ มุ่งมั่นขับเคลื่อนมาตรฐานวิชาชีพสู่ความเป็นเลิศในระดับสากล
                 </p>
            </div>

            {/* CHAIRMAN - row 1 */}
            <div className={styles.chairmanRow}>
                <div className={`${styles.card} ${styles.chairmanCard}`}>
                    <div className={styles.photoArea}>
                        <img src={chairman.image} alt={chairman.name} className={styles.memberPhoto} />
                    </div>
                    <div className={styles.nameArea}>
                        <span className={styles.memberName}>{chairman.name}</span>
                        <span className={styles.memberRole}>{chairman.role}</span>
                        <span className={styles.memberPosition}>{chairman.position}</span>
                    </div>
                </div>
            </div>

            {/* OTHER MEMBERS */}
            <div className={styles.membersRow}>
                {otherMembers.map((m, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.photoArea}>
                            <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.nameArea}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                           
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}