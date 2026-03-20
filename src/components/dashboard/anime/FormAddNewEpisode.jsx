import { useState } from "react"
import { formatSlug } from "../../../helpers"
import { FaImage } from "react-icons/fa"
import { CardIframe } from "../episode/CardIframe"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { dashboardAddEpisode } from "../../../lib/validators"
import { useAddEpisode } from "../../../hooks/dashboard/useAddEpisode"
import { Loader } from "../../shared/Loader"

export const FormAddNewEpisode = ({title, animeSelected, setAnimeSelected}) => {
  
  const [titleInput, setTitleInput] = useState(animeSelected?.name_season)
  const [numberEpisodeInput, setNumberEpisodeInput] = useState(null)
  const [inputImage, setInputImage] = useState(null)
  const [objIframes, setObjIframes] = useState([])
  const [nameIframe, setNameIframe] = useState('')
  const [linkIframe, setLinkIframe] = useState('')
  
  // Convertimos el objeto en array para poder iterar
  const options = Object.values(objIframes || {})

  const {register, handleSubmit, setValue, formState: {errors}} = useForm({
    resolver: zodResolver(dashboardAddEpisode)
  })

  const {mutate, isPending, isError, isSuccess} = useAddEpisode()

  
  const handleAddIframe = () => {
    if(objIframes.length < 6) {
      if(nameIframe.trim() && linkIframe.trim()){
        const option = {
          name: nameIframe,
          iframe: linkIframe
        }

        setObjIframes((prev) => [...prev, option])
        setNameIframe('')
        setLinkIframe('')
      } else {
        toast.error('Agrege los campos completo del Iframe')
      }
    } else {
      toast.error('Solo puede agregar 6 Iframes')
    }
  }

  const handleRemoveIframe = (id) => {
    setObjIframes(objIframes.toSpliced(id, 1))
  } 

  const handleChangeTitle = (e) => {
    setTitleInput(e.target.value)
    setValue('title', e.target.value, {shouldValidate: true})
    setValue('slugEpisode', formatSlug(titleInput), {shouldValidate: true})
  }
  
  const handleChangeNumberEpisode = (e) => {
    const newValue = e.target.value; 
    const numberFormat = Number(newValue);

    setNumberEpisodeInput(newValue);

    setValue('numberEpisode', numberFormat, { shouldValidate: true });

};
  
  const handleChangeImageEpisode = (e) => {
    setInputImage(e.target.value)
    setValue('imageEpisode', e.target.value, {shouldValidate: true})
  }


  const onSubmit = handleSubmit((data) => {
    if(objIframes.length < 1) {
      toast.error('Agregar minimo 1 Iframe')
      return
    }

    const {title, imageEpisode, numberEpisode, slugEpisode} = data

    // Se hace esto por que la tabla de los Iframes en la base de datos es de formato JSON 
    // 1: Convertimos el array de objetos a un objetos que contiene objeteos 
    const objIndexado = Object.assign({}, objIframes)
    
    const newEpisode = {
      title,
      seasonId: animeSelected.id,
      imageEpisode,
      numberEpisode,
      slugEpisode: `${formatSlug(titleInput)}-${numberEpisodeInput}`,
      iframes: objIndexado
    }

    mutate(newEpisode)
    
  })

  if(isSuccess) {
    console.log('isSuccess')

    setAnimeSelected(null)
  }
  
  return (
    <div className="w-full mb-6">
        <div className="my-4">
            <h2 className="text-white text-2xl font-semibold">{title}</h2>
            <p className="text-stone-400 text-sm mt-1">Sube los datos del capitulo de la tamporada seleccionada</p>
        </div>

        {
          isPending
            ? <Loader />
            :<form onSubmit={onSubmit} className="grid grid-cols-2 w-full gap-5">
              <div className="w-full bg-surface-dark border border-stone-700 rounded-lg p-4">
                <div className="flex items-center my-3 space-x-2">
                  <div className="h-6 w-1.5 rounded-lg bg-purple-700" />
                  <h3 className="text-white text-lg font-semibold">Información de capitulo</h3>
                </div>
                <div className="flex justify-between my-4 w-full gap-4">

                    <div className="flex flex-col w-full">
                        <label htmlFor="title" className="text-stone-300 text-[16px] font-semibold">Titulo</label>
                        <input type="text" id="title" placeholder="Ingresa el titulo de la temporada" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={titleInput} onChange={handleChangeTitle} />
                        {
                            errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>
                        }
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="numberEpisode" className="text-stone-300 text-[16px] font-semibold">Numero de capitulo</label>
                        <input type="number" id="numberEpisode" min={1} max={10000} placeholder="Ingresa el numero del capitulo" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={numberEpisodeInput} onChange={handleChangeNumberEpisode} />
                        {
                            errors.numberEpisode && <p className="text-sm text-red-500">{errors.numberEpisode.message}</p>
                        }
                    </div>
                </div>

                <div className="flex justify-between my-4 w-full space-x-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="slugEpisode" className="text-stone-300 text-[16px] font-semibold">Slug de temporada</label>
                        <input type="text" id="slugEpisode" placeholder="Ingresa el slug del capitulo" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={`${formatSlug(titleInput)}-${numberEpisodeInput}`}  />
                        <p className="text-white">Ejemplo: anime-1</p>
                        {
                            errors.slugEpisode && <p className="text-sm text-red-500">{errors.slugEpisode.message}</p>
                        }
                    </div>
                </div>
              </div>

              <div className="w-full bg-surface-dark border border-stone-700 rounded-lg p-4">
                <div className="flex items-center my-3 space-x-2">
                    <div className="h-6 w-1.5 rounded-lg bg-purple-700" />
                    <h3 className="text-white text-lg font-semibold">Imagen de capitulo</h3>
                </div>
                <div className="w-full flex justify-center items-center">

                  {
                    inputImage 
                      ?<div className="border border-stone-700 w-70 h-42 rounded-lg">
                        <img src={inputImage} alt="" className="w-full h-full"/>
                      </div>
                      :<div className="flex justify-center items-center border border-stone-700 w-70 h-42 rounded-lg">
                        <FaImage size={60} className="text-stone-700" />
                      </div>
                  }
                  
                </div>
                
                <div className="flex flex-col w-full">
                    <label htmlFor="imageEpisode" className="text-stone-300 text-[16px] font-semibold">Poster</label>
                    <input type="text" id="imageEpisode" autoComplete="off" placeholder="Ingrese un url de la imange" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={inputImage} onChange={handleChangeImageEpisode} />
                    {
                        errors.imageEpisode && <p className="text-sm text-red-500">{errors.imageEpisode.message}</p>
                    }
                </div>
              </div>

              <div className="w-full bg-surface-dark border border-stone-700 rounded-lg p-4">
                <div className="flex flex-col justify-between mt-8 mb-4 w-full space-x-4">
                    <div className="flex items-center my-3 space-x-2">
                      <div className="h-6 w-1.5 rounded-lg bg-purple-700" />
                      <h3 className="text-white text-lg font-semibold">Video Iframes</h3>
                    </div>
                    <div className="flex flex-wrap w-full my-4 gap-3">
                      {
                        options.map((iframe, index) => (
                          <CardIframe key={index} id={index} title={iframe.name} handleRemoveIframe={handleRemoveIframe} />
                        ))
                      }
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <div className="flex flex-col w-[33%] my-4">
                          <label htmlFor="nameIframe" className="text-stone-300 text-[16px] font-semibold">Nombre</label>
                          <input type="text" id="nameIframe" placeholder="Nombre del servidor" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={nameIframe} onChange={(e) => setNameIframe(e.target.value)} />
                      </div>
                      <div className="flex flex-col w-full">
                          <label htmlFor="linkIframe" className="text-stone-300 text-[16px] font-semibold">Link</label>
                          <input type="text" id="linkIframe" placeholder="Url del iframe" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={linkIframe} onChange={(e) => setLinkIframe(e.target.value)} />
                      </div>
                    </div>
                      <button type="button" className="flex justify-center items-center gap-1.5 py-1.5 px-3 mt-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300" onClick={handleAddIframe}>Agregar Iframe</button>
                </div>
              </div>

              <div  className="w-full flex flex-col">
                <button type="submit" className="flex justify-center items-center gap-1.5 py-3 px-3 mt-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300">Agregar Capitulo</button>
                <button type="button" className="flex justify-center items-center gap-1.5 py-3 px-3 mt-3 border border-stone-600 text-stone-500 hover:bg-stone-700/15 hover:border-stone-500 hover:text-stone-400 font-bold rounded-lg cursor-pointer transition-all duration-300" onClick={() => setAnimeSelected(null)}>Cancelar & Voler Atras</button>              
              </div>

            </form>
        }

    </div>
  )
}