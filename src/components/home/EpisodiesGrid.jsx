import { RiArrowRightDoubleLine } from "react-icons/ri"
import { CardEpisodie } from "./CardEpisodie"
import { useEpisodiesHome } from '../../hooks/useEpisodiesHome'
import { SkeletonEpisodies } from "../skeletons/SkeletonEpisodies"
 

export const EpisodiesGrid = ({title}) => {

  const {episodies, isLoading} = useEpisodiesHome()

  // console.log(episodies)

  if(isLoading || !episodies) return <SkeletonEpisodies quantity={10} />

  return (
    <div className="my-12 text-white w-full flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl flex items-center font-medium text-left md:mb-6 ml-2">
          <RiArrowRightDoubleLine size={45} className="text-purple-600"/>
          {title}
        </h2>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:ga-6 mt-6 space-y-10 md:space-y-8 mx-auto">    
          {
            episodies?.map(item => (
              <CardEpisodie key={item.id} item={item} />
            ))
          }
        </div>
    </div>
  )
}