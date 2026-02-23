import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateDataUser } from "../../actions/profile"
import { useGlobalStore } from "../../store/global.store"

export const useUpdateProfile = () => {

    const setActiveModalProfile = useGlobalStore(state => state.setActiveModalProfile)

    const queryClient = useQueryClient()

  const {mutate, isPending} = useMutation({
    mutationFn: updateDataUser,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['user']})
        toast.success('Se han guardado todos los cambios')
        setActiveModalProfile(false)
    },
    onError: (err) => {
        toast.error(err.message)
    }   
  })

  return {
    mutate,
    isPending
  }
}