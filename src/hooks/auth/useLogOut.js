import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../actions/auth"

export const useLogOut = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

  const {mutate, isPending} = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['user']}),
        queryClient.clear()
        navigate('/login', {replace: true})
    },
    onError: (err) => {
        throw new Error(err.message);
    }
  })

  return {
    mutate,
    isPending
  }
}