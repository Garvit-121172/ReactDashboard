import React from 'react'
import Connecting from './Connecting'
function ConnectingPage() {
    return (
        <div className="add-dev-con">
        <div className="add-dev-container">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
        <div className="add-dev-top-area">
            <img src="" alt="asd"/> <div style={{backgroundColor:"#fdd6ca",border:"2px dashed #ef4f23",height:"20px",width:"120px",margin:"auto"}}>ASDS-0-10</div>

        </div>
        <div className="add-dev-cent">
         <div><p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px",fontWeight:"500"}}>Connecting</p><Connecting/></div>
        </div>
        <div className="add-device-1-btn-area">
                <button className="add-device-btn-con">Next</button>
           
            </div>
        </div>
        </div>
        </div>
    )
}

export default ConnectingPage
