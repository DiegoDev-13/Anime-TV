import { IoTrashBin } from "react-icons/io5";
import { MdOutlineWarningAmber } from "react-icons/md";
import { useGlobalStore } from "../../../store/global.store";
import { useDeleteSeason } from "../../../hooks/dashboard/useDeleteSeason";
import { Loader } from "../../shared/Loader";

export const ModalConfirmDelete = () => {

    const {mutate, isPending, isError} = useDeleteSeason()

    const setAtiveModalConfirmDelete = useGlobalStore(state => state.setAtiveModalConfirmDelete)
    const idDelete = useGlobalStore(state => state.idDelete)

    const handleConfirm = () => {
        mutate(idDelete)
    }
 
  return (
    <div className="w-full h-screen fixed flex justify-center items-center backdrop-blur-xs z-50" >
        <div className="w-110 flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop border border-stone-700" onClick={(e) => e.stopPropagation()}>

            {
                isPending 
                    ? <Loader />
                    :   <div>
                            <div className="flex flex-col justify-between items-center space-y-4 mb-4">
                                <div className="bg-red-700/20 p-3 rounded-full">
                                    <MdOutlineWarningAmber size={60} className="text-red-700" />
                                </div>
                                <h2 className="text-white text-2xl text-center font-semibold">¿Eliminar temporada?</h2>
                            </div>
                            <div className="my-4 px-8">
                                <p className="text-stone-400 text-center font-semibold">Esta acción es <span className="text-purple-700 ">irreversible</span>. Al eliminar esta temporada, se borrarán permanentemente todos sus episodios, comentarios y datos analiticos asociados.</p>
                            </div>
                            <div className="w-full flex my-6 justify-between items-center">
                                <button className='flex justify-center items-center gap-1.5 py-3 px-13 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300' onClick={() => setAtiveModalConfirmDelete(false)}>Cancelar</button>
                                <button className='flex justify-center items-center gap-1.5 py-3 px-13 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300' onClick={handleConfirm}>
                                    <IoTrashBin size={20} className="text-white" />
                                    Confirmar
                                </button>
                            </div>
                        </div>
            }
            

        </div>  
    </div>
  )
}