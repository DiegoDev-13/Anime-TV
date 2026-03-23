import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addReport } from "../actions/anime"
import toast from "react-hot-toast"

export const useAddReport = () => {

    const queryClient = useQueryClient()

  const {mutate, isPending, isError, isSuccess} = useMutation({
    mutationFn: addReport,
    onSuccess: () => {
        queryClient.invalidateQueries(['reports'])
        toast.success('Reporte enviado con exito!')
    },
    onError: (err) => {
        toast.error(err)
    }
  })

  return {
    mutate,
    isPending,
    isError,
    isSuccess
  }
}