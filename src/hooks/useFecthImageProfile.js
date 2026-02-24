import { useQuery } from "@tanstack/react-query"
import { fecthImageProfile } from "../actions/auth"

export const useFecthImageProfile = (userName) => {

    const {data, isLoading} = useQuery({
        queryKey: 'user',
        queryFn: () => fecthImageProfile(userName),
        retry: false,
        refetchOnWindowFocus: false
    })

  return {
    data,
    isLoading
  }
}
