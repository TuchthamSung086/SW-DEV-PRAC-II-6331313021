export default async function getHospitals() {
  const response = await fetch("http://localhost:5000/api/v1/hospitals", {
    next: { tags: ["hospitals"] },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await response.json();
}
