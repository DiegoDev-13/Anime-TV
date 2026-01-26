import { Link } from 'react-router-dom'
import {Logo} from '../shared/Logo'
import { FaGithub } from 'react-icons/fa'
import { BsDiscord, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { Separator } from './Separator'
 
export const Footer = () => {
  return (
    <div className='flex flex-col w-full bg-surface-dark text-white px-12'>
      <div className=" flex md:flex-row gap-5 md:gap-3 items-center justify-between flex-wrap md:flex-nowrap mt-10 py-12 ">
        <div className='flex flex-col gap-3 flex-1'>
          <Logo />

          <p className='text-sm text-slate-300'>
            Tu plataforma definitiva para ver anime. Descubre los últimos episodios, explora nuestro extenso directorio y únete a una comunidad apasionada por el anime.
          </p>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h3 className='font-semibold uppercase mb-3'>Explorar</h3>

          <nav className='flex flex-col text-sm gap-2 md:gap-3'>
            <Link className='text-slate-300 hover:text-white'>
            Animes Populares
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Nuevos Lanzamientos
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Directorio
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Login
            </Link>
          </nav>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h3 className='font-semibold uppercase mb-3'>Comunidad</h3>

          <nav className='flex flex-col text-sm gap-2 md:gap-3'>
            <Link className='text-slate-300 hover:text-white'>
              Foro
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Discord
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Blog
            </Link>
            <Link className='text-slate-300 hover:text-white'>
              Noticias
            </Link>
          </nav>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h3 className='font-semibold uppercase mb-3'>Síguenos</h3>

          <nav className='flex rounded text-sm gap-2'>
            <Link className='text-slate-300 hover:text-white p-3 rounded-lg border border-slate-300 hover:border-white hover:scale-105 transition-all duration-300'>
              <BsTwitterX size={20} />
            </Link>
            <Link className='text-slate-300 hover:text-white p-3 rounded-lg border border-slate-300 hover:border-white hover:scale-105 transition-all duration-300'>
              <BsFacebook size={20} />
            </Link>
            <Link className='text-slate-300 hover:text-white p-3 rounded-lg border border-slate-300 hover:border-white hover:scale-105 transition-all duration-300'>
              <BsInstagram size={20} />
            </Link>
            <Link className='text-slate-300 hover:text-white p-3 rounded-lg border border-slate-300 hover:border-white hover:scale-105 transition-all duration-300'>
              <BsDiscord  size={20} />
            </Link>
          </nav>
        </div>
      </div>

      <Separator />

      <div className='flex flex-col md:flex-row items-center justify-between py-10 gap-4 md:gap-2'>
        <div className='flex items-center '>
          <p className='text-center'>@ 2026 AnimeVsita. Todos los derechos reservados.</p>
        </div>

        <div className='flex flex-col items-center gap-3'>
          <p className='font-medium'>Desarrollado por:</p>
          <Link to='https://github.com/DiegoDev-13' className='flex gap-2 items-center border border-slate-500 p-2 rounded-lg hover:scale-105 transition-all duration-300'>
            <FaGithub size={20} />
            Github: Diego Martinez
          </Link>
        </div>
      </div>

    </div>
  )
}