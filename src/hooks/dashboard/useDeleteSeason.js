import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteSeason } from "../../actions/dashboard"
import { useGlobalStore } from "../../store/global.store"

export const useDeleteSeason = () => {
    
    const setAtiveModalConfirmDelete = useGlobalStore(state => state.setAtiveModalConfirmDelete)
    const setIdDelete = useGlobalStore(state => state.setIdDelete)
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: deleteSeason,
    onSuccess: () => {
        queryClient.invalidateQueries(['animeDashboard'])
        toast.success('Temporada eliminada con exito!')
        setIdDelete(null)
        setAtiveModalConfirmDelete(false)
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