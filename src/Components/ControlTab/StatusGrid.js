import React from 'react'
import SetpH from "./SetpH";
import ConfigWifi from "./ConfigWifi"
function StatusGrid() {
    return (
        <div className="control-container" >
        <div className="add-dev-head">Device status <span style={{fontSize:"14px",fontWeight:"400",marginLeft:"10px"}}>Last Updated <b>10 secs ago</b></span></div>
        {/* <div className="add-dev-container-inside"> */}
        <div className="status-grid">
            <div className="grid-item">
                sdsad
            </div>
            <div className="grid-item">
                sdsad
            </div><div className="grid-item">
                sdsad
            </div><div className="grid-item">
                sdsad
            </div><div className="grid-item">
                sdsad
            </div><div className="grid-item">
                sdsad
            </div>
            
        </div>
        <div className="control-btn-tray">
        <button className="control-btns">Set Alarm</button>
        <button className="control-btns">Set Alarm</button>
        <button className="control-btns">Set Alarm</button>
        <button className="control-btns">Set Alarm</button>
        <button className="control-btns">Set Alarm</button>
         </div>
         <SetpH/>
         <ConfigWifi/>
        </div>
        // </div>
    )
}

export default StatusGrid
