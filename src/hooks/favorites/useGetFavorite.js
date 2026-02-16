import { useQuery } from "@tanstack/react-query"
import { getFavorite } from "../../actions/AnimeFavorites"

export const useGetFavorite = (userId, seasonId) => {
  const {data, isLoading , isError, refetch} = useQuery({
    queryKey: ['favorite', userId, seasonId],
    queryFn: () => getFavorite(userId, seasonId),
    enabled: !!userId && !!seasonId, // execute only when we have user and season
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading,
    isError,
    refetch
  }
}