import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeFavorite } from "../../actions/AnimeFavorites"
import toast from "react-hot-toast"

export const useRemoveFavorite = () => {

    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: removeFavorite,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['favorite']})
        toast.success('Anime eliminado de tu lista de favoritos')
      },
      onError: (error) => {
        console.log(error.message)
        toast.error('No se pudo eliminar de tu lista de favoritos')
    }
  })

  return {
    mutate,
    isPending,
    isError
  }
}