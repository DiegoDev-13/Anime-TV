import toast from "react-hot-toast"
import { FaRegCopy } from "react-icons/fa"
import { formatDateAgo } from "../../../helpers"

export const CardSeasonsResults = ({anime, handleSeleted}) => {

    const handleCopyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success(`ID: #${text} copiado!`)
        } catch (err) {
            toast.error('Error al intentar copiar Id', err)
        }
    }

  return (
    <div className="w-full py-4 px-2 md:px-8 xl:px-14 flex justify-around items-center border border-slate-500 hover:border-purple-500 rounded-lg bg-surface-dark-highlight transition-all duration-300 cursor-pointer" onClick={() => handleSeleted(anime)}>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <img src={anime.image} alt="" className="w-15 h-20 object-contain rounded-lg" />
            <div className="flex flex-col space-y-1">
                <p className="text-white text-lg font-semibold">{anime.name_season}</p>
                <p className="text-sm text-stone-400">{anime.gender[0]} - {anime.gender[1]} - {anime.gender[2]}</p>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <button type="button" className="p-2.5 text-purple-600 flex justify-center items-center rounded-2xl border border-purple-700 hover:bg-purple-600/50 transition-all duration-200 cursor-pointer" onClick={() => handleCopyText(anime.id)}>
                Temporada: <span className="font-bold text-2xl ml-2"> {anime.season}</span>
            </button>
        </div>  
        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <div className="flex flex-col self-end items-center">
                <p className="text-sm text-stone-400">Fecha de agregado</p>
                <p className="text-white font-semibold">{formatDateAgo(anime.created_at)}</p>
            </div>
        </div>
        
    </div>
  )
}