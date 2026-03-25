import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteReportById } from "../../../actions/dashboard"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useDeleteReportById = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

  const {mutate, isPending, isError, isSuccess} = useMutation({
    mutationFn: deleteReportById,
    onSuccess: () => {
        queryClient.invalidateQueries(['reports'])
        toast.success('Reporte eliminado correctamente!')
        navigate('/dashboard/reportes')
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