import { useMutation } from "@tanstack/react-query"
import { updatePassword } from "../../actions/auth"
import toast from "react-hot-toast"
import { useGlobalStore } from "../../store/global.store"

export const useUpdatePassword = () => {

    const setIsUpdatePassword = useGlobalStore(state => state.setIsUpdatePassword)

    const {mutate, isPending} = useMutation({
        mutationFn: updatePassword,
        onSuccess: () => {
            toast.success('Contraseña actualizada con exito!')
            setIsUpdatePassword(true)
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