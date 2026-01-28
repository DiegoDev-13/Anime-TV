import { Link } from "react-router-dom"

export const CardEpisodie = ({item}) => {
  return (
    <Link to={`anime/ver/${item.slug_episodie}`} className="hover:shadow shadow-purple-600 transition-all duration-300 w-40 h-25 md:w-60 md:h-40">
        <div className="flex flex-col items-center justify-center relative">
            <img src={item.episode_image} alt={item.title} className="w-full h-full object-contain rounded-md" />
            <p className="text-sm line-clamp-2">{item.title} {item.episode_number}</p>
        </div>
    </Link>
  )
}