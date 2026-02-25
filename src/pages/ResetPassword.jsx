import { MdOutlineEmail, MdOutlineMarkEmailUnread } from "react-icons/md"
import { Separator } from "../components/shared/Separator"
import { IoMdArrowRoundBack, IoMdSend } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailResetSchema } from "../lib/validators"
import { useResetPassword } from "../hooks/auth/useResetPassword"
import { Loader } from "../components/shared/Loader"
import { useGlobalStore } from "../store/global.store"
import { useEffect, useState } from "react"

export const ResetPassword = () => {

    const [emailSend, setEmailSend] = useState(null)

    const navigate = useNavigate()

    const isSendResetEmail = useGlobalStore(state => state.isSendResetEmail)
    const setIsSendResetEmail = useGlobalStore(state => state.setIsSendResetEmail)

    useEffect(() => {
      setIsSendResetEmail(false)
    }, [navigate])
    

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(emailResetSchema)
    })

    const {mutate, isPending} = useResetPassword()


    const handleResetPassword = handleSubmit((data) => {
        const { email } = data
        mutate(email)
        setEmailSend(email)
    })

    if(isSendResetEmail) return (
        <div className="w-full flex-col my-8 flex justify-center items-center">
            <div className="w-40 h-40 rounded-full my-4 border-3 border-dashed border-purple-700 relative">
                <img src="https://img.freepik.com/vector-premium/astronauta-es-cartero-entrega-gran-correo_194428-3488.jpg" alt="" className="w-full h-full rounded-full" />
                <div className="bg-purple-700 w-10 flex justify-center items-center py-4 rounded-lg absolute -bottom-1 right-1">
                    <MdOutlineMarkEmailUnread  size={20} className="text-white" />
                </div>
            </div>
            <div className="w-130 flex flex-col justify-center items-center">
                <h2 className="text-3xl text-white font-bold">Revisa tu bandeja de entrada!</h2>
                <p className="text-stone-300 text-sm text-center py-4  ">Enviamos un enlace a <span className="text-purple-600 font-medium">{emailSend || 'YourEmail@example.com'}</span> para restablecer tu contraseña. Revisa tu correo electrónico para continuar.</p>
                <Separator />
                <p className="text-stone-300 text-sm">No recibí el correo electrónico? <span className="text-purple-600 cursor-pointer" onClick={handleResetPassword}>Reenviar enlace</span></p>
                <span className="flex justify-center items-center text-purple-600 text-center font-bold cursor-pointer my-6" onClick={() => navigate('/login')}>
                            <IoMdArrowRoundBack size={18} />
                    Volver al Login
                </span>
            </div>
        </div>
    )

    return (
        <div className="w-full my-8 flex justify-center items-center">
            {
                isPending 
                    ? <Loader />
                    : <div className="border border-stone-700 w-100 rounded-xl bg-surface-dark p-6">

                        <div className="flex flex-col justify-center items-center my-2 mx-2">
                            <div className="w-30 h-30 rounded-full border-4 border-slate-700">
                                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-3.jpg" alt="" className="w-full h-full object-contain rounded-full" />
                            </div>
                            <h3 className="text-2xl text-white font-bold mt-4 text-center">¿Has olvidado tu contraseña?</h3>
                            <p className="text-stone-400 text-sm text-center my-2">No te preocupes, esto nos pasa a todos. Introduce tu correo electrónico y te enviaremos un enlace para acceder a tu cuenta.</p>
                        </div>

                        <form onSubmit={handleResetPassword} className="flex flex-col justify-center space-y-6 my-2">

                            <label htmlFor="email" className="text-[15px] text-stone-300 my-2">Email</label>

                            <div className="flex flex-col w-full relative">
                                <span className="absolute top-3 left-2"><MdOutlineEmail size={18} className="text-stone-500" /></span>
                                <input type="text" id="email" placeholder="Your@email.com" {...register('email')} className="w-full bg-dark py-2 rounded-lg text-stone-300 text-[16px] pl-8 pr-2 outline-none border border-stone-700"/>
                                {
                                    errors.email && <p className="text-red-500 text-sm my-2">{errors.email.message}</p>
                                }
                            </div>

                            <button type="submit" className="py-2 px-4 flex justify-center items-center gap-3 text-white font-semibold bg-purple-700 hover:bg-purple-600 rounded-lg cursor-pointer transition-all duration-300">
                                <IoMdSend size={20} />
                                Enviar Enlace de Recuperación
                            </button>
                        </form>

                        <Separator />

                        <span className="flex justify-center items-center text-purple-600 text-center font-bold cursor-pointer" onClick={() => navigate('/login')}>
                            <IoMdArrowRoundBack size={18} />
                            Volver al Login
                        </span>

                    </div>
            }
        </div>
    )
}