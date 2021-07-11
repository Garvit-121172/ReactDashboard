import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function TroubleForm() {
    const [email, setemail] = useState("");
    return (
        <div className="trouble-form">
            <input className="trouble-inp" type="eamil" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Email or Phone"/>
            <button className="trouble-btn">Send Login Link</button>
            <div className="hr-div-trouble">
            <hr class="hr-text" /><span>or</span> <hr class="hr-text" />
            </div>
            <Link className="link" ><p style={{fontSize:"13px",margin:"0",marginTop:"6px",color:"#ef4f23",fontWeight:"500"}}>Create an account</p></Link>
        </div>
    )
}

export default TroubleForm
