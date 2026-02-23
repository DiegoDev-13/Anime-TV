import { supabase } from "../supabase/Client"

export const updateDataUser = async (userDataForm) => {

        // 1: se actualiza la informacion del usuario (Name, Description)
    const {error} = await supabase.from('users').update({user_name: userDataForm.userName, description: userDataForm.description, }).eq('user_id', userDataForm.id)

     if(error) {
        if(error.details === `Key (user_name)=(${userDataForm.userName}) already exists.`) {
            throw new Error("El nombre de usuario ya existe");
            return
        }
        console.log(error)
        throw new Error("No se pudo actualizar el nombre, descripción");
    }

} 

export const updateImagenProfile = async (formData) => {


    const imagenProfileName = 'imagen-profile'

    
    const userId = formData.id

    
    // // 2: Verficia si hay una imagenProfile o imagenBanner 
    // const { data: dataExists, error: errorExists } = await supabase.storage.from('avatars').exists(`${userId}/${formData.userName}`)

    // 2:sube las fotos de profile & banner 
        const { data: dataProfileImagen, error: errorUploadProfile} = await supabase.storage.from('imagen_users').upload(`${userId}/${formData.userName}${imagenProfileName}`, formData.file)

        if(errorUploadProfile) throw new Error(errorUploadProfile.message)

        const imagenProfileUrl = `${supabase.storage.from('imagen_users').getPublicUrl(dataProfileImagen.path).dataProfileImagen.publicUrl}`

        // 2-1: se actualiza la foto de profile 
        const {error} = await supabase.from('users').update({imagen_profile: imagenProfileUrl}).eq('user_id', userId)

        if(error) {
            console.log(error)
            throw new Error(error.message);
        }
}