import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../../actions/auth"

export const useUser = (userId) => {
  const {data: user, isLoading} = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
    retry: false,
    enabled: !!userId,
    refetchOnWindowFocus: false
  })

  return {
    user,
    isLoading
  }
}