import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NavbarBawa = () => {
  return (
    <div className="pt-16  w-full md:w-11/12 m-auto shadow-2xl flex justify-between px-0 md:px-3 pb-3 bg-color-white dark:bg-color-black text-color-call dark:text-color-white ">
      <div className="flex gap-3 md:justify-between justify-center  w-full">
        <div className="flex gap-3 text-[10px] md:text-[15px]   ">
          <Link
            href="/"
            className="bg-color-secondary flex items-center gap-[2px] dark:bg-color-white text-color-white dark:text-color-black px-2 py-1"
          >
            <FaFacebook />
            <span>Facebook</span>
          </Link>
          <Link
            href="/"
            className="bg-color-secondary flex items-center gap-[2px] dark:bg-color-white text-color-white dark:text-color-black px-2 py-1"
          >
            <FaTwitter />
            <span>Twitter</span>
          </Link>
          <Link
            href="/"
            className="bg-color-secondary flex items-center gap-[2px] dark:bg-color-white text-color-white dark:text-color-black px-2 py-1"
          >
            <FaInstagram />
            <span>Instagram</span>
          </Link>
          <Link
            href="/"
            className="bg-[#e7e7ee2c] flex items-center gap-[2px] dark:text-color-black px-2 py-1"
          >
            <FaYoutube className="text-[red]" />
            <span className="text-[black]">Youtube</span>
          </Link>
        </div>
        <div>
          <p className=" items-center gap-2  text-sm hidden  md:block ">
            <span className="text-color-white text-2xl">👈🏻</span>
            <span>Support “Rdm” Dengan Like & Share</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarBawa;
