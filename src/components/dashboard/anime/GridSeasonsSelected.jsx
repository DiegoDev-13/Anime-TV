import { useGetSeasonsById } from "../../../hooks/dashboard/useGetSeasonsById"
import { CardSeasonsAnimeSelected } from "./CardSeasonsAnimeSelected"
import {Loader} from '../../shared/Loader'

export const GridSeasonsSelected = ({animeSelected}) => {

    // console.log(animeSelected?.id)
    const {data: seasons, isLoading, isError} = useGetSeasonsById(animeSelected?.id)

    console.log(seasons)

  return (
    <div className="">
        <h2 className="text-white text-2xl font-semibold">Temporadas de Anime</h2>

        {
            isLoading 
                ? <Loader />
                : seasons?.length >= 1 
                ? <div className="ml-6 my-4 flex flex-col space-y-4">
                    {
                        seasons.map(season => (
                            <CardSeasonsAnimeSelected key={season.id} season={season} />
                        ))
                    }
                </div>
                : <h2 className="text-stone-400 text-sm my-3">No hay temporadas asociadas a este anime</h2>
        }
    </div>
  )
}