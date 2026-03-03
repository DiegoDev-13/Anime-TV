import { useQuery } from "@tanstack/react-query"
import { getSingupsUsers } from "../../actions/dashboard"

export const useGetSingupsUsers = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: getSingupsUsers,
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading
  }
}