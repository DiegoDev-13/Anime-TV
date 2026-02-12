import { useParams } from "react-router-dom"
import { UserInfo } from "../components/profile/UserInfo"
import { useUserByUserName } from "../hooks/auth/useUserByUserName"
import { FavoriteAnimeList } from "../components/profile/FavoriteAnimeList"
import { Loader } from "../components/shared/Loader"
import { useSessionUser } from "../hooks/auth/useSessionUser"

export const Profile = () => {

  const {userName} = useParams()

  // console.log(userName)

  const {user, isLoading} = useUserByUserName(userName)
  const {session, isLoading: isLoadingSession} = useSessionUser()

  if(isLoading || isLoadingSession) return <Loader />

  return (
    <div className="flex flex-col">
        <UserInfo user={user} />

        <FavoriteAnimeList userId={session?.data.session.user.id} />
    </div>
  )
}