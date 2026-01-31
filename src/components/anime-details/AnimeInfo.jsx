import { IoStar } from "react-icons/io5";
import { CardGender } from "../directory/Cardgender";
import { FaPlay, FaRegStopCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AnimeInfo = ({anime}) => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col bg-dark bg-blend-overlay shadow-[inset_0px_0px_56px_70px_#0f0f12] bg-cover" style={{backgroundImage: `url('${anime?.image_front}')`,}}> 
        <div className="text-stone-300 text-sm font-medium my-2 mx-auto md:mx-0">
            <p className="tracking-widest">Inicio / Anime / <span className="text-purple-700">{anime?.name_season}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-8 space-x-5 my-3 text-white">
            <div className="w-full md:w-auto my-6 md:my-1 flex justify-center">
                <img src={anime?.image} alt="" className="w-90 md:w-70 h-full object-contain rounded-sm shadow-[0px_4px_37px_-18px_rgb(147,51,234)]"/>
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl text-center md:text-left font-semibold">{anime?.name_season}</h3>
                <div className="flex flex-wrap items-center space-x-5 justify-center md:justify-start space-y-6 md:space-y-1">
                    <span className="font-semibold text-lg text-white flex justify-center items-center gap-2">
                        <IoStar size={16} className="text-yellow-300" />
                        4.8
                        <p className="text-stone-400 text-sm font-normal">(12k reviews)</p>
                    </span>
                    <div className="h-1 w-1 bg-stone-600 rounded-full" />
                    <p className="text-stone-300 text-sm">2025</p>
                    <div className="h-1 w-1 bg-stone-600 rounded-full" />
                    <span className="py-px px-2 border border-stone-600 rounded-sm text-xs text-stone-300">TV</span>
                    <div className="h-1 w-1 bg-stone-600 rounded-full" />
                    <span className={`${anime?.streaming ? 'bg-green-500' : 'bg-red-500'} py-1.5 px-3 rounded-lg text-sm font-medium flex justify-center items-center gap-2`}>
                        {
                            anime?.streaming ? <FaPlay size={10} /> : <FaRegStopCircle size={16} />
                        }
                        {
                            anime?.streaming ? 'En emision' : 'Finalizado'
                        }
                    </span>
                </div> 

                <div className="my-6 mx-6 md:mx-0">
                    <p className="w-full h-30 md:max-h-50  text-sm text-stone-300 overflow-auto custom-scrollbar transition-all duration-300">{anime?.description}</p>
                </div>

                <div className="w-full flex flex-wrap gap-4 justify-center md:justify-start">
                    {
                        anime?.gender.map((item, index) => (
                            <CardGender key={index} text={item} animeInfo />  
                        ))
                    }
                </div>

                <div className="flex justify-start items-center mt-6">
                    <button className="flex w-full md:w-auto justify-center items-center gap-2 bg-purple-600 py-3 px-6 rounded-lg font-semibold shadow-sm shadow-purple-600 cursor-pointer hover:bg-purple-700 transition-colors duration-300" onClick={() => navigate(`/anime/ver/${anime.slug_season}-1`)}>
                        <FaPlay size={12} />
                        Ver Ahora T1 E1
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}