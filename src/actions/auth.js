import { supabase } from "../supabase/Client"

// Registra al usuario 
export const signUp = async ({userName, email, password}) => {
    try {
        // 1: Se crea o registra el usuario 
        const {data, error} = await supabase.auth.signUp({
            email,
            password
        })

        if(error) {
            console.log(error)
            throw new Error(error.message);
        }

        const userId = data.user?.id
        const userEmail = data.user?.email

        if(!userId || !userEmail) {
            throw new Error("Error al obtener id del usuario o email");
        }

        // 2: Authenticamos al usuario 

        const {error: singInError} = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(singInError) {
            console.log(singInError)
            throw new Error(singInError.message);
        }

        // 3: Agregamos el rol por defecto al usuario y su userName 

        const {error: roleError} = await supabase.from('users').insert({
            user_id: userId,
            role: 'user',
            full_name: userName,
            email: userEmail
        })

        if(roleError) {
            console.log(roleError)
            throw new Error(roleError.message);   
        }
        
    } catch (error) {
        console.log(error)
        throw new Error("Error al registrase");
        
    }
} 

// obtener la session del usuario
export const getSession = async () => {
    const {data , error} = await supabase.auth.getSession()

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return  {
        data 
    }
}

// Para traer los datos del usuario mediante id
export const getUserById = async (userId) => {
    const {data, error} = await supabase.from('users').select('*').eq('user_id', userId).single()

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
} 
// Para traer los datos del usuario mediante el userName
export const getUserByUserName = async (userName) => {
    const {data, error} = await supabase.from('users').select('*').eq('user_name', userName).single()

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
} 

// Cerrar session del usuario 
export const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if(error) {
        console.log(error)
        throw new Error(['Error al cerrar session']);
    }
}

// Iniciar session 
export const signIn = async ({email, password}) => {
    const {error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(error) {
        console.log(error)
        throw new Error('Correo o contraseña incorrecta');
        
    }
} 

// Hace un fecth de la imagen de los usuarios mediante el userName
export const fecthImageProfile = async (userName) => {
    const {data, error} = await supabase.from('users').select('imagen_profile').eq('user_name', userName)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}