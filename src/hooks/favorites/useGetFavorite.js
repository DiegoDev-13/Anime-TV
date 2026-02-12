import { useQuery } from "@tanstack/react-query"
import { getFavorite } from "../../actions/AnimeFavorites"

export const useGetFavorite = (slug) => {
  const {data, isLoading , isError} = useQuery({
    queryKey: ['favorite', slug],
    queryFn: () => getFavorite(slug),
    retry: false,
  })

  return {
    data,
    isLoading,
    isError
  }
}