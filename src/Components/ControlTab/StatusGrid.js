import React from 'react'
import SetpH from "./SetpH";
import ConfigWifi from "./ConfigWifi"
import ConfirmAlert from './ConfirmAlert';
import pHLogo from "./../../pHLogo.svg"
import ProductLogo from "./../../ProductLogo.svg"
import StatusLogo from "./../../StatusLogo.svg"
import WifiLogo from "./../../WifiLogo.svg"
import CalendarLogo from "./../../CalendarLogo.svg"
import ConditionLogo from "./../../ConditionLogo.svg"
import AlarmAlert from './AlarmAlert';
function StatusGrid() {
    return (
        <div className="control-container" >
        <div className="add-dev-head">Device status <span style={{fontSize:"14px",fontWeight:"400",marginLeft:"10px"}}>Last Updated <b>10 secs ago</b></span></div>
        {/* <div className="add-dev-container-inside"> */}
        <div className="status-grid">
            <div className="grid-item">
            <div className="grid-content">
            <img    src={pHLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>
            </div>
            <div className="grid-item">
            <div className="grid-content">
            <img    src={ProductLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>
            </div>
            <div className="grid-item">
            <div className="grid-content">
            <img    src={StatusLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>            </div>
            <div className="grid-item">
            <div className="grid-content">
            <img    src={WifiLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>            </div>
            <div className="grid-item">
            <div className="grid-content">
            <img    src={CalendarLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>            </div>
            <div className="grid-item">
            <div className="grid-content">
            <img    src={ConditionLogo} alt="pH-logo" />
            <div style={{display:"flex",flexFlow:"column",marginLeft:"10px"}}>
            <p style={{marginBottom:"0",fontSize:"14px",fontWeight:"500"}}>Device Name</p>
            <p style={{marginTop:"0",fontSize:"14px",fontWeight:"400"}}>pH Sensor 4</p>
            </div>
            </div>            </div>
        </div>
        <div className="control-btn-tray">
        <button className="control-btns1"> Set Alarm </button>
        <button className="control-btns"> Calibarate </button>
        <button className="control-btns"> Configure Wifi </button>
        <button className="control-btns">Sample's Report</button>
        <button className="control-btns"> Factory Reset </button>
         </div>
         {/* <AlarmAlert/>
         <ConfirmAlert/>
         <ConfigWifi/> */}
         <SetpH/>
        </div>
        // </div>
    )
}

export default StatusGrid
