import { IoMdAdd } from "react-icons/io"
import { Separator } from "../../components/shared/Separator"
import { TableAnimeManage } from "../../components/dashboard/anime/TableAnimeManage"
import { useGetAnimesDashboard } from "../../hooks/dashboard/useGetAnimesDashboard"
import { useState } from "react"
import {Loader} from '../../components/shared/Loader'
import { Pagination } from "../../components/shared/Pagination"
import { useGender } from "../../hooks/useGender"
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
import { SearchDashboard } from "../../components/dashboard/SearchDashboard"
import { AnimeResults } from "../../components/dashboard/home/AnimeResults"
import { ErrorPage } from "../../components/shared/ErrorPage"

export const ManageAnimeDashboard = () => {

  const navigate = useNavigate()

  const [page, setPage] = useState(1)
  const [currentOption, setCurrentOption] = useState('All')
  const [SearchResults, setSearchResults] = useState([])

  const {data: animes, totalAnimes, isLoading, isError, refetch, isFetching} = useGetAnimesDashboard(currentOption, page)
  const {data: genders, isLoading: isLoadingGenders, isErrorGenders} = useGender()
  
  
  const handleChange = (e) => {
    setCurrentOption(e.target.value)
  }
  
  
  const handleReload = () => {
    refetch()
    setCurrentOption('All')
  }

  if(isLoading || isLoadingGenders || isFetching) return <Loader />

  if(isError || isErrorGenders) return <ErrorPage />

  return (
    <div className="flex flex-col w-full mb-6">
      <div className='w-full my-2 flex justify-between '>
        <h2 className='text-white self-start text-2xl font-semibold mb-2'>Administrar Animes</h2>
        <button type='button' className='flex justify-center items-center gap-1.5 py-1.5 px-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300' onClick={() => navigate('/dashboard/administrar-animes/nuevo')} >
          <IoMdAdd size={20} className='font-bold' />
          Agregar Anime
        </button>
      </div>
      <Separator />
      <div className="w-full flex justify-between my-6">
        <select className="w-40 bg-slate-800 p-2 rounded-lg border border-stone-500 outline-none focus:ring-2 focus:ring-purple-600 text-white cursor-pointer" onChange={handleChange}>
          <option value='All' >Todos</option>
          {
            genders.map(gender => (
              <option key={gender.id} value={gender.name}>{gender.name}</option>
            ))
          }
        </select>

        <SearchDashboard setSearchResults={setSearchResults} table='seasons' title='Buscar anime' nameSearch='name_season' />
        
        <button className="bg-slate-800 text-stone-400 p-2 px-3 border border-stone-500 rounded-lg hover:bg-slate-700 hover:text-white cursor-pointer transition-all duration-300" onClick={handleReload}>
          <IoReload size={20} />
        </button>
      </div>
        
        {
          SearchResults.length > 0 
            ? <AnimeResults SearchResults={SearchResults} />
            : <>
              <TableAnimeManage data={animes} totalAnimes={totalAnimes} page={page} setPage={setPage} />

              <Pagination totalItems={totalAnimes} page={page} setPage={setPage} itemsPerPage={5} />
            </>
        }

    </div>
  )
}