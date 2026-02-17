import {Route, Routes} from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import {Home} from '../pages/Home'
import { Directory } from '../pages/Directory'
import { AnimeDetail } from '../pages/AnimeDetail'
import { AnimeView } from '../pages/AnimeView'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'
import { ProtectedRoute } from '../layouts/ProtectedRoute'
import { ErrorPage } from '../components/shared/ErrorPage'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/directorio' element={<Directory />} />
            <Route path='/anime/:slug' element={<AnimeDetail />} />
            <Route path='/anime/ver/:slug' element={<AnimeView />} />
            <Route path='/login' element={<Login />}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/perfil' element={<Profile />} /> 
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Route>
    </Routes>
  )
}