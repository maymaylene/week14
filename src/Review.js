//a text review a user can leave on a movie


import React from "react";
import ReviewForm from "./ReviewForm";



export default class Review extends React.Component {
    render(){
        return(
            <div> 
                <div className="card-body bg-dark"> 
                    <ReviewForm/>                    
                </div>
                <div className="card-footer">
                <button className='btn btn-dark mt-3' type="submit">Submit</button>
                </div>
            </div>
        )
    }
}