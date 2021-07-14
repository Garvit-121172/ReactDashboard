import React from 'react'

function AddDevices() {
    return (
        <div className="add-dev-container">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
        <div className="add-dev-top-area">
            <p>asd</p>
        </div>
        <p style={{fontSize:"14px",fontWeight:"400",textAlign:"center"}} >Turn to the back of the device to find the product ID</p>
        <div className="add-dev-cent">
        <p style={{fontSize:"16px",fontWeight:"400",textAlign:"center",marginBottom:"15px"}}>Enter Product ID</p>
        <input style={{borderRadius:"4px",border:"0",backgroundColor:"#EBEBEB",height:"35px",fontSize:"20px",fontWeight:"400",textAlign:"center",width:"210px",marginLeft:"70px"}}/>
        <p style={{fontSize:"12px",fontWeight:"400",textAlign:"center",marginLeft:"10px"}}><span>Tick Mark </span> You are good to go!</p>
        </div>
        <div className="add-device-1-btn-area">
                <button className="add-device-btn1">No I haven't</button>
                <button className="add-device-btn2">Proceed</button>
            </div>
        </div>
        </div>
    )
}
 
export default AddDevices
