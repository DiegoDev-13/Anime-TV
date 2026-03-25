import { FaCheckCircle, FaTrashAlt } from "react-icons/fa"
import { IoReload } from "react-icons/io5";
import { useUpdateReportById } from "../../../hooks/dashboard/report/useUpdateReportById";
import { LuLoaderCircle } from "react-icons/lu";
import { IoIosCloseCircle, IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tableHeader = ['Tipo', 'Titulo de Anime', 'Usuario', 'Prioridad', 'Estado', 'Acciones']

export const GridReports = ({data, refetch, setActiveModal, setReportId}) => {

    const navigate = useNavigate()

    const [indexSpin, setIndexSpin] = useState(null)

    const {mutate, isPending: isPendingState, isError} = useUpdateReportById()

    const handleReload = () => {
        refetch()
    }

    const handleDelete = (e, id) => {
        e.stopPropagation()
        setActiveModal(true)
        setReportId(id)
    } 

    const handleChangeState = (e, id, state, index) => {
        e.stopPropagation()
        // console.log(`Completar reporte con el id ${id}`)
        const report = {
            id: id,
            state: !state
        }

        mutate(report)
        setIndexSpin(index)
    }


  return (
    <div className="w-full flex flex-col justify-center space-y-4">
        <div className="flex justify-between">
            <h3 className="text-white text-2xl font-semibold">Lista de reportes</h3>
            <button className="bg-slate-800 text-stone-400 p-2 px-3 border border-stone-500 rounded-lg hover:bg-slate-700 hover:text-white cursor-pointer transition-all duration-300" onClick={handleReload}>
                <IoReload size={20} />
            </button>
        </div>

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
                    data?.map((report, i) => (
                        <tr key={report.id} className="border-b border-stone-400 bg-[#1a162585] hover:bg-[#2620369a] text-stone-400 transition-all duration-300 cursor-pointer" onClick={() => navigate(`detalles/${report.id}`)} >
                            <td className="p-4 py-8 tracking-tighter">
                                <span className="text-amber-300 bg-amber-300/20 px-3 py-1">{report.type}</span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter ">
                                <span className={`font-semibo text-white rounded-lg text-[17px]`}> 
                                {report.title_anime}
                                </span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter max-w-15 text-stone-200 ">
                                <p className="line-clamp-1"> 
                                    {report.user_email}
                                </p>
                            </td>
                            <td className="p-4 font-medium tracking-tighter ">
                                <span className={`${report.type === 'broken link' ? 'bg-red-400' : 'bg-amber-400'} text-orange-950 font-semibold py-1 px-2 uppercase`}>
                                    {
                                        report.type === 'broken link' ? 'Alta' : 'Medio'
                                    }
                                </span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter flex items-center space-x-2">
                                {
                                    isPendingState && indexSpin === i
                                        ? <LuLoaderCircle size={25} className="animate-spin ml-7 mt-4" />
                                        :<>
                                            <div className={`${report.filled ? 'bg-green-500' : 'bg-amber-400'} w-2 h-2 mt-4 `}/>
                                            <span className="text-white text-[15px] uppercase mt-4">
                                                {
                                                    report.filled ? 'Completado' : "Pendiente"
                                                }
                                            </span>
                                        </>
                                }
                            </td>
                            <td className="p-4 font-medium tracking-tighter">
                                <button className="cursor-pointer hover hover:text-white transition-colors duration-300" onClick={(e) => handleChangeState(e, report.id, report.filled, i)}>
                                    {
                                        report.filled 
                                            ?<IoMdCloseCircle size={24} className="hover:text-red-400" />
                                            :<FaCheckCircle  size={20} className="hover:text-green-400" />
                                    }
                                    
                                </button>
                                <button className="ml-5 cursor-pointer hover hover:text-white transition-colors duration-300" onClick={(e) => handleDelete(e, report.id)}>
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