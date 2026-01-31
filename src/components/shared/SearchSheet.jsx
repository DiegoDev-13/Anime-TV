import { IoCloseOutline, IoSearch } from "react-icons/io5"
import { useGlobalStore } from "../../store/global.store"
import { useState } from "react"
import { searchAnime } from "../../actions/anime"
import { CardAnimeSearch } from './CardAnimeSearch'

export const SearchSheet = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const setActiveSheetSearch = useGlobalStore(state => state.setActiveSheetSearch)

  const handleSearch = async (e) => {
    e.preventDefault()

    if(searchTerm.trim()) {
      const animes = await searchAnime(searchTerm)
      setSearchResults(animes)
    }
  } 
  

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end text-white transition-all duration-300" onClick={() => setActiveSheetSearch(false)}>
        <div className="bg-surface-dark w-full md:w-[45%] h-full animated-slideIn" onClick={e => e.stopPropagation()}>
          <div className="py-4 mx-4 border-b border-slate-400 flex justify-between items-center w-[95%]">
            <form className="flex justify-center items-center gap-2 w-full mr-6" onSubmit={handleSearch}>
              <IoSearch size={20} className="cursor-pointer" onClick={handleSearch}/>
              <input type="text" placeholder="¿Que anime buscas?" className="py-2 w-full outline-none text-sm text-stone-200" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            </form>
            <IoCloseOutline size={30} className="cursor-pointer" onClick={() => setActiveSheetSearch(false)}/>
          </div>
          <div className="flex flex-col w-[95%] my-8 mx-4 space-y-4 h-full overflow-auto custom-scrollbar">

            {
              searchResults.length > 0 ? searchResults.map(item => (
                <CardAnimeSearch key={item.id} item={item} />
              )) : (
                <span className="text-[16px] text-stone-200 text-center py-2">No hay resultados</span>
              )
            }
            
          </div>
        </div>  
    </div>
  )
}