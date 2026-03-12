import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteAnime } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useGlobalStore } from "../../store/global.store"
import { useNavigate } from "react-router-dom"

export const useDeleteAnime = () => {

    const navigate = useNavigate()

    const setAtiveModalConfirmDelete = useGlobalStore(state => state.setAtiveModalConfirmDelete)
    const setIdDelete = useGlobalStore(state => state.setIdDelete)  
    const setMutate = useGlobalStore(state => state.setMutate)

    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: deleteAnime,
    onSuccess: () => {
        queryClient.invalidateQueries(['animeDashboard'])
        navigate('/dashboard/administrar-animes')
        toast.success('anime eliminado con exito!')
        setAtiveModalConfirmDelete(false)
        setIdDelete(null)
        setMutate(null)
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