import React from 'react';
import '../Dashboard.css'

const Header = () => {
    const styles = {
        color:'white',    
    }
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const Months = ["Januuary", "February", "March" ,"April","May","June", "July","August", "September","October","November","December" ]
    return (
        <div>
            <div className="dashboard_title">
             <h3 style={styles}>This is Dashboard</h3>
             <h5 style={{color:'white',margin:'0'}}>{`${days[new Date().getDay()]}, ${new Date().getDate()} ${Months[new Date().getMonth()+1]} ${new Date().getFullYear()} `}</h5>
            </div>
            <div className="add_btn"></div>
            <div className="right_settings">
             <div></div>
             <div></div>
            </div>
        </div>
    )
}

export default Header
