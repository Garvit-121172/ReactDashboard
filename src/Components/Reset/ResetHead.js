import React from 'react'
import { useState } from 'react'
function ResetHead() {
    const [userName, setuserName] = useState("[FirstName]")
    return (
        <div className="reset-pass-head">
            <p style={{margin:"0",marginTop:"28px",fontSize:"28px",lineHeight:"33px",fontStyle:"normal",color:"#3A3A3A" }}>Welcome, {userName}</p>
            <p style={{margin:"0",marginTop:"40px",fontSize:"22px",lineHeight:"25px",fontStyle:"normal",color:"#3A3A3A" }}>Reset Your Password</p>
        </div>
    )
}

export default ResetHead
