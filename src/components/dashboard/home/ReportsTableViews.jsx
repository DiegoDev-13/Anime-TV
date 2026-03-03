{/* <div className="border border-stone-500 w-full md:w-140 xl:w-160 h-120 rounded-lg"> */}

import { formatDateAgo } from "../../../helpers"
import { Separator } from "../../shared/Separator"

const tableHeader = ['Estatus', 'Descriccion', 'Fecha']

const statusOption = [
    {
        value: 'Pending', 
        label: 'Pendiente'
    },
    {
        value: 'Paid', 
        label: 'Pagado'
    },
    {
        value: 'Shipped', 
        label: 'Enviado'
    },
    {
        value: 'Delivered', 
        label: 'Entregado'
    },
]

export const ReportsTableViews = ({reportsData}) => {

    console.log(reportsData)

  return (
    <div className="relative border border-stone-500 w-full md:w-140 xl:w-160  rounded-lg">
        <div className="p-3">
            <h3 className="text-white text-lg font-medium">Reportes Recientes</h3>
        </div>
        <table className="text-sm w-full caption-bottom overflow-auto">
            <thead className="bg-slate-800 pb-3">
                <tr className="text-sm text-slate-400 font-bold">
                    {
                        tableHeader.map((header, index) => (
                            <th key={index} className="h-12 px-4 text-center">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody className="[&_tr:last-child]:border-0">
                {
                    reportsData.map(report => (
                        <tr key={report.id} className="border border-stone-400 text-stone-400 " >
                            <td className="p-4 font-medium tracking-tighter flex flex-col gap-1">
                                <span className={`${report.filled ? 'bg-green-500' : 'bg-red-500'} font-semibo text-white rounded-lg text-center`}> 
                                    {report.filled ? 'Completado' : 'Pendiente'}
                                </span>
                            </td>
                            <td className="p-4 font-medium tracking-tighter max-w-15 text-stone-200 ">
                                <p className="line-clamp-1"> 
                                    {report.description}
                                </p>
                            </td>
                            <td className="p-4 font-medium tracking-tighter text-center">
                                {formatDateAgo(report.created_at)}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}