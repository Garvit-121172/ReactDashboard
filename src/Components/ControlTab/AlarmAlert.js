import React from 'react'

function AlarmAlert() {
    return (
        <div className="alarm-alert">
        <div style={{display:"flex"}}>
        <p style={{textAlign:"left",marginBottom:"5px",fontSize:"16px"}}>Alert</p>
        <p style={{marginLeft:"20px",borderRadius:"5px",fontWeight:"400",fontSize:"12px",padding:"5px",backgroundColor:"#ef4f23",color:"#ffffff"}}> pH Range Exceeded</p>
        </div>
        <p style={{textAlign:"left",fontWeight:"400",marginBottom:"0px",paddingBottom:"0px"}}>The pH value measured by pH Sensor 4 exceeded limits.</p>
        <button className="alarm-alert-btn">Turn off Alarm</button> 
        </div>
    )
}

export default AlarmAlert
