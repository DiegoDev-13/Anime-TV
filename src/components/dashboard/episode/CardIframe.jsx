import { IoIosClose } from "react-icons/io";

export const CardIframe = ({title, id, handleRemoveIframe}) => {
  return (
    <div className="w-23 h-13 border border-purple-700 bg-purple-700/10 rounded-lg flex justify-center items-center relative">
        <span className="text-purple-600 font-semibold text-[15px]">{title}</span>
        <IoIosClose size={24} className="text-purple-600 absolute top-0.5 right-0.5 hover:text-purple-400 transition-colors duration-300 cursor-pointer" onClick={() => handleRemoveIframe(id)} />
    </div>
  )
}