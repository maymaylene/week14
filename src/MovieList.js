//A container for all tbe Movie Components and their data

import React from "react";
import Barb from './images/images.jpeg';
import Oppen from './images/oppenheimer.jpeg';
import Spidey from './images/spiderman.jpeg'
import Elemental from './images/elemental.jpeg'
import LittleMermaid from './images/littlemermaid.jpeg'
import MissionImpossible from './images/missionimpossible.jpeg'
import Stars from './Stars';
import Review from "./Review";
import Movie from "./Movie";


export default class MovieList extends React.Component {
    render(){
        return(
            <div>
                <div className="title">-2023 Movie Ratings-</div>
                    <div className="container col-lg">
                        <Movie/>
                    </div>

            <div className="container mt-5 mb-5"> 
                <div className="row">
                    
                    <div className="col-sm-4">         
                        <img src={Barb} alt="barbie" />
                        <Stars/>
                        <Review/>
                    </div>
                    <div className="col-sm-4">
                        <img src={Oppen} alt="Oppenheimer"/>
                        <Stars/>
                        <Review/>
                    </div>
                    <div className="col-sm-4">
                        <img src={Spidey} alt="Spiderman"/>
                        <Stars/>
                        <Review/>
                    </div>
                </div><br></br>
                <div className="row mt-5">
                    <div className="col-sm-4">
                        <img src={Elemental} alt="Elemental"/>
                        <Stars/>
                        <Review/>
                    </div>
                    <div className="col-sm-4">
                        <img src={LittleMermaid} alt="LittleMermaid"/>
                        <Stars/>
                        <Review/>
                    </div>
                    <div className="col-sm-4">
                        <img src={MissionImpossible} alt="MissionImpossible"/>
                        <Stars/>
                        <Review/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}