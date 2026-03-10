import { Separator } from "../../shared/Separator"
import { IoIosClose, IoMdClose } from "react-icons/io"
import { AiFillFolderAdd } from "react-icons/ai";
import { useGlobalStore } from "../../../store/global.store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGender } from "../../../hooks/useGender";
import { Loader } from "../../shared/Loader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dashboardAnimeAdd } from "../../../lib/validators";
import { useAddAnime } from "../../../hooks/dashboard/useAddAnime";

export const ModalAddAnime = () => {

    const [gendersArray, setgendersArray] = useState([]) 
    
    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: zodResolver(dashboardAnimeAdd)
    })
    
    const setActiveModalNewAnime = useGlobalStore(state => state.setActiveModalNewAnime)
    
    const {data: dataGenders, isLoading} = useGender()
    const {mutate, isPending, isError} = useAddAnime()

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
        console.log(index)
        setgendersArray(gendersArray.toSpliced(index, 1))
    }

    const onRegister = handleSubmit((data) => {
        const {title, poster, genders} = data
        const anime = {
            title,
            genders,
            poster
        }

        mutate(anime)

    })

    // if(isLoading) return <Loader />

  return (
    <div className="w-full h-screen fixed flex justify-center items-center backdrop-blur-xs z-50" onClick={() => setActiveModalNewAnime(false)}>
        <div className="w-130 h-full flex flex-col bg-surface-dark mx-auto md:mt-5 rounded-2xl p-5 animated-slideInTop" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between ">
                <h3 className="text-white text-lg font-semibold flex justify-center items-center gap-2">
                    <AiFillFolderAdd size={25} className="text-purple-700" />
                    Agregar anime
                </h3>
                <button onClick={() => setActiveModalNewAnime(false)}>
                    <IoMdClose size={25} className="text-stone-400 hover:text-white cursor-pointer transition-all duration-300"/>
                </button>
            </div>
            <Separator />

            {
                isLoading || isPending
                    ? <Loader />
                    :<form className="flex flex-col w-full h-full justify-between" autoComplete="off" onSubmit={onRegister}>
                        <div className="flex flex-col justify-center space-y-2">
                            <label htmlFor="title" className="text-white text-sm">Titulo</label>
                            <input type="text" id="title" placeholder="Ingrese un título" className="p-2 text-white text-[16px] rounded-lg otuline-none focus:outline-none bg-surface-dark-highlight border border-stone-600 transition-all duration-300" {...register('title')}/>
                            {
                                errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>
                            }
                        </div>
                        <div className="flex mt-4 gap-3 flex-wrap">
                            {
                                gendersArray.map((gender, index) => (
                                    <div key={index} className="relative text-white bg-surface-dark-highlight py-2 pl-4 pr-8 rounded-2xl border border-stone-600">
                                        <span className="text-sm font-semibold">{gender}</span>
                                        <button type="button" className="text-stone-400 hover:text-white absolute top-0 right-1 cursor-pointer transition-all duration-200" onClick={() => handleRemoveGender(index)}>
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
                                    dataGenders.map(gender => (
                                        <option key={gender.id} value={gender.name}>{gender.name}</option>
                                    ))
                                }
                            </select>
                            {
                                errors.genders && <p className="text-sm text-red-500">{errors.genders.message}</p>
                            }
                        </div>
                        <div className="flex flex-col justify-center mt-4 space-y-2">
                            <label htmlFor="poster" className="text-white text-sm">Poster</label>
                            <input type="text" id="poster" placeholder="Añade una url de la imagen del poster" className="p-2 text-white text-[16px] rounded-lg otuline-none focus:outline-none bg-surface-dark-highlight border border-stone-600 transition-all duration-300 " {...register('poster')} />
                            {
                                errors.poster && <p className="text-sm text-red-500">{errors.poster.message}</p>
                            }
                        </div>

                        <button type="submit" className='w-full flex justify-center items-center gap-1.5 py-2 px-3 my-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-300 self-end'>Agregar Anime</button>
                    </form>
            }

        </div>
    </div>
  )
}