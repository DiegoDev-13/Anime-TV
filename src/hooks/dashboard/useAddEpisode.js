import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addNewEpisode } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useAddEpisode = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: addNewEpisode,
    onSuccess: () => {
        queryClient.invalidateQueries(['EpisodesDashboard'])
        toast.success('Se ha agregado un nuevo capítulo a la temporada')
        navigate(0)
    },
    onError: (err) => {
        toast.error(err )
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
}