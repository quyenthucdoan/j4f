import React from "react";
import Image from "next/image";
import { CiSearch, CiBellOn, CiSquarePlus } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import AvatarDropDown from "./AvatarDropDown";
import CreatePost from "./CreatePost";
import { CgMathPlus } from "react-icons/cg";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Navbar = () => {
  return (
    <>
      <nav className="static bg-component border-s border-cBorder flex w-full top-0 h-fit">
        {/* Logo */}
        <div className="static flex flex-shrink-0 items-center left-0 px-2">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo's website"
          />
        </div>

        {/* Search bar */}
        <div className="static mx-auto w-2/5 p-0">
          <SearchBar />
        </div>

        {/* left function-buttons*/}
        <div className="static flex bg-black ml-0  justify-between my-auto right-0">
          <CgMathPlus className="my-auto h-8 w-fit text-gray-500 hover:bg-gray-200" />
          {/* <CreatePost /> */}
          <AvatarDropDown />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
