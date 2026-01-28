import { useState } from "react"
import { Loader } from "../components/shared/Loader"
import { useGender } from "../hooks/useGender"
import { AnimeGridDirectory } from "../components/directory/AnimeGridDirectory"
import { GridGenders } from "../components/directory/GridGenders"
import { useAnimeByGender } from "../hooks/useAnimeByGender"
import { Pagination } from "../components/shared/Pagination"


export const Directory = () => {

  const [currentOption, setCurrentOption] = useState('All')
  const [page, setPage] = useState(1)

  const {data: genders, isLoading} = useGender()

  const handleChangeGender = (gender) => {
    setCurrentOption(gender)
    setPage(1)
  }

  const handleChange = (e) => {
    setCurrentOption(e.target.value)
  }

  const {data: animes, totalAnimes, isLoading: isLoadingAnimes, isError} = useAnimeByGender(currentOption, page)

  console.log(totalAnimes)
    

  if(isLoading || !genders || isLoadingAnimes) return <Loader />

  if(isError) return <div className="flex justify-center items-center my-20 mx-auto text-red-500">Error</div>

  return (
    <div className="w-full flex flex-col justify-center text-white mb-10">

      {/* Muestra los generos en pantalla grande */}
      <div className="hidden md:flex">
        <GridGenders handleChangeGender={handleChangeGender} genders={genders} />
      </div>

      {/* Muestra los generos en mobiles */}
      <div className="md:hidden flex justify-center">
        <select className="w-1/2 mx-10 bg-zinc-800 p-2 rounded-lg border border-purple-500 outline-none focus:ring-2 focus:ring-purple-600 " onChange={handleChange}>
          <option value="All">All</option>
          {
            genders.map(gender => (
              <option key={gender.id} value={gender.name}>{gender.name}</option>
            ))
          }
        </select>
      </div>

      <div className="flex items-center my-6">
        <div className="h-8 w-1 bg-purple-500 mx-4 rounded-sm" />
        <h2 className="text-xl md:text-3xl flex items-center font-medium text-left">Direcctorio de Animes</h2>
      </div>

      <AnimeGridDirectory animes={animes} isLoading={isLoading} />

        <Pagination setPage={setPage} page={page} totalItems={totalAnimes} />

    </div>
  )
}