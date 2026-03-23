import { MdOutlineWarningAmber } from "react-icons/md";
import { Loader } from "../shared/Loader";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { useState } from "react";
import { useSessionUser } from "../../hooks/auth/useSessionUser";
import toast from "react-hot-toast";
import { useAddReport } from "../../hooks/useAddReport";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ModalReport = ({setactiveModalReport, titleAnime}) => {

    const navigate = useNavigate()

    const [incidentType, setIncidentType] = useState('')
    const [description, setDescription] = useState('')
    const [errorType, setErrorType] = useState(false)
    const [errorDescription, setErrorDescription] = useState(false)

    const {session, isLoading} = useSessionUser()

    const {mutate, isPending, isError, isSuccess} = useAddReport()

    const handleSendReport = (e) => {
        e.preventDefault()

        if(!session.data.session) {
            toast.error('Debes iniciar sesión para realizar un reporte!')
            return
        }
        
        if(incidentType.length === 0 || description.length ===0) {
            setErrorType(true)
            setErrorDescription(true)
            return
        }

        const report = {
            userEmail: session.data.session.user.email,
            animeTitle: titleAnime,
            incidentType,
            description
        }
            
        setErrorType(false)
        setErrorDescription(false)
        console.log(report)
        mutate(report)
        
    }

    const handleCancel = () => {
        setactiveModalReport(false)
    }

    if(isSuccess) return  (
        <div className="w-full h-screen flex justify-center items-center backdrop-blur-xs z-50 fixed top-0 left-5">
            <div className="w-110 flex flex-col justify-center items-center space-y-4 bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop border border-stone-700" onClick={(e) => e.stopPropagation()}>
                <div className="border border-purple-700 p-4">
                    <FaCheckCircle size={62} className="text-purple-700" />
                </div>
                <h2 className="text-white text-3xl font-semibold">Reporte enviado con exito!</h2>
                <div className="flex flex-col justify-center items-center text-stone-400 text-[15px]">
                    <p>Tu reporte ha sido procesado por el comando central.</p>
                    <p>Nuestros operadores lo revisarán a la brevedad.</p>
                </div>
                <button className="flex justify-center items-center gap-2 px-2 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-300 " onClick={() => navigate('/')}>
                    <IoMdHome size={20} />
                    Volver al inicio
                </button>
                <IoMdClose size={32} className="absolute top-3 right-3 text-stone-400 hover:text-stone-200 cursor-pointer transition-all duration-300"  onClick={() => setactiveModalReport(false)} />
            </div>
        </div>
    )
 
  return (
    <div className="w-full h-screen flex justify-center items-center backdrop-blur-xs z-50 fixed top-0 left-5">
        <div className="w-110 flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop border border-stone-700" onClick={(e) => e.stopPropagation()}>

            {
                isPending  || isLoading
                    ? <Loader />
                    :   <form onSubmit={handleSendReport} className="w-full">
                            <div className="flex justify-center items-center space-x-4 mb-4">
                                <MdOutlineWarningAmber size={26} className="text-purple-700" />
                                <h2 className="text-white text-2xl text-center font-semibold uppercase">Reportar Problema</h2>
                            </div>
                            <div className="flex flex-col my-4 px-8 space-y-2">
                                <label htmlFor="" className="text-stone-400 text-sm">Tipo del indicente</label>
                                <select className="text-stone-200 bg-surface-dark-highlight p-3 border border-stone-700" value={incidentType} onChange={(e) => setIncidentType(e.target.value)}>
                                    <option value="" disabled className="uppercase" >Seleccionar Incidente...</option>

                                    <option value="broken link">Enlace Roto</option>
                                    <option value="subtitle error">Error de Subtitulos</option>
                                    <option value="wrong video">Video Incorrecto</option>
                                </select>
                                {errorType && <p className="text-sm text-red-500 ">Error selecciona un incidente</p>}
                            </div>
                            <div className="flex flex-col my-4 px-8 space-y-2">
                                <label htmlFor="" className="text-stone-400 text-sm">Detalles adicionales</label>
                                <textarea className="w-full max-h-80 min-h-30 bg-surface-dark p-4 text-stone-300 rounded-lg border border-stone-700" rows="5" cols="8" maxLength={200} placeholder="Describe el fallo técnico detectado..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                {errorDescription && <p className="text-sm text-red-500 ">Error añade una descripción</p>}
                            </div>
                            <div className="w-full flex my-6 justify-between items-center">
                                <button type="button" className='flex justify-center items-center gap-1.5 py-3 px-7 bg-purple-700/10  hover:bg-purple-700/30 border border-purple-700 text-white text-[16px] font-bold rounded-lg cursor-pointer transition-all duration-300 uppercase' onClick={handleCancel}>Cancelar</button>
                                <button type="submit" className='flex justify-center items-center gap-1.5 py-3 px-10 bg-purple-700 hover:bg-purple-600 text-white text-[16px] font-bold rounded-lg cursor-pointer transition-all duration-300 uppercase' onClick={handleSendReport}>
                                    Enviar reporte
                                    <TbArrowBadgeRightFilled size={20} className="text-white " />
                                </button> 
                            </div>
                        </form>
            }
            

        </div>  
    </div>
  )
}