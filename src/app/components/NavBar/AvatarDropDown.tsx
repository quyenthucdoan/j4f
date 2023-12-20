"use client";
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CgProfile } from "react-icons/cg";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/sign-out", label: "Sign out" },
];

const AvatarDropDown = () => {
  const [visibility, ChangeVisibility] = useState("invisible"); // visible - invisible

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold  hover:shadow-sm hover:ring-1 hover:ring-inset ring-gray-200 hover:bg-gray-200"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              if (visibility === "invisible") {
                ChangeVisibility("visible");
                console.log("Change to visible:", visibility);
              } else if (visibility === "visible") {
                ChangeVisibility("invisible");
                console.log("Chang to invisible: ", visibility);
              }
              console.log("clicked!");
            }}>
            <CgProfile className="h-7 w-fit text-gray-500" />
          </button>
        </div>

        <div
          className={
            visibility +
            " absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button">
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0">
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1">
              Support
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                id="menu-item-3">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarDropDown;
