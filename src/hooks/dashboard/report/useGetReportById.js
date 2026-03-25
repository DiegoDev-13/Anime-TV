import { useQuery } from "@tanstack/react-query"
import { getReportById } from "../../../actions/dashboard"

export const useGetReportById = (reportId) => {
    
  const {data, isLoading, isError} = useQuery({
    queryKey: ['reports', reportId],
    queryFn: () => getReportById(reportId),
    retry: false,
    refetchOnWindowFocus: false
  })

  return {
    data,
    isLoading,
    isError
  }
}