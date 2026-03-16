import {Loader} from '../../shared/Loader'
import { useGetEpisodesById } from "../../../hooks/dashboard/useGetEpisodesById"
import { CardEpisodesSeasonSelected } from "./CardEpisodesSeasonSelected"

export const GridEpisodesSelected = ({animeSelected}) => {

    const {data: episodes, isLoading, count, isError} = useGetEpisodesById(animeSelected?.id)

  return (
    <div className="w-full p-4">
        <h2 className="text-white text-2xl font-semibold">Capitulos de Temporada</h2>
        <span className='text-stone-300 my-1 font-semibold'>Total de capitulos: {count}</span>

        {
            isLoading 
                ? <Loader />
                : episodes?.length >= 1 
                ? <div className="my-4 flex flex-col space-y-4 w-full h-140 overflow-auto">
                    {
                        episodes.map(episode => (
                            <CardEpisodesSeasonSelected episode={episode} />

                        ))
                    }
                </div>
                : <h2 className="text-stone-400 text-sm my-3">No hay capitulos asociadas a esta temporada</h2>
        }
    </div>
  )
}