import { useParams } from "react-router-dom"
import { UserInfo } from "../components/profile/UserInfo"
import { useUserByUserName } from "../hooks/auth/useUserByUserName"
import { FavoriteAnimeList } from "../components/profile/FavoriteAnimeList"

export const Profile = () => {

  const {userName} = useParams()

  console.log(userName)

  const {user, isLoading} = useUserByUserName(userName)

  console.log(user)
  
  return (
    <div className="flex flex-col mx-auto">
        <UserInfo />

        <FavoriteAnimeList favorites={user.favorites_animes} />
    </div>
  )
}