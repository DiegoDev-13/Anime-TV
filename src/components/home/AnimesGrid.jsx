import { FaFire } from "react-icons/fa"
import { CardAnime } from "../shared/CardAnime"

export const AnimesGrid = ({title}) => {
  return (
    <div className="mt-12 text-white w-full flex flex-col justify-center">
        
        <div className="flex justify-between mx-5 md:mx-10 items-center">

          <h2 className="text-xl md:text-3xl flex items-center font-medium text-left md:mb-6 md:ml-6 ">
              <FaFire size={35} className="text-yellow-300" />
              {title}
          </h2>

          <button className="w-20 md:w-30 py-2 md:py-3 bg-purple-600 text-white rounded-lg cursor-pointer text-xs md:text-sm font-medium hover:bg-purple-700 transition-colors duration-300">Ver más</button>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 space-y-10 mt-6 mx-auto">
            <CardAnime name="Jjujutsu kaisen" />
            <CardAnime name="Jjujutsuasdasdasd kaisen" />
            <CardAnime name="JjujutsASu kaisen" />
            <CardAnime name="JjujuassaS Atsu kaisen" />
            <CardAnime name="Jjujutsu kaisen" />
            <CardAnime name="Jjujutsudsdadasdas dasdasdasd kaisen" />
            <CardAnime name="Jjujutsudas kaisen" />
            <CardAnime name="Jjujutsu kaisen" />
            <CardAnime name="Jjujutsudas kaisen" />
            <CardAnime name="JjujutsSADD SADSAu kaisen" />
            <CardAnime name="Jjujutsudsa kaisen" />
            <CardAnime name="JjujutsSADD SADSAu kaisen" />
            <CardAnime name="Jjujutsudsa kaisen" />
            <CardAnime name="JjujutsSADD SADSAu kaisen" />
            <CardAnime name="Jjujutsudsa kaisen" />

        </div>


    </div>
  )
}