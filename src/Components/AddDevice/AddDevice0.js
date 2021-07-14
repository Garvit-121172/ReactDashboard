import React from 'react'

function AddDevice0() {
    return (
        <div className="add-device-0"> 
            <p style={{textAlign:"left",marginBottom:"0px",paddingBottom:"0px"}}> Caution</p>
            <p style={{fontSize:"13px",fontWeight:"400",textAlign:"left"}} >Please make sure the device is configured to the WiFi network.</p>
            <div className="add-device-0-btn-area">
                <button className="add-device-btn1">No I haven't</button>
                <button className="add-device-btn2">Proceed</button>
            </div>
            <p style={{paddingTop:"10px",fontSize:"12px",fontWeight:"400",textAlign:"left",paddingLeft:"15px"}}><span>?? </span> How to configure WiFi of your device?</p>
        </div>
    )
}
 
 export default AddDevice0
