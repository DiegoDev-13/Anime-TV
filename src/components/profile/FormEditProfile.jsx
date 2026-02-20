import { MdEdit } from "react-icons/md"
import { getFirstLetter } from "../../helpers"

export const FormEditProfile = ({userData, setActiveModalProfile, setEditImagenProfile, setEditImagenBanner, formUserName, setFormUserName, formUserDescription, setFormUserDescription, imagenProfile, imagenBanner}) => {
  return (
    <form className="flex flex-col justify-center">
        <div className="flex justify-center relative">
            <div className="w-full h-35">
                <img src={imagenBanner} alt="" className="w-full h-full rounded-lg"/>
                <button type="button" className="py-1 px-3 bg-purple-700 hover:bg-purple-600 text-white rounded-lg text-xs absolute bottom-2 right-2 transition-all duration-300 cursor-pointer" onClick={() => setEditImagenBanner(true)}>Cambiar Banner</button>
            </div>
            <div className="bg-stone-300 font-medium w-20 h-20 rounded-full absolute flex justify-center items-center -bottom-5 left-5 border-4 border-[#2a2438]">
                {
                    imagenProfile
                        ? <img src={imagenProfile ? imagenProfile: userData?.imagen_profile} alt={userData?.user_name} className="w-full h-full object-contain rounded-full"/>
                        : <p className="text-5xl uppercase font-semibold">{getFirstLetter(userData?.user_name)}</p>
                }
                <button type="button" className="bg-purple-700 flex justify-center items-center w-7 h-7 rounded-full absolute -bottom-1 right-0 border-2 border-[#2a2438] hover:bg-purple-600 transition-all duration-300 cursor-pointer" onClick={() => setEditImagenProfile(true)}>
                    <MdEdit size={15} className="text-stone-300" />
                </button>
            </div>
        </div>
        <div className="flex flex-col justify-center mt-8 space-y-2">
            <label htmlFor="userName" className="text-sm text-white">Nombre de Usuario</label>
            <input type="text" id="userName" className="p-2 text-white text-[16px] rounded-lg otuline-none focus:outline-none bg-surface-dark-highlight border border-stone-600 transition-all duration-300" placeholder="Nombre de usuario" value={formUserName} onChange={(e) => setFormUserName(e.target.value)}/>
        </div>

        <div className="flex flex-col justify-center mt-4 space-y-2">
            <label htmlFor="description" className="text-sm text-white">Descripción</label>
            <textarea id="description" rows={5} cols={10} className="p-2 text-white text-[16px] rounded-lg otuline-none focus:outline-none bg-surface-dark-highlight border border-stone-600 transition-all duration-300" value={formUserDescription} onChange={(e) => setFormUserDescription(e.target.value)} placeholder="Cuéntale a la comunidad tus preferencias" ></textarea>

        </div>

        <div className="flex flex-col md:flex-row w-full md:w-auto self-end mt-8 space-x-3 space-y-5 md:space-y-0">
            <button type="button" className="bg-purple-700/20 hover:bg-purple-600/30 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-stone-300 border border-purple-600" onClick={() => setActiveModalProfile(false)} >
                Cancelar
            </button> 
            <button type="submit" className="bg-purple-700 hover:bg-purple-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-white">
                Guardar Cambios
            </button> 
        </div>
    </form>
  )
}