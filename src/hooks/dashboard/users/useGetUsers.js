import { useQuery } from "@tanstack/react-query"
import { getUsersdashboard } from "../../../actions/dashboard"

export const useGetUsers = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['usersDashboard'],
    queryFn: getUsersdashboard,
    retry: false,
    refetchOnWindowFocus: true
  })

  return {
    data,
    isLoading,
    isError
  }
}