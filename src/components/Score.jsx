import React from "react";
export default function Score({scores})
{
    return(
        <div>
            
                {
                scores.map((entry,index)=>(
                
                    <li>
                        Date {entry.date} : Score {entry.score}
                    </li>
                ))}
            
        </div>
    )
}