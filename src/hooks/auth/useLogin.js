import { useMutation, useQueryClient } from "@tanstack/react-query"
import { signIn } from "../../actions/auth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const useLogin = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

  const {mutate, isPending} = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['user']})
        navigate('/')
    },
    onError: (error) => {
        toast.error(error.message)
    }
  })

  return {
    mutate,
    isPending
  }
}