import { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { useUpdateImagenProfile } from "../../hooks/profile/useUpdateImagenProfile"
import { Loader } from "../shared/Loader"

export const UploadImageBanner = ({userData, setEditImagenBanner, imagenBanner, setImagenBanner}) => {
      const [currentImage, setCurrentImage] = useState(null)
      const [fileImagen, setFileImagen] = useState(null)

      const {mutate, isPending} = useUpdateImagenProfile()
  
      useEffect(() => {
          setCurrentImage(imagenBanner)
      }, [imagenBanner])
      
      const handleImageChange = (e) => {
          const file = e.target.files[0];
          setFileImagen(file)
          setCurrentImage(URL.createObjectURL(file))
      }

  
      const saveChanges = (e) => {
        e.preventDefault()

        const formData = {
            file: fileImagen || '',
            userName: userData.user_name,
            id: userData.user_id,
            imageName: 'imagen-banner'
        }

        setImagenBanner(currentImage)
        mutate(formData)
        setEditImagenBanner(false)
        // console.log(currentImage)
      }
  
      if(isPending) return <Loader />

    return (
      <div className="flex flex-col justify-center items-center space-y-4">
          <div className="h-40 w-full flex my-2 rounded-lg items-center justify-center">  
            <img src={currentImage} alt="" className="w-full h-full rounded-lg " />
          </div>
  
          <form onSubmit={saveChanges}>
            <div className="flex flex-col justify-center items-center space-y-4">
                <input type="file" accept="image/*" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounderd-md file:border-0 file:text-sm file:font-semibold file:bg-[#2a2438] file:text-white file:cursor-pointer my-6" onChange={handleImageChange}/>
    
            </div>

                <div className="flex justify-center items-center w-full space-x-3">
                    <button type="button" className="w-full py-3 text-white rounded-lg bg-surface-dark-btn border border-stone-700 transition-all duration-300 cursor-pointer" onClick={() => setEditImagenBanner(false)}>Cancelar</button>
                    <button type="submit" className="w-full py-3 text-white rounded-lg bg-purple-700 cursor-pointer hover:bg-purple-600 transition-all duration-300" onClick={saveChanges}>Guardar Cambios</button>
                </div>
          </form>
      </div>
    )
}