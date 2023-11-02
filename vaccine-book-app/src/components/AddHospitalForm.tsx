import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

function Field({
  title,
  identifier,
  placeholder,
}: {
  title: string;
  identifier: string;
  placeholder: string;
}) {
  return (
    <div className="flex items-center w-1/2 my-2">
      <label className="w-auto block text-gray-700 pr-4" htmlFor={identifier}>
        {title}
      </label>
      <input
        type="text"
        required
        id={identifier}
        name={identifier}
        placeholder={placeholder}
        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
      ></input>
    </div>
  );
}

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";

    console.log(addHospitalForm);

    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    console.log("name:", name);

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <form action={addHospital}>
      <div className="text-xl text-blue-700">Create Hospital</div>
      <Field
        title="Hospital Name"
        placeholder="Hospital Name"
        identifier="name"
      />
      <Field title="Address" placeholder="Address" identifier="address" />
      <Field title="District" placeholder="District" identifier="district" />
      <Field title="Province" placeholder="Province" identifier="province" />
      <Field
        title="Postal Code"
        placeholder="Postal Code"
        identifier="postalcode"
      />
      <Field title="Tel." placeholder="098-765-4321" identifier="tel" />
      <Field
        title="Picture URL"
        placeholder="www.picture.com/hospital1"
        identifier="picture"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Add New Hospital
      </button>
    </form>
  );
}
