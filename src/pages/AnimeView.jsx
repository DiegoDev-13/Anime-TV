import { useParams } from "react-router-dom"
import { useEpisode } from "../hooks/useEpisode"
import { Loader } from "../components/shared/Loader"
import { EpisodePlayer } from "../components/episode/EpisodePlayer"
import { EpisodeList } from "../components/episode/EpisodeList"
import { useAllEpisodes } from "../hooks/useAllEpisodes"
import { ErrorPage } from "../components/shared/ErrorPage"

export const AnimeView = () => {

    const { slug } = useParams() 

    const {data: episode, isLoading, isError, error} = useEpisode(slug)

    const {data: episodes, isLoading: isLoadingEpisodes} = useAllEpisodes(episode?.season_id)

    if(isLoading || isLoadingEpisodes) return <Loader />

    if(isError) return <ErrorPage error={error.message} />

  return (
    
    <div className=" w-full">
        <title>{`${episode?.title} ${episode?.episode_number} Sub Español Online gratis - AnimeVista`}</title>
        <div className="flex flex-wrap w-full space-y-4 ">
            <EpisodePlayer episode={episode || []} quantityEpisodes={episodes?.length || 0} slug={slug} />

            <EpisodeList episodes={episodes} />
        </div>
    </div>
  )
}