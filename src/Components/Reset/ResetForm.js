import React from 'react'
import { useState } from 'react';
function ResetForm() {
    const [pass, setpass] = useState("");
    const [passConfirm, setpassConfirm] = useState("");
    return (
        <div className="reset-pass-form">
            <input onChange={(e)=>setpass(e.target.value)} className="reset-pass-inp" type="password" value={pass}  placeholder="Password"/>
            <input onChange={(e)=>setpassConfirm(e.target.value)} className="reset-pass-inp" type="password" value={passConfirm} placeholder="Confim Password" />
            <button className="reset-pass-btn">Save Password</button>  
        </div>
    )
}

export default ResetForm
