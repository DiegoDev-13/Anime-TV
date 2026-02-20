import { MdEdit } from "react-icons/md";
import { getFirstLetter } from "../../helpers";
import { useGlobalStore } from "../../store/global.store";

export const UserInfo = ({user, setEditProfile}) => {

  const setActiveModalProfile = useGlobalStore(state => state.setActiveModalProfile)

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full h-50 md:h-auto md:max-h-100">
        <img src="https://t4.ftcdn.net/jpg/04/04/73/39/360_F_404733910_2mIXr6RbC5G3WZJFjopVsBaR3EOM6Bqy.jpg" alt="" className="w-full h-full rounded-4xl"/>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around items-center absolute md:bottom-10 md:left-0 mt-2 md:mt-0">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="w-20 h-20 md:w-30 md:h-30 flex justify-center items-center bg-amber-50 rounded-full">
            {
              user?.imagen_profile 
                ? <img src={user?.imagen_profile } alt={user?.user_name} className="w-full object-contain rounded-full"/>
                : <p className="uppercase text-4xl md:text-6xl font-semibold">{getFirstLetter(user.user_name)}</p>
            }
          </div> 
          <div className="ml-4">
            <h2 className="text-2xl md:text-3xl text-white text-center md:text-left font-semibold mb-1">@{user.user_name}</h2>
            <p className="text-sm w-[80%] md:w-ful text-stone-300 text-center md:text-left ">Donde el 'un episodio más' se convierte en una maratón de toda la noche.</p>
          </div>  
        </div>
        <div className="">
          <button className="text-xs md:text-[16px] absolute top-4 right-2 md:relative py-2 px-4 bg-surface-dark text-white rounded-3xl flex items-center gap-1 cursor-pointer font-medium" onClick={() => setActiveModalProfile(true)}>
            <MdEdit size={20} />
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  )
}