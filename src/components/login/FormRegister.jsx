import { useForm } from 'react-hook-form';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLockFilled } from "react-icons/tb";
import { userRegisterSchema } from '../../lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRegister } from '../../hooks/auth/useRegister';
import { Loader } from '../shared/Loader';

export const FormRegister = () => {

    const [showPassword, setshowPassword] = useState(false)

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(userRegisterSchema)
    })

    const {mutate, isPending} = useRegister()

    const onRegister = handleSubmit((data) => {
        const {userName, email, password} = data
        mutate({userName, email, password})
    })

    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }

    if(isPending) return <Loader />

  return (
    <>
        <div className="flex flex-col justify-center items-center my-7 space-y-2">
            <h3 className="text-white text-2xl font-bold">Registrate y Empieza</h3>
            <p className="text-stone-400 text-sm text-center">Comienza tu viaje havia el mundo de las historias infinitas.</p>
        </div>

        <form className="w-full" onSubmit={onRegister}>
            <label htmlFor="username" className="text-sm text-stone-400">Nombre de Usuario</label>
            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                <FaUser size={16} className="text-stone-400 absolute left-3"/>
                <input type="text" id="username" placeholder="Nombre de Usuario" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('userName')}/>
            </div>
            {
                errors.userName && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.userName.message}</p>
            }

            <label htmlFor="email" className="text-sm text-stone-400">Correo Electrónico</label>
            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                <MdEmail size={20} className="text-stone-400 absolute left-2.5"/>
                <input type="email" id="email" placeholder="Ingresa tu correo Electrónico" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('email')}/>
            </div>
            {
                errors.email && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.email.message}</p>
            }

            <label htmlFor="password" className="text-sm text-stone-400">Contraseña</label>
            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                <TbLockFilled size={20} className="text-stone-400 absolute left-2.5"/>
                <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Ingresa tu Contraseña" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('password')} />
                {
                    showPassword ? <IoEyeOff size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/> : <IoEye size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                }
            </div>
            {
                errors.password && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.password.message}</p>
            }

            <label htmlFor="confirmPassword" className="text-sm text-stone-400">Confirma tu Contraseña</label>
            <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                <TbLockFilled size={20} className="text-stone-400 absolute left-2.5"/>
                <input type={showPassword ? 'text' : 'password'} id="confirmPassword" placeholder="Confirma tu Contraseña" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" {...register('confirmPassword')} />
                {
                    showPassword ? <IoEyeOff size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/> : <IoEye size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                }
            </div>
            {
                errors.confirmPassword && <p className='text-xs text-red-500 mb-2 -mt-3'>{errors.confirmPassword.message}</p>
            }

            <button type="submit" className="py-2 my-2 w-full bg-purple-700 text-stone-300 text-[16px] font-semibold rounded-lg cursor-pointer hover:bg-purple-800 transition-colors duration-300">Registrarme</button>
        </form>
    </>
  )
}