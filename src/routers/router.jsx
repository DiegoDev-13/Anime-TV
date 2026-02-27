import {Navigate, Route, Routes} from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import {Home} from '../pages/Home'
import { Directory } from '../pages/Directory'
import { AnimeDetail } from '../pages/AnimeDetail'
import { AnimeView } from '../pages/AnimeView'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'
import { ProtectedRoute } from '../layouts/ProtectedRoute'
import { ErrorPage } from '../components/shared/ErrorPage'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { ResetPassword } from '../pages/ResetPassword'
import { UpdatePassword } from '../pages/UpdatePassword'
import { HomeDashboard } from '../pages/dashboard/HomeDashboard'
import { ManageAnimeDashboard } from '../pages/dashboard/ManageAnimeDashboard'
import { ManageEpisodeDashboard } from '../pages/dashboard/ManageEpisodeDashboard'
import { ManageUsersDashboard } from '../pages/dashboard/ManageUsersDashboard'
import { ManageCommentsDashboard } from '../pages/dashboard/ManageCommentsDashboard'
import { SettingsDashboard } from '../pages/dashboard/SettingsDashboard'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/directorio' element={<Directory />} />
            <Route path='/anime/:slug' element={<AnimeDetail />} />
            <Route path='/anime/ver/:slug' element={<AnimeView />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/recuperar-contraseña' element={<ResetPassword />} />

            <Route element={<ProtectedRoute/>}>
              <Route path='/perfil' element={<Profile />} /> 
              <Route path='/cambiar-contraseña' element={<UpdatePassword />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Navigate to='inicio' />} />
            <Route  path='inicio' element={<HomeDashboard />} />
            <Route  path='administrar-animes' element={<ManageAnimeDashboard />} />
            <Route  path='administrar-episodios' element={<ManageEpisodeDashboard />} />
            <Route  path='usuarios' element={<ManageUsersDashboard />} />
            <Route  path='comentarios' element={<ManageCommentsDashboard />} />
            <Route  path='configuracion' element={<SettingsDashboard />} />
          </Route>
        </Route>
    </Routes>
  )
}