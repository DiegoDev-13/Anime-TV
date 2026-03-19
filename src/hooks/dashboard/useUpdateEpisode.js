import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateEpisodeById } from "../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useUpdateEpisode = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: updateEpisodeById,
        onSuccess: () => {
            queryClient.invalidateQueries(['EpisodesDashboard'])
            toast.success('Capitulo editado con exito!')
            navigate('/dashboard/administrar-episodios')
        },
        onError: (err) => {
            toast.error(err)
        }
    })

    return {
        mutate,
        isPending,
        isError,
        error
    }
}