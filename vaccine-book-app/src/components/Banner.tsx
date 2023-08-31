import Image from "next/image";
import styles from "./banner.module.css";

export default function BannerH() {
  return (
    <div className={styles.banner}>
      <Image
        src="/img/cover.jpg"
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
