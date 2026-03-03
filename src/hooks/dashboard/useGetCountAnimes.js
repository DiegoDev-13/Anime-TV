import { useQuery } from "@tanstack/react-query"
import { getCountAnimes } from "../../actions/dashboard"

export const useGetCountAnimes = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['anime'],
    queryFn: getCountAnimes,
    retry: false,
    refetchOnWindowFocus: false
  })

  return {  
    data,
    isLoading
  }
}