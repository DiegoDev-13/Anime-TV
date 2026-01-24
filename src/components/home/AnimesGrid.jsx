import { FaFire } from "react-icons/fa"
import { CardAnime } from "../shared/CardAnime"

export const AnimesGrid = ({title}) => {
  return (
    <div className="mt-12 text-white w-full flex flex-col justify-center">
        <h2 className="text-3xl flex items-center font-medium text-left mb-6 ml-6 ">
            <FaFire size={35} className="text-yellow-300" />
            {title}
        </h2>

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
            <CardAnime name="Jjujutsudsa kaisen" />

        </div>

    </div>
  )
}