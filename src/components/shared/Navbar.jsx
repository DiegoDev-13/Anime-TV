import { NavLink, useNavigate } from "react-router-dom"
import { Logo } from "./Logo"
import { IoMdHome } from "react-icons/io";
import { IoFolderOpenSharp, IoSearch } from "react-icons/io5";
import { FaBars, FaUser  } from "react-icons/fa";
import { useGlobalStore } from "../../store/global.store";
import { useSessionUser } from "../../hooks/auth/useSessionUser";

export const Navbar = () => {

  const setActiveMobile = useGlobalStore((state) => state.setActiveMobile)
  const setActiveSheetSearch = useGlobalStore(state => state.setActiveSheetSearch)

  const navigate = useNavigate()

  const {session, isLoading} = useSessionUser()

  console.log(session?.data.session)

  return (
    <header className="py-4 bg-surface-dark animated-fadeIn text-gray-400 flex items-center justify-between px-5 border-b border-slate-700 lg:px-12 relative">

      <button className="md:hidden cursor-pointer" onClick={() => setActiveMobile(true)}>
        <FaBars size={25} />
      </button>

      <Logo />

      <nav className="gap-4 hidden md:flex">
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-purple-400 underline' : ''} transition-all duration-300 font-bold hover:text-purple-600 flex justify-center items-center uppercase text-sm`}>
          <IoMdHome size={20} />
          Inicio
        </NavLink>

        <NavLink to='/directorio' className={({isActive}) => `${isActive ? 'text-purple-400 underline' : ''} transition-all duration-300 font-bold hover:text-purple-600 flex justify-center items-center uppercase gap-1  text-sm`}>
          <IoFolderOpenSharp  size={20} />
          Directorio
        </NavLink>
      </nav>

      <div className="flex justify-center items-center gap-5">
          <button className="hover:text-white hover:border-white transition-all duration-300 cursor-pointer " onClick={() => setActiveSheetSearch(true)}>
            <IoSearch size={25} />
          </button>


          {
            session?.data.session
              ? <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={() => navigate('/profile')}>
                  <span className="text-black text-xl font-bold cursor-pointer">D</span>
                </div>
              : <button className="flex justify-center items-center gap-2 py-2 px-3 text-sm font-semibold border border-stone-400 rounded-lg hover:text-white hover:border-white transition-all duration-300 cursor-pointer" onClick={() => navigate('/login')}>
                <FaUser size={15} />
                Login
              </button>
          }

      </div>
    </header>
  )
}