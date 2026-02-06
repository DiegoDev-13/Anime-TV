import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "https://avo-magazine.com/wp-content/uploads/2021/04/JujutsuKaisen_header.png",
  "https://flawfinder.wordpress.com/wp-content/uploads/2023/02/screen-shot-2023-01-31-at-7.53.01-pm.png",
  "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABURj5IDk5oCinFriJlxNjIrooPk24OeaNy-KHh3RAkpL5dpQ7MUzboD2AFpyMgWR-XElhv9Fsgd2W5ISE-Z3eXYMjU2D7vk0TW1J.jpg?r=588",
  'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a3d2ad775f8131888d50b41e2124ff8f.png'
];

export const Slider = () => {

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
        sliderNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const sliderBack = () => {
        setCurrent(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    const sliderNext = () => {
        setCurrent(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    const handleChange = (index) => {
        setCurrent(index)
    }

  return (
    <div className="relative z-1 w-full overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
            {
                images.map((img, index) => (
                <img key={index} src={img} alt="" className="w-full h-55 md:h-140 rounded-xl shrink-0 object-cover" />
                ))
            }
        </div>

        <button className='text-white cursor-pointer hover:text-slate-400 transition-all duration-300 absolute z-2 top-1/2 left-2' onClick={sliderBack}>
            <IoIosArrowBack size={35} />
        </button>

        <button className="text-white cursor-pointer hover:text-slate-400 transition-all duration-300 absolute z-2 top-1/2 right-2" onClick={sliderNext}>
            <IoIosArrowForward size={35} />
        </button>

        <div className="absolute z-2 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {
                images.map((_, index) => (
                    <div key={index} className={`h-3 rounded-full transition-all duration-300 border border-slate-500 cursor-pointer hover:bg-purple-500 ${current === index ? 'bg-purple-400 w-8' : 'bg-white/50 w-3'}`} onClick={() => handleChange(index)} />
                ))
            }
        </div>

    </div>
  )
}