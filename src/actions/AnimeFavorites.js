import { supabase } from "../supabase/Client"

// llama a la lista de animes favoritos del usuario  
export const getAnimeFavorites = async (userId, page = 1) => {

    const itemsPerPage = 5
    const from = (page - 1) * itemsPerPage
    const to = from + itemsPerPage - 1

    const {data, error, count} = await supabase.from('favorites_animes').select('*', {count: 'exact'}).eq('user_id', userId).range(from, to)

    if(error) {
        console.log(error)
        throw new Error("erro al buscar lista de animes favoritos");
    }

    return {
        data,
        count
    }
}

// Agrega un anime favorito a la lista del usuario
export const addFavorites = async ({name_season, year, image, description, gender, score, slug_season, id}) => {
    const {error} = await supabase.from('favorites_animes').insert({
        title: name_season,
        year,
        image,
        description,
        genders: gender,
        score,
        slug: slug_season,
        season_id: id,
    })

    if(error) {
        console.log(error)
        throw new Error("Error al intentar agregar anime a favoritos");
    }

}
// Elimina un anime favorito de la lista del usuario
export const removeFavorite = async (animeId) => {

    const {error} = await supabase.from('favorites_animes').delete().eq('id', animeId)

    if(error) {
        console.log(error)
        // throw new Error("Error al intentar eliminar anime de la lista de favoritos");
        throw new Error(error.message);
        
    }
}

// busca si el anime esta guardado en la listad del usuario
export const getFavorite = async (userId, seasonId) => {
    const {data, error} = await supabase.from('favorites_animes').select('*').eq('user_id', userId).eq('season_id', seasonId).maybeSingle()

    if(error) {
        console.log(error)
        throw new Error("Error al buscar anime favorito guardado");
    }
    
    return data
}

// Busca un anime de la lista de favoritos del usuario
export const getSearchFavorites = async (searchTerm) => {
    const {data, error} = await supabase.from('favorites_animes').select('*').ilike('title', `%${searchTerm}%`)

    if(error) {
        console.log(error.message)
        throw new Error("Error al buscar anime en tu lista de favoritos");
    }

    return data
}