import { useQuery } from "@tanstack/react-query"
import { getReportsPending } from "../../actions/dashboard"

export const useGetReportsPending = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['reports'],
    queryFn: getReportsPending,
    retry: false,
  })

  return {
    data: data?.data,
    totalReports: data?.count ?? 0,
    isLoading
  }
}