import React from "react";
import Search from "../Search/Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-5  bg-neutral-600">
      <div className="container h-[70px]  flex items-center justify-between">
        <Link href="/" className="logo text-3xl font-bold ">
          GOOMENBER
        </Link>

        <Search />
      </div>
    </div>
  );
};

export default Navbar;
