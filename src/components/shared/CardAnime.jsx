import { Link } from "react-router-dom"

export const CardAnime = ({name}) => {
  return (
    <Link className=" w-40 h-55 md:w-50 md:h-70">
        <div className="flex flex-col items-center"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nDDeLEOH2BhPjzrumPmtr8q_9DoscU-S5g&s" alt="" className="w-full h-full object-contain" />
        </div>
            <p className="text-sm ml-3">{name}</p>
    </Link>
  )
}