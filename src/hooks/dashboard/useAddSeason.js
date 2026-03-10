import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addSeason } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useAddSeason = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: addSeason,
    onSuccess: () => {
        queryClient.invalidateQueries(['animeDashboard']),
        toast.success('Temporada agregada exitosamente!')
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