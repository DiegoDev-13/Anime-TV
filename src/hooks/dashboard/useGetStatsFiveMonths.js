import { useQuery } from "@tanstack/react-query"
import { getStatsFiveMonths } from "../../actions/dashboard"

export const useGetStatsFiveMonths = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['deshboardStatsFiveMonths'],
        queryFn: getStatsFiveMonths,
        retry: false,
        refetchOnWindowFocus: true
    })

    return {
        data,
        isLoading,
        isError
    }
}