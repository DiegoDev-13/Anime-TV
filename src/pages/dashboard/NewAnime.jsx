import { useState } from "react"
import { SearchDashboard } from "../../components/dashboard/SearchDashboard"
import { Separator } from "../../components/shared/Separator"
import { CardAnimeSelected } from "../../components/dashboard/anime/CardAnimeSelected"
import { CardAnimeResults } from "../../components/dashboard/anime/CardAnimeResults"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { useGlobalStore } from "../../store/global.store"
import { GridSeasonsSelected } from "../../components/dashboard/anime/GridSeasonsSelected"
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import { FormAddNewSeason } from "../../components/dashboard/anime/FormAddNewSeason"
import { NoSelected } from "../../components/dashboard/NoSelected"

export const NewAnime = () => {

    const navigate = useNavigate()

    const [SearchResults, setSearchResults] = useState([])
    const [animeSelected, setAnimeSelected] = useState(null)
    
    const setActiveModalNewAnime = useGlobalStore(state => state.setActiveModalNewAnime)

    const handleSeleted = (anime) => {
        setAnimeSelected(anime)
    }

    const handleCloseSeleted = () => {
        setAnimeSelected(null)
        setSearchResults([])
    }

  return (
    <div className="w-full flex flex-col relative">
        <div className="w-full">
            <div className="w-full flex justify-around items-center">
                <button className="p-2 border border-purple-700 rounded-lg text-purple-600 hover:bg-purple-700/15 cursor-pointer transition-all duration-300" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={30} />
                </button>
                <button className="flex items-center gap-3 py-2 px-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 cursor-pointer" onClick={() => setActiveModalNewAnime(true)}>
                    <IoMdAdd size={20} className='font-bold' />
                    Agregar nuevo anime
                </button>
                <SearchDashboard setSearchResults={setSearchResults} table='animes' nameSearch='name' title='Buscar anime' setAnimeSelected={setAnimeSelected} />
            </div>
            <div className="w-full space-y-4 my-4">
                <h3 className="text-stone-300 text-2xl font-bold">Selecciona un anime al cual agregar nueva temporada o agregalo</h3>
                {
                    animeSelected
                        ? <div className="p-4 rounded-lg border border-stone-400 flex flex-col space-y-4 bg-purple-700/5 relative">
                            <div className="flex">
                                <span className="py-1 px-2 text-purple-600 font-semibold bg-purple-700/20 w-50 flex justify-center items-center rounded-lg border border-purple-700">
                                    Anime Seleccionado
                                    <MdOutlineKeyboardDoubleArrowRight size={30} />
                                    </span>
                                <span className="py-1 px-2 text-green-600 font-semibold bg-green-700/20 w-50 flex justify-center items-center rounded-lg border border-green-700 ml-4">{animeSelected.name}</span>
                                <button type="button" className="text-white absolute top-3 right-3 cursor-pointer" onClick={handleCloseSeleted}>
                                    <IoCloseSharp size={25} />
                                </button>
                            </div>
                            <CardAnimeSelected anime={animeSelected} />
                            <GridSeasonsSelected animeSelected={animeSelected} />
                        </div>
                        : SearchResults.length > 0 
                            ?  SearchResults.map(anime => (
                            <CardAnimeResults key={anime.id} anime={anime} handleSeleted={handleSeleted} />
                            ))
                            :   <NoSelected text='No hay anime seleccionado' /> 
                }
            </div>
        </div>
        <Separator />

        {
            animeSelected && <FormAddNewSeason title="Agregar nueva temporada" idAnimeSelected={animeSelected.id} />
        }

    </div>
  )
}