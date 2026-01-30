import { FaFire } from "react-icons/fa"

export const SkeletonAnime = ({quantity}) => {

    const skeleton = Array.from({length: quantity})

  return (
    <div className="mt-12 mb-6 text-white w-full flex flex-col justify-center">
        <div className="flex justify-between mx-5 md:mx-4 items-center md:mb-4">
            <h2 className="text-xl md:text-3xl flex items-center font-medium text-left ">
                <FaFire size={35} className="text-yellow-300" />
                Últimos animes
            </h2>

            <button className="w-20 md:w-30 py-2 md:py-3 bg-purple-600 text-white rounded-lg cursor-pointer text-xs md:text-sm font-medium hover:bg-purple-700 transition-colors duration-300" onClick={() => navigate('/directorio')}>Ver más</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-6 mx-auto animate-pulse">
            {
                skeleton.map((_, index) => (
                    <div key={index} className="flex flex-col justify-center items-center space-y-3">
                        <div className="w-40 h-50 md:w-50 md:h-70 bg-stone-700/50">
                        </div>
                        <div className="w-35 h-3 md:w-45 md:h-3 rounded-lg bg-stone-700/50" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}