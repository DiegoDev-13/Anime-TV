import { useState } from "react"
import { SearchDashboard } from "../../components/dashboard/SearchDashboard"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { NoSelected } from "../../components/dashboard/NoSelected"
import { GridEpisodesSelected } from "../../components/dashboard/anime/GridEpisodesSelected"
import { CardSeasonSelected } from "../../components/dashboard/anime/CardSeasonSelected"
import { Separator } from "../../components/shared/Separator"
import { FormAddNewEpisode } from "../../components/dashboard/anime/FormAddNewEpisode"
import { CardSeasonsResults } from "../../components/dashboard/anime/CardSeasonsResults"

export const ManageEpisodeDashboard = () => {

  const [searchResults, setSearchResults] = useState([])
  const [animeSelected, setAnimeSelected] = useState(null)

  const handleSeleted = (anime) => {
      setAnimeSelected(anime)
  }

  const handleCloseSeleted = () => {
      setAnimeSelected(null)
     setSearchResults([])
  }

  return (
    <div className="flex flex-col w-full">
        <div className="flex justify-center items-center">
          <SearchDashboard title='Busca una temporada' table='seasons' setSearchResults={setSearchResults} nameSearch='name_season' setAnimeSelected={setAnimeSelected} />
        </div>

        <div className="flex flex-col my-6 space-y-4">
          <h2 className="text-white text-2xl font-semibold ">Busca y selecciona una temporada a la cual agregar un nuevo capítulo</h2>

          {
            animeSelected 
              ? <div className="p-4 rounded-lg border border-stone-400 flex flex-col space-y-4 bg-purple-700/5 relative">
                    <div className="flex">
                        <span className="py-1 px-2 text-purple-600 font-semibold bg-purple-700/20 w-60 flex justify-center items-center rounded-lg border border-purple-700">
                            Temporada Seleccionada
                            <MdOutlineKeyboardDoubleArrowRight size={30} />
                            </span>
                        <span className="py-1 px-2 text-green-600 font-semibold bg-green-700/20 w-50 flex justify-center items-center rounded-lg border border-green-700 ml-4">{animeSelected.name_season}</span>
                        <button type="button" className="text-white absolute top-3 right-3 cursor-pointer" onClick={handleCloseSeleted}>
                            <IoCloseSharp size={25} />
                        </button>
                    </div>
                    <CardSeasonSelected anime={animeSelected} />
                    <GridEpisodesSelected animeSelected={animeSelected} />
                </div>
              : searchResults.length > 0 
                  ?  searchResults.map(anime => (
                  <CardSeasonsResults key={anime.id} anime={anime} handleSeleted={handleSeleted} />
                  ))
                  :   <NoSelected text='No hay temporada seleccionada' /> 

          }
        </div>

        <Separator />

        {
            animeSelected && <FormAddNewEpisode title="Agregar nueva capitulo" animeSelected={animeSelected} setAnimeSelected={setAnimeSelected} />
        }
    </div>
  )
}