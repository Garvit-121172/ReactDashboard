import React from 'react'
import { useState } from 'react';
function SignHead() {
    const [err, seterr] = useState(false)
    return (
        <div className="signinhead">
            <p style={{margin:"0",marginTop:"15px",fontSize:"22px",lineHeight:"33px",fontStyle:"normal",color:"#3A3A3A",fontWeight:"500" }}>Sign into CoralOS</p>
            <p style={{margin:"0",marginTop:"10px",marginBottom:"10px",fontSize:"16px",fontStyle:"normal",color:"#626262",fontWeight:"400"}}>Continue with Google account or email address you use to sign in.</p>
            {err?<p style={{margin:"0",marginLeft:"-25px",marginTop:"15px",marginBottom:"24px",fontSize:"14px",fontStyle:"normal",color:"#FF0404",width:"600px",height:"19px",lineHeight:"19px"}}>This account can be signed in using “Google” or resetting the password using “Forgot Password”</p>
            :null }
        </div>
    )
}

export default SignHead;
