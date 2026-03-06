import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addAnime } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useGlobalStore } from "../../store/global.store"

export const useAddAnime = () => {

  const setActiveModalNewAnime = useGlobalStore(state => state.setActiveModalNewAnime)
  const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: addAnime,
    onSuccess: () => {
      queryClient.invalidateQueries(['animeDashboard'])
      toast.success('Se agrego un anime con exito!')
      setActiveModalNewAnime(false)
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
} 