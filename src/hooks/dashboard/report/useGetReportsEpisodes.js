import { useQuery } from "@tanstack/react-query"
import { getReportsEpisodes } from "../../../actions/dashboard"

export const useGetReportsEpisodes = (page) => {
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['reports', page],
    queryFn: () => getReportsEpisodes(page),
    retry: false,
  })

  return {
    data: data?.data,
    count: data?.count ?? 0,
    isLoading,
    isError,
    refetch
  }
}