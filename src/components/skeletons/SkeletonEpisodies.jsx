import { RiArrowRightDoubleLine } from "react-icons/ri"

export const SkeletonEpisodies = ({quantity}) => {

    const skeleton = Array.from({length: quantity})

  return (
    <div className="my-12 text-white w-full flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl flex items-center font-medium text-left md:mb-6 ml-2">
            <RiArrowRightDoubleLine size={45} className="text-purple-600"/>
            Últimos Episodios
        </h2>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 mx-auto animate-pulse">    
            
            {
                skeleton.map((_, index) => (
                    <div key={index} className="flex flex-col justify-center items-center space-y-3">
                        <div className="w-40 h-25 md:w-60 md:h-40 bg-stone-700/50" />
                        <div className="w-35 h-3 md:w-55 md:h-3 rounded-lg bg-stone-700/50" />
                    </div>
                ))
            }

        </div>
    </div>
  )
}