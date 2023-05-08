"use client";

import { useRouter } from "next/navigation";
import { HiOutlineDatabase } from "react-icons/hi";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center">
      <div
        className="relative
        flex
        h-14
        w-14
        cursor-pointer
        items-center
        justify-center
        rounded-full
        p-4
        hover:bg-slate-300
        hover:bg-opacity-10
        lg:hidden
      "
      >
        <HiOutlineDatabase size={28} color="white" />
      </div>
      <div
        className="
        relative
        hidden
        cursor-pointer
        items-center
        gap-4
        rounded-full
        p-4
        hover:bg-slate-300
        hover:bg-opacity-10
        lg:flex
      "
      >
        <p className="hidden text-xl text-white lg:block">Ecommerce Admin</p>
      </div>
    </div>
  );
};

export default SidebarLogo;
