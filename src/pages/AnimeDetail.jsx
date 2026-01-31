import { useParams } from "react-router-dom"
import { useAnime } from "../hooks/useAnime"
import { AnimeInfo } from "../components/anime-details/AnimeInfo"
import { Loader } from "../components/shared/Loader"
import { Separator } from '../components/shared/Separator'
import { AnimeListEpisodes } from "../components/anime-details/AnimeListEpisodes"
import { AnimeMoreInfo } from "../components/anime-details/AnimeMoreInfo"
import { GridComments } from "../components/shared/GridComments"

export const AnimeDetail = () => {

    const {slug} = useParams()

    const {data: anime, isLoading, isError} = useAnime(slug)

    if(isLoading || !anime) return <Loader />

  if(isError) return <div className="my-30 text-center text-red-500 text-2xl">Error</div>

  return (
    <div className="">
        <AnimeInfo anime={anime} />

        <Separator />

        <div className="w-full flex flex-wrap gap-2 md:gap-8 mb-0 md:mb-6">
          <AnimeListEpisodes episodes={anime.episodes} />

          <div className="flex flex-col w-full md:w-auto mt-3">
            <AnimeMoreInfo studio={anime.studio} status={anime.streaming} year={anime.year} />

            <GridComments comments={anime.season_comments} />
          </div>
        </div>
    </div>
  )
}