"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./banner.module.css";

export default function BannerH() {
  const covers = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.banner} onClick={() => setIndex((index + 1) % 4)}>
      <Image
        src={covers[index]}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">Your Vaccine Boi</h1>
        <h3 className="text-xl font-serif">Trust me bro</h3>
      </div>
    </div>
  );
}
