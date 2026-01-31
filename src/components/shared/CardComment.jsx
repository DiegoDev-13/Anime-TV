import { IoStar } from "react-icons/io5"

export const CardComment = ({name, image, comment, ranking}) => {

  const stars = Array.from({length: ranking})

  return (
    <div className="bg-surface-dark-highlight rounded-lg w-full p-8 border border-stone-800">
        <div className="flex items-center gap-4 mb-4">
            <img src={image} alt="" className="h-13 w-13 rounded-full object-contain" />
            <div className="flex flex-col space-y-1">
              <span className="text-[16px] text-white font-bold">{name}</span>
              <div className="flex items-center space-x-1">
                {
                  stars.map((_, index) => (
                    <span key={index} className="text-[16px] text-white font-bold"><IoStar size={14} className="text-yellow-300" /></span>
                  ))
                }
              </div>
            </div>
        </div>
        <p className="text-stone-300 italic text-[15px] max-h-40 md:max-h-50 line-clamp-6 md:line-clamp-8">" {comment} "</p>
    </div>
  )
}