import {  faEnvelope, faPhoneAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Applicants = ({name,appliedfor}) => {
    
    
    return (
        <div className="progress">
        <div className="each_applicant" >
            <div className="applicant_icon" >
                <FontAwesomeIcon style={{color:'white'}} icon={faUserCircle}></FontAwesomeIcon>
            </div>
            <div style={{flexGrow:'2'}}>
                <p style={{color:'white'}}>{name}</p>
                <p style={{color:'white'}}>{appliedfor}</p>
            </div>
            
            <div className="message_icon" >
             <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </div>
            <div className="call_icon" >
                <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            </div>
        </div>
        </div>
    )
}

export default Applicants
