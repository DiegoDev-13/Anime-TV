import { supabase } from "../supabase/Client"

// actualiza la informacion del usuario (Name, Description)
export const updateDataUser = async (userDataForm) => {

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

//Sube o actualiza la imagen de perfil del usuario
export const updateImagenProfile = async (formData) => {

    const imagenProfileName = formData.imageName

    let uploadImage

    const userId = formData.id

    const filePath = `private/${userId}/${formData.userName}${imagenProfileName}`
    
    // // 1: Verficia si hay una imagenProfile 
    const { data: dataExists, error: errorExists } = await supabase.storage.from('imagen_users').exists(filePath)

    if (errorExists && errorExists.status !== 404) {
        console.error(errorExists.message);
        }

    // Si exite la elimina y sube de nuevo 
    if(dataExists) {
        const {error} = await supabase.storage.from('imagen_users').remove([filePath])

        if(error) {
            console.log(error)
            throw new Error(error.message);
        }

        const { data: dataProfileImagen, error: errorUploadProfile} = await supabase.storage.from('imagen_users').upload(filePath, formData.file, {
            upsert: true, cacheControl: 0
        })

        if(errorUploadProfile) throw new Error(errorUploadProfile.message)

        const { data: { publicUrl } } = supabase.storage.from('imagen_users').getPublicUrl(`private/${userId}/${formData.userName}${imagenProfileName}`);

        const imagenProfileUrl = publicUrl;

        // 2-1: se actualiza la foto de profile o banner
        imagenProfileName === 'imagen-profile' ? uploadImage = {imagen_profile: imagenProfileUrl} : uploadImage = {imagen_banner: imagenProfileUrl}

        const {error: errorUrl} = await supabase.from('users').update(uploadImage).eq('user_id', userId)

        if(errorUrl) {
            console.log(error)
            throw new Error(error.message);
        }

        return
    }

    // // 2: se sube las fotos de profile & banner 


        const { data: dataProfileImagen, error: errorUploadProfile} = await supabase.storage.from('imagen_users').upload(filePath, formData.file, {
            upsert: true, cacheControl: 0
        })

        if(errorUploadProfile) throw new Error(errorUploadProfile.message)

        const { data: { publicUrl } } = supabase.storage.from('imagen_users').getPublicUrl(`private/${userId}/${formData.userName}${imagenProfileName}`);

        const imagenProfileUrl = publicUrl;

        // 2-1: se actualiza la foto de profile 
        imagenProfileName === 'imagen-profile' ? uploadImage = {imagen_profile: imagenProfileUrl} : uploadImage = {imagen_banner: imagenProfileUrl}

        const {error} = await supabase.from('users').update(uploadImage).eq('user_id', userId)

        if(error) {
            console.log(error)
            throw new Error(error.message);
        }

}

// export const updateImagenBanner = async (formData) => {

//     const imagenProfileName = 'imagen-banner'
    
//     const userId = formData.id

//     const filePath = `private/${userId}/${formData.userName}${imagenProfileName}`
    
//     // // 1: Verficia si hay una imagen banner
//     const { data: dataExists, error: errorExists } = await supabase.storage.from('imagen_users').exists(filePath)
//     console.log(dataExists)

//     // Si exite la elimina y sube de nuevo 
//     if(dataExists) {
//         const {error} = await supabase.storage.from('imagen_users').remove([filePath])

//         if(error) {
//             console.log(error)
//             throw new Error(error.message);
//         }

//         const { data: dataProfileImagen, error: errorUploadProfile} = await supabase.storage.from('imagen_users').upload(filePath, formData.file, {
//             upsert: true, cacheControl: 0
//         })

//         if(errorUploadProfile) throw new Error(errorUploadProfile.message)

//         const { data: { publicUrl } } = supabase.storage.from('imagen_users').getPublicUrl(`private/${userId}/${formData.userName}${imagenProfileName}`);

//         const imagenProfileUrl = publicUrl;

//         // 2-1: se actualiza la foto de profile 
//         const {error: errorUrl} = await supabase.from('users').update({imagen_profile: imagenProfileUrl}).eq('user_id', userId)

//         if(errorUrl) {
//             console.log(error)
//             throw new Error(error.message);
//         }

//         return
//     }

//     // // 2:sube las fotos de profile & banner 


//         const { data: dataProfileImagen, error: errorUploadProfile} = await supabase.storage.from('imagen_users').upload(filePath, formData.file, {
//             upsert: true, cacheControl: 0
//         })

//         if(errorUploadProfile) throw new Error(errorUploadProfile.message)

//         const { data: { publicUrl } } = supabase.storage.from('imagen_users').getPublicUrl(`private/${userId}/${formData.userName}${imagenProfileName}`);

//         const imagenProfileUrl = publicUrl;

//         // 2-1: se actualiza la foto de profile 
//         const {error} = await supabase.from('users').update({imagen_profile: imagenProfileUrl}).eq('user_id', userId)

//         if(error) {
//             console.log(error)
//             throw new Error(error.message);
//         }

// }

// Elimina la imagen de perfil del usurio 
export const deleteImagenProfile = async (formData) => {

    const imagenProfileName = 'imagen-profile'
    const userId = formData.id

    const filePath = `private/${userId}/${formData.userName}${imagenProfileName}`

    // 1: Se remueve la imagen del storage | bucket en supabase 
    const {error} = await supabase.storage.from('imagen_users').remove([filePath])

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    // 2: Se acualiza la imagen en la tabla de usuarios 
    const {} = await supabase.from('users').update({imagen_profile: formData.file}).eq('user_id', userId)
}