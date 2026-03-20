import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteEpisodeByid } from "../../../actions/dashboard"
import toast from "react-hot-toast"
import { useGlobalStore } from "../../../store/global.store"

export const useDeleteEpisodeById = () => {

  const setAtiveModalConfirmDelete = useGlobalStore(state => state.setAtiveModalConfirmDelete)

  const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: deleteEpisodeByid,
    onSuccess: () => {
      queryClient.invalidateQueries(['EpisodesDashboard'])
      setAtiveModalConfirmDelete(false)
      toast.success('Capitulo eliminado con éxito!')
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