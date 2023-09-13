import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
export default function HospitalCard({
  imgSrc,
  hospitalName,
}: {
  imgSrc: string;
  hospitalName: string;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg h-[70%]"
        ></Image>
      </div>
      <div className="w-full h-[30%] p-[10px]">{hospitalName}</div>
    </InteractiveCard>
  );
}
