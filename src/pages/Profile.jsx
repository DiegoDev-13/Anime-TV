import { useEffect } from "react"
import { signOut } from "../actions/auth"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase/Client"

export const Profile = () => {

  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if(event === 'SIGNED_OUT' || !session) {
        navigate('/login')
      }
    })
  }, [navigate])

  const handleSignOut = async () => {
    await signOut()
  }
  


  return (
    <div className="flex justify-center items-center my-10">
        <button className="py-2 px-4 bg-red-500 text-white text-sm rounded-lg cursor-pointer font-medium" onClick={handleSignOut}>Cerrar Session</button>
    </div>
  )
}