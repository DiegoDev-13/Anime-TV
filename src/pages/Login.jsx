import { Link, Navigate, useNavigate } from 'react-router-dom'
import {Separator} from '../components/shared/Separator'
import { FormLogin } from '../components/login/FormLogin'
import { useState } from 'react'
import { FormRegister } from '../components/login/FormRegister'
import { useSessionUser } from '../hooks/auth/useSessionUser'
import { Loader } from '../components/shared/Loader'

export const Login = () => {

    const navigate = useNavigate()

    const [btnLogin, setBtnLogin] = useState(true)

    const {session, isLoading} = useSessionUser()

    if(session?.data.session) {
        navigate('/')
    } 

    if(isLoading) return <Loader />
 
  return (
    <div className="w-full my-5 md:my-10 mx-auto flex justify-center items-center">
        <div className="w-100 flex flex-col p-6 rounded-lg bg-surface-dark border border-stone-800">
            <div className="flex justify-between rounded-lg bg-stone-900 p-1">
                <button className={`${btnLogin ? 'bg-stone-800' : 'bg-stone-900 hover:bg-stone-800'} py-2 px-6 w-full text-white font-medium rounded-lg transition-all duration-300 cursor-pointer`}  onClick={() => setBtnLogin(true)}>Inisiar Sesión</button>
                <button className={`${!btnLogin ? 'bg-stone-800' : 'bg-stone-900 hover:bg-stone-800'} py-2 px-6 w-full text-white font-medium rounded-lg transition-all duration-300 cursor-pointer`} onClick={() => setBtnLogin(false)}>Registrate</button>
            </div>

            {
                btnLogin ? <FormLogin /> : <FormRegister />
            }

            <Separator />
            
            <p className='text-center text-sm text-stone-400 mb-4'>{btnLogin ? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?'} <span className='text-white hover:text-stone-300 transition-all duration-300 cursor-pointer' onClick={() => setBtnLogin((prev) => !prev)}>{btnLogin ? 'Registrate' : 'Inisiar Sesión'}</span> </p>
            
            {
                btnLogin && <p className='text-center text-sm text-stone-400'><Link className='text-purple-600 hover:text-purple-700 transition-all duration-300'>¿Olvidaste tu contraseña?</Link> </p>
            }

        </div>
    </div>
  )
}