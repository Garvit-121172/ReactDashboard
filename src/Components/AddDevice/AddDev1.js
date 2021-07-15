import React from 'react'
import Connecting from './Connecting'
import Tick from './Tick'
import { useState } from 'react'
function ConnectingPage() {
    const [connecting, setconnecting] = useState(true)
    return (
        <div className="add-dev-con">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
        <div className="add-dev-top-area">
            <img src="" alt="asd"/> <div style={{backgroundColor:"#fdd6ca",border:"2px dashed #ef4f23",height:"20px",width:"120px",margin:"auto",marginTop:"10px"}}>ASDS-0-10</div>
       </div>
        <div className="add-dev-cent">
         {connecting?<div><p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Connecting</p><Connecting/></div>:
         <div> <p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Enter Product ID</p><input style={{borderRadius:"4px",border:"0",backgroundColor:"#EBEBEB",height:"35px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"180px",marginLeft:"90px"}} placeholder={"ASDS-0-00"}/>
        <p style={{fontSize:"12px",fontWeight:"400",textAlign:"center",color:"#11D019",display:"flex",marginLeft:"120px",marginBottom:"0px"}}><span style={{paddingRight:"5px"}}><Tick/></span>  You are good to go!</p>
         </div>}
         
        </div>
        <div className="add-device-1-btn-area">
        <button className="add-device-btn1">Cancel</button> 
              {connecting?<button className="add-device-btn-con">Next</button>:<button className="add-device-btn2">Next</button>}  
           
            </div>
        </div>
        </div>
    )
}

export default ConnectingPage
