import { useQuery } from "@tanstack/react-query"
import { getSession } from "../../actions/auth"

export const useSessionUser = () => {
  const {data: session, isLoading} = useQuery({
    queryKey: ['user'],
    queryFn: getSession,
    retry: false
  })

  return {
    session,
    isLoading
  }
}