import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"

export const RootLayout = () => {
  return (
    <div className="h-screan flex flex-col">

      <Navbar />
        
      <main className="container flex-1 mx-auto my-8 ">
          <Outlet/>
      </main>

      <Footer />

    </div>
  )
}