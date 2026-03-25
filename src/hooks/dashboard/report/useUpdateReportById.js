import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateReportById } from "../../../actions/dashboard"
import toast from "react-hot-toast"

export const useUpdateReportById = () => {

    const queryClient = useQueryClient()

  const {mutate, isPending, isError} = useMutation({
    mutationFn: updateReportById,
    onSuccess: () => {
        queryClient.invalidateQueries(['report']),
        toast.success('Se ha actualizado el estado del reporte')
    },
     onError: (err) => {
        toast.error(err)
     }
  })

  return {
    mutate,
    isPending,
    isError
  }
}