import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({rating, setRating}) => {

    const [rateColor, setRateColor] = useState(null)

  return (
    <div className="flex  space-x-2 my-1">
        {
            [...Array(5)].map((star, index) => {
                const currentStar = index + 1

                return (
                <div key={index}>
                    <label className="cursor-pointer"> 
                        <input type='radio' name="rate" value={currentStar} onClick={() => setRating(currentStar)} className="hidden"/>
                        <FaStar size={20} color={currentStar <= (rateColor || rating) ? 'yellow' : "grey"}/>
                    </label>
                </div>
            )
        })
        }
    </div>
  )
}