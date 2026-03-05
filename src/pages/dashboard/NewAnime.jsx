import { useState } from "react"
import { SearchDashboard } from "../../components/dashboard/SearchDashboard"
import { Separator } from "../../components/shared/Separator"
import { CardAnimeSeleted } from "../../components/dashboard/anime/CardAnimeSeleted"
import { CardAnimeResults } from "../../components/dashboard/anime/CardAnimeResults"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { ModalAddAnime } from "../../components/dashboard/anime/ModalAddAnime"
import { useGlobalStore } from "../../store/global.store"

export const NewAnime = () => {

    const [SearchResults, setSearchResults] = useState([])
    const [animeSeleted, setAnimeSeleted] = useState(null)
    
    const setActiveModalNewAnime = useGlobalStore(state => state.setActiveModalNewAnime)

    const handleSeleted = (anime) => {
        setAnimeSeleted(anime)
    }

    const handleCloseSeleted = () => {
        setAnimeSeleted(null)
        setSearchResults([])
    }

  return (
    <div className="w-full flex flex-col relative">
        <div className="w-full">
            <div className="w-full flex justify-around items-center">
                <button className="py-2 px-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 cursor-pointer" onClick={() => setActiveModalNewAnime(true)}>Agregar nuevo anime</button>
                <SearchDashboard setSearchResults={setSearchResults} table='animes' nameSearch='name' title='Buscar anime' setAnimeSeleted={setAnimeSeleted} />
            </div>
            <div className="w-full space-y-4 my-4">
                <h3 className="text-stone-300 text-2xl font-bold">Selecciona un anime al cual agregar nueva temporada o agregalo</h3>
                {
                    animeSeleted
                        ? <div className="p-4 rounded-lg border border-stone-400 flex flex-col space-y-4 bg-purple-700/5 relative">
                            <div className="flex">
                                <span className="py-1 px-2 text-purple-600 font-semibold bg-purple-700/20 w-50 flex justify-center items-center rounded-lg border border-purple-700">
                                    Anime Seleccionado
                                    <MdOutlineKeyboardDoubleArrowRight size={30} />
                                    </span>
                                <span className="py-1 px-2 text-green-600 font-semibold bg-green-700/20 w-50 flex justify-center items-center rounded-lg border border-green-700 ml-4">{animeSeleted.name}</span>
                                <button type="button" className="text-white absolute top-3 right-3 cursor-pointer" onClick={handleCloseSeleted}>
                                    <IoCloseSharp size={25} />
                                </button>
                            </div>
                            <CardAnimeSeleted anime={animeSeleted} />
                        </div>
                        : SearchResults.length > 0 
                            ?  SearchResults.map(anime => (
                            <CardAnimeResults key={anime.id} anime={anime} handleSeleted={handleSeleted} />
                            ))
                            : <h2 className="text-stone-400">No hay seleccionado</h2>
                }
            </div>
        </div>
        <Separator />
    </div>
  )
}