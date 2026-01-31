import { Link } from "react-router-dom"

export const CardAnime = ({item}) => {
  return (
    <Link to={`/anime/${item.slug_season}`} className=" w-40 h-55 md:w-50 md:h-70">
        <div className="flex flex-col items-center object-cover"> 
            <img src={item.image} alt="" className="w-full h-full hover hover:scale-105 hover:-translate-y-3 transition-all duration-300" loading="lazy"/>
            <p className="text-sm line-clamp-2">{item.name_season}</p>
        </div>
    </Link>
  )
}