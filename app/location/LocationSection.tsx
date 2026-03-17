import styles from "./Location.module.css";

export default function LocationSection() {
    return (
        <section className={styles.section}>
            
            <div className={styles.container}>
                {/* LEFT SIDE: Image and Text */}
                <div className={styles.leftColumn}>
                    <img src="/images/location/location1.png" alt="Pharmacist hands" className={styles.topImage} />
                </div>

                {/* RIGHT SIDE: Info Card (Maybe image or HTML) */}
                <div className={styles.rightColumn}>
                    <img src="/images/location/location2.png" alt="Contact Info" className={styles.rightImage} />
                </div>
            </div>

        </section>
    );
}
