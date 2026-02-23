import { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { MdOutlineFileUpload } from "react-icons/md"
import { getFirstLetter } from "../../helpers"
import { useUpdateImagenProfile } from "../../hooks/profile/useUpdateImagenProfile"
import { Loader } from "../shared/Loader"

export const UploadImageProfile = ({userData, setEditImagenProfile, imagenProfile, setImagenProfile, userName, setFileProfile}) => {

    const [currentImage, setCurrentImage] = useState(null)
    const [fileImagen, setFileImagen] = useState(null)

    const {mutate, isPending} = useUpdateImagenProfile()

    useEffect(() => {
        setCurrentImage(imagenProfile)
    }, [imagenProfile])
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFileProfile(file)
        setFileImagen(file)
        setCurrentImage(URL.createObjectURL(file))
    }

    const removeFile = () => {
        setCurrentImage(null)
    }

    const saveChanges = (e) => {
        e.preventDefault()

        const formData = {
            file: fileImagen,
            userName: userData.user_name,
            id: userData.user_id
        }
        setImagenProfile(currentImage)
        mutate(formData)
        
    }

    if(isPending) return <Loader />

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
        <div className="h-50 w-50 flex my-4 bg-white rounded-full items-center justify-center">
            {
                currentImage 
                    ? <img src={currentImage} alt="" className="w-full h-full rounded-full object-contain" />
                    : <p className="text-9xl font-semibold uppercase">{getFirstLetter(userName)}</p>
            }
        </div>

        <form onSubmit={saveChanges} className="w-full flex flex-col justify-center items-center space-y-4">

            <input type="file" accept="image/*" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounderd-md file:border-0 file:text-sm file:font-semibold file:bg-[#2a2438] file:text-white file:cursor-pointer" onChange={handleImageChange}/>

            <button type="button" className="text-red-400 text-[16px] font-medium flex justify-center items-center gap-2 py-2 px-4 bg-red-500/20 border hover:bg-red-500/40 border-red-700/30 rounded-lg transition-all duration-300 cursor-pointer" onClick={removeFile}>
                <IoMdTrash size={20} />
                Remover Foto Actual
            </button>   
        <div className="flex justify-center items-center w-full space-x-3">
            <button className="w-full py-3 text-white rounded-lg bg-surface-dark-btn border border-stone-700 transition-all duration-300 cursor-pointer" onClick={() => setEditImagenProfile(false)}>Cancelar</button>
            <button type="submit" className="w-full py-3 text-white rounded-lg bg-purple-700 cursor-pointer hover:bg-purple-600 transition-all duration-300" onClick={saveChanges}>Guardar Cambios</button>
        </div>
        </form>

    </div>
  )
}