import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Separator} from '../shared/Separator'
import { FaBars } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward, IoIosFlag } from "react-icons/io";
import { MdFavorite, MdOutlineSaveAlt } from "react-icons/md";

export const EpisodePlayer = ({episode, quantityEpisodes, slug}) => {

  const [option, setoption] = useState(episode?.iframe.option_1.iframe || '')
  const [optionActive, setoptionActive] = useState(0)
  const [currentAnime, setCurrentAnime] = useState(null)

  const navigate = useNavigate()

  const handleChangeIframe = (iframe, index) => {
    setoption(iframe)
    setoptionActive(index)
  }

  useEffect(() => {
    const array = []
    const EpNow = slug.split('-')

    for (let i = 0; i < EpNow.length - 1; i++) {
      array.push(EpNow[i])
      
    }

    const nameSlug = array.join('-')
    setCurrentAnime(nameSlug)
  }, [slug])
  

    // Convertimos el objeto en array para poder iterar
    const options = Object.values(episode?.iframe || {})

    const handleNextEp = () => {
      navigate(`/anime/ver/${currentAnime}-${episode?.episode_number + 1}`)
    }

    const handlePrevEp = () => {
      navigate(`/anime/ver/${currentAnime}-${episode?.episode_number - 1}`)
    }
    
    const handleAllEpisodes = () => {
      navigate(`/anime/${currentAnime}`)
    }

  return (
    <div className="flex flex-col items-center w-full lg:w-[69%] mx-auto bg-surface-dark p-6 rounded-lg border border-stone-800" >
        <div className="flex flex-col w-full">
          <h3 className="text-stone-200 text-xl font-medium mb-4">{episode.title} <span className="font-bold text-white">Episodio</span> {episode.episode_number}</h3>

            <div className="flex flex-wrap w-full space-x-2 ">
              {
                options.map((item, index) => (
                    <div key={index} className={`${index === optionActive && 'bg-purple-700'} h-10 w-20 border border-stone-400 rounded-lg p-3 cursor-pointer flex justify-center items-center text-stone-300 hover:bg-purple-600 transition-all duration-300`} onClick={() => handleChangeIframe(item.iframe, index)}>
                      <h3 className="text-xs font-semibold">{item.name}</h3>
                    </div>
                ))
              }
            </div>

            <div className="w-full aspect-video my-4">
              <iframe className="w-full h-full rounded-sm" key={episode.id} src={option} title={episode.title} allow="autoplay; encrypted-media" allowFullScreen />
            </div>

            <Separator />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-4">
                {
                  episode.episode_number > 1 && <button className="flex justify-center items-center gap-2 py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300" onClick={handlePrevEp}>
                    <IoIosArrowBack size={18} />
                    <span className="hidden md:block">Anterior</span>
                  </button>
                }
                <button onClick={() => handleAllEpisodes()} className="py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300"><FaBars size={16} /></button>

                {
                  episode.episode_number !== quantityEpisodes && <button className="flex justify-center items-center gap-2 py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300" onClick={handleNextEp}>
                    <span className="hidden md:block">Siguiente</span>
                    <IoIosArrowForward size={18} />
                  </button>
                }

              </div>

              <div className="flex gap-3">
                <button className="flex justify-center items-center gap-2 py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300">
                  <MdOutlineSaveAlt size={16} />
                  <span className="hidden md:block">Save</span>
                </button>
                <button className="flex justify-center items-center gap-2 py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300">
                  <MdFavorite size={16} />
                  <span className="hidden md:block">fav</span>
                </button>
                <button className="md:flex justify-center items-center gap-2 py-3 px-4.5 bg-surface-dark-highlight rounded-lg uppercase text-xs font-semibold text-stone-300 cursor-pointer hover:text-purple-600 transition-all duration-300 hidden">
                  <IoIosFlag size={16} />
                  report
                </button>
              </div>
            </div>

            <Separator />
        </div>
    </div>
  )
}