"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <button
        className="  top-4 z-50 p-2 bg-none border-none rounded-md "
        onClick={handleMenuClick}
      >
        {isOpen ? (
          <FaBars className="text-[white]" />
        ) : (
          <FaBars className="text-[white]" />
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed top-[-52px] left-[-23px] w-[250px] bg-color-accent h-screen bg-white shadow-lg">
          <button
            className="  w-full flex justify-end pr-4 rounded-md bg-gray-200"
            onClick={handleMenuClick}
          >
            <FaTimes className="mt-6  bg-color-secondary w-5 h-5 rounded-full  " />
          </button>
          <ul className="mt-8 ml-4 space-y-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="text-gray-800 hover:text-gray-600"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                className="text-gray-800 hover:text-gray-600"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default HamburgerMenu;
