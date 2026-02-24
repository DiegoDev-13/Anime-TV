import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteImagenProfile } from "../../actions/profile"
import toast from "react-hot-toast"

export const useDeleteImagenProfile = () => {

    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationFn: deleteImagenProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            toast.success('Se a eliminado tu foto de perfil')
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