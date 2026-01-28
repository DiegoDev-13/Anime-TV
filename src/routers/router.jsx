import {Route, Routes} from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import {Home} from '../pages/Home'
import { Directory } from '../pages/Directory'
import { AnimeDetail } from '../pages/AnimeDetail'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/directorio' element={<Directory />} />
            <Route path='/anime/:slug' element={<AnimeDetail />} />
        </Route>
    </Routes>
  )
}