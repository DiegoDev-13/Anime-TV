import { useQuery } from "@tanstack/react-query"
import { getAnimeByGender } from "../actions/anime"

export const useAnimeByGender = (gender, page) => {
  
    const {data, isLoading, isError} = useQuery({
        queryKey: ['animes', gender, page],
        queryFn: async () => getAnimeByGender(gender, page),
        retry: false
    })

    return {
        data: data?.data,
        isLoading,
        isError,
        totalAnimes: data?.count ?? 0
    }

}