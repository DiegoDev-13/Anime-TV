import { useQuery } from "@tanstack/react-query"
import { getEpisodeBySlug } from "../actions/anime"

export const useEpisode = (slug) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['episode', slug],
    queryFn: () => getEpisodeBySlug(slug),
    retry: false
  })

  return {
    data,
    isLoading,
    isError
  }
}