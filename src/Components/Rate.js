import React from 'react'

function Rate({rating, setrating}) {
 const ratingArr = [1,2,3,4,5]

    return (
        <div>
           {ratingArr.map((el)=> 
           <span onClick={()=>{setrating(el)}}>
            { el<=rating ? (<i class="fas fa-star"></i>) : ( <i class="far fa-star"></i>)}
            
           </span>
          
            ) }
        </div>
    )
}

export default Rate
