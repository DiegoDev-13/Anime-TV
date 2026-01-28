import { useParams } from "react-router-dom"
import { useAnime } from "../hooks/useAnime"

export const AnimeDetail = () => {

    const {slug} = useParams()

    const {data, isLoading} = useAnime(slug)

    console.log(data)

  return (
    <div className="">
        AnimeDetail
    </div>
  )
}