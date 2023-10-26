import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-lightgrey border-b flex flex-row justify-end">
      <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>

      <Link href="/">
        <Image
          src={"/img/logo.png"}
          className="w-auto h-[100%] hover:opacity-80"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>

      {session ? (
        <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
          <Link href="/api/auth/signout">Sign-Out of {session.user?.name}</Link>
          <TopMenuItem title="My Booking" pageRef="/mybooking"></TopMenuItem>
        </div>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm ">
            Sign-In
          </div>
        </Link>
      )}
    </div>
  );
}
