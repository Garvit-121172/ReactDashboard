import React from 'react'
import { useState } from 'react'
function Callibarate() {
    const [form1, setform1] = useState(false)
    const [form2, setform2] = useState(true)
    return (
        <div  className="callibarate">
            <p style={{textAlign:"left",marginBottom:"0px",paddingBottom:"0px",marginTop:"0"}}>Callibarate Device</p>
            {form1?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Do you want to callibarate your device?</p><div className="sample-report-btn-area">
                <button className="sample-report-btn1">No </button>
                <button className="sample-report-btn2" >Yes</button>
            </div></>:null} 
            {form2?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1",marginBottom:"0"}} >Things Needed</p>
             <ul className="item-box" >
                 <li className="calib-items">pH Buffer Sachets 6.86|4.01|9.12 </li>
                 <li className="calib-items">Distilled Water</li>
                 <li className="calib-items">Beaker</li>
             </ul>
             <div className="sample-report-btn-area2" style={{marginTop:"0px"}}>
                <button className="sample-report-btn1" >Back</button>
                <button className="sample-report-btn2">Start</button>
            </div></>:null}
        </div>
    )
}

export default Callibarate
