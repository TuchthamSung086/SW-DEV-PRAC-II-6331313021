import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
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
        <h1>Your Vaccine Partner</h1>
        <h3>Leave it to us</h3>
      </div>
    </div>
  );
}
