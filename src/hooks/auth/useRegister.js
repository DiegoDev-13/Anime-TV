import { useMutation, useQueryClient } from "@tanstack/react-query"
import { signUp } from "../../actions/auth"
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

export const useRegister = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            navigate('/')
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