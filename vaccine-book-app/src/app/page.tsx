import Image from "next/image";
// import styles from "./page.module.css";
import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex">
        <HospitalCard
          imgSrc="/img/chula.jpg"
          hospitalName="Chulalongkorn Hospital"
        />
        <HospitalCard
          imgSrc="/img/rajavithi.jpg"
          hospitalName="Rajavithi Hospital"
        />
        <HospitalCard
          imgSrc="/img/thammasat.jpg"
          hospitalName="Thammasat University Hospital"
        />
      </div>
    </main>
  );
}
