"use client";

import Image from "next/image";
import styles from "./HighlightSection.module.css";

const highlightImages = [
  // Each array is a column
  [
    { src: "/images/highlight/Rectangle 36.png", alt: "Highlight 1", size: styles.medium },
    { src: "/images/highlight/Rectangle 41.png", alt: "Highlight 2", size: styles.tall },
  ],
  [
    { src: "/images/highlight/Rectangle 37.png", alt: "Highlight 3", size: styles.tall },
    { src: "/images/highlight/Rectangle 43.png", alt: "Highlight 4", size: styles.medium },
  ],
  [
    { src: "/images/highlight/Rectangle 38.png", alt: "Highlight 5", size: styles.medium },
    { src: "/images/highlight/Rectangle 39.png", alt: "Highlight 6", size: styles.medium },
  ],
  [
    { src: "/images/highlight/Rectangle 40.png", alt: "Highlight 7", size: styles.tall },
    { src: "/images/highlight/Rectangle 44.png", alt: "Highlight 8", size: styles.short },
  ],
  [
    { src: "/images/highlight/Rectangle 45.png", alt: "Highlight 9", size: styles.tall },
  ],
];

export default function HighlightSection() {
  return (
    <section className={styles.highlight}>
      <header className={styles.header}>
        <span className={styles.subtitle}>
          Highlight วิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพ
        </span>
        <h2 className={styles.title}>
          ความเป็นเลิศแห่งวิชาชีพ เพื่อสุขภาพที่ดีกว่า
        </h2>
      </header>

      <div className={styles.grid}>
        {highlightImages.map((column, colIdx) => (
          <div key={colIdx} className={styles.column}>
            {column.map((image, imgIdx) => (
              <div 
                key={imgIdx} 
                className={`${styles.imageWrapper} ${image.size}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <span className={styles.activeDot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </section>
  );
}
