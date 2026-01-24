import { Link } from "react-router-dom"
import { RiMovieFill } from "react-icons/ri";

export const Logo = () => {
  return (
    <Link to='/' className="text-2xl font-medium text-white flex items-center justify-center gap-2">
        <RiMovieFill size={30} className="text-purple-700" />
        <span>AnimeVista</span>
    </Link>
  )
}