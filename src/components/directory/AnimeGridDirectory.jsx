import { FaFire } from "react-icons/fa"
import { CardAnime } from "../shared/CardAnime"
import { useAnimeByGender } from "../../hooks/useAnimeByGender"
import { Loader } from "../shared/Loader"

export const AnimeGridDirectory = ({animes,isLoading}) => {

    if(isLoading || !animes) return <Loader />

  return (
    <div className="mt-12 mb-6 text-white w-full flex flex-col justify-center">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 space-y-14 mt-6 mx-auto">
            {
                animes.map(item => (
                    <CardAnime key={item.id} item={item} />
                ))
            }

        </div>


    </div>
  )
}