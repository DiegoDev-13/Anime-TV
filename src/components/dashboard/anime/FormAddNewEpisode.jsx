import { useState } from "react"
import { Separator } from "../../shared/Separator"
import { formatSlug } from "../../../helpers"

export const FormAddNewEpisode = ({title, idAnimeSelected, titleAnime}) => {

  const [titleInput, setTitleInput] = useState(titleAnime)
  const [numberEpisodeInput, setNumberEpisodeInput] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-full mb-6">
        <div className="my-4">
            <h2 className="text-white text-2xl font-semibold">{title}</h2>
            <p className="text-stone-400 text-sm mt-1">Sube los datos del capitulo de la tamporada seleccionada</p>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-between">
          <div className="w-[55%] bg-surface-dark border border-stone-700 rounded-lg p-3">
            <div className="flex items-center my-3 space-x-2">
              <div className="h-6 w-1.5 rounded-lg bg-purple-700" />
              <h3 className="text-white text-lg font-semibold">Información de capitulo</h3>
            </div>
            <div className="flex justify-between my-4 w-full gap-4">

                <div className="flex flex-col w-full">
                    <label htmlFor="title" className="text-stone-300 text-[16px] font-semibold">Titulo</label>
                    <input type="text" id="title" placeholder="Ingresa el titulo de la temporada" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={titleInput} />
                    {/* {
                        errors.slugSeason && <p className="text-sm text-red-500">{errors.slugSeason.message}</p>
                    } */}
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="numberEpisode" className="text-stone-300 text-[16px] font-semibold">Numero de capitulo</label>
                    <input type="number" id="numberEpisode" min={1} max={10000} placeholder="Ingresa el numero del capitulo" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={numberEpisodeInput} onChange={(e) => setNumberEpisodeInput(e.target.value)} />
                    {/* {
                        errors.slugSeason && <p className="text-sm text-red-500">{errors.slugSeason.message}</p>
                    } */}
                </div>
            </div>

            <div className="flex justify-between my-4 w-full space-x-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="slugEpisode" className="text-stone-300 text-[16px] font-semibold">Slug de temporada</label>
                    <input type="text" id="slugEpisode" placeholder="Ingresa el slug del capitulo" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={`${formatSlug(titleInput)}-${numberEpisodeInput}`}  />
                    <p className="text-white">Ejemplo: anime-1</p>
                    {/* {
                        errors.slugSeason && <p className="text-sm text-red-500">{errors.slugSeason.message}</p>
                    } */}
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-stone-300 text-[16px] font-semibold">Titulo</label>
                    <input type="text" id="" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={titleInput} />
                    {/* {
                        errors.slugSeason && <p className="text-sm text-red-500">{errors.slugSeason.message}</p>
                    } */}
                </div>
            </div>
          </div>

          <div className="w-[40%] bg-surface-dark border border-stone-700 rounded-lg p-3">
            <div className="flex items-center my-3 space-x-2">
              <div className="h-6 w-1.5 rounded-lg bg-purple-700" />
              <h3 className="text-white text-lg font-semibold">Imagen de capitulo</h3>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="border border-stone-700 w-70 h-42 rounded-lg">
                <img src="https://tioanime.com/uploads/thumbs/3805.jpg" alt="" className="w-full h-full"/>
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}