import { useQuery } from "@tanstack/react-query"
import { getAnimeBySlug } from "../actions/anime"

export const useAnime = (slug) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['animes', slug],
    queryFn: async () => getAnimeBySlug(slug),
    retry: false
  })

  return {
    data,
    isLoading,
    isError
  }
}

