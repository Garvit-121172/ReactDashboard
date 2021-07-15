import React from 'react'

function SetpH() {
    return (
        <div className="setpH">
             <p style={{textAlign:"left",marginBottom:"0px",paddingBottom:"0px"}}>Set the Normal pH Range</p>
             <div style={{display:"flex"}}>
            <p style={{fontSize:"13px",width:"40px",height:"30px",fontWeight:"400",textAlign:"left"}} >Lower Limit </p>
            <p style={{marginLeft:"20px",fontSize:"13px",width:"40px",height:"30px",fontWeight:"400",textAlign:"left"}}>Upper Limit</p> 

            </div>
            <div style={{display:"flex"}}>
            <input style={{fontSize:"13px",width:"40px",height:"30px",fontWeight:"400",textAlign:"left"}} />
            <input style={{marginLeft:"20px",fontSize:"13px",width:"40px",height:"30px",fontWeight:"400",textAlign:"left"}} />
            <div style={{marginLeft:"20px"}}>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            </div>
            </div>
            <p style={{fontSize:"12px",color:"red",marginTop:"2px",textAlign:"left"}}>*Invalid Limits</p>
            <p style={{marginTop:"0",marginLeft:"40px",fontSize:"12px",fontWeight:"400",textAlign:"left"}}><span>?? </span> How to configure WiFi of your device?</p>
        </div>
    )
}

export default SetpH
