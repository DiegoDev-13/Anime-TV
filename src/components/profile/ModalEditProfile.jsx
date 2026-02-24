import { useGlobalStore } from "../../store/global.store";
import { useUserStore } from "../../store/useUserStore";
import { useUser } from "../../hooks/auth/useUser";
import { Loader } from "../shared/Loader";
import { useState } from "react";
import { FormEditProfile } from "./FormEditProfile";
import { IoMdClose } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { Separator } from "../shared/Separator";
import { UploadImageProfile } from "./UploadImageProfile";
import { UploadImageBanner } from "./UploadImageBanner";

export const ModalEditProfile = () => {
    const [editImagenProfile, setEditImagenProfile] = useState(null)
    const [editImagenBanner, setEditImagenBanner] = useState(null)
    
    const {user} = useUserStore()
    const userId = user?.id
    
    const {user: userData, isLoading} = useUser(userId)
    const setActiveModalProfile = useGlobalStore(state => state.setActiveModalProfile)
    
    const [formUserName, setFormUserName] = useState(userData.user_name)
    const [formUserDescription, setFormUserDescription] = useState(userData.description)
    const [imagenProfile, setImagenProfile] = useState(userData.imagen_profile)
    const [imagenBanner, setImagenBanner] = useState(userData.imagen_banner)

  return (
    <div className="w-full h-screen fixed flex justify-center backdrop-blur-xs z-50" onClick={() => setActiveModalProfile(false)}>
        {
            isLoading 
                ? <Loader />
                : <div className="w-130 h-full md:h-150 flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between ">
                            <h3 className="text-white text-lg font-semibold flex justify-center items-center gap-2">
                                <MdEditSquare size={18} className="text-purple-700" />
                                Editar Perfil
                            </h3>
                            <button onClick={() => setActiveModalProfile(false)}>
                                <IoMdClose size={25} className="text-stone-400 hover:text-white cursor-pointer transition-all duration-300"/>
                            </button>
                        </div>
                        <Separator />
                            {
                                editImagenProfile || editImagenBanner
                                    ? editImagenProfile 
                                        ? <UploadImageProfile userData={userData} setEditImagenProfile={setEditImagenProfile} imagenProfile={imagenProfile} setImagenProfile={setImagenProfile} userName={userData.user_name} /> 
                                        : <UploadImageBanner userData={userData} setEditImagenBanner={setEditImagenBanner} editImagenBanner={editImagenBanner} imagenBanner={imagenBanner} setImagenBanner={setImagenBanner} />
                                    : <FormEditProfile userData={userData} setActiveModalProfile={setActiveModalProfile} setEditImagenProfile={setEditImagenProfile} setEditImagenBanner={setEditImagenBanner} formUserName={formUserName} setFormUserName={setFormUserName} formUserDescription={formUserDescription} setFormUserDescription={setFormUserDescription} imagenProfile={imagenProfile} imagenBanner={imagenBanner} /> 
                            }
                    </div>
        }
    </div>
  )
}