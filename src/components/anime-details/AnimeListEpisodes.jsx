import { CardAnimeList } from "./CardAnimeList"

export const AnimeListEpisodes = ({episodes}) => {
  return (
    <div className="flex flex-col flex-1 gap-2 md:gap-8">

        <div className="flex items-center mb-0 md:mb-2 w-full flex-initial">
            <div className="h-8 w-1 bg-purple-500 mx-4 rounded-sm" />
            <h2 className="text-xl md:text-3xl text-white self-start font-medium">Lista de Episodios</h2>
        </div>


        <div className="flex flex-col items-center overflow-auto custom-scrollbar space-y-6 md:space-y-4 py-4 h-120 md:h-180 mx-4 md:mx-0">            
            {
                episodes.map(episode => (
                    <CardAnimeList key={episode.id} episode={episode} />
                ))
            }

        </div>
    </div>
  )
}