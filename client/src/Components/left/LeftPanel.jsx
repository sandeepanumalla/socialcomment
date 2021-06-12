import React from 'react'

const Left = () => {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div className="left_subcontainer">
        {
            arr.map(i =>{
                return <div className="each_box">{i}</div>
            })
        }
           
        </div>
    )
}

export default Left
 