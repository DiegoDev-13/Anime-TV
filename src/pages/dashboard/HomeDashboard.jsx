import { MdOutlineReportProblem } from 'react-icons/md'
import { GrowthPercentage } from '../../components/dashboard/GrowthPercentage'
import {MiniChart} from '../../components/dashboard/home/MiniChart'
import { Link } from 'react-router-dom'
import { LineChartComponent } from '../../components/dashboard/home/LineChartComponent'
import { BiSolidMoviePlay } from 'react-icons/bi'

export const HomeDashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center' >
        <h2 className='text-white self-start text-2xl font-semibold mb-4'>Panel de Aministrador</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div className='bg-surface-dark flex flex-col justify-around items-center rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4 gap-4'>
              <h3 className='text-stone-400 font-medium'>Total de Animes</h3>
              <GrowthPercentage data={8.3} />
            </div>  
            <h2 className='text-white text-4xl font-semibold'>1,547</h2>
            <span className='text-xs text-stone-400 flex gap-2 items-center'>
              <BiSolidMoviePlay size={22} className='text-purple-500' />
              Animes agregado al catalogo
            </span>
          </div>

          <div className='bg-surface-dark rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4'>
              <h3 className='text-stone-400 font-medium'>Vistas Mensuales</h3>
              <GrowthPercentage data={10} />
            </div>  
            <h2 className='text-white text-4xl font-semibold m-0 pl-4'>424k</h2>
            <MiniChart />
          </div>

          <div className='bg-surface-dark rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4'>
              <h3 className='text-stone-400 font-medium'>Usuarios Activos</h3>
              <GrowthPercentage data={2.3} />
            </div>  
            <h2 className='text-white text-4xl font-semibold m-0 pl-4'>24k</h2>
            <LineChartComponent />
          </div>

          <Link to='/dashboard/reportes' className='bg-surface-dark flex flex-col justify-around items-center rounded-lg border border-stone-500 w-63 h-48'>
            <div className='flex justify-around my-4 gap-4'>
              <h3 className='text-stone-400 font-medium'>Reportes Pendientes</h3>
              <GrowthPercentage data={-1.3} />
            </div>  
            <h2 className='text-white text-4xl font-semibold'>42</h2>
            <span className='text-xs text-stone-400 flex gap-2 items-center'>
              <MdOutlineReportProblem size={22} className='text-red-500' />
              Requiere atención inmediata
            </span>
          </Link>
        </div>
    </div>
  )
}