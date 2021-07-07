import React from 'react'
import { useState } from 'react';
function SignUpHead() {
    const [err, seterr] = useState(true)
    return (
        <div className="signup-head">
            <p style={{margin:"0",marginTop:"15px",fontSize:"28px",lineHeight:"33px",fontStyle:"normal",color:"#3A3A3A" }}>Sign up for CoralOS</p>
            <p style={{margin:"0",marginTop:"10px",marginBottom:"10px",fontSize:"16px",fontStyle:"normal",color:"#626262",}}>Continue with Google account or email address you use to sign in.</p>
            
        </div>
    )
}

export default SignUpHead;
