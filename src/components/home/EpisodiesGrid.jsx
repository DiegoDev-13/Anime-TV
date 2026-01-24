import { RiArrowRightDoubleLine } from "react-icons/ri"
import { CardEpisodie } from "./CardEpisodie"

export const EpisodiesGrid = ({title}) => {
  return (
    <div className="my-12 text-white w-full flex flex-col justify-center">
        <h2 className="text-3xl text-left flex items-center font-medium mb-6 ml-6">
          <RiArrowRightDoubleLine size={45} className="text-purple-600"/>
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 space-y-10 md:space-y-8 mx-auto">    
          <CardEpisodie name='jusjsuud sdsadsa dasadas' />
          <CardEpisodie />
          <CardEpisodie />
          <CardEpisodie name='jusjsuudsaddasdsd' />
          <CardEpisodie />
          <CardEpisodie />
          <CardEpisodie name='jusjsuuddasdasdas dsdsa  sdasadas' />
          <CardEpisodie />
          <CardEpisodie name='jusjsuudsaddasdsd' />
          <CardEpisodie />
          <CardEpisodie />
          <CardEpisodie name='jusjsuud ' />
          <CardEpisodie />
          <CardEpisodie name='jusjsuudsaddasdsd' />
          <CardEpisodie />
        </div>
    </div>
  )
}