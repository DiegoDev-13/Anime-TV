import { IoStar } from "react-icons/io5"
import { formatDateAgo, getFirstLetter } from "../../helpers"
import { useFecthImageProfile } from "../../hooks/useFecthImageProfile"
import { Loader } from "./Loader"

export const CardComment = ({name, image, comment, ranking, time}) => {

  const stars = Array.from({length: ranking})

  // console.log(name)

  // const {data: image, isLoading} = useFecthImageProfile(name)

  // if(isLoading) return <Loader />

  // console.log(image)

  return (
    <div className="bg-surface-dark-highlight rounded-lg w-full p-8 border border-stone-800">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-white rounded-full w-13 h-13 flex justify-center items-center">
              {
                image
                  ? <img src={image} alt="" className="h-full w-full rounded-full object-contain" />
                  : <div>
                    <p className="uppercase text-3xl font-semibold">{getFirstLetter(name)}</p>
                    </div>
              }
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] text-white font-bold">{name}</span>
              <div className="flex items-center space-x-1 bg-yellow-400/20 p-1 rounded-lg border border-yellow-300/30">
                {
                  stars.map((_, index) => (
                    <span key={index} className="text-[16px] text-white font-bold"><IoStar size={14} className="text-yellow-300" /></span>
                  ))
                }
              </div>
              <span className="text-stone-300 text-xs">{formatDateAgo(time)}</span>
            </div>
        </div>
        <p className="text-stone-300 italic text-[15px] max-h-40 md:max-h-50 line-clamp-6 md:line-clamp-8">" {comment} "</p>
    </div>
  )
}