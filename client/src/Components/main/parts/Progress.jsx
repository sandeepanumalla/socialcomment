import { LinearProgress, withStyles } from '@material-ui/core';
import React from 'react'


const Progress = ({title,percentage}) => {

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 10,
          width:'10rem',
          borderRadius: 5,
        },
        colorPrimary: {
          backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
          borderRadius: 5,
          backgroundColor: '#1a90ff',
        },
      }))(LinearProgress);

    return (
        <div>
            <div className="progress">
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p style={{width:'8rem'}}>{title}</p>
                    <span style={{display:'flex',alignItems:'center',marginLeft:'1rem'}}>
                     <BorderLinearProgress  variant="determinate" value={percentage} />
                    </span> 
                </div>
            </div>
        </div>
    )
}

export default Progress
