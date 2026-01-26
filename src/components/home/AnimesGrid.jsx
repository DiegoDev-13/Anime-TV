import { FaFire } from "react-icons/fa"
import { CardAnime } from "../shared/CardAnime"
import { useSeasonsHome } from "../../hooks/useSeasonsHome"
import { Loader } from "../shared/Loader"
import { useNavigate } from "react-router-dom"

export const AnimesGrid = ({title}) => {

  const {seasons, isLoading} = useSeasonsHome()

  const navigate = useNavigate()

  console.log(seasons)

  if(isLoading || !seasons) return <Loader />

  return (
    <div className="mt-12 text-white w-full flex flex-col justify-center">
        
        <div className="flex justify-between mx-5 md:mx-4 items-center md:mb-4">

          <h2 className="text-xl md:text-3xl flex items-center font-medium text-left ">
              <FaFire size={35} className="text-yellow-300" />
              {title}
          </h2>

          <button className="w-20 md:w-30 py-2 md:py-3 bg-purple-600 text-white rounded-lg cursor-pointer text-xs md:text-sm font-medium hover:bg-purple-700 transition-colors duration-300" onClick={() => navigate('/directorio')}>Ver más</button>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 space-y-10 mt-6 mx-auto">
            {
              seasons?.map(item => (
                <CardAnime key={item.id} item={item} />
              ))
            }

        </div>


    </div>
  )
}