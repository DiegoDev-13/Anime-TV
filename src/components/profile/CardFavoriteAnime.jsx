import { FaRegTrashAlt } from "react-icons/fa";

export const CardFavoriteAnime = () => {
  return (
    <div className="mt-2 w-40 h-70 md:w-50 md:h-80 relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsLPTl7N1fivGlfg7vkESaM4yFXwDoOxZMA&s" alt="" className="w-50 h-70 rounded-lg"/>
        <h3 className="text-white text-[16px] font-medium">Nombre Anime</h3>
        <button className="absolute top-1 right-2 w-10 h-10 bg-stone-800/30 flex justify-center items-center rounded-lg cursor-pointer hover:bg-stone-800/50 transition-colors duration-300"><FaRegTrashAlt size={20} className="text-red-500" /></button>
    </div>
  )
}