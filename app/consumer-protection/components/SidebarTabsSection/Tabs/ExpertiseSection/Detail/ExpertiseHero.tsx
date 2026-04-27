"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "../ExpertiseDetail.module.css";

interface ExpertiseHeroProps {
  bannerSrc: string;
  badge: string;
  title: string;
  subtitle: string;
}

export default function ExpertiseHero({ bannerSrc, badge, title, subtitle }: ExpertiseHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={bannerSrc}
          alt="Expertise Detail Hero"
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
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
