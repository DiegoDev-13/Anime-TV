import { MdEdit } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa";
import {Pagination} from '../../shared/Pagination'

const tableHeader = ['poster', 'titulo', 'episodios', 'emisión', 'acciones']

export const TableAnimeManage = ({data, totalAnimes}) => {


  return (
      <div className="relative  w-full">

          <table className="text-sm w-full caption-bottom overflow-auto border rounded-lg border-stone-500">
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
                          <tr key={anime.id} className="border-b border-stone-400 bg-image-detail text-stone-400 " >
                            <td className="p-4 tracking-tighter">
                                  <img src={anime.image} alt="" className="w-15 h-20 object-contain rounded-lg"/>
                              </td>
                              <td className="p-4 font-medium tracking-tighter ">
                                  <span className={`font-semibo text-white rounded-lg text-[17px]`}> 
                                    {anime.name_season}
                                  </span>
                                  <div>
                                    <span className={`font-semibo text-stone-400 rounded-lg text-sm`}> 
                                    {anime.gender[0]}, {anime.gender[1]}, {anime.gender[2]}
                                  </span>
                                  </div>
                              </td>
                              <td className="p-4 font-medium tracking-tighter max-w-15 text-stone-200 ">
                                  <p className="line-clamp-1"> 
                                      {anime.episodes}
                                  </p>
                              </td>
                              <td className="p-4 font-medium tracking-tighter ">
                                  <span className={`${anime.streaming ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold py-1 px-2 rounded-lg`}>
                                    {anime.streaming ? 'En Emision' : ' Finalizado'}
                                  </span>
                              </td>
                              <td className="p-4 font-medium tracking-tighter">
                                  <button className="cursor-pointer hover hover:text-white transition-colors duration-300">
                                    <MdEdit size={20} />
                                  </button>
                                  <button className="ml-5 cursor-pointer hover hover:text-white transition-colors duration-300">
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