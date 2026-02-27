import { Outlet, useNavigate } from "react-router-dom"
import { Sidebar } from "../components/dashboard/Sidebar"
import { useEffect } from "react"
import { useUserStore } from "../store/useUserStore"
import { Loader } from "../components/shared/Loader"
import { useUser } from "../hooks/auth/useUser"

export const DashboardLayout = () => {

  const navigate = useNavigate()

  const initialize = useUserStore(state => state.initialize)
  const {user, session, isLoading} = useUserStore()

  const {user: userData, isLoading: isLoadingUserData} = useUser(user?.id)

  //Inicializa la session al montar el componente
  useEffect(() => {
    initialize()
  }, [initialize])

  // Controla el acceso 
  useEffect(() => {
    
    // Si termino de crgar y no hay session o no es admin fuera 
    if(!isLoading && !isLoadingUserData) {
      if(!session || userData?.role !== 'admin') {
        navigate('/', {replace: true}) //Se evita que el usuario vuelva atras
      }
    }

  }, [userData, isLoading, session])

  
  if(isLoading || isLoadingUserData) return <Loader />
 
  // Si no hay session o no es admin bloqueamos el tender 
  if(!session || userData?.role !== 'admin') return null

  return (
    <div className="flex h-screen">
      <Sidebar />
        
      <div className="container m-5 mt-7 flex-1 ml-30 md:ml-60 lg:ml-67.5">
        <Outlet />
      </div>

    </div>
  )
}