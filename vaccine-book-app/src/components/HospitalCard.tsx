import Image from "next/image";

export default function HospitalCard({
  imgSrc,
  hospitalName,
}: {
  imgSrc: string;
  hospitalName: string;
}) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg inline-block p-[10px] m-[10px]">
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg h-[70%]"
        ></Image>
      </div>
      <div className="w-full h-[30%] p-[10px]">{hospitalName}</div>
    </div>
  );
}
