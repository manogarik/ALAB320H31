import React from "react";
import Score from "../components/Score.jsx";

export default function Learner({name,bio,scores})
{
    return(
        <div>
            <h3>{name}</h3>
            <p>bio:{bio}</p>
            <h4>Scores</h4>
            <Score scores = {scores}/>
        </div>
    )
}