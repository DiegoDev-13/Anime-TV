import { NavLink } from "react-router-dom"
import { Logo } from "../shared/Logo"
import { PiVideoFill } from "react-icons/pi";
import { MdDashboard, MdMovie } from "react-icons/md";
import { GrChapterAdd } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { BiSolidComment } from "react-icons/bi";
import {Separator} from '../shared/separator'
import { BsFillNutFill } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogOut } from "../../hooks/auth/useLogOut";
import { Loader } from "../shared/Loader";


export const Sidebar = () => {

    const {mutate, isPending} = useLogOut()
 
    const handleLogout = () => {
        mutate()
    }
 
    if(isPending) return <Loader />

  return (
    <div className="bg-surface-dark text-stone-300 border-r border-slate-500 px-4 fixed h-screen w-20 md:w-55 lg:w-62.5 transition-all duration-300 flex flex-col">
        <div className="flex justify-center items-center">
            <div className="my-6 hidden md:flex">
                <Logo />
            </div>
            <div className="my-5 flex justify-center items-center md:hidden">
                <PiVideoFill size={40} className="text-purple-700" />
            </div>
        </div>

        <nav className="w-full flex flex-col mx-auto space-y-3 transition-all duration-300">
            <NavLink to='/dashboard/inicio' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <MdDashboard size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Dashboard</span>
            </NavLink>
            
            <NavLink to='/dashboard/administrar-animes' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <MdMovie size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Administrar Anime</span>
            </NavLink>

            <NavLink to='/dashboard/administrar-episodios' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <GrChapterAdd size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Administrar Episodios</span>
            </NavLink>

            <NavLink to='/dashboard/usuarios' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <HiMiniUsers size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Usuarios</span>
            </NavLink>

            <NavLink to='/dashboard/comentarios' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <BiSolidComment size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Comentarios</span>
            </NavLink>

            <Separator />

            <NavLink to='/dashboard/configuracion' className={({isActive}) => `${isActive ? 'btn-surface-dark-highlight text-purple-600 ' : 'bg-surface-dark text-stone-400 '} flex items-center p-2 gap-2 text-[16px] font-semibold hover:text-purple-500 rounded-lg transition-all duration-300`}>
                <BsFillNutFill size={25} className="min-w-6.25" />
                <span className="opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap" >Configuración</span>
            </NavLink>
        </nav>

        <button className="py-2 px-2 md:px-4 w-full mt-auto mb-6 flex justify-center items-center gap-2 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 transition-all duration-300 text-[16px] font-semibold" onClick={handleLogout}>
            <RiLogoutBoxLine size={25} className="min-w-6.25" />
            <span className="hidden md:block opacity-0 md:opacity-100 transition-opacity duration-300 whitespace-nowrap">Cerrar sesión</span>
        </button>

    </div>
  )
}