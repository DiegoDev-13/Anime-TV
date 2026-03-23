import { GridReports } from "../../components/dashboard/reports/GridReports"
import { Separator } from "../../components/shared/Separator"

export const ManageReportsDashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className='w-full my-2 flex justify-between '>
        <h2 className='text-white self-start text-2xl font-semibold mb-2'>Administrar Reportes</h2>
      </div>

      <Separator /> 

      <GridReports />

    </div>
  )
}
