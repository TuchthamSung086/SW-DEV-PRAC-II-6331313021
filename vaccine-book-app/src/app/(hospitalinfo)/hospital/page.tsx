import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Card } from "@mui/material";

export default async function Hospital() {
  const hospitals = await getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Vaccine</h1>
      <HospitalCatalog hospitalJson={hospitals} />
    </main>
  );
}
