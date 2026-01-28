export const Banner = () => {

  const position = ''

  return (
    <div className="relative w-full">
        <img src="https://www.toei-animation.com/wp-content/uploads/2019/02/collage-1920x595.png" alt="" className="w-full md:h-70 object-cover rounded-sm" />

        <button className={`bg-red-500 text-white text-[16px] py-3 px-6 rounded-lg uppercase font-bold shadow-xl absolute bottom-6 cursor-pointer hover hover:bg-red-600 transition-all duration-300 ${position === 'left' ? 'left-1/6' : 'right-1/6'}`}>
          Ver Ahora
        </button>
    </div>
  )
}