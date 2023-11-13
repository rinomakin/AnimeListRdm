"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaSistrix } from "react-icons/fa";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const heandelSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative ">
        <input
          ref={searchRef}
          onKeyDown={heandelSearch}
          placeholder="Search.."
          type="text"
          className=" pl-1 pr-8 w-full   py-1 rounded-md outline-none "
        />
        <button onClick={heandelSearch} className="absolute right-1 top-1  ">
          <Link href={`/search/`}>
            <FaSistrix className="text-blue-950 font-bold text-2xl  " />
          </Link>
        </button>
      </div>
    </>
  );
};
export default InputSearch;
