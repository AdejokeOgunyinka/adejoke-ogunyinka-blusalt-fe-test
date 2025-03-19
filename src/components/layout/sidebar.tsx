"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSidebarItems, SIDEBAR_SEPARATOR_INDICES } from "@/lib";
import { Avatar, AvatarFallback, AvatarImage } from "../ui";
import { LogoWithoutText } from "../icons";

export const Sidebar = () => {
  const location = usePathname();
  const sidebarItems = getSidebarItems(location);

  return (
    <div className="w-24 lg:w-[226px] overflow-y-scroll hidden md:grid fixed top-0 left-0 bottom-0 px-5 py-[30px]  gap-y-[30px] place-content-start border-r border-[#F0ECEC]">
      <Image
        src="./logoipsum-logo.svg"
        alt="logoipsum-logo"
        width="186"
        height="33"
        className="hidden lg:inline-flex"
      />

      <div className="flex lg:hidden justify-center items-center">
        <LogoWithoutText />
      </div>

      <div className="grid gap-y-1">
        {sidebarItems.map((sidebarItem, index) => (
          <>
            <Link
              key={sidebarItem.id}
              href={sidebarItem.href}
              className="flex gap-x-2 items-center px-5 py-4"
            >
              {sidebarItem.icon}
              <h3 className="hidden lg:inline-flex">{sidebarItem.name}</h3>
            </Link>

            {SIDEBAR_SEPARATOR_INDICES.includes(index) && (
              <div className="w-full h-[1px] border-b border-[#F0ECEC]"></div>
            )}
          </>
        ))}
      </div>

      <div className="flex gap-x-2 items-center p-2">
        <Avatar>
          <AvatarImage src="./user-img.png" alt="user" />
          <AvatarFallback>BW</AvatarFallback>
        </Avatar>

        <h2 className="text-sm text-[#1C1C1C] tracking-[0%] hidden lg:inline-flex">
          Bye Wind
        </h2>
      </div>
    </div>
  );
};
