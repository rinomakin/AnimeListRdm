import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="absolute  w-full min-h-screen flex justify-center items-center bg-color-black ">
        <div className=" text-center ">
          <h2 className="font-bold text-2xl text-color-white">404</h2>
          <h3 className="bg-color-accent px-20 my-5 rounded-md">
            Halaman Tidak Di Temukan
          </h3>
          <Link
            href="/"
            className="boder border-[white] px-6 py-1 rounded-md text-color-white font-semibold bg-color-secondary"
          >
            Kembali
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page;
