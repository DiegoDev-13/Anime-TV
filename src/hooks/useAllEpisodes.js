import { useQuery } from "@tanstack/react-query"
import { getAllEpisodesAnime } from "../actions/anime"

export const useAllEpisodes = (seasonId) => {
    const {data, isLoading} = useQuery({
        queryKey: ['episodes', seasonId],
        queryFn: () => getAllEpisodesAnime(seasonId),
        retry: false,
        refetchOnWindowFocus: false
    })


    return {
        data,
        isLoading
    }
}