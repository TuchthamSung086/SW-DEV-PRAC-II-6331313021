import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Hospital() {

  const hospitals = await getHospitals();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Vaccine</h1>
      <HospitalCatalog hospitalJson={hospitals} />
      {profile.data.role == "admin" ? <AddHospitalForm /> : null}
    </main>
  );
}
