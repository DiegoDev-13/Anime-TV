import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { updateSeason } from "../../actions/dashboard"
import toast from "react-hot-toast"

export const useUpdateSeason = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: updateSeason,
    onSuccess: () => {
        queryClient.invalidateQueries(['animeDashboard'])
        toast.success('Temporada actualizada con exito!')
        navigate('/dashboard/administrar-animes')
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