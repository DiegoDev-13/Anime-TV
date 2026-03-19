import { MdEdit } from "react-icons/md"
import { formatDate } from "../../../helpers"
import { FaTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const CardEpisodesSeasonSelected = ({episode}) => {

    const navigate = useNavigate()

  const handleEdit = (episode) => {
    navigate(`/dashboard/administrar-episodios/edit/${episode.slug_episode}`)
  }

  const handleDelete = (id) => {

  }

  return (
    <div className="w-[97%] py-4 px-2 md:px-8 xl:px-14 flex justify-between items-center border border-stone-700 rounded-lg bg-[#2a2438] transition-all duration-300">

        <div className="flex flex-col justify-center items-center bg-purple-700/10 border border-purple-800 p-3 rounded-lg">
            <p className="text-stone-400 font-semibold text-lg">Capitulo</p>
            <span className="text-white text-3xl font-bold">#{episode?.episode_number}</span>
        </div>  

        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <img src={episode?.episode_image} loading="lazy" alt="" className="w-35 h-20 object-contain rounded-lg" />
            <div className="flex flex-col space-y-1">
                <p className="text-white text-lg font-semibold">{episode?.slug_episode}</p>
                {/* <p className="text-sm text-stone-400">{season?.gender[0]} - {season?.gender[1]} - {season?.gender[2]}</p> */}
            </div>
        </div>

        <div className="flex justify-center items-center space-x-2 md:space-x-4 xl:space-x-8">
            <div className="flex flex-col self-end items-center">
                <p className="text-sm text-stone-400">Fecha de agregado</p>
                <p className="text-white font-semibold">{formatDate(episode?.created_at)}</p>
            </div>
        </div>

        <div className="flex justify-center items-center space-x-2 md:space-x-4">
            <button type="button" className="bg-purple-700/30 p-2.5 text-white rounded-lg hover:bg-purple-700/50 transition-all duration-200 cursor-pointer" onClick={() => handleEdit(episode)}>
                <MdEdit size={25} className="text-purple-700"/>
            </button>
            <button type="button" className="bg-purple-700/30 py-3 px-3.5 text-white rounded-lg hover:bg-purple-700/50 transition-all duration-200 cursor-pointer" onClick={() => handleDelete(episode.id)}>
                <FaTrashAlt size={20} className="text-purple-700"/>
            </button>
        </div>

    </div>
  )
}