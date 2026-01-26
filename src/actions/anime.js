import { supabase } from "../supabase/Client";


export const getEpisodiesHome = async () => {
    const {data, error} = await supabase.from('episodes').select('*').order('created_at', {ascending: false}).limit(15)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}

export const getSeasonsHome = async () => {
    const {data, error} = await supabase.from('seasons').select('*, episodes(*)').order('created_at', {ascending: false}).limit(12)

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return data
}