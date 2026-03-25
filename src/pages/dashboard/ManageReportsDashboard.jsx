import { useState } from "react"
import { GridReports } from "../../components/dashboard/reports/GridReports"
import { Pagination } from "../../components/shared/Pagination"
import { Separator } from "../../components/shared/Separator"
import { useGetReportsEpisodes } from "../../hooks/dashboard/report/useGetReportsEpisodes"
import { Loader } from "../../components/shared/Loader"
import { ModalConfirm } from "../../components/dashboard/reports/ModalConfirm"

export const ManageReportsDashboard = () => {

  const [page, setPage] = useState(1)
  const [activeModal, setActiveModal] = useState(false)
  const [reportId, setReportId] = useState(null)

  const {data, count, isLoading, isError, refetch} = useGetReportsEpisodes(page)

  if(isLoading) return <Loader />

  return (
    <div className="w-full flex flex-col justify-center">
      <div className='w-full my-2 flex justify-between '>
        <h2 className='text-white self-start text-2xl font-semibold mb-2'>Administrar Reportes</h2>
      </div>

      <Separator /> 

      <GridReports data={data} refetch={refetch} setActiveModal={setActiveModal} setReportId={setReportId} />

      <Pagination setPage={setPage} page={page} totalItems={count} itemsPerPage={6} />

      {
        activeModal && <ModalConfirm setActiveModal={setActiveModal} setReportId={setReportId} reportId={reportId} />
      }

    </div>
  )
}
