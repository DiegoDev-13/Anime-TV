export const CardComment = ({name, image, comment}) => {
  return (
    <div className="bg-surface-dark rounded-lg w-full p-8 border border-stone-800">
        <div className="flex items-center gap-4 mb-4">
            <img src={image} alt="" className="h-13 w-13 rounded-full object-contain" />
            <span className="text-[16px] text-white font-bold">{name}</span>
        </div>
        <p className="text-stone-300">" {comment} "</p>
    </div>
  )
}