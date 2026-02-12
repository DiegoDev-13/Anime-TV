import { useQuery } from "@tanstack/react-query"
import { getAnimeFavorites } from "../actions/AnimeFavorites"

export const useAnimeFavorites = (userId, page) => {
  
    const {data, isLoading, isError , error} = useQuery({
        queryKey: ['favorite', userId, page],
        queryFn: () => getAnimeFavorites(userId, page),
        refetchOnWindowFocus: false,
    })

    return {
        data: data?.data,
        totalFavorites: data?.count,
        isLoading,
        isError,
        error
    }
}