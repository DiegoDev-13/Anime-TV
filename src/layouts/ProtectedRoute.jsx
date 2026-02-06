import { useEffect, useState } from "react"
import { supabase } from "../supabase/Client"
import { Navigate, Outlet } from "react-router-dom"
import { Loader } from "../components/shared/Loader"


export const ProtectedRoute = () => {

    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // 1: Comprobamos si hay session 
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session)
            setLoading(false)
        })
        
        // 2: escuchamos los cambios de la autenticacion 
        const {data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })

        return () => subscription.unsubscribe();
    }, [])
    
    if(loading) {
        return (
            <div className="w-full my-10">
                <Loader />
            </div>
        )
    }

    if(!session) return <Navigate to='/login' replace/>

  return (
      <>
        <Outlet/>
      </>
    )
}