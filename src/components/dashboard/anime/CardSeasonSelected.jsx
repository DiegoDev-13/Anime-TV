import toast from "react-hot-toast"
import { FaRegCopy } from "react-icons/fa"
import { formatDate} from "../../../helpers"

export const CardSeasonSelected = ({anime}) => {

    const handleCopyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success(`ID: #${text} copiado!`)
        } catch (err) {
            toast.error('Error al intentar copiar Id', err)
        }
    }

  return (
    <div className="w-full py-4 px-2 md:px-8 xl:px-14 flex justify-between items-center border border-purple-500 rounded-lg bg-slate-800 transition-all duration-300" >
        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <img src={anime.image} alt="" className="w-15 h-20 object-contain rounded-lg" />
            <div className="flex flex-col space-y-1">
                <p className="text-white text-lg font-semibold">{anime.name_season}</p>
                <p className="text-sm text-stone-400">Temporada: {anime.season}</p>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <div className="flex flex-col self-end items-center">
                <p className="text-sm text-stone-400">Fecha de agregado</p>
                <p className="text-white font-semibold">{formatDate(anime.created_at)}</p>
            </div>
            <button type="button" className="bg-purple-700/30 p-2.5 text-purple-700 font-bold flex justify-center items-center rounded-2xl border border-purple-700 hover:bg-purple-700/50 transition-all duration-200 cursor-pointer" onClick={() => handleCopyText(anime.id)}>
                ID #{anime.id} <FaRegCopy size={20} className="ml-2" />
            </button>
        </div>
        
    </div>
  )
}