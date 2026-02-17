import { useParams } from "react-router-dom"
import { UserInfo } from "../components/profile/UserInfo"
import { FavoriteAnimeList } from "../components/profile/FavoriteAnimeList"
import { Loader } from "../components/shared/Loader"
import { useUserStore } from "../store/useUserStore"
import { useUser } from "../hooks/auth/useUser"

export const Profile = () => {

  const {userName} = useParams()

  const {session, isLoading: isLoadingSession} = useUserStore()
  const userId = session?.user.id

  const {user, isLoading} = useUser(userId)

  if(isLoading || isLoadingSession) return <Loader />

  return (
    <div className="flex flex-col">
        <UserInfo user={user} />

        <FavoriteAnimeList userId={session.user.id} />
    </div>
  )
}