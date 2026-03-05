import { Separator } from "../../shared/Separator"
import { IoMdClose } from "react-icons/io"
import { AiFillFolderAdd } from "react-icons/ai";
import { useGlobalStore } from "../../../store/global.store";

export const ModalAddAnime = () => {

    const setActiveModalNewAnime = useGlobalStore(state => state.setActiveModalNewAnime)

  return (
    <div className="w-full h-screen fixed flex justify-center backdrop-blur-xs z-50">
        <div className="w-130 h-full md:h-150 flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between ">
                <h3 className="text-white text-lg font-semibold flex justify-center items-center gap-2">
                    <AiFillFolderAdd size={25} className="text-purple-700" />
                    Agregar anime
                </h3>
                <button onClick={() => setActiveModalNewAnime(false)}>
                    <IoMdClose size={25} className="text-stone-400 hover:text-white cursor-pointer transition-all duration-300"/>
                </button>
            </div>
            <Separator />
        </div>
    </div>
  )
}