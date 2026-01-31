import { IoFolderOpenSharp } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { useGlobalStore } from "../../store/global.store"
import { IoMdHome } from "react-icons/io"

export const MobileNavbar = () => {

    const setActiveMobile = useGlobalStore(state => state.setActiveMobile)

  return (
    <div className="sticky py-14 w-full bg-surface-dark transition-all duration-300 md:hidden animated-slideInTop">
        <nav className="space-y-1 text-gray-400">
            <NavLink to='/' className={({isActive}) => `${isActive ? 'text-purple-500 underline' : ''} flex justify-center items-center gap-1 text-[16px] font-semibold uppercase bg-surface-dark-highlight py-4`} onClick={() => setActiveMobile(false)}>
              <IoMdHome size={20} />
              Inicio
            </NavLink> 
            <NavLink to='/directorio' className={({isActive}) => `${isActive ? 'text-purple-500 underline' : ''} flex justify-center items-center gap-1 text-[16px] font-semibold uppercase bg-surface-dark-highlight py-4`} onClick={() => setActiveMobile()}>
              <IoFolderOpenSharp  size={20} />
              Directorio
            </NavLink>
        </nav>
    </div>
  )
}