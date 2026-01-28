export const Pagination = ({setPage, page, totalItems}) => {

    const handleNextPage = () => {
        setPage(prev => prev + 1)
    }

    const handleBackPage = () => {
        if(page > 1) {
            setPage(prev => prev - 1)
        }
    }

    const itemsPerPage = 3
    const totalPage = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1
    const isLastpage = page >= totalPage

  return (
    <div className="w-[80%] flex justify-between items-center my-10 mx-auto">
        <div>
            <p className="text-sm text-stone-300">
                Pagina <span className="font-semibold text-white">{page}</span> de <span className="font-semibold text-white">{totalPage}</span>
            </p>
        </div>
        <div className="flex gap-6">
            <button className="bg-purple-600 text-sm text-white font-medium py-1.5 px-6 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors duration-300" onClick={handleBackPage} disabled={page === 1}>Anterior</button>
            <button  className="bg-purple-600 text-sm text-white font-medium py-1.5 px-6 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors duration-300" onClick={handleNextPage} disabled={isLastpage}>Siguiente</button>
        </div>
    </div>
  )
}