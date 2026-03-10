import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaImage, FaInfoCircle } from "react-icons/fa"
import { Separator } from "../../shared/Separator";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { formatSlug } from "../../../helpers";
import { IoIosClose } from "react-icons/io";
import { useGender } from "../../../hooks/useGender";
import { Loader } from "../../shared/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dashboardAddSeasonScheme } from "../../../lib/validators";
import { useAddSeason } from "../../../hooks/dashboard/useAddSeason";


export const FormAddNewSeason = ({idAnimeSelected}) => {
    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[\w\d-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

    const [loadingImages, setLoadingImages] = useState(false)

    const [posterImage, setPosterImage] = useState("https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")
    const [inputPosterImage, setInputPosterImage] = useState('')
    const [bannerImage, setBannerImage] = useState("https://osgf.gov.ng/storage/temp/oc64663771bc022/assets/images/no-banner.jpg")
    const [inputBannerImage, setInputBannerImage] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    const [gendersArray, setgendersArray] = useState([]) 
    const [seasonStatus, setseasonStatus] = useState(true)


    const {data: dataGenders, isLoading} = useGender()
    const {mutate, isPending, isError} = useAddSeason()

    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: zodResolver(dashboardAddSeasonScheme)
    })


    const handleChangePoster = (e) => {
        setInputPosterImage(e.target.value)
    }

    const handleChangeBanner = (e) => {
        setInputBannerImage(e.target.value)
    }

    const handlePreview = () => {
        setLoadingImages(true)
        if(urlRegex.test(inputPosterImage) && urlRegex.test(inputBannerImage)){
            setPosterImage(inputPosterImage)
            setBannerImage(inputBannerImage)
            setLoadingImages(false)
            setValue('poster', inputPosterImage)
            setValue('banner', inputBannerImage)
            return
        }else {
            setLoadingImages(false)
            toast.error('Por favor, introduce un enlace válido!')
        }
    }

    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value)

        setValue('title', inputTitle)
        setValue('slugSeason', formatSlug(inputTitle))
    }

    //Para manejar la logica de los generos 

    useEffect(() => {
        setValue('genders', gendersArray, {shouldValidate: true})
    }, [gendersArray, setValue])

    const handleAddGender = (e) => {
        const gender = e.target.value

        if(gendersArray.length >= 8) {
            toast.error(`No se puede agregar mas de 8 generos`)
            return
        }

        if(!gendersArray.includes(gender)){
            setgendersArray(prev => [...prev, gender])
            return
        }

        toast.error(`El genero ${gender} ya se encuentra agregado`)
    }
    
    const handleRemoveGender = (index) => {
        setgendersArray(gendersArray.toSpliced(index, 1))
    }

   //Logica del selected del status
    const handleChangeStatus = (e) => {
        if(e.target.value === 'true') {
            setseasonStatus(true)
        } else if(e.target.value === 'false') {
            setseasonStatus(false)
        }
        setValue('status', seasonStatus)
    }

    //Logica de enviar formulario 
    const onSubmit = handleSubmit((data) => {
        // console.log(data)
        const {banner, poster, title, numberSeason, yearSeason, slugSeason, genders, status, rating, studyAnimation, description} = data

        const season = {
            idAnimeSelected,
            banner, 
            poster, 
            title, 
            numberSeason, 
            yearSeason, 
            slugSeason, 
            genders, 
            status, 
            rating, 
            studyAnimation, 
            description
        }

        mutate(season)
    })

    if(isLoading || isPending) return <Loader />

  return (
    <>
        <div className="my-4">
            <h2 className="text-white text-2xl font-semibold">Agregar nueva temporada</h2>
            <p className="text-stone-400 text-sm mt-1">Sube los datos de la temporada del anime seleccionado</p>
        </div>
        <form onSubmit={onSubmit} className="w-full flex justify-between mb-6">
            <div className="w-[37%] p-5 bg-surface-dark border border-stone-700 rounded-lg">
                <div className="flex md:justify-between items-center mb-3">
                    <h3 className="text-white text-lg font-semibold flex items-center gap-3">
                        <FaImage size={20} className="text-purple-700"/>
                        Imagenes
                    </h3>
                    <button type="button" className="py-2 px-2 bg-purple-700 hover hover:bg-purple-600 rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300" onClick={() => handlePreview()}>Visualizar</button>
                </div>
                <div>
                    <label htmlFor="poster" className="text-stone-300 text-[16px] font-semibold">Porter</label>
                    <div className="flex justify-center mt-2">
                        {
                            loadingImages 
                                ? <AiOutlineLoading3Quarters size={50} className="my-14 text-stone-400 animate-spin" />
                                : <img src={posterImage} alt="" className="w-50 h-70 rounded-lg border-2 border-dashed border-stone-500" />
                        }
                    </div>
                    <input type="url" id="poster" placeholder="Url del poster" autoComplete="off" className="w-full bg-surface-dark-highlight border border-stone-700 rounded-lg my-3 py-1 px-2 text-[16px] text-stone-400 focus:border-purple-700 transition-all duration-300 outline-none" value={inputPosterImage} onChange={handleChangePoster}/>
                    {
                        errors.poster && <p className="text-sm text-red-500">{errors.poster.message}</p>
                    }
                </div>

                <Separator />

                <div>
                    <label htmlFor="banner" className="text-stone-300 text-[16px] font-semibold">Banner</label>
                    <div className="flex justify-center mt-2">
                        {
                            loadingImages 
                                ? <AiOutlineLoading3Quarters size={50} className="my-10 text-stone-400 animate-spin" />
                                : <img src={bannerImage} alt="" className="w-full h-28 rounded-lg border-2 border-dashed border-stone-500" />
                        }
                    </div>
                    <input type="url" id="banner" placeholder="Url del banner" autoComplete="off" className="w-full bg-surface-dark-highlight border border-stone-700 rounded-lg my-3 py-1 px-2 text-[16px] text-stone-400 focus:border-purple-700 transition-all duration-300 outline-none" value={inputBannerImage} onChange={handleChangeBanner}/>
                    {
                        errors.banner && <p className="text-sm text-red-500">{errors.banner.message}</p>
                    }
                </div>
            </div>

            
            <div className="w-[60%] p-5 bg-surface-dark border border-stone-700 rounded-lg">
                <div className="flex md:justify-between items-center mb-3">
                    <h3 className="text-white text-lg font-semibold flex items-center gap-3">
                        <FaInfoCircle size={20} className="text-purple-700"/>
                        Informacion del anime
                    </h3>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-stone-300 text-[16px] font-semibold">Titulo</label>
                    <input type="text" id="title" autoComplete="off" placeholder="Ingresa el titulo de la temporada" className="p-2 mt-2 text-stone-200 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={inputTitle} onChange={(e) => handleChangeTitle(e)}/>
                    {
                        errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>
                    }
                </div>

                <div className="flex justify-between my-4 w-full">
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="numberSeason" className="text-stone-300 text-[16px] font-semibold">Numero de temporada</label>
                        <input type="number" id="numberSeason" min='1' max="50" step="1" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" onChange={(e) => setValue('numberSeason', Number(e.target.value))} />
                        {
                            errors.numberSeason && <p className="text-sm text-red-500">{errors.numberSeason.message}</p>
                        }
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="yearSeason" className="text-stone-300 text-[16px] font-semibold">Año de temporada</label>
                        <input type="number" id="yearSeason" min="1990" max="2099" step="1" placeholder="Año de publicacion" className="p-2 mt-2 text-stone-200 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" onChange={(e) => setValue('yearSeason', Number(e.target.value))} />
                        {
                            errors.numberSeason && <p className="text-sm text-red-500">{errors.numberSeason.message}</p>
                        }
                    </div>
                    <div className="flex flex-col w-[35%]">
                        <label htmlFor="slugSeason" className="text-stone-300 text-[16px] font-semibold">Slug de temporada</label>
                        <input type="text" id="slugSeason" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" value={formatSlug(inputTitle)}  />
                        <p className="text-white">Ejemplo: anime-season-1</p>
                        {
                            errors.slugSeason && <p className="text-sm text-red-500">{errors.slugSeason.message}</p>
                        }
                    </div>
                </div>

                <div className="flex mt-4 gap-3 flex-wrap">
                    {
                        gendersArray.map((gender, index) => (
                            <div key={index} className="relative text-white bg-surface-dark-highlight py-2 pl-4 pr-8 rounded-2xl border border-stone-600">
                                <span className="text-sm font-semibold">{gender}</span>
                                <button type="button" className="text-stone-200 hover:text-white absolute top-0 right-1 cursor-pointer transition-all duration-200" onClick={() => handleRemoveGender(index)}>
                                    <IoIosClose size={25} />
                                </button>
                            </div>
                        ))
                    }
                    {
                        gendersArray.length >= 1 && <button type="button" className="py-1.5 px-3 text-red-500 flex justify-center items-center rounded-xl border border-red-500 cursor-pointer hover:bg-red-800/30 transition-colors duration-300" onClick={() => setgendersArray([])}>Limpiar</button>
                    }
                </div>
                <div className="flex flex-col justify-center space-y-2">
                    <label htmlFor="genders" className="text-white text-sm">Generos</label>
                    <select id="genders" className="w-full text-white bg-zinc-800 p-2 rounded-lg border border-stone-500 outline-none focus:ring-2 focus:ring-purple-600 overflow-auto" onChange={handleAddGender} value=''>
                        <option value='Genero' >Generos</option>
                        {
                            dataGenders?.map(gender => (
                                <option key={gender.id} value={gender.name}>{gender.name}</option>
                            ))
                        }
                    </select>
                    {
                        errors.genders && <p className="text-sm text-red-500">{errors.genders.message}</p>
                    }
                </div>

                <div className="flex justify-between my-4 w-full">
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="status" className="text-stone-300 text-[16px] font-semibold">Status</label>
                        <select id="status" className="p-2 mt-2 text-stone-200 bg-surface-dark-highlight border border-stone-700 rounded-lg font-semibold" onChange={(e) => handleChangeStatus(e)}>
                            <option></option>
                            <option value={false} className="text-white bg-green-500 font-semibold">En emision</option>
                            <option value={true} className="text-white bg-red-500 font-semibold">Finalizado</option>
                        </select>
                        {
                            errors.status && <p className="text-sm text-red-500">{errors.status.message}</p>
                        }
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="rating" className="text-stone-300 text-[16px] font-semibold">Rating</label>
                        <input type="number" id="rating" min="0" max="10" step="0.01" placeholder="Raiing del anime" className="p-2 mt-2 text-stone-200 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" onChange={(e) => setValue('rating', Number(e.target.value))} />
                        {
                            errors.rating && <p className="text-sm text-red-500">{errors.rating.message}</p>
                        }
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="studyAnimation" className="text-stone-300 text-[16px] font-semibold">Estudio de animación</label>
                        <input type="text" id="studyAnimation" className="p-2 mt-2 text-stone-400 bg-surface-dark-highlight border border-stone-700 rounded-lg outline-none focus:border-purple-700 transition-all duration-300" autoComplete="off" {...register('studyAnimation')} />
                        {
                            errors.studyAnimation && <p className="text-sm text-red-500">{errors.studyAnimation.message}</p>
                        }
                    </div>
                </div>
                <div className="w-full">
                        <label htmlFor="description" className="text-stone-300 text-[16px] font-semibold">Descripción</label>
                        <textarea className="w-full max-h-80 min-h-30 p-4 mt-2 bg-surface-dark-highlight text-stone-300 rounded-lg border border-stone-700 outline-none focus:border-purple-700 transition-all duration-300" rows="7" cols="20" maxLength={900} id='description' placeholder="Escribe una descripción del anime" {...register('description')} ></textarea>
                        {
                            errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>
                        }
                </div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 py-2 px-3 my-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 cursor-pointer">Guardar & Publicar Temporada</button>
            </div>
        </form>
    </>
  )
}