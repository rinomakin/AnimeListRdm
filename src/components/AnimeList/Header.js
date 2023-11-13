import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className=" sm:px-12 px-3 justify-between flex  pt-1 items-center ">
      <h3 className=" text-color-black dark:text-color-white font-bold py-4 ">
        {title}
      </h3>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className=" text-color-white dark:text-color-white md:font-medium font-normal bg-color-secondary px-2 rounded-md hover:bg-color-black "
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
