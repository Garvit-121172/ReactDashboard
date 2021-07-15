import React from 'react'
import BigTick from './BigTick'
function SuccesFull() {
    return (
        <div className="add-dev-suc">
        <div className="add-dev-container">
        <div className="add-dev-head">Add Devices</div>
        <div className="add-dev-container-inside">
           
           
        <div className="add-dev-cent">
        <div style={{margin:"auto",textAlign:"center",marginTop:"100px"}}><BigTick/><p>Succesful</p><p style={{fontSize:"14px"}}>Your device has been added successfully</p></div>
        </div>
        <div className="add-device-1-btn-area">
                <button className="add-device-btn-suc">Next</button>

            </div>
        </div>
        </div>
            
        </div>
    )
}

export default SuccesFull
