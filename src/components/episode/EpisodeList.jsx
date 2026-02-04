import { useAllEpisodes } from "../../hooks/useAllEpisodes"
import {CardListEpisode} from './CardListEpisode'
import { Loader } from "../shared/Loader"

export const EpisodeList = ({episodes}) => {
  return (
    <div className="w-full lg:w-60 xl:w-80 h-140 lg:h-160 xl:h-200 flex flex-col bg-surface-dark border border-stone-800 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl font-medium">Episodios</h2>
        <span className="bg-surface-dark-highlight py-2 px-4 rounded-lg text-stone-300 text-xs">{episodes.length} Episodios</span>
      </div>
      <div className="w-full flex flex-col space-y-3 h-full overflow-auto custom-scrollbar mt-6">
        {
          episodes.map((episode) => (
            <CardListEpisode key={episode.id} episode={episode} />
          ))
        }
      </div>
    </div>
  )
}