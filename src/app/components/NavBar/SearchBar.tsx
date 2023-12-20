import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
      <div className="relative my-2">
        <div className="absolute pointer-events-none inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 w-full">
            <CiSearch />
          </span>
        </div>
        <input
          type="text"
          name="search"
          className="block w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            hover:border-0 
            hover:border-blue-500 
            focus:outline-none 
            focus:ring 
            focus:ring-blue-500 
            sm:text-sm sm:leading-6"
          placeholder="Search..."></input>
      </div>
    </>
  );
};

export default SearchBar;
