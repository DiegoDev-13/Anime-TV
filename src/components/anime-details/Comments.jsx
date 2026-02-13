import { useState } from "react"
import { getFirstLetter } from "../../helpers"
import { StarRating } from "./StarRating"
import toast from "react-hot-toast"
import { useAddComment } from "../../hooks/useAddComment"
import { Loader } from "../shared/Loader"

export const Comments = ({session, user, seasonId}) => {

    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState('')
    const [isErrorRating, setIsErrorRating] = useState(false)
    const [isErrorComment, setIsErrorComment] = useState(false)

    const {mutate, isPending, isError} = useAddComment()


    const handleSubmit = (e) => {
        e.preventDefault()

         if(session === null) {
            toast.error('Debes inisiar sesion para poder agregar un comentario')
            return
        } else if(comment.length <= 3) {
            setIsErrorComment(true)
            return
        } else if(rating === null) {
            setIsErrorComment(false)
            setIsErrorRating(true)
            return
        } 
        
        setIsErrorComment(false)
        setIsErrorRating(false)
        
        mutate({
            seasonId,
            userId: user.user_id,
            comment: comment,
            ranking: rating,
            userName: user.user_name
        })
        setComment('')
        setRating(null) 

    }

    if(isPending) return <Loader />

  return (
    <div className="w-[95%] mx-auto border border-stone-500 p-8 rounded-2xl mt-3 md:mt-0">
        <h2 className="text-white text-2xl font-semibold">Escribe una reseña</h2>

        <div className="flex flex-col md:flex-row space-x-5 my-4">
            {
                session && <div className="w-13 h-13 bg-white rounded-full flex justify-center items-center mb-4 md:mb-0">
                                <p className="text-4xl font-semibold uppercase">{getFirstLetter(user.user_name)}</p>
                            </div>
            }

            <form className="w-full" onSubmit={handleSubmit}>
                <textarea className="w-full max-h-80 min-h-30 bg-surface-dark p-4 text-stone-300 rounded-lg border border-stone-700" rows="7" cols="20" maxLength={400} placeholder="Comparte tu opinión sobre este anime... ¿Qué te gustó?" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                {
                    isErrorComment && <p className="text-sm text-red-500 mb-2">El comentario debe tener minimo 4 caracteres</p>
                }
                <div className="flex flex-col md:flex-row justify-between items-center my-4 space-y-4">
                    <div>
                        <label className="text-stone-400 text-[15px] font-medium">Tu puntuación</label>
                        <StarRating rating={rating} setRating={setRating} />
                        {
                            isErrorRating && <p className="text-sm text-red-500 mb-2">Tienes que dejar tu puntuación</p>
                        }
                    </div>
                    <button type="submit" className="text-white bg-purple-600 py-2 px-6 rounded-lg font-semibold shadow-sm shadow-purple-600 cursor-pointer hover:bg-purple-700 transition-colors duration-300">Enviar comentario</button>
                </div>
            </form>
        </div>
    </div>
  )
}