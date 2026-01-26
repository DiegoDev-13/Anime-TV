import { TbLoader2 } from "react-icons/tb";

export const Loader = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center py-28 animate-pulse">
        <TbLoader2 size={100} className="text-white animate-spin duration-300" />
    </div>
  )
}