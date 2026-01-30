export const AnimeMoreInfo = ({studio, status, year}) => {

  return (
    <div className="w-full md:w-60 lg:w-100 p-3 flex flex-col mt-16 space-y-4 text-white">
        <div className="p-8 border border-stone-800 bg-surface-dark rounded-lg space-y-3">
            <h3 className="text-lg font-medium text-white mb-4">Informacion</h3>
            <div className="flex justify-between text-[15px]">
                <p className="text-stone-400">Estudio</p>
                <p className="uppercase">{studio}</p>
            </div>
            <div className="flex justify-between text-[15px]">
                <p className="text-stone-400">Estatus</p>
                <p className="">{status ? 'En Emision' : 'Finalizado'}</p>
            </div>
            <div className="flex justify-between text-[15px]">
                <p className="text-stone-400">Fecha de emision</p>
                <p className="">{year}</p>
            </div>
            <div className="flex justify-between text-[15px]">
                <p className="text-stone-400">Duracion</p>
                <p className="">24 min/ep</p>
            </div>
        </div>
    </div>
  )
}