import { IoIosArrowBack, IoMdCloseCircle } from "react-icons/io"
import { useNavigate, useParams } from "react-router-dom"
import { Separator } from "../../components/shared/Separator"
import { useGetReportById } from "../../hooks/dashboard/report/useGetReportById"
import { Loader } from "../../components/shared/Loader"
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa"
import { BiSolidZap } from "react-icons/bi";
import { useUpdateReportById } from "../../hooks/dashboard/report/useUpdateReportById"
import { LuLoaderCircle } from "react-icons/lu"
import { useDeleteReportById } from "../../hooks/dashboard/report/useDeleteReportById"

export const DetailsReports = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const {data, isLoading, isError} = useGetReportById(id)
    const {mutate: mutateState, isPending: isPendingState, isError: isErrorUpdateReport} = useUpdateReportById()
    const {mutate: mutateDelete, isPending: isPendingDelete, isError: isErrorDelete} = useDeleteReportById()

    const handleChangeState = (id, state) => {
         const report = {
            id: id,
            state: !state
        }
        mutateState(report)
    }


    const handleDelete = (id) => {
        mutateDelete(id)
    } 

    if(isPendingDelete) return <Loader />

  return (
    <div className="w-full flex flex-col justify-center space-y-8">
        <div className="flex items-center space-x-8 ">
            <button className="p-2 border border-purple-700 rounded-lg text-purple-600 hover:bg-purple-700/15 cursor-pointer transition-all duration-300" onClick={() => navigate(-1)}>
                <IoIosArrowBack size={30} />
            </button>
            <h2 className='text-white self-start text-3xl font-semibold'>Detalles del reporte <span className="text-purple-700">#{id}</span></h2>
        </div>

        {
            isLoading
                ?<Loader />
                :<div className="flex space-x-5">
                    <div className="w-full h-100 p-6 bg-surface-dark border-l-3 border-red-400 rounded-md">
                        <h3 className="text-stone-300 text-lg uppercase text-center font-medium">información del reporte</h3>
                        <Separator />
                        <div className="flex justify-between gap-4 flex-wrap">
                            <div className="flex flex-col space-y-1">
                                <span className="text-stone-400 text-sm">Titulo del Anime</span>
                                <h3 className="text-white text-lg uppercase">{data.title_anime}</h3>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-stone-400 text-sm">Tipo del problema</span>
                                <h3 className="text-white text-lg uppercase">{data.type}</h3>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-stone-400 text-sm">Estatus</span>
                                {
                                    isPendingState 
                                        ?<LuLoaderCircle size={26} className="animate-spin ml-3 mt-4 text-stone-400" />
                                        :<h3 className={`${data.filled ? 'text-green-500 border-green-500' : 'text-amber-400 border-amber-400'} text-lg uppercase border p-0.5 px-1`}>
                                            {
                                                data.filled ? 'Completado' : "Pendiente"
                                            }
                                        </h3>
                                }
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-stone-400 text-sm">Prioridad</span>
                                <div className="flex justify-center items-center gap-2">
                                    <div className={`w-2.5 h-2.5 ${data.type === 'broken link' ? 'bg-red-400' : 'bg-amber-400'}`} />
                                    <h3 className={`${data.type === 'broken link' ? 'text-red-400' : 'text-amber-400'} text-lg uppercase`}>
                                        {
                                            data.type === 'broken link' ? 'Alta' : 'Medio'
                                        }
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-stone-400 text-sm">Reportado Por:</span>
                                <h3 className="text-white text-lg uppercase">{data.user_email}</h3>
                            </div>
                            
                        </div>
                        <div className="flex flex-col my-6">
                            <span className="text-stone-400 text-sm">Descripción:</span>
                            <p className="text-white text-[16px]">{data.description}.</p>
                        </div>


                    </div>
                    <div className="w-[55%] h-100 space-y-4 p-4 px-10 flex flex-col items-center bg-surface-dark border border-stone-700 rounded-md">
                        <div className="flex gap-3 items-center self-start">
                            <BiSolidZap size={20} className="text-red-400"/>
                            <h3 className="text-white text-lg font-semibold">Acciones</h3>
                        </div>
                        <Separator />
                        <button className={`${data.filled ? 'border-red-500 text-red-500 ' : 'border-green-400 text-green-400' } border flex gap-2 justify-center items-center w-full py-3 uppercase font-semibold rounded-lg transition-all duration-300 cursor-pointer mt-8`} onClick={() => handleChangeState(data.id, data.filled)}>
                            {
                                data.filled 
                                ? <>
                                    Marcar como no resuelto
                                    <IoMdCloseCircle size={22} />
                                    </> 
                                : <>
                                    Marcar como resuelto
                                    <FaCheckCircle size={18} />
                                </>
                            }
                        </button>
                        <button className="flex gap-2 justify-center items-center w-full py-3 text-white uppercase font-semibold bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-300 cursor-pointer" onClick={() => handleDelete(data.id)}>
                            Eliminar reporte
                            <FaTrashAlt size={18} />
                        </button>
                    </div>

                </div>
        }

    </div>
  )
}