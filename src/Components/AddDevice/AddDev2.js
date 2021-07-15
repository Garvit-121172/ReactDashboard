import React from 'react'
import Color from './Color'
import { useState } from 'react'
function AddDev2() {
    const [pallete, setpallete] = useState(true)
    return (
        <div className="add-dev-2">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
        <div className="add-dev-top-area">
          <Color/>
        </div>
        <p style={{fontSize:"14px",fontWeight:"400",textAlign:"center",color:"#B1B1B1"}} >Organize your devices better with color codes</p>
        <div className="add-dev-cent">
         <div> <p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Enter Device Name</p><input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFEEE7",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"70px"}} /><input style={{borderRadius:"4px",border:"0",backgroundColor:"#EBEBEB",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"150px",marginLeft:"10px"}} placeholder={"ASDS-0-00"}/>
         </div>
         {pallete?<div className="color-list"> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFEEE7",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px"}}/> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#B2E4FF",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}}/> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#B6FFB9",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}} /><input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFF2AE",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}}/></div>:null}
        </div>
        <div className="add-device-2-btn-area">
        <button className="add-device-btn1">Cancel</button>
        <button className="add-device-btn2">Next</button>
             
        </div>
        </div>
        </div>
    )
}

export default AddDev2
