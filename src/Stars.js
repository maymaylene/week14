//a one to five-star rating component that allows users to rate something (movies in this case,
// but rememeber that comoonents are reusable, so you could use it elsewhere!)

import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const Stars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

        return(
            <div> 
                {[...Array(5)].map((star, i) => {
                    const starValue = i +1;

                    return (
                    <label>
                        <input 
                            type="radio" 
                            value={starValue} 
                            onClick={() => setRating(starValue)} /> 
                        <FaStar className="stars mt-3 mb-3" 
                            color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={40}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseOut={() => setHover(null)}/>
                    </label>
                    );
                })}                
            </div>
        )
    }


export default Stars;