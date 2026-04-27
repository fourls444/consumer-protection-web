"use client";

import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import styles from "../CourseDetail.module.css";

interface CourseHeroProps {
  bannerSrc: string;
  badge: string;
  title: React.ReactNode;
  profilePic?: string;
  profileText?: string;
}

export default function CourseHero({ bannerSrc, badge, title, profilePic, profileText }: CourseHeroProps) {
  const router = useRouter();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={bannerSrc}
          alt="Course Detail Banner"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <button className={styles.backBtn} onClick={() => router.back()}>
        <FaArrowLeft size={14} /> ย้อนกลับ
      </button>

      <div className={styles.heroContent}>
        <div className={styles.categoryTag}>{badge}</div>
        <h1 className={styles.title}>{title}</h1>
        
        {profilePic && profileText && (
          <div className={styles.profileInfo}>
            <div className={styles.profilePic}>
              <Image 
                src={profilePic} 
                alt="Profile" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className={styles.profileText}>{profileText}</span>
          </div>
        )}
      </div>
    </section>
  );
}
