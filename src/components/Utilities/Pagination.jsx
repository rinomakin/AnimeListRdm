import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="w-11/12 m-auto justify-center flex gap-4 py-6 font-bold">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="text-[black] dark:text-[white]"
        >
          Prev
        </button>
      )}
      <div className="text-[black]  dark:text-[white]">
        {page} of {lastPage}
      </div>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="text-[black] dark:text-[white]"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
