import { MdAddBox, MdOutlineFileUpload, MdOutlineReportProblem } from 'react-icons/md'
import { GrowthPercentage } from '../../components/dashboard/GrowthPercentage'
import {MiniChart} from '../../components/dashboard/home/MiniChart'
import { Link, useNavigate } from 'react-router-dom'
import { LineChartComponent } from '../../components/dashboard/home/LineChartComponent'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import {Separator} from '../../components/shared/Separator'
import { PiSealWarningFill } from 'react-icons/pi'
import { useGetCountAnimes } from '../../hooks/dashboard/useGetCountAnimes'
import { Loader } from '../../components/shared/Loader'
import { useGetSingupsUsers } from '../../hooks/dashboard/useGetSingupsUsers'
import { getGrowthPercentageUsers } from '../../helpers'
import { useGetReportsPending } from '../../hooks/dashboard/useGetReportsPending'
import { ReportsTableViews } from '../../components/dashboard/home/ReportsTableViews'
import { useGetStatsFiveMonths } from '../../hooks/dashboard/useGetStatsFiveMonths'

export const HomeDashboard = () => {

  const navigate = useNavigate()

  const {data: count, isLoading} = useGetCountAnimes()
  const {data: usersSingupsFiveMonths, isLoading: isloadingUsers} = useGetSingupsUsers()
  const {data: reportsData, totalReports,  isLoading: isLoadingReports} = useGetReportsPending()
  const {data: dataStatsFiveMonths, isLoading: isLoadingStastFiveMonths, isError: isErrorStatsFiveMonths} = useGetStatsFiveMonths()

  // console.log(dataStatsFiveMonths)

  if(isLoading || isloadingUsers || isLoadingReports || isLoadingStastFiveMonths) return <Loader />

  return (
    <div className='flex flex-col justify-center items-center' >
        <div className='w-full my-2 flex justify-between '>
          <h2 className='text-white self-start text-2xl font-semibold mb-2'>Panel de Aministrador</h2>
          <button type='button' className='flex justify-center items-center gap-1.5 py-1.5 px-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300' onClick={() => navigate('/dashboard/administrar-animes/nuevo')}>
            <IoMdAdd size={20} className='font-bold' />
            Agregar Anime
          </button>
        </div>
        <Separator />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-4">
          <div className='bg-surface-dark flex flex-col justify-around items-center rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4 gap-4'>
              <h3 className='text-stone-400 font-medium'>Total de Animes</h3>
              <GrowthPercentage data={8.3} />
            </div>  
            <h2 className='text-white text-4xl font-semibold'>{count?.count}</h2>
            <span className='text-xs text-stone-400 flex gap-2 items-center'>
              <BiSolidMoviePlay size={22} className='text-purple-500' />
              Animes agregado al catalogo
            </span>
          </div>

          <div className='bg-surface-dark rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4'>
              <h3 className='text-stone-400 font-medium'>Vistas Mensuales</h3>
              <GrowthPercentage data={dataStatsFiveMonths[0].porcentaje_crecimiento} />
            </div>  
            <h2 className='text-white text-4xl font-semibold m-0 pl-4'>{dataStatsFiveMonths[0].total_vistas}</h2>
            <MiniChart dataStats={dataStatsFiveMonths} />
          </div>

          <div className='bg-surface-dark rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4'>
              <h3 className='text-stone-400 font-medium'>Usuarios Activos</h3>
              <GrowthPercentage data={getGrowthPercentageUsers(usersSingupsFiveMonths)} />
            </div>  
            <h2 className='text-white text-4xl font-semibold m-0 pl-4'>{usersSingupsFiveMonths[4].total_users}</h2>
            <LineChartComponent usersSingupsFiveMonths={usersSingupsFiveMonths} />
          </div>

          <div className='bg-surface-dark flex flex-col justify-around items-center rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4 gap-4'>
              <h3 className='text-stone-400 font-medium'>Reportes Pendientes</h3>
              <GrowthPercentage data={-1.3} />
            </div>  
            <h2 className='text-white text-4xl font-semibold'>{totalReports}</h2>
            <span className='text-xs text-stone-400 flex gap-2 items-center'>
              <MdOutlineReportProblem size={22} className='text-red-500' />
              Requiere atención inmediata
            </span>
          </div>
        </div>

        <div className='w-full flex flex-wrap justify-around gap-4 mb-4 '>
          <ReportsTableViews reportsData={reportsData} />

          <div className='flex flex-col space-y-4 w-full md:w-90'>
            <div className='border border-stone-500 w-full rounded-lg'>
              <div className='flex p-2 bg-surface-dark rounded-t-lg border-b border-stone-500'>
                <h3 className='text-lg text-white font-semibold'>Acciones Rápidas</h3>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-stone-300 text-sm font-semibold w-[80%] flex justify-around items-center gap-3 my-2 p-2 rounded-lg cursor-pointer hover:bg-purple-600/10 transition-all duration-300' onClick={() => navigate('/dashboard/administrar-animes/nuevo')}>
                  <MdAddBox size={20} className='bg-purple-600/50 text-purple-600 w-7 h-7 rounded-lg' />
                  Agregar amine
                  <IoIosArrowForward size={18} />
                </span>

                <span className='text-stone-300 text-sm font-semibold w-[80%] flex justify-around items-center gap-3 my-2 p-2 rounded-lg cursor-pointer hover:bg-purple-600/10 transition-all duration-300' onClick={() => navigate('/dashboard/administrar-episodios')} >
                  <MdOutlineFileUpload size={20} className='bg-slate-600/50 text-stone-500 w-7 h-7 rounded-lg' />
                  Subir Episodio
                  <IoIosArrowForward size={18} />
                </span>

                <span className='text-stone-300 text-sm font-semibold w-[80%] flex justify-around items-center gap-3 my-2 p-2 rounded-lg cursor-pointer hover:bg-purple-600/10 transition-all duration-300' onClick={() => navigate('/dashboard/reportes')}>
                  <PiSealWarningFill size={20} className='bg-slate-600/50 text-stone-500 w-7 h-7 rounded-lg' />
                  Revisar Reportes
                  <IoIosArrowForward size={18} />
                </span>
              </div>
            </div>

            <div className='border border-stone-500 w-full h-50 rounded-lg'>

            </div>
          </div>
        </div>
    </div>
  )
}