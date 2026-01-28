import { useQuery } from "@tanstack/react-query"
import { getGender } from "../actions/anime"

export const useGender = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['gender'],
    queryFn: getGender,
    retry: false
  })

  return {
    data, 
    isLoading
  }
}