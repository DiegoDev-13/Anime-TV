import { useQuery } from "@tanstack/react-query"
import { getAnimeBySlug } from "../actions/anime"

export const useAnime = (slug) => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['animes'],
    queryFn: async () => getAnimeBySlug(slug),
    retry: false
  })

  return {
    data,
    isLoading,
    error
  }
}

