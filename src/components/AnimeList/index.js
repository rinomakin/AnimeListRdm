import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-7 sm:grid-cols-5   grid-cols-4 gap-4 sm:w-11/12 pb-20 md:px-0 px-3 m-auto">
        {api.data?.map((anime) => {
          return (
            <Link
              key={anime.mal_id}
              href={`/${anime.mal_id}`}
              className="cursor-pointer   "
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src={anime.images.webp.image_url}
                  alt="..."
                  width={350}
                  height={350}
                  className="w-full max-h-80 object-cover object-left-top rounded-md "
                />
                <h3 className=" text-color-white py-2 pl-1 absolute bottom-3  md:text-sm text-center text-xs rounded-b-md">
                  {anime.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default AnimeList;
