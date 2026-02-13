import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment } from "../actions/anime"
import toast from "react-hot-toast"

export const useAddComment = () => {
    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
        queryClient.invalidateQueries(['animes']),
        toast.success('Comentario agregado con exito')
    }, 
    onError: (error) => {
        toast.error(error)
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
}