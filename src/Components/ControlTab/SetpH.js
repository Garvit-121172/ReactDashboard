import React from 'react'

function SetpH() {
    return (
        <div className="setpH">
             <p style={{textAlign:"left",marginBottom:"0px",paddingBottom:"0px"}}>Set the Normal pH Range</p>
             <div style={{display:"flex"}}>
            <p style={{fontSize:"14px",width:"73px",height:"20px",fontWeight:"400",color:"#6b6b6b",textAlign:"left"}} >Lower Limit </p>
            <p style={{marginLeft:"15px",fontSize:"14px",width:"73px",height:"20px",color:"#6b6b6b",fontWeight:"400",textAlign:"left"}}>Upper Limit</p> 

            </div>
            <div style={{display:"flex",marginTop:"-10px"}}>
            <input style={{fontSize:"11px",width:"73px",height:"25px",fontWeight:"500",textAlign:"center",backgroundColor:"#f0f0f0",border:"0"}} placeholder="6.4" />
            <input style={{fontSize:"11px",marginLeft:"10px",width:"73px",height:"25px",fontWeight:"500",textAlign:"center",backgroundColor:"#f0f0f0",border:"0"}} placeholder="4.9" />
            <div style={{marginLeft:"20px"}}>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            </div>
            </div>
            <p style={{fontSize:"12px",color:"red",marginTop:"2px",textAlign:"left",fontWeight:"400"}}>*Invalid Limits</p>
            <p style={{marginTop:"20px",marginLeft:"2px",fontSize:"12px",fontWeight:"400",textAlign:"left",color:"#9e9e9e"}}><span style={{backgroundColor:"#9e9e9e",border:"0.001px solid white ",borderRadius:"60%",color:"black",textAlign:"center",paddingLeft:"3.5px",paddingRight:"1.5px",marginRight:"5px"}} > ? </span>Turning on will notify when value exceeds limit.</p>
        </div>
    )
}

export default SetpH
