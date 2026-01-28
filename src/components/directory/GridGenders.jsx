import { CardGender } from "./Cardgender"

export const GridGenders = ({genders, handleChangeGender}) => {
  return (
    <div className="w-full p-15 flex flex-wrap justify-center border border-slate-400 rounded-lg gap-6">
        <CardGender text='All' handleChangeGender={handleChangeGender} />
        
        {
          genders?.map(gender => (
            <CardGender key={gender.id} text={gender.name} handleChangeGender={handleChangeGender} />
          ))
        }

    </div>
  )
}