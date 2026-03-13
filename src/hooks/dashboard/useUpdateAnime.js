import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateAnime } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useGlobalStore } from "../../store/global.store"

export const useUpdateAnime = () => {

    const setActiveModalEditAnime = useGlobalStore(state => state.setActiveModalEditAnime)
    const setAnimeEdit = useGlobalStore(state => state.setAnimeEdit)

    const navigate = useNavigate()
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: updateAnime,
    onSuccess: () => {
        queryClient.invalidateQueries(['animeDashboard'])
        navigate('/dashboard/administrar-animes')
        setActiveModalEditAnime(false)
        setAnimeEdit(null)
        toast.success('Anime actualizado con exito!')   
    },
    onError: (err) => {
        toast.error(err)
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
}