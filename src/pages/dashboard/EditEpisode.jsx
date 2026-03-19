import { ErrorEditEpisode } from "../../components/dashboard/episode/ErrorEditEpisode"
import { FormEditEpisode } from "../../components/dashboard/episode/FormEditEpisode"

export const EditEpisode = () => {
  return (
    <div className="w-full h-full">
        <FormEditEpisode />
        {/* <ErrorEditEpisode /> */}
    </div>
  )
}