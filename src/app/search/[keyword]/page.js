import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Navbar from "@/components/Navbar";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_ANIME_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      <Navbar />
      <section>
        <Header title={`Pencarian untuk ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
