"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HighlightSection.module.css";
import { FiMaximize2, FiX } from "react-icons/fi";

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

export interface HighlightImage {
  src: string;
  alt: string;
}

export default function HighlightSection() {
  const [selectedImage, setSelectedImage] = useState<HighlightImage | null>(null);

  // Prevent scrolling when lightbox is open & close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedImage]);

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
                style={{ "--index": colIdx + imgIdx } as React.CSSProperties}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.overlay}>
                  <FiMaximize2 className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <FiX />
          </button>
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
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
