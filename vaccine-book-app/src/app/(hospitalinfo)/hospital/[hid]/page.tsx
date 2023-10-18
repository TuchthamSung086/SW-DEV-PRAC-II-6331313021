import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  /*
  Mock Data for Demonstration Only
  */
  // const mockHospital = new Map();
  // mockHospital.set("001", {
  //   name: "Chulalongkorn Hospital",
  //   image: "/img/chula.jpg",
  // });
  // mockHospital.set("002", {
  //   name: "Rajavithi Hospital",
  //   image: "/img/rajavithi.jpg",
  // });
  // mockHospital.set("003", {
  //   name: "Thammasat University Hospital",
  //   image: "/img/thammasat.jpg",
  // });

  const hospitalDetail = await getHospital(params.hid);

  return (
    <main className="text-center p-5 mt-20">
      <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5">
          <div>Address: {hospitalDetail.data.address}</div>
          <div>District: {hospitalDetail.data.district}</div>
          <div>Province: {hospitalDetail.data.province}</div>
          <div>Postal Code: {hospitalDetail.data.postalcode}</div>
          <div>Tel: {hospitalDetail.data.tel}</div>
        </div>
      </div>
    </main>
  );
}
