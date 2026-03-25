import { MdOutlineWarningAmber } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../shared/Loader";
import { useDeleteReportById } from "../../../hooks/dashboard/report/useDeleteReportById";

export const ModalConfirm = ({setActiveModal, setReportId, reportId}) => {

    const navigate = useNavigate()


    const {mutate, isPending, isError, isSuccess} = useDeleteReportById()


    const handleDalete = () => {
        
        mutate(reportId)

        setActiveModal(false)
        
    }

    const handleCancel = () => {
        setActiveModal(false)
        setReportId(null)
    }

 
  return (
    <div className="w-full h-screen flex justify-center items-center backdrop-blur-xs z-50 fixed top-0 left-5">
        <div className="w-120 flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-lg p-5 animated-slideInTop border border-stone-700 shadow-[4px_3px_43px_-18px_rgba(236,72,153,0.5)]" onClick={(e) => e.stopPropagation()}>

            {
                isPending
                    ? <Loader />
                    :   <div className="w-full">
                            <div className="flex justify-center items-center space-x-4 mb-4">
                                <div className="bg-red-500/10 p-3.5 border border-red-400">
                                    <MdOutlineWarningAmber size={28} className="text-red-400" />
                                </div>
                                <h2 className="text-white text-2xl text-center font-semibold uppercase">Advertencia de Eliminación</h2>
                            </div>
                            <div className="flex flex-col my-7 px-8 space-y-2 text-stone-400">
                                <p>Se ha detectado una <span className="text-purple-700">falla persistente</span> en el sistema relacionada con este reporte. Si procede con la eliminación sin resolver el coflicto subyacente. El error (falla de enlace/broken link) <span className="text-red-400">permanecerá activo</span> en el núcleo del sistema.</p>
                            </div>
                            <div className="w-full flex my-6 justify-between items-center">
                                <button type="button" className='flex justify-center items-center gap-1.5 py-4 px-5 bg-purple-700/10  hover:bg-purple-700/30 border border-purple-700 text-white text-[14px] font-bold rounded-md cursor-pointer transition-all duration-300 uppercase' onClick={handleCancel}>Cancelar y volver</button>
                                <button type="submit" className='flex justify-center items-center gap-1.5 py-4 px-4 bg-red-500 hover:bg-red-600 text-white text-[14px] font-bold rounded-md cursor-pointer transition-all duration-300 uppercase' onClick={handleDalete}>
                                    Eliminar de Todos Modos
                                </button> 
                            </div>
                        </div>
            }   
            

        </div>  
    </div>
  )
}