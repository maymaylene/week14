import React from "react";

//a form at the bottom of a movie component that allows users to leave reviews. when submitted the reviw should be added 
//to the movie all this data can be stored in any array, no networking or database needed for this assignment


export default class ReviewForm extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card-body  border">
                    <form>
                        <label className="text-white">Leave a Review:</label>
                        <input className='form-control ' type="review" placeholder='I really enjoyed this movie!'></input>                        
                    </form>
                </div> 
            </div>    
        )
    }
}