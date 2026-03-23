import { Loader } from "../../components/shared/Loader"
import { useGetUsers } from "../../hooks/dashboard/users/useGetUsers"

export const ManageUsersDashboard = () => {

  const {data, isLoading, isError} = useGetUsers()

  console.log(data)

  if(isLoading) return <Loader />

  return (
    <div className="">
        <h2 className="text-blue-500 text-2xl">Usuarios</h2>
        <div className="">
          
        </div>
    </div>
  )
}