"use client";
import Link from "next/link";
import { FaAdn, FaAngleDown, FaBars, FaSistrix, FaTimes } from "react-icons/fa";
import InputSearch from "./inputSearch";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";
import DarkMode from "./DarkMode";
const Navbar = () => {
  // Scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  // search Responsive
  const [showInputSharch, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showInputSharch);
  };

  return (
    <>
      <div
        className={`fixed items-center  flex px-5 md:px-14 z-30 py-3 justify-between bg-[#3da1ff] dark:bg-color-call border-t-0 border-r-0 border-l-0  border-b-[#ffffff6b] border dark:border-b-color-secondary w-full transition-all duration-100 ease-in-out ${
          visible ? "top-0" : "hidden"
        }`}
      >
        <div className="lg:hidden flex flex-1">
          <HamburgerMenu />
        </div>
        <div className="flex-1 justify-center lg:justify-start flex">
          <Link
            href="/"
            className="text-2xl border text-color-black md:pr-5 dark:text-color-white md:border border-t-0 border-l-0 border-b-0 border-r-color-call border-none dark:border-r-color-white  font-semibold"
          >
            Rdm
          </Link>
        </div>

        <div className=" flex-1 justify-center hidden lg:block items-center gap-5 ">
          <div className="flex gap-5 items-center">
            <div>
              <Link href="/" className="text-[black] dark:text-[white] ">
                Home
              </Link>
            </div>
            <div>
              <Link href="/about" className="text-[black] dark:text-[white] ">
                About
              </Link>
            </div>

            <div className="relative inline-block group">
              <div className=" cursor-pointer text-[black] dark:text-[white]  py-3  flex justify-center items-center  rounded  ">
                <span>Anime</span>
                <FaAngleDown />
              </div>

              <div className="hidden group-hover:block absolute top-3 left-0 mt-7 bg-white bg-[white]  rounded shadow-md">
                <ul className="py-2 grid grid-col-3">
                  <Link href="/" className="px-4 py-2 hover:bg-gray-100">
                    Populer
                  </Link>
                  <Link href="/" className="px-4 py-2 hover:bg-gray-100">
                    Movie
                  </Link>
                  <Link href="/" className="px-4 py-2 hover:bg-gray-100">
                    Anime
                  </Link>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="text-[black] dark:text-[white]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-5">
          <div className="lg:block hidden">
            <InputSearch />
          </div>

          <div>
            <button
              className="bg-blue-500 text-white  lg:hidden flex py-2 rounded"
              onClick={toggleComponent}
            >
              <FaSistrix className="text-[black] dark:text-[white] font-bold text-[20px]" />
            </button>
            {showInputSharch && (
              <div className="absolute top-0 h-screen lg:hidden backdrop-blur w-full left-0 m-auto  flex items-center justify-center">
                <div className="lg:hidden flex flex-col gap-[40px]">
                  <button
                    className="absolute top-20 right-24 flex bg-[blue] px-[12px] text-[white]"
                    onClick={toggleComponent}
                  >
                    Close
                    <FaTimes className="text-[red] text-[23px]" />
                  </button>
                  <InputSearch />
                </div>
              </div>
            )}
          </div>
          <DarkMode />
        </div>
      </div>
    </>
  );
};
export default Navbar;
