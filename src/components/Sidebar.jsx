import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../../public/profile.png";
import {
  RxSketchLogo,
  RxDashboard,
  RxGear,
  RxLockClosed,
} from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/kanban">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsKanban size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BiUser size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxLockClosed size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <Image src={profileImg} alt="profile pic" />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
