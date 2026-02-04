import { Link } from "react-router-dom"

export const CardListEpisode = ({episode}) => {
  return (
    <Link to={`/anime/ver/${episode.slug_episode}`} className="w-full">
      <div className="p-2 w-full lg:h-45 xl:h-20 h-20 min-w-0 min-h-0  rounded-lg flex md:justify-center md:flex-col xl:flex-row space-x-8 border border-stone-800 hover:bg-purple-500/50 transition-all duration-300 cursor-pointer ">
        <img src={episode.episode_image} alt={episode.title} className="h-full w-full object-contain rounded-lg" />
        <div className="text-stone-300 w-full space-y-2">
            <div className="flex justify-between">
                <span className="text-stone-400 font-semibold uppercase text-xs md:text-[11px]">Episodio {episode.episode_number}</span>
                <span className="text-stone-400 text-xs md:text-[10px]">24m</span>
            </div>
            <p className="text-white text-sm md:text-sm font-bold line-clamp-1">{episode.title}</p>
            <p className="text-stone-400 text-[11px] md:text-[10px]">Hace 1 año</p>
        </div>
      </div>
    </Link>
  )
}