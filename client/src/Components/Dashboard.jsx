import React from 'react';
import './Dashboard.css';
import Header from './header/header';
import HeaderRight from './header/HeaderRight';
import Left from './left/LeftPanel';
import Main from './main/Main';
import Right from './right/Right';


const Dashboard = () => {
    return (
        <div className="main">
            <div className="left_container">
                <Left />
            </div> 
            <div className="middle_container">
                    <Header />  
                    <Main />
            </div>
            <div className="right_container">
                    <HeaderRight />
                    <Right />
            </div>
        </div>
    )
}

export default Dashboard

/*

 */