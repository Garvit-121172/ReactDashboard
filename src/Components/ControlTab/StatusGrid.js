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
import { useState } from 'react';
import SampleReport from './SampleReport';
import Callibarate from './Callibarate';
function StatusGrid() {
    const [Alaram, setAlaram] = useState(true);
    const [callibarate, setcallibarate] = useState(false);
    const [config, setconfig] = useState(false);
    const [sampleReport, setsampleReport] = useState(false);
    const [factoryReset, setfactoryReset] = useState(false);
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
        <button className={Alaram?"control-btns1":"control-btns"} onClick={()=>{setAlaram(true);setcallibarate(false);setconfig(false);setfactoryReset(false);setsampleReport(false);}}> Set Alarm </button>
        <button className={callibarate?"control-btns1":"control-btns"}  onClick={()=>{setAlaram(false);setcallibarate(true);setconfig(false);setfactoryReset(false);setsampleReport(false);}}> Calibarate </button>
        <button className={config?"control-btns1":"control-btns"}  onClick={()=>{setAlaram(false);setcallibarate(false);setconfig(true);setfactoryReset(false);setsampleReport(false);}}> Configure Wifi </button>
        <button className={sampleReport?"control-btns1":"control-btns"}  onClick={()=>{setAlaram(false);setcallibarate(false);setconfig(false);setfactoryReset(false);setsampleReport(true);}}>Sample's Report</button>
        <button className={factoryReset?"control-btns1":"control-btns"}  onClick={()=>{setAlaram(false);setcallibarate(false);setconfig(false);setfactoryReset(true);setsampleReport(false);}}> Factory Reset </button>
         </div>
         {Alaram?<SetpH/>:null}
         {config?<ConfigWifi/>:null}
         {callibarate?<Callibarate/>:null}
         {factoryReset?"factortreset":null}
         {sampleReport?<SampleReport/>:null}
        </div>
    )
}

export default StatusGrid
