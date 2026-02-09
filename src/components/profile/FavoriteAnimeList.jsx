import { MdFavorite, MdMoodBad } from "react-icons/md";
import { VscArrowRight } from "react-icons/vsc";
import { CardFavoriteAnime } from "./CardFavoriteAnime";
import { useAnimeFavorites } from "../../hooks/useAnimeFavorites";
import { useState } from "react";
import { Loader } from "../shared/Loader";
import { useNavigate } from "react-router-dom";

export const FavoriteAnimeList = ({userId}) => {

    const [page, setPage] = useState(1)

    const navigate = useNavigate()

    const {data: favorites, isLoading, isError, error} = useAnimeFavorites(userId, page)

    if(isLoading || !favorites) return <Loader />

  return (
    <div className="flex flex-col w-full my-4">
        <div className="my-4 mx-auto md:mx-2">
            <div className="flex items-center gap-2">
                <MdFavorite size={28} className="text-purple-700" />
                <h2 className="text-2xl md:text-3xl text-white font-semibold"> Animes favoritos</h2>
            </div>
            <p className="text-stone-400 text-sm">Tienes {favorites?.length || 0} animes guardadas en tu colección</p>
        </div>
        
        {
            isLoading 
                ? <Loader />
                : favorites?.length === 0 
                    ? <div className="flex flex-col justify-center items-center my-20 w-[50%] mx-auto">
                            <MdMoodBad size={120} className="text-purple-500"/>
                            <h3 className="text-white text-3xl font-semibold mb-4">Tu lista de favoritos esta vacia!</h3>
                            <p className="text-stone-300 text-center text-[15px]">Parece que aún no has guardado nada. Empieza a explorar nuestro directorio para encontrar tu próximo anime favorito.</p>
                            <button className="flex justify-center items-center gap-2 bg-purple-700 text-white font-semibold py-2 px-4 rounded-3xl mt-4 cursor-pointer hover:bg-purple-800 transition-all duration-300" onClick={() => navigate('/directorio')}>
                                Directorio de Animes
                                <VscArrowRight size={25} />
                            </button>
                        </div>
                    : <div className="w-full flex flex-col justify-center items-center space-y-6">
                        {
                            favorites.map((favorite) => (
                                <CardFavoriteAnime key={favorite.id} favorite={favorite} />
                            ))
                        }
                    </div>  
        }

    </div>
  )
}