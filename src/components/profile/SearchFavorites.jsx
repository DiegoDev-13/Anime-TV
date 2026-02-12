import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import { getSearchFavorites } from "../../actions/AnimeFavorites"

export const SearchFavorites = ({setSearchResults}) => {
    const [searchTerm, setsearchTerm] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(searchTerm.trim()) {
            const data = await getSearchFavorites(searchTerm)
            setSearchResults(data)
        }
    }
    
    const handleClear = () => {
        setsearchTerm('')
        setSearchResults([])
    }

  return (
    <div className="w-[60%]">
        <form className="relative flex justify-center items-center space-x-4" onSubmit={handleSubmit}>
            <button type="submit" className="absolute top-2.5 left-3 cursor-pointer text-stone-400 hover:text-stone-200"><IoSearch size={20} /></button>
            <input type="text" placeholder="Buscar anime favorito" value={searchTerm} onChange={e => setsearchTerm(e.target.value)} className="text-stone-200 bg-surface-dark pl-10 py-2 px-3 w-full rounded-3xl outline-none"/>
            <button className="py-1.5 px-3 text-red-500 flex justify-center items-center rounded-xl border border-red-500 cursor-pointer hover:bg-red-800/30 transition-colors duration-300" onClick={() => handleClear()}>Limpiar</button>
        </form>
    </div>
  )
}