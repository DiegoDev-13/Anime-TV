import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addFavorites } from "../../actions/AnimeFavorites"
import toast from "react-hot-toast"

export const useAddFavorite = () => {

    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: addFavorites,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['favorite']})
        toast.success('Anime agregado a tu lista de favoritos')
    },
    onError: (error) => {
        toast.error(error.message)
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
}