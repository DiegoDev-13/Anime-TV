import { useQuery } from "@tanstack/react-query"
import { getSeasonsById } from "../../actions/dashboard"

export const useGetSeasonsById = (id) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['animeDashboard', id],
    queryFn: async () => getSeasonsById(id),
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading,
    isError
  }
}