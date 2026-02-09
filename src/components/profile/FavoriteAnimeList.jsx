import { MdFavorite } from "react-icons/md";
import { CardFavoriteAnime } from "./CardFavoriteAnime";

export const FavoriteAnimeList = ({favorites}) => {
    console.log(favorites)

  return (
    <div className="flex flex-col w-full my-4">
        <div className="flex items-center gap-2 my-4">
            <MdFavorite size={28} className="text-purple-700" />
            <h2 className="text-2xl md:text-3xl text-white font-semibold"> Animes favoritos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-6 mx-auto md:mx-14">
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />
            <CardFavoriteAnime />

        </div>
    </div>
  )
}