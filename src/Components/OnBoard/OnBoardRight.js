import React from 'react'
import Content from './Content'
function OnBoardRight() {
    const h1="Insights everywhere ";
    const p1="Get complete information on the parameters with our data insights to optimise your perfomance while sitting at home";
    const h2="Control your devices on the go";
    const p2="Control, configure and calibrate in hassle-free way";
    const h3="Insights to results";
    const p3="Export your valuable data and insights for strategic results";
    const h4="Stay Alerted";
    const p4="Set limits to your parameters and relax. We shall notify you if they are away from permissible limits";

    return (
        <div className="onboard-right" >
        <h2 style={{marginBottom:"30px",fontWeight:"400"}}>Welcome, [Firstname Lastname]</h2>
        <Content head={h1} body={p1}/>
        <Content head={h2} body={p2}/>
        <Content head={h3} body={p3}/>
        <Content head={h4} body={p4}/>
        <button className="lets-get-started-btn">Let's Get Started</button>
        </div>
    )
}

export default OnBoardRight
