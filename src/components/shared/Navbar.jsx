import { NavLink } from "react-router-dom"
import { Logo } from "./Logo"
import { IoMdHome } from "react-icons/io";
import { IoFolderOpenSharp, IoSearch } from "react-icons/io5";
import { FaUserCircle, FaBars  } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="py-6 bg-surface-dark text-gray-400 flex items-center justify-between px-5 border-b border-slate-700 lg:px-12">

      <button className="md:hidden cursor-pointer">
        <FaBars size={25} />
      </button>

      <Logo />

      <nav className="gap-5 hidden md:flex">
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-purple-400 underline' : ''} transition-all duration-300 font-medium hover:text-purple-600 flex justify-center items-center uppercase `}>
          <IoMdHome size={25} />
          Inicio
        </NavLink>

        <NavLink to='/directorio' className={({isActive}) => `${isActive ? 'text-purple-400 underline' : ''} transition-all duration-300 font-medium hover:text-purple-600 flex justify-center items-center uppercase gap-1`}>
          <IoFolderOpenSharp  size={25} />
          Directorio
        </NavLink>
      </nav>

      <div className="flex justify-center gap-5">
          <button className="cursor-pointer ">
            <IoSearch size={25} />
          </button>

          <button className="cursor-pointer">
            <FaUserCircle size={25} />
          </button>
      </div>
    </header>
  )
}