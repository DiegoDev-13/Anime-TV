import { useQuery } from "@tanstack/react-query"
import { getUserByUserName } from "../../actions/auth"

export const useUserByUserName = (userName) => {
  const {data: user, isLoading} = useQuery({
    queryKey: ['user', userName],
    queryFn: () => getUserByUserName(userName),
    retry: false
  })

  return {
    user,
    isLoading
  }
}