import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { TbLockFilled } from "react-icons/tb";
import { useLogin } from "../../hooks/auth/useLogin";
import {Loader} from '../shared/Loader'
import { IoEye, IoEyeOff } from "react-icons/io5";

export const FormLogin = () => {

    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('123Admin')

    const [showPassword, setShowPassword] = useState(false)

    const {mutate, isPending} = useLogin()

    const hnadleSubmit = (e) => {
        e.preventDefault()
        mutate({email, password})
    }

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

  return (
    <>
        {
            isPending 
                ? <Loader />
                :  <>
                    <div className="flex flex-col justify-center items-center my-7 space-y-2">
                        <h3 className="text-white text-2xl font-bold">Bienvenido de Nuevo</h3>
                        <p className="text-stone-400 text-sm ">Constinúa tu aventura donde la dejaste.</p>
                    </div>

                    <form className="w-full" onSubmit={hnadleSubmit}>
                        <label htmlFor="email" className="text-sm text-stone-400">Correo Electrónico</label>
                        <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                            <MdEmail size={20} className="text-stone-400 absolute left-2.5"/>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ingresa tu correo Electrónico" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" />
                        </div>

                        <label htmlFor="password" className="text-sm text-stone-400">Contraseña</label>
                        <div className="flex space-x-1 items-center relative bg-dark rounded-lg border border-stone-700 pl-6 my-1 mb-4">
                            <TbLockFilled size={20} className="text-stone-400 absolute left-2.5"/>
                            <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ingresa tu Contraseña" className="w-full outline-none focus:outline-none text-sm text-stone-300 p-3" />
                            {
                                showPassword 
                                    ? <IoEyeOff size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                                    : <IoEye size={20} className="text-stone-400 absolute right-2.5 cursor-pointer" onClick={handleShowPassword}/>
                            }
                        </div>

                        <button type="submit" className="py-2 my-2 w-full bg-purple-700 text-stone-300 text-[16px] font-semibold rounded-lg cursor-pointer hover:bg-purple-800 transition-colors duration-300">Iniciar sesión</button>
                    </form>
                </>

        }


    </>

  )
}