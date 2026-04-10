"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HighlightSection.module.css";
import { FiMaximize2, FiX } from "react-icons/fi";

/**
 * ข้อมูลรูปภาพสำหรับส่วน Highlight
 * แบ่งเป็น Array ชุดละคอลัมน์เพื่อจัดวางแบบ Masonry Grid
 */
const highlightImages = [
  // Column 1
  [
    { src: "/images/highlight/Rectangle 36.png", alt: "Highlight 1", size: styles.medium },
    { src: "/images/highlight/Rectangle 41.png", alt: "Highlight 2", size: styles.tall },
  ],
  // Column 2
  [
    { src: "/images/highlight/Rectangle 37.png", alt: "Highlight 3", size: styles.tall },
    { src: "/images/highlight/Rectangle 43.png", alt: "Highlight 4", size: styles.medium },
  ],
  // Column 3
  [
    { src: "/images/highlight/Rectangle 38.png", alt: "Highlight 5", size: styles.medium },
    { src: "/images/highlight/Rectangle 39.png", alt: "Highlight 6", size: styles.medium },
  ],
  // Column 4
  [
    { src: "/images/highlight/Rectangle 40.png", alt: "Highlight 7", size: styles.tall },
    { src: "/images/highlight/Rectangle 44.png", alt: "Highlight 8", size: styles.short },
  ],
  // Column 5
  [
    { src: "/images/highlight/Rectangle 45.png", alt: "Highlight 9", size: styles.tall },
  ],
];

/**
 * Interface สำหรับข้อมูลรูปภาพ
 */
export interface HighlightImage {
  src: string;
  alt: string;
}

export default function HighlightSection() {
  // State สำหรับจัดการรูปภาพที่ถูกเลือกเปิดใน Lightbox (ดูรูปใหญ่)
  const [selectedImage, setSelectedImage] = useState<HighlightImage | null>(null);

  /**
   * Effect สำหรับจัดการ Side Effects เมื่อ Lightbox เปิด/ปิด
   * 1. ล็อกการ Scroll ของหน้าเว็บ
   * 2. เพิ่ม Event Listener สำหรับปิดด้วยปุ่ม Escape
   */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้าจอ
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset'; // คืนค่าการเลื่อนหน้าจอ
    }
    
    // Cleanup function เมื่อ Component ถูกทำลายหรือ State เปลี่ยน
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedImage]);

  return (
    <section className={styles.highlight}>
      {/* ส่วนหัวข้อ (Header Section) */}
      <header className={styles.header}>
        <span className={styles.subtitle}>
          Highlight วิทยาลัยการคุ้มครองผู้บริโภคด้านยาและสุขภาพ
        </span>
        <h2 className={styles.title}>
          ความเป็นเลิศแห่งวิชาชีพ <br /> เพื่อสุขภาพที่ดีกว่า
        </h2>
      </header>

      {/* ส่วนตารางรูปภาพ (Image Grid) */}
      <div className={styles.grid}>
        {highlightImages.map((column, colIdx) => (
          <div key={colIdx} className={styles.column}>
            {column.map((image, imgIdx) => (
              <div
                key={imgIdx}
                className={`${styles.imageWrapper} ${image.size}`}
                // ส่งลำดับ Index ไปยัง CSS Variable เพื่อใช้จัดจังหวะ Animation Stagger
                style={{ "--index": colIdx + imgIdx } as React.CSSProperties}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay แสดงเมื่อเอาเมาส์มาวาง (Hover) */}
                <div className={styles.overlay}>
                  <FiMaximize2 className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ส่วน Lightbox / Modal แสดงรูปภาพขนาดเต็ม */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)} // คลิกพื้นหลังเพื่อปิด
        >
          {/* ปุ่มปิด (Close Button) */}
          <button
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation(); // กัน event bubble ไปยังพื้นหลัง
              setSelectedImage(null);
            }}
          >
            <FiX />
          </button>

          {/* กล่องแสดงรูปภาพ (Lightbox Content) */}
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()} // กันการปิดเมื่อคลิกที่ตัวรูป
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
