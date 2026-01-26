import { useQuery } from '@tanstack/react-query'
import { getEpisodiesHome } from '../actions/anime'

export const useEpisodiesHome = () => {
    const {data: episodies, isLoading, isError} = useQuery({
        queryKey: ['episodies'],
        queryFn: getEpisodiesHome,
        retry: false
    })


    return {
        episodies,
        isLoading,
        isError
    }
}