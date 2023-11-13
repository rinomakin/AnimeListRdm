"use client";
import React, { useEffect, useState } from "react";
import AnimeList from "@/components/AnimeList";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Utilities/Pagination";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-14">
          <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
          <AnimeList api={topAnime} />
          <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
