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

// Hace la peticion en supabase para traer el anime mediante el slug
export const getAnimeBySlug = async (slug) => {
    const {data, error} = await supabase.from('animes').select('*, seasons(*)').eq('slug', slug).single()

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
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

export const getAnimeByGender = async (gender, page = 1) => {

    const itemsPerPage = 3
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
        const {data, count, error} = await supabase.from('seasons').select('*', {count: 'exact'}).contains('gender', [gender]).order('created_at', {ascending: false}).range(0, 2)

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