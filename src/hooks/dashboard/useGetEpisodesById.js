import { useQuery } from "@tanstack/react-query"
import { getEpisodesById } from "../../actions/dashboard"

export const useGetEpisodesById = (id) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['EpisodesDashboard', id],
    queryFn: () => getEpisodesById(id),
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data: data?.data,
    count: data?.count,
    isLoading,
    isError,
  }
} 