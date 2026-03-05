import { supabase } from "../supabase/Client"


//Devuelve el numero de anime que estan agregado en la tabla animes
export const getCountAnimes = async () => {
    const {error, count} = await supabase.from('seasons').select('*', {count: 'exact'})

    if(error) {
        console.log(error)
        throw new Error(error.message);
    }

    return {
        count
    }
}

//Devuelve el numero de usuario que inisiaron session en los ultimos 5 meses
export const getSingupsUsers = async () => {
  const { data, error } = await supabase
    .rpc('get_user_signups_last_5_months');

  if (error) {
    console.error("Error al obtener usuarios:", error.message);
    return;
  }
  
  return data;
};

//Devuelve el numero de reportes que hacen falta revirsar
export const getReportsPending = async () => {
  const {data, count, error} = await supabase.from('reports').select('*', {count: 'exact'}).order('created_at', {ascending: false}).eq('filled', false).limit(5)

  if(error) {
    console.log(error.message)
    throw new Error("error al intentar obtener los reportes");
  }

  return {
    data,
    count
  }
} 

//Devuelve todos los animes con rango para el dashboard
export const getAnimesDashboard = async (gender, page = 1) => {

  const itemsPerPage = 5
  const from = (page - 1) * itemsPerPage
  const to = from + itemsPerPage - 1

  if(gender === 'All') {
    const {data, count, error} = await supabase.from('seasons').select('*', {count: 'exact'}).order('created_at', {ascending: false}).range(from, to)

    if(error) {
      console.log(error.message)
      throw new Error("No se pudo obtener la lista de animes para el dashboard");
    }

    return {
      data, 
      count
    }
  } else {
    const {data, count, error} = await supabase.from('seasons').select('*', {count: 'exact'}).contains('gender', [gender]).order('created_at', {ascending: false}).range(from, to)

    if(error) {
      console.log(error.message)
      throw new Error("No se pudo obtener la lista de animes para el dashboard");
    }

    return {
      data, 
      count
    }
  }
}

//Para el buscador de anime en el dashboard
export const getSearchDashboardItems = async (table, nameSearch, searchTerm) => {
  const {data, error} = await supabase.from(table).select('*').ilike(nameSearch, `%${searchTerm}%`).limit(5)

  if(error) {
    console.log(error.message)
    throw new Error("Error Al buscar en el dashboard");
  }

  return data
}