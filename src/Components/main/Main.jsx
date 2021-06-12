import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Cards from './parts/Cards';
import Progress from './parts/Progress';



const Main = () => {

    return (
        <div>
            <div className="first_container">

                <div className="div1">
                        <Cards title={`Total Applications`} sign="positive" percentage={70} growthValue="3.59%" totalValue="7956" />
                     </div>

                     <div className="div1">
                         <div className="div2">
                         <Cards title={`Shortlisted Candidates`} sign="positive" percentage={60} growthValue="0.60%" totalValue="4658" />
                         </div>
                     </div>
               
                    <div className="div1">
                    <Cards title={`Total Applications`} sign="negative" percentage={40} growthValue="0.4%" totalValue="1501" />
                    </div>

                </div>

            <div className="second_container">
                <div className="left">left</div>
                <div className="right">
                 <p style={{fontSize:'.7rem'}}>Total Applications</p>
                 <div className="bigDiv">
                   
                    <Progress title="Applications" percentage={40} />
                    <Progress title="Shortlisted" percentage={80} />
                    <Progress title="Rejected   " percentage={40} />
                    <Progress title="On hold    " percentage={15} />
                    <Progress title="Applications" percentage={85} />

                 </div>
                 
                </div>
            </div>

            <div className="third_container">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Main
