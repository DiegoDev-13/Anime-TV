import { MdFavorite, MdMoodBad } from "react-icons/md";
import { VscArrowRight } from "react-icons/vsc";
import { CardFavoriteAnime } from "./CardFavoriteAnime";
import { useAnimeFavorites } from "../../hooks/useAnimeFavorites";
import { useState } from "react";
import { Loader } from "../shared/Loader";
import { useNavigate } from "react-router-dom";
import {Pagination} from '../shared/Pagination'
import { SearchFavorites } from "./SearchFavorites";

export const FavoriteAnimeList = ({userId}) => {

    const [page, setPage] = useState(1)
    const [searchResults, setSearchResults] = useState([])

    const navigate = useNavigate()

    const {data: favorites, isLoading, isError, error, totalFavorites} = useAnimeFavorites(userId, page)

    if(isLoading) return <Loader />

    if(isError) return <div className="my-20 flex justify-center items-center text-xl text-red-500 font-semibold">Error al cargar favoritos</div>

  return (
    <div className="flex flex-col w-full my-4">
        <div className="my-4 flex flex-col md:flex-row justify-between items-center mx-auto md:mx-2 ">
            <div>
                <div className="flex items-center gap-2">
                    <MdFavorite size={28} className="text-purple-700" />
                    <h2 className="text-2xl md:text-3xl text-white font-semibold"> Animes favoritos</h2>
                </div>
                <p className="text-stone-400 text-sm">Tienes {totalFavorites || 0} animes guardadas en tu colección</p>
            </div>
            <SearchFavorites setSearchResults={setSearchResults} />
        </div>

        {
            searchResults.length >= 1 
                ? <div className="w-full flex flex-col justify-center items-center space-y-6">
                    {
                        searchResults.map((item, index) => (
                            <CardFavoriteAnime key={item.id} favorite={item} setSearchResults={setSearchResults}/>
                        ))
                    }
                </div>
                : isLoading 
                    ? <Loader />
                    : favorites?.length === 0 
                        ? <div className="flex flex-col justify-center items-center my-10 md:my-20 w-auto md:w-[50%] mx-6 md:mx-auto">
                                <MdMoodBad size={120} className="text-purple-500"/>
                                <h3 className="text-white text-xl md:text-3xl text-center md:text-auto font-semibold mb-4">Tu lista de favoritos esta vacia!</h3>
                                <p className="text-stone-300 text-center text-xs md:text-[15px]">Parece que aún no has guardado nada. Empieza a explorar nuestro directorio para encontrar tu próximo anime favorito.</p>
                                <button className="flex justify-center items-center gap-2 bg-purple-700 text-white font-semibold py-2 px-4 rounded-3xl mt-4 cursor-pointer hover:bg-purple-800 transition-all duration-300" onClick={() => navigate('/directorio')}>
                                    Directorio de Animes
                                    <VscArrowRight size={25} />
                                </button>
                            </div>
                        : <div className="w-full flex flex-col justify-center items-center space-y-6">
                            {
                                favorites.map((favorite) => (
                                    <CardFavoriteAnime key={favorite.id} favorite={favorite} setSearchResults={setSearchResults} />
                                ))
                            }
                        </div>  
        }   

        {
            totalFavorites >= 1 && searchResults.length === 0 && <Pagination page={page} setPage={setPage} totalItems={totalFavorites} itemsPerPage={5}/>
        }

    </div>
  )
}