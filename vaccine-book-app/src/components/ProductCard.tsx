import Image from "next/image";
import styles from "./productcard.module.css";

export default function ProductCard(props: {
  imgPath: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={props.imgPath}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        ></Image>
      </div>
      <div>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.cardText}>{props.description}</div>
      </div>
    </div>
  );
}
