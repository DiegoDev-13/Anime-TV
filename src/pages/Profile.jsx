import { useParams } from "react-router-dom"
import { UserInfo } from "../components/profile/UserInfo"
import { useUserByUserName } from "../hooks/auth/useUserByUserName"
import { FavoriteAnimeList } from "../components/profile/FavoriteAnimeList"
import { getAnimeDetails } from "../actions/anime"
import { Loader } from "../components/shared/Loader"

export const Profile = () => {

  const {userName} = useParams()

  // console.log(userName)

  const {user, isLoading} = useUserByUserName(userName)

  if(isLoading) return <Loader />

  return (
    <div className="flex flex-col">
        <UserInfo user={user} />

        <FavoriteAnimeList userId={user?.id} />
    </div>
  )
}