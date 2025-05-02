import React from "react";
export default function Score({scores})
{
    return(
        <div>
            {
                scores.map((entry,index)=>
                {
                    <li key={index}>
                        {entry.date}:{entry.score}
                    </li>
                })
            }
        </div>
    )
}