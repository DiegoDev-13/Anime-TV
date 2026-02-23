import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateImagenProfile } from "../../actions/profile"
import toast from "react-hot-toast"
import { useGlobalStore } from "../../store/global.store"

export const useUpdateImagenProfile = () => {

    const queryClient = useQueryClient()

    const setEditImagenProfile = useGlobalStore(state => state.setEditImagenProfile)
  
    const {mutate, isPending} = useMutation({
        mutationFn: updateImagenProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            toast.success('Foto de perfil actualizada')
            setEditImagenProfile(false)
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