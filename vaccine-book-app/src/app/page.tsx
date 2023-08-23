import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <div style={{ margin: "20px" }}>
        <ProductCard
          imgPath="/img/pfizer.png"
          title="Pfizer"
          description="The Pfizer-BioNTech COVID-19 vaccine, also known simply as the Pfizer vaccine, is a messenger RNA (mRNA) vaccine developed to provide protection against the virus responsible for the COVID-19 pandemic."
        />
      </div>
    </main>
  );
}
