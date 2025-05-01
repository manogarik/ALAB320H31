import React from "react";
export default function Learner({name,bio})
{
    return(
        <div>
            <h3>{name}</h3>
            <p>bio:{bio}</p>
            <Score/>
        </div>
    )
}