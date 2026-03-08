import { formatDate} from "../../../helpers"

export const CardSeasonsAnimeSelected = ({season}) => {
  return (
    <div className="w-full py-4 px-2 md:px-8 xl:px-14 flex justify-between items-center border border-stone-700 rounded-lg bg-[#2a2438] transition-all duration-300" >
            <div className="flex flex-col justify-center items-center bg-purple-700/10 border border-purple-800 p-3 rounded-lg">
                <p className="text-stone-400 font-semibold text-lg">Temporada</p>
                <span className="text-white text-3xl font-bold">#{season?.season}</span>
            </div>
            <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
                <img src={season?.image} loading="lazy" alt="" className="w-15 h-20 object-contain rounded-lg" />
                <div className="flex flex-col space-y-1">
                    <p className="text-white text-lg font-semibold">{season?.name_season}</p>
                    <p className="text-sm text-stone-400">{season?.gender[0]} - {season?.gender[1]} - {season?.gender[2]}</p>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
                <div className="flex flex-col self-end items-center">
                    <p className="text-sm text-stone-400">Fecha de agregado</p>
                    <p className="text-white font-semibold">{formatDate(season?.created_at)}</p>
                </div>
            </div>
            
        </div>
  )
}