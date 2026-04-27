"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "../CourseDetail.module.css";

interface CourseHeroProps {
  bannerSrc: string;
  badge: string;
  title: React.ReactNode;
  profilePic?: string;
  profileText?: string;
}

export default function CourseHero({ bannerSrc, badge, title, profilePic, profileText }: CourseHeroProps) {
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

      <Link href="/consumer-protection">
        <button className={styles.backBtn}>
          <FaArrowLeft size={14} /> กลับหน้าหลัก
        </button>
      </Link>

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
