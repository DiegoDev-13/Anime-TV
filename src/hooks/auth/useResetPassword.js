import { useMutation } from "@tanstack/react-query"
import { resetPassword } from "../../actions/auth"
import toast from "react-hot-toast"
import { useGlobalStore } from "../../store/global.store"

export const useResetPassword = () => {  

    const setIsSendResetEmail = useGlobalStore(state => state.setIsSendResetEmail)

    const {mutate, isPending} = useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success('Correo de recuperacion enviado!')
            setIsSendResetEmail(true)
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