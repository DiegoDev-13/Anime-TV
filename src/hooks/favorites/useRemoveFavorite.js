import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeFavorite } from "../../actions/AnimeFavorites"
import toast from "react-hot-toast"

export const useRemoveFavorite = () => {

    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: ({ animeId, userId, seasonId }) => removeFavorite(animeId, userId, seasonId),
    onSuccess: (data, variables) => {
        const { userId, seasonId } = variables || {}
        if (userId && seasonId) {
          queryClient.setQueryData(['favorite', userId, seasonId], undefined)
          queryClient.invalidateQueries({ queryKey: ['favorite', userId, seasonId] })
          // Also invalidate the user's favorites list (which uses ['favorite', userId, page])
          queryClient.invalidateQueries(['favorite', userId])
        } else if (userId) {
          queryClient.invalidateQueries(['favorite', userId])
        } else {
          queryClient.invalidateQueries({ queryKey: ['favorite'] })
        }
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