import { IoCloseOutline } from "react-icons/io5"
import {Separator} from '../shared/Separator'
import { Link } from "react-router-dom"
import { IoMdSettings } from "react-icons/io"
import { MdFavorite, MdLogout, MdOutlineHelpOutline } from "react-icons/md"
import { useLogOut } from "../../hooks/auth/useLogOut"
import {Loader} from '../shared/Loader'
import { getFirstLetter } from "../../helpers"

export const ProfileModal = ({user, setActiveProfileSheet}) => {

    const {mutate, isPending} = useLogOut()

    const handleSignOut =  () => {
        mutate()
    }

  return (
        <div className="w-full h-screen z-20 absolute top-0 right-0" onClick={() => setActiveProfileSheet(false)}>
            <div className="absolute z-30 top-0 right-0 md:top-4 md:right-8 p-4 w-full h-screen md:h-auto md:w-80 border border-stone-700 rounded-lg bg-surface-dark animated-slideInTop" onClick={e => e.stopPropagation()}>
                {
                    isPending 
                        ? <Loader />
                        : <div>
                                <button onClick={() => setActiveProfileSheet(false)} className="absolute top-4 right-3">
                                <IoCloseOutline size={25} className="text-white cursor-pointer " />
                                </button>
                                <div className="flex items-center justify-center md:justify-start my-4">
                                    <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full mr-4">
                                        <p className="text-lg font-bold text-black uppercase">{getFirstLetter(user?.user_name)}</p>
                                    </div>
                                    <div>
                                        <span className="text-white font-medium text-[16px] line-clamp-1">{user?.user_name}</span>
                                        <p className="text-sm">{user?.email}</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col space-y-6 my-12 md:space-y-4 md:my-6">
                                    <Link to={`/perfil`} className="text-[15px] flex items-center gap-2 hover:text-stone-300 transition-all duration-300"><IoMdSettings size={20} /> Configuración de Perfil</Link>
                                    <Link className="text-[15px] flex items-center gap-2 hover:text-stone-300 transition-all duration-300"><MdFavorite size={20} /> Lista de Favoritos</Link>
                                    <Link className="text-[15px] flex items-center gap-2 hover:text-stone-300 transition-all duration-300"><MdOutlineHelpOutline size={20} /> Centro de Ayuda</Link>
                                </div>
                                <Separator />
                                <button className="bg-red-600 md:bg-transparent text-white w-full md:w-auto px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none md:text-red-600 md:bg-none font-semibold flex items-center justify-center md:justify-start gap-2 cursor-pointer md:hover:text-red-700 transition-colors duration-300" onClick={handleSignOut}><MdLogout size={20} />Cerrar Sesión</button>
                            </div>
                }

            </div>
        </div>
    )
}