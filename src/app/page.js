import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Navbar from "@/components/Navbar";
import NavbarBawa from "@/components/Navbar/NavbarBawa";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_ANIME_API_BASE_URL}/top/anime?limit=14`
  );
  const topAnime = await response.json();
  return (
    <>
      <section>
        <Navbar />
        <NavbarBawa />
        <Header
          title="ANIME PALING POPULER"
          linkHref="/populer"
          linkTitle="Lihat Lebih » "
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="ANIME PALING POPULER"
          linkHref="/populer"
          linkTitle="Lihat Lebih » "
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};
export default Page;
