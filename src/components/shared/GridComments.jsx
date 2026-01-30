import { CardComment } from "./CardComment"

export const GridComments = ({comments}) => {
  return (
    <div className="flex flex-col space-y-4 p-3 w-full md:w-60 lg:w-100">

        { 
            comments.length ? (<h3 className="text-xl text-white font-semibold">Comentarios</h3>) : (<h3 className="text-[16px] text-white font-normal text-center">Aún no hay comentarios sobre este anime. ¡Sé el primero en compartir tu opinión!</h3>)
        }

        
        {
            comments.map(comment => (
                <CardComment key={comment.id} name={comment.name_user} image={comment.image_profile} comment={comment.comment}/>
            ))
        }

    </div>
  )
}