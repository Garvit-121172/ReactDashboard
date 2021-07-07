import React from 'react'
import { useState } from 'react';
function TroubleForm() {
    const [email, setemail] = useState("");
    return (
        <div className="trouble-form">
            <input className="trouble-inp" type="eamil" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Email or Phone"/>
            <button className="trouble-btn">Send Login Link</button>
            <div className="hr-div-trouble">
            <hr class="hr-text" /><span>or</span> <hr class="hr-text" />
            </div>
            <p style={{fontSize:"14px",margin:"0",marginTop:"6px",color:"#ef4f23",fontWeight:"bold"}}>Create an account</p>

              
        </div>
    )
}

export default TroubleForm
