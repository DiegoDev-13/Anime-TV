import { useQuery } from "@tanstack/react-query"
import { getAnimeBySlug } from "../actions/anime"

export const useAnime = (slug) => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['animes', slug],
    queryFn: async () => getAnimeBySlug(slug),
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading,
    isError,
    error
  }
}

