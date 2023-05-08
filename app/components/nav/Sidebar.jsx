"use client";

import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { HiOutlineDocumentDuplicate, HiOutlineHome } from "react-icons/hi";
import { signOut } from "next-auth/react";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ currentUset }) {
  const inactiveLink = "flex gap-1 text-white";
  const activeLink = inactiveLink + " text-yellow-500 rounded-sm";
  const pathname = usePathname();

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />

          <nav className="flex flex-col gap-8 ">
            <Link
              className={pathname === "/" ? activeLink : inactiveLink}
              href={"/"}
            >
              <HiOutlineHome className="" size={24} />
              <h3 className="pl-4">Dashboard</h3>
            </Link>
            <Link
              className={
                pathname.includes("/products") ? activeLink : inactiveLink
              }
              href={"/products"}
            >
              <FaProductHunt size={24} />
              <h3 className="pl-4">Products</h3>
            </Link>
            <Link
              className={
                pathname.includes("/orders") ? activeLink : inactiveLink
              }
              href={"/orders"}
            >
              <HiOutlineDocumentDuplicate size={24} />
              <h3 className="pl-4">Orders</h3>
            </Link>
            <Link
              className={
                pathname.includes("/settings") ? activeLink : inactiveLink
              }
              href={"/settings"}
            >
              <FiSettings size={24} />
              <h3 className="pl-4">Settings</h3>
            </Link>
          </nav>
          <SidebarItem
            icon={BiLogOut}
            label="Logout"
            onClick={() => signOut()}
          />
        </div>
      </div>
    </div>
  );
}
