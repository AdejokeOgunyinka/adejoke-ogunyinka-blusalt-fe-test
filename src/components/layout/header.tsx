"use client";
import { getSidebarItems } from "@/lib";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  CounterClockwiseClockIcon,
  MenuIcon,
  SearchIcon,
  SunIcon,
  WindowIcon,
} from "../icons";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
} from "../ui";
import { Sidebar, SidebarContent } from "./sidebar";

export const Header = () => {
  const location = usePathname();
  const title = getSidebarItems(location)?.filter(
    (val) => val.href === location
  )[0]?.name;

  return (
    <div className="fixed top-0 left-0 md:left-24 lg:left-[226px] right-0 bg-white p-[15px]  md:pt-[30px] md:pb-5 md:px-[30px] flex items-center justify-between border-b border-[#F0ECEC]">
      <h1 className="capitalize text-black font-medium text-[22px]">{title}</h1>

      <div className="flex items-center gap-x-5">
        <div className="hidden md:flex items-center gap-x-2 bg-[#1C1C1C0D] px-2 py-1.5 rounded-lg">
          <div className="flex items-center gap-x-1">
            <SearchIcon />
            <Input
              className="border-none shadow-none h-5 w-24 rounded-none placeholder:text-[#1C1C1C33] focus-visible:ring-offset-0 focus-visible:ring-0"
              placeholder="Search"
            />
          </div>
          <h1 className="text-[#1C1C1C33]">⌘/</h1>
        </div>

        <div className="flex items-center gap-x-2">
          <SunIcon />
          <CounterClockwiseClockIcon />
          <BellIcon />
          <WindowIcon />
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="!p-0 inline-flex md:hidden">
              <MenuIcon variant="Outline" className="size-8" color="#000" />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="hidden">
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Dashboard Menu</DrawerDescription>
            </DrawerHeader>

            <div className="w-full h-screen overflow-y-scroll grid gap-y-[15px] place-content-start px-5 pb-[30px]">
              <SidebarContent />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
