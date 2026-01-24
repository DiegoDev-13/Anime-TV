import {Route, Routes} from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import {Home} from '../pages/Home'
import { Directorio } from '../pages/Directorio'

export const MyRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/directorio' element={<Directorio />} />
        </Route>
    </Routes>
  )
}