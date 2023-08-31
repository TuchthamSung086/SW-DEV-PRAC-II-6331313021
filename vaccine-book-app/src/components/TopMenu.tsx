import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-lightgrey border-b flex flex-row justify-end">
      <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
      <a href="/">
        <Image
          src={"/img/logo.png"}
          className="w-auto h-[100%] hover:opacity-80"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </a>
    </div>
  );
}
