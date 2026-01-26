import { Link } from "react-router-dom"

export const CardAnime = ({item}) => {
  return (
    <Link to={`/anime/${item.slug_season}`} className=" w-40 h-55 md:w-50 md:h-70">
        <div className="flex flex-col items-center"> 
            <img src={item.image} alt="" className="w-full h-full object-contain rounded-md" />
        </div>
            <p className="text-sm ml-3">{item.name_season}</p>
    </Link>
  )
}