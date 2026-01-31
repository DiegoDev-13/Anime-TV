import { Link } from "react-router-dom"
import { RiMovieFill } from "react-icons/ri";
import { useGlobalStore } from "../../store/global.store";

export const Logo = () => {

  const setActiveMobile = useGlobalStore(state => state.setActiveMobile)

  return (
    <Link to='/' className="text-2xl font-medium text-white flex items-center gap-2" onClick={() => setActiveMobile(false)}>
        <RiMovieFill size={30} className="text-purple-700" />
        <span>AnimeVista</span>
    </Link>
  )
}