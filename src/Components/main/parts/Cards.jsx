import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

const Cards = ({title, percentage, growthValue, totalValue, sign }) => {
    
    return (
        <div>
        <div className="div_header"><p>{title}</p></div>

        <div className="div_subcontainer">
           <div>
           <p>{totalValue}</p>
           
           <div style={{display:'flex',alignItems:'center',paddingRight:'.5rem', marginLeft:'2rem'}}>
               <span className={sign === "negative" ? `arrowDown`:`arrowUp`} >
               <FontAwesomeIcon icon={sign === "negative" ? `arrowDown` : `arrowUp`} /></span>
               <p style={{color:'turquoise'}}  className="percentageUP" >{growthValue}</p>
           </div>
           
           </div>
           <div  style={{ width: '5rem', height: '5rem',stroke:'#3e98c7' }}>
               <CircularProgressbar style={{color:'#ba68c8'}} value={percentage} text={sign === "negative" ? `- ${percentage}%`: `+ ${percentage}%`} />
           </div>
       </div>
        </div>
    )
}

export default Cards
