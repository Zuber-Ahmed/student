import React from 'react'

export const Details=(marks)=>{

    const arr=[marks.data]
    return(
<>  
    {arr.map((item)=> <p>{item}</p>)}
</>
    )

    
}