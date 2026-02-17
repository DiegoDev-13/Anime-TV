import { useParams } from "react-router-dom"
import { useAnime } from "../hooks/useAnime"
import { AnimeInfo } from "../components/anime-details/AnimeInfo"
import { Loader } from "../components/shared/Loader"
import { Separator } from '../components/shared/Separator'
import { AnimeListEpisodes } from "../components/anime-details/AnimeListEpisodes"
import { AnimeMoreInfo } from "../components/anime-details/AnimeMoreInfo"
import { GridComments } from "../components/shared/GridComments"
import { Comments } from "../components/anime-details/Comments"
import { useUser } from "../hooks/auth/useUser"
import { ErrorPage } from "../components/shared/ErrorPage"
import { useUserStore } from "../store/useUserStore"

export const AnimeDetail = () => {

    const {slug} = useParams()

    const {data: anime, isLoading, isError, error} = useAnime(slug)
    const {session, isLoading: isLoadingSession} = useUserStore()
    const {user, isLoading: isLoadingUser} = useUser(session?.user.id)

    if(isLoading || isLoadingSession || isLoadingUser) return <Loader />

  if(isError || !anime) return <ErrorPage error={error.message} />

  return (
    <div className="">
      <title>{`${anime?.name_season} Sub Español Online gratis - AnimeVista`}</title>
        <AnimeInfo anime={anime} session={session}/>

        <Separator />

        <div className="w-full flex flex-wrap gap-2 md:gap-8 mb-0 md:mb-6">
          <AnimeListEpisodes episodes={anime.episodes} />

          <div className="flex flex-col w-full md:w-auto mt-3">
            <AnimeMoreInfo studio={anime.studio} status={anime.streaming} year={anime.year} />

            <GridComments comments={anime.season_comments} />
          </div>


        </div>
          <Comments session={session} user={user} seasonId={anime.id}/>
    </div>
  )
}