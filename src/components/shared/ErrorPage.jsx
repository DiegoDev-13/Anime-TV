import { IoMdFlag, IoMdHome } from "react-icons/io"
import { MdMoodBad } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export const ErrorPage = ({error = '404'}) => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-3 space-x-1 my-10">
        <div className="w-[80%] md:w-120 p-2 mx-auto border border-purple-700/50 rounded-lg">
          <img src="https://4kwallpapers.com/images/wallpapers/404-not-found-cute-2048x2048-18164.jpg" alt="" className="w-full h-full object-contain rounded-lg" />
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 md:w-[40%] mx-auto">
          <h3 className="text-5xl text-white font-bold text-center">¡Ups! Se produjo un error al cargar la página. <span className="text-purple-700">{error}</span></h3>
          <div className="flex space-y-3 text-white py-3 px-5 bg-purple-700/10 rounded-lg border-l-5 border-l-purple-700 border border-purple-700/40 mx-6">
            <div className="px-2">
              <MdMoodBad size={35} className="text-purple-700"/>
            </div>
            <div>
              <h4>¿Qué pasó?</h4>
              <p>Recorrimos el multiverso, pero no pudimos encontrar el anime ni el episodio que buscas. Quizás lo eliminaron o ocurrio algun erorr.</p>
            </div>
          </div>

          <div className="flex space-x-4"> 
            <button className="py-2.5 px-4 bg-purple-700 text-white rounded-lg flex items-center gap-2 cursor-pointer hover hover:bg-purple-600 transition-all duration-300" onClick={() => navigate('/')}>
              <IoMdHome size={15} />
              Volver al Inicio
            </button>
            <button className="py-2.5 px-4 border border-stone-500 text-white rounded-lg flex items-center gap-2 cursor-pointer hover hover:bg-red-500/20 transition-all duration-300">
              <IoMdFlag size={15} />
              Reportar Contenido
            </button>
          </div>
        </div>
        
    </div>
  )
}