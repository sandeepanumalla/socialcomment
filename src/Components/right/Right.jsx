import React from 'react'
import Applicants from './Applicants'

const Right = () => {
    return (
        <div>
            <div className="right_title"></div>
                <div className="image_container"></div>
                    <div className="applications_container">
                        <div className="new_applicants">
                            <p>New Applicants</p>
                            <p>{`>`}</p>
                        </div>
                        
                                <Applicants name="Rossie Metts." />
                                <Applicants name="James Scott" />
                                <Applicants name="Jamies Laurenson" />
                                <Applicants name="Jamies Laurenson" />
                                <Applicants name="Jamies Laurenson" />
                                <Applicants name="Jamies Laurenson" />
                                <Applicants name="Jamies Laurenson" />
                                <Applicants name="Jamies Laurenson" />
                         
                </div>
        </div>
    )
}

export default Right
