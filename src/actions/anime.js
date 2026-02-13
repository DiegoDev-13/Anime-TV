import { supabase } from "../supabase/Client";

// Hace la peticion en supabase para traer los 15 episodios mas recientes para la home - page
export const getEpisodiesHome = async () => {
    const {data, error} = await supabase.from('episodes').select('*').order('created_at', {ascending: false}).limit(15)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}

// Hace la peticion en supabase para traer los 12 animes mas recientes para la home - page
export const getSeasonsHome = async () => {
    const {data, error} = await supabase.from('seasons').select('*, episodes(*)').order('created_at', {ascending: false}).limit(12)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}

// Hace la peticion en supabase para traer el anime mediante el slug + los comentarios relacionado a ese anime
export const getAnimeBySlug = async (slug) => {
    const {data, error} = await supabase.from('seasons').select('*, episodes(*), season_comments(*))').eq('slug_season', slug).limit(2, { foreignTable: 'season_comments' }).order('created_at', { foreignTable: 'episodes', ascending: false }).order('created_at', { foreignTable: 'season_comments', ascending: false }).single()

    if(error || !data) {
        console.log(error)
        throw new Error('Anime no encontrado');
    }

    return data
} 

//Agrega un nuevo comentario a la base de datos
export const addComment = async ({seasonId, userId, comment, imageProfile, ranking, userName}) => {
    const {error} = await supabase.from('season_comments').insert({
        'season_id': seasonId,
        'user_uid': userId,
        'comment': comment,
        'image_profile': imageProfile,
        'ranking': ranking,
        'user_name': userName
    })

    if(error) {
        console.log(error.message)
        throw new Error("Error al intentar añadir comentario");
    }
}

// Hace la peticion a supabase para traer los generos de los animes 
export const getGender = async () => {
    const {data, error} = await supabase.from('genders').select('*')

    if(error) {
        console.log(error) 
        throw new Error(error.message);
    }


    return data
}

// Hace el llamado a todos los animes y la paginacion y filtra por genero si el usuario lo pide 
export const getAnimeByGender = async (gender, page = 1) => {

    const itemsPerPage = 24
    const from = (page - 1) * itemsPerPage
    const to = from + itemsPerPage - 1

    if(gender === 'All') {
        const {data, count, error} = await supabase.from('seasons').select('*', {count: 'exact'}).order('created_at', {ascending: false}).range(from, to)

        if(error) {
        console.log(error)
        throw new Error(error.message);
        }

        return {
            data,
            count
        }
    } else {
        const {data, count, error} = await supabase.from('seasons').select('*', {count: 'exact'}).contains('gender', [gender]).order('created_at', {ascending: false}).range(from, to)

        if(error) {
            console.log(error)
            throw new Error(error.message);
        }

        return {
            data,
            count
        }
    }

}

// hace la peticion para buscar un anime relacionado con ese nombre
export const searchAnime = async (searchTerm) => {
    const {data, error} = await supabase.from('seasons').select('id, name_season, description, image, slug_season ').ilike('name_season', `%${searchTerm}%`)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}

// Traer el episodio mediantre el slug 
export const getEpisodeBySlug = async (slug) => {
    const {data, error} = await supabase.from('episodes').select('*').eq('slug_episode', slug).single()

    if(error || !data) {
        console.log(error)
        throw new Error('Error al encontrar episodio');
    }

    return data
}

//llama a todos los espisodios de una temporada
export const getAllEpisodesAnime = async (seasonId) => {
    const {data, error} = await supabase.from('episodes').select('*').eq('season_id', seasonId).order('created_at', { ascending: false })

    if(error) {
        console.log(error)
        throw new Error(error.message); 
    }

    return data
}



// Llama a la api de ###(jikan)### y trae los datos de un anime 
export const getAnimeDetails = async (name) => {
    const url = 'https://api.jikan.moe/v4/anime?q='

    try {
        const res = await fetch(`${url}${name}`)
        const data = await res.json()

        return data.data[0].score
    } catch (error) {
        console.log(error)
    }
}