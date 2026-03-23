import { FaCheckCircle, FaTrashAlt } from "react-icons/fa"

const tableHeader = ['Tipo', 'Titulo de Anime', 'Usuario', 'Prioridad', 'Estatus', 'Acciones']

const data = [
    {
        id:1,
        image: 'lindiasndias',
        name_season: 'one piece',
        episodes: 'oozyboy',
        streaming: 'high',
        slug_season: 'one-piece'
    }
]

export const GridReports = () => {
  return (
    <div className="w-full flex flex-col justify-center space-y-4">
        <h3 className="text-white text-2xl font-semibold">Lista de reportes</h3>

        <table className="text-sm w-full caption-bottom overflow-auto border border-stone-500">
            <thead className="bg-slate-800 pb-3">
                <tr className="text-sm text-slate-400 font-bold text-left">
                    {
                        tableHeader.map((header, index) => (
                            <th key={index} className="h-12 px-4 uppercase">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody className="[&_tr:last-child]:border-0">
                {
                    data?.map(anime => (
                        <tr key={anime.id} className="border-b border-stone-400 bg-[#1a162585] hover:bg-[#2620369a] text-stone-400 transition-all duration-300" >
                        <td className="p-4 tracking-tighter">
                                <span className="text-amber-300 bg-amber-300/20 px-3 py-1">Link Roto</span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter ">
                                <span className={`font-semibo text-white rounded-lg text-[17px]`}> 
                                {anime.name_season}
                                </span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter max-w-15 text-stone-200 ">
                                <p className="line-clamp-1"> 
                                    {anime.episodes}
                                </p>
                            </td>
                            <td className="p-4 font-medium tracking-tighter ">
                                <span className={`${anime.streaming === 'high' ? 'bg-red-400' : 'bg-amber-400'} text-orange-950 font-semibold py-1 px-2 uppercase`}>
                                    {anime.streaming}
                                </span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500"/>
                                <span className="text-white text-[15px] uppercase">pendiente</span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter">
                                <button className="cursor-pointer hover hover:text-white transition-colors duration-300" onClick={() => navigate(`/dashboard/administrar-animes/edit/${anime.slug_season}`)}>
                                <FaCheckCircle  size={20} />
                                </button>
                                <button className="ml-5 cursor-pointer hover hover:text-white transition-colors duration-300" onClick={() => handleDelete(anime.id)}>
                                <FaTrashAlt size={20} />
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}