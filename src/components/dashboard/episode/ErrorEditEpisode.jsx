import { IoIosWarning } from "react-icons/io"

export const ErrorEditEpisode = ({error}) => {

    console.log(error)

  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-[70%] flex items-center space-x-6 bg-surface-dark p-4 rounded-lg border border-stone-700 ">
            <div className="flex flex-col items-center space-y-6">
                <h3 className="text-red-500 text-9xl">500</h3>
                <IoIosWarning size={140} className="text-red-500 bg-red-500/15" />
            </div>
            <div>
                <h2 className="text-white text-4xl font-bold">Error al Editar Capítulo</h2>
                <p className="text-stone-300">No se han podido guardar los cambios debido a un <span className="text-red-300">fallo de sincronzación con el servidor</span> central. Los metadatos del episodio 04 permanecen bloqueados en modo de solo lectura.</p>
            </div>
        </div>
    </div>
  )
}