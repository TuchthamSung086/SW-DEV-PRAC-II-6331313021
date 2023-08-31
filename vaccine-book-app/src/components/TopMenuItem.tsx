import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className="hover:bg-gray-100 flex text-center">
      <Link
        className="w-[120px] text-center mt-auto mb-auto font-sans font-medium text-lg text-gray-500 hover:text-blue-600"
        href={pageRef}
      >
        {title}
      </Link>
    </div>
  );
}
