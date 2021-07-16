import React from 'react'
import {Link} from "react-router-dom";
function ConfirmAlert() {
    return (
        <div className="confirm-alert">
             <p style={{textAlign:"left",marginBottom:"5px",paddingBottom:"0px"}}>Confirmation</p>
              <p style={{textAlign:"left",fontWeight:"400",marginBottom:"0px",paddingBottom:"0px"}}>Are you sure to remove the device?</p>
            <div style={{marginTop:"40px",marginLeft:"135px"}}>
            <Link style={{textDecoration:"none",color:"#ef4f23"}}>Cancel</Link>
            <button className="confirm-alert-btn"> Remove </button>
            </div>
        </div>
    )
}

export default ConfirmAlert
