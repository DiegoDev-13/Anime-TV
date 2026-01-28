export const CardGender = ({text, handleChangeGender}) => {
  return (
    <div className="py-3.5 px-7 bg-purple-400 flex justify-center items-center rounded-lg cursor-pointer" onClick={() => handleChangeGender(text)}>
        <span className="text-sm font-medium">
            {text}
        </span>
    </div>
  )
}