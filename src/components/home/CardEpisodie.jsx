import { Link } from "react-router-dom"

export const CardEpisodie = ({name}) => {
  return (
    <Link to='anime/slug/' className="hover:shadow shadow-purple-600 transition-all duration-300 w-40 h-25 md:w-60 md:h-40 lg:w-50 lg:h-30">
        <div className="flex flex-col items-center justify-center relative rounded-2xl">
            <img src="https://areajugones.sport.es/wp-content/uploads/2025/12/jujutsu-kaisen-horario.jpg.webp" alt="" className="w-full h-full object-contain" />
            <p>{name}</p>
        </div>
    </Link>
  )
}