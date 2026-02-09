import { supabase } from "../supabase/Client"

// llama a la lista de animes favoritos del usuario  
export const getAnimeFavorites = async (userId, page = 1) => {

    const itemsPerPage = 5
    const from = (page - 1) * itemsPerPage
    const to = from + itemsPerPage - 1

    const {data, error} = await supabase.from('favorites_animes').select('*').eq('user_id', userId).range(from, to)

    if(error) {
        console.log(error)
        throw new Error("erro al buscar lista de animes favoritos");
    }

    return data
}

// Agrega un anime favorito a la lista del usuario