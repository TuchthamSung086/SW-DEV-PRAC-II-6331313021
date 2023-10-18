import Link from "next/link";
import HospitalCard from "./HospitalCard";

export default function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  return (
    <>
      Explore {hospitalJson.count} hospitals in our catalog
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {hospitalJson.data.map((hospitalItem: Object) => (
          <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
            <HospitalCard
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
