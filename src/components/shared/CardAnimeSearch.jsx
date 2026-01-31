import { Link } from "react-router-dom"
import { useGlobalStore } from "../../store/global.store"

export const CardAnimeSearch = ({item}) => {

  const setActiveSheetSearch = useGlobalStore(state => state.setActiveSheetSearch)

  return (
    <Link to={`/anime/${item.slug_season}`} className="w-full bg-surface-dark-highlight h-40 p-4 flex justify-center items-center rounded-lg hover hover:scale-103 transition-all duration-300" onClick={() => setActiveSheetSearch(false)}>
        <div className="flex items-center w-full space-x-3"> 
            <img src={item.image} alt="" className="w-20 h-28 md:w-26 md:h-34" loading="lazy"/>
            <div className="flex flex-col space-y-2">
                <h3 className="text-sm md:text-lg font-bold capitalize">{item.name_season}</h3>
                <p className="text-[13px] md:text-sm text-stone-300 line-clamp-3">{item.description}</p>
            </div>
        </div>
    </Link>
  )
}