export const CardGender = ({text, handleChangeGender, animeInfo}) => {
  return (
    <div className={`${animeInfo ? 'py-2 px-5' : 'py-3 px-6'} bg-surface-dark flex justify-center items-center rounded-4xl cursor-pointer border border-stone-600`} onClick={() => handleChangeGender(text)}>
        <span className={`${animeInfo ? 'text-xs text-stone-400' : 'text-sm text-stone-300'} font-medium`}>
            {text}
        </span>
    </div>
  )
}