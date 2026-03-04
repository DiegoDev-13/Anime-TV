import { useQuery } from "@tanstack/react-query"
import { getAnimesDashboard } from "../../actions/dashboard"

export const useGetAnimesDashboard = (gender, page) => {
    const {data, isLoading, isError, refetch, isFetching} = useQuery({
        queryKey: ['animeDashboard', gender, page],
        queryFn: async () => getAnimesDashboard(gender, page),
        retry: false,
        refetchOnWindowFocus: false
    })

    return {
        data: data?.data,
        totalAnimes: data?.count ?? 0,
        isLoading,
        isError,
        refetch,
        isFetching
    }
}