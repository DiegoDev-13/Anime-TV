import { PiEmpty } from "react-icons/pi"

export const NoSelected = ({text}) => {
  return (
    <div className="flex justify-center items-center w-full">
        <div className="w-180 h-80 flex justify-center items-center gap-2 border border-purple-700 rounded-lg bg-purple-700/5 cursor-no-drop">
            <PiEmpty size={85} className="text-purple-700" />
            <h2 className="text-purple-700 text-2xl font-semibold">{text}</h2>
        </div>
    </div>
  )
}