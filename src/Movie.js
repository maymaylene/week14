import React, {useState} from "react";


//A component that represents movie data (i.e. image, synopsis,rating, etc...)
function Movie(){
        const [show, setShow]=useState(false)

        return(
            <div className="card-header text-white">
                {
                show? <p>
                    <h4>Barbie:</h4>
                        <p> Barbie and Ken are having the time of their lives in the colorful 
                        and seemingly perfect world of Barbie Land. However, when they get a chance to 
                        go to the real world, they soon discover the joys and perils of living among humans.
                        </p>
                    <h4>Oppenheimer:</h4>
                        <p> During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist
                        J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and 
                        a team of scientists spend years developing and designing the atomic bomb. Their work 
                        comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, 
                        forever changing the course of history.
                        </p>
                    <h4>Spider-Man: Across the Spider-Verse:</h4>
                        <p>SpiderManAfter reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood 
                            Spider-Man is catapulted across the Multiverse, where he encounters a team of 
                            Spider-People charged with protecting its very existence. However, when the heroes 
                            clash on how to handle a new threat, Miles finds himself pitted against the other 
                            Spiders. He must soon redefine what it means to be a hero so he can save the people he 
                            loves most.
                        </p>
                    <h4>Elemental:</h4>
                        <p>
                            In a city where fire, water, land, and air residents live together, a fiery young woman and a
                            go-with-the-flow guy discover something elemental: how much they actually have in common.
                        </p>
                    <h4>The Little Mermaind:</h4>
                        <p>
                            The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst 
                            for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and 
                            falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, 
                            to experience life on land.
                        </p>
                    <h4>Mission Impossible 7:</h4>
                        <p>
                            Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls 
                            into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the
                            globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter 
                            more than the mission -- not even the lives of those he cares about most.
                        </p>
                    </p>: null
                }
               <button className="btn btn-dark" onClick={() => setShow(!show)}>Movie Synopsis</button>    
            </div>
        )
        }
export default Movie;