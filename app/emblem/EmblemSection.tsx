import styles from "./Emblem.module.css";

export default function EmblemSection() {
    return (
        <section className={styles.section}>
            
            {/* TOP AREA */}
            <div className={styles.topContainer}>
                {/* EMBLEMS */}
                <div className={styles.emblemsWrapper}>
                    <img src="/images/emblem/emblem.png" alt="Emblem" className={styles.emblemImage} />
                </div>

                {/* DESCRIPTION CARD */}
                <div className={styles.descriptionWrapper}>
                    <img src="/images/emblem/Container.png" alt="Description" className={styles.descriptionImage} />
                </div>
            </div>

            {/* GRID AREA */}
            <div className={styles.gridContainer}>
                {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className={`${styles.gridCard} ${index === 4 ? styles.wideCard : ''}`}>
                        <img src={`/images/emblem/Card ${index + 1}.png`} alt={`Card ${index + 1}`} className={styles.gridImage} />
                    </div>
                ))}
            </div>

        </section>
    );
}
