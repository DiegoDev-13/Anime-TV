import { useQuery } from "@tanstack/react-query"
import { getSeasonsHome } from "../actions/anime"

export const useSeasonsHome = () => {
  
    const {data: seasons, isLoading} = useQuery({
        queryKey: ['seasons'],
        queryFn: getSeasonsHome,
        retry: false
    })

    return {
        seasons, 
        isLoading
    }
}