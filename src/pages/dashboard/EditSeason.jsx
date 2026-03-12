import { useParams } from "react-router-dom"
import { useAnime } from "../../hooks/useAnime"
import { Loader } from "../../components/shared/Loader"
import { FormEditSeason } from "../../components/dashboard/anime/FormEditSeason"
import { ErrorPage } from "../../components/shared/ErrorPage"

export const EditSeason = () => {

  const {slug} = useParams()
  
  const {data, isLoading, isError} = useAnime(slug)

  if(isLoading) return <Loader />

  if(isError) return <ErrorPage />

  return (
    <div className="w-full">
        <FormEditSeason title={`Actualiza los datos de la temporada ${data.season} de ${data.name_season}`} season={data} />
    </div>
  )
}