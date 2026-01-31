import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { useGlobalStore } from "../store/global.store"
import { MobileNavbar } from "../components/shared/MobileNavbar"
import { SearchSheet } from "../components/shared/SearchSheet"

export const RootLayout = () => {

  
  const activeMobile = useGlobalStore((state) => state.activeMobile)
  const activeSheetSearch = useGlobalStore(state => state.activeSheetSearch)

  return (
    <div className="h-screan flex flex-col relative">

      <Navbar />

      {
        activeMobile && <MobileNavbar />
      }

      {
        activeSheetSearch && <SearchSheet />
      }
        
      <main className="container flex-1 mx-auto my-8 ">
          <Outlet/>
      </main>

      <Footer />

    </div>
  )
}