import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { useGlobalStore } from "../store/global.store"
import { MobileNavbar } from "../components/shared/MobileNavbar"
import { SearchSheet } from "../components/shared/SearchSheet"
import { useEffect } from "react"
import { useUserStore } from "../store/useUserStore"
import { ModalEditProfile } from "../components/profile/ModalEditProfile"

export const RootLayout = () => {
  
  const activeMobile = useGlobalStore((state) => state.activeMobile)
  const activeSheetSearch = useGlobalStore(state => state.activeSheetSearch)
  const setActiveProfileSheet = useGlobalStore(state => state.setActiveProfileSheet)
  const activeModalProfile = useGlobalStore(state => state.activeModalProfile)

  const initialize = useUserStore(state => state.initialize)
  // const {session, user, isLoading} = useUserStore()

  // console.log(isLoading)
  // console.log(session, user)


  const location = useLocation()

  // utilizamos el useEffect para cuando cambie de pagina se cierre el profileSheet 
  useEffect(() => {
    initialize()
    setActiveProfileSheet(false)
  }, [location.pathname, setActiveProfileSheet])
  
  

  return (
    <div className="h-screan flex flex-col relative">

      <Navbar />

      {
        activeMobile && <MobileNavbar />
      }

      {
        activeSheetSearch && <SearchSheet />
      }

       { activeModalProfile && <ModalEditProfile /> }
        
      <main className="container flex-1 mx-auto my-8 ">
          <Outlet/>
      </main>

      <Footer />

    </div>
  )
}