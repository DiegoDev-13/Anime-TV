import { IoMdArrowRoundBack } from "react-icons/io"
import { RxUpdate } from "react-icons/rx";
import { Separator } from "../components/shared/Separator"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { passwordResetScheme } from "../lib/validators"
import { TbLockFilled } from "react-icons/tb"
import { IoEye, IoEyeOff } from "react-icons/io5"
import { useEffect, useState } from "react"
import { useUpdatePassword } from "../hooks/auth/useUpdatePassword";
import { Loader } from "../components/shared/Loader";
import { useUserStore } from "../store/useUserStore";
import { useUser } from "../hooks/auth/useUser";
import { useGlobalStore } from "../store/global.store";
import { FaRegCheckCircle } from "react-icons/fa";

export const UpdatePassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    
    const navigate = useNavigate()
    const userStore = useUserStore(state => state.user)
    const isUpdatePassword = useGlobalStore(state => state.isUpdatePassword)
    const setIsUpdatePassword = useGlobalStore(state => state.setIsUpdatePassword)

    const {user, isLoading} = useUser(userStore?.id)

    const {mutate, isPending} = useUpdatePassword()

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: zodResolver(passwordResetScheme)
    })

    useEffect(() => {
      setIsUpdatePassword(false)
    }, [navigate])
    

    const handleUpdatePassword = handleSubmit((data) => {
        const { password } = data
        mutate(password)
    })

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    if(isUpdatePassword) return (
        <div className="w-full my-8 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border border-stone-700 w-100 rounded-xl bg-surface-dark p-6">
                <div className="flex justify-center items-center bg-purple-700 border-4 border-purple-600 rounded-full w-18 h-18 animate-pulse y-6">
                    <FaRegCheckCircle size={40} className="text-green-500" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-white font-bold text-center mt-6">¡Actualización de contraseña exitosa!</h2>
                    <p className="text-stone-300 text-sm text-center my-6">Tu cuenta ya está segura. Puedes seguir disfrutando de AnimeVista y seguir viendo tus series favoritas.</p>
                    <button type="button" className="py-2 w-full bg-purple-700 text-white font-bold hover:bg-purple-600 transition-all duration-300 cursor-pointer text-sm rounded-lg" onClick={() => navigate('/')} >ir al Inicio</button>
                </div>

            </div>
        </div>
    )

  return (
    <div className="w-full my-8 flex justify-center items-center">
        {
            isPending
                ?   <Loader />
                : <div className="border border-stone-700 w-100 rounded-xl bg-surface-dark p-6">

                        <div className="flex flex-col justify-center items-center my-2 mx-2">
                            {
                                isLoading 
                                    ? <Loader />
                                    : <div className="w-30 h-30 rounded-full border-4 border-slate-700">
                                        {
                                            user 
                                                ? <img src={user?.imagen_profile} alt="" className="w-full h-full object-contain rounded-full" />
                                                : <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-3.jpg" alt="" className="w-full h-full object-contain rounded-full" />
                                        }
                                    </div>
                            }
                            <h3 className="text-2xl text-white font-bold mt-4 text-center">Crear Nueva Contraseña</h3>
                            <p className="text-stone-400 text-sm text-center my-2">¡Ya casi estás! Introduce tu nueva contraseña a continuación para proteger tu cuenta.</p>
                        </div>

                        <form onSubmit={handleUpdatePassword} className="flex flex-col justify-center space-y-6 my-2">

                            <input type="text" id="userName" name="userName" autoComplete="userName" className="hidden"/>


                            <label htmlFor="password" className="text-sm text-stone-400 mb-1">Contraseña</label>
                            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-8">
                                <TbLockFilled size={20} className="text-stone-400 absolute left-2.5"/>
                                <input type={showPassword ? 'text' : 'password'} id="password" autoComplete="new-password" placeholder="Ingresa tu Contraseña" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('password')} />
                                {
                                    showPassword ? <IoEyeOff size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/> : <IoEye size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                                }
                            </div>
                            {
                                errors.password && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.password.message}</p>
                            }
                
                            <label htmlFor="confirmPassword" className="text-sm text-stone-400 mb-1">Confirma tu Contraseña</label>
                            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-8">
                                <TbLockFilled size={20} className="text-stone-400 absolute left-2.5"/>
                                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" autoComplete="new-password" placeholder="Confirma tu Contraseña" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('confirmPassword')} />
                                {
                                    showPassword ? <IoEyeOff size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/> : <IoEye size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                                }
                            </div>
                            {
                                errors.confirmPassword && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.confirmPassword.message}</p>
                            }

                            

                            <button type="submit" className="py-2 px-4 flex justify-center items-center gap-3 text-white font-semibold bg-purple-700 hover:bg-purple-600 rounded-lg cursor-pointer transition-all duration-300">
                                <RxUpdate size={20} />
                                Cambiar Contraseña
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