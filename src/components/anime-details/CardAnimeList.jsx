import { Link } from "react-router-dom"

export const CardAnimeList = ({episode}) => {
  return (
    <Link to={`/anime/ver/${episode.slug_episode}`} className="w-[90%]">
      <div className="p-3 bg-surface-dark rounded-lg flex space-x-8  border border-stone-800 hover:scale-105 hover:rounded-lg transition-all duration-300 cursor-pointer">
        <img src={episode.episode_image} alt={episode.title} className="w-30 md:w-40 lg:w-60 object-contain rounded-lg" />
        <div className="text-stone-300 w-full space-y-2">
            <div className="flex justify-between">
                <span className="text-stone-400 font-semibold uppercase text-xs md:text-[16px]">Episodio {episode.episode_number}</span>
                <span className="text-stone-400 text-xs md:text-sm">24m</span>
            </div>
            <p className="text-white text-sm md:text-[17px] font-bold">{episode.title}</p>
            <p className="text-stone-400 text-[11px] md:text-xs">Hace 1 año</p>
          </div>
      </div>
    </Link>
  )
}