import { FaRegTrashAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Loader } from "../shared/Loader";
import { useRemoveFavorite } from "../../hooks/favorites/useRemoveFavorite";

export const CardFavoriteAnime = ({favorite, setSearchResults}) => {

  const navigate = useNavigate()

  const {mutate, isPending, isError: isErrorRemove} = useRemoveFavorite()
  
  const handleRemove = (e) => {
    e.stopPropagation()
    mutate({animeId: favorite.id, userId: favorite.user_id, seasonId: favorite.season_id})
    setSearchResults([])
  }

  if(isPending) return <Loader />

  return (
    <div className="w-full h-130 md:h-70 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:justify-around items-center relative bg-image-detail rounded-2xl p-4 hover:translate-x-3 transition-all duration-300 cursor-pointer" onClick={() => navigate(`/anime/${favorite.slug}`)}>
        <img src={favorite.image} alt={favorite.title} className="w-45 h-65 md:h-full rounded-lg"/>
        <div className="flex flex-col ml-8 space-y-3 w-[60%]">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center gap-1 bg-amber-300/30 w-14 rounded-lg text-yellow-300 font-semibold"><IoStar size={12} className="text-yellow-300" />{favorite.score}</span>
            <div className="h-1 w-1 bg-stone-500 rounded-full" />
            <p className="text-stone-500 font-medium">{favorite.year}</p>
            <div className="h-1 w-1 bg-stone-500 rounded-full" />
            <p className="text-stone-500 font-medium">TV</p>
          </div>
          <h3 className="text-white text-xl font-medium">{favorite.title}</h3>
          <div className="md:flex flex-wrap hidden items-center gap-3">
            {
              favorite.genders.map((item, index) => (
                  <div key={index} className={`text-xs md:text-[16px] py-1.5 px-4 ${index === 0 ? 'bg-purple-950' : 'bg-surface-dark'} rounded-xl text-stone-400 font-bold border border-stone-600`}>
                  <p>{item}</p>
                </div>
              ))
            }
          </div>
          <p className="line-clamp-2 text-stone-400 text-[15px]">{favorite.description}</p>
        </div>
        <button className="py-1.5 px-3 text-red-500 flex justify-center items-center rounded-xl border border-red-500 cursor-pointer hover:bg-red-800/30 transition-colors duration-300" onClick={handleRemove}><FaRegTrashAlt size={20} className="text-red-500 mr-2"/>Eliminar</button>
    </div>
  )
}