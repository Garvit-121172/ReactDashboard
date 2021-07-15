import React from 'react'
import Tick from './Tick'
import BigTick from './BigTick'
import { useState } from 'react';
import Connecting from './Connecting';
import Color from './Color';
import SuccesFull from './SuccesFull';
import AddDev1 from './AddDev1';
import AddDev2 from './AddDev2';
function AddDevices() {
    const [color, setcolor] = useState(true)
    const [add_dev1, setaddDev] = useState(false)
    const [succesful, setsuccesful] = useState(false)
    return (<div className="add-dev-container" >
            {succesful? <SuccesFull/>: null }
            {add_dev1?<AddDev1/>:null}
            {color?<AddDev2/>:null}
        {/* <div className="add-dev-container">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
        {succesful?null:<div className="add-dev-top-area">
           
           
           {color?<Color/>: null}
           {addDev||Connecting?<>  <img src="" alt="asd"/> <div style={{backgroundColor:"#fdd6ca",border:"2px dashed #ef4f23",height:"20px",width:"120px",margin:"auto"}}>ASDS-0-10</div> </>:null}

        </div>}
        {addDev?<p style={{fontSize:"14px",fontWeight:"400",textAlign:"center",color:"#B1B1B1"}} >Turn to the back of the device to find the product ID</p>:null}
        {Connecting?<p style={{fontSize:"14px",fontWeight:"400",textAlign:"center",color:"#B1B1B1"}} >Make sure your device is turned on</p>:null}
        {color? <p style={{fontSize:"14px",fontWeight:"400",textAlign:"center",color:"#B1B1B1"}} >Organize your devices better with color codes</p>:null}
        <div className="add-dev-cent">
        {succesful?<div style={{margin:"auto",textAlign:"center",marginTop:"100px"}}><BigTick/><p>Succesful</p><p style={{fontSize:"14px"}}>Your device has been added successfully</p></div>:null}
        {Connecting? <div><p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Connecting</p><Connecting/></div>:null}
        {addDev?<div> <p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Enter Product ID</p><input style={{borderRadius:"4px",border:"0",backgroundColor:"#EBEBEB",height:"35px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"180px",marginLeft:"90px"}} placeholder={"ASDS-0-00"}/>
        <p style={{fontSize:"12px",fontWeight:"400",textAlign:"center",color:"#11D019",display:"flex",marginLeft:"120px",marginBottom:"0px"}}><span><Tick/></span> You are good to go!</p>
         </div>:null}
         {color?<div> <p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Enter Device Name</p><input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFEEE7",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"70px"}} /><input style={{borderRadius:"4px",border:"0",backgroundColor:"#EBEBEB",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"150px",marginLeft:"10px"}} placeholder={"ASDS-0-00"}/>
         </div>:null}
         {color?<div className="color-list"> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFEEE7",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px"}}/> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#B2E4FF",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}}/> <input style={{borderRadius:"4px",border:"0",backgroundColor:"#B6FFB9",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}} /><input style={{borderRadius:"4px",border:"0",backgroundColor:"#FFF2AE",height:"25px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"25px",marginLeft:"7px"}}/></div> :null}
        </div>
        <div className="add-device-1-btn-area">
                {succesful?null:<button className="add-device-btn1">Cancel</button>}
                {Connecting?<button className="add-device-btn-con">Next</button>:null}
                {addDev?<button className="add-device-btn2">Next</button>:null}
                {succesful?<button className="add-device-btn-suc">Next</button>:null}

            </div>
        </div>
        </div> */}
          </div>
    )
}
 
export default AddDevices
