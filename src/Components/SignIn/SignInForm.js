import React from 'react'
import { useState } from 'react';
import TnC from './../Tnc';
import GLogo from '../../Glogo.png'
function SignInForm() {
    const [mail,setmail]= useState();
    const [pass,setpass]= useState();


    return (
        <div className="signinform">
            <button onClick={(e)=>alert("hi")} style={{backgroundColor:"white",cursor:"pointer",border:"2px solid #f6f6f6",borderRadius:"5px",marginBottom:"20px",height:"40px"}}><div  className="google-btn" ><img src={GLogo} alt="GLogo" height="20px"  width="20px" /><p style={{fontSize:"15px",margin:"0",paddingLeft:"10px",color:"#3A3A3A"}} >Continue with Google</p></div></button>
            <div className="hr-div">
            <hr class="hr-text" /><span style={{color:"#B1B1B1",fontWeight:"400"}} >or</span><hr class="hr-text" />
            </div>
            <input onChange={(e)=>setmail(e.target.value)} className="email-inp" type="email" value={mail}  placeholder="Email Address" autoComplete="off"/>
            <input onChange={(e)=>setpass(e.target.value)} className="pass-inp" type="password" value={pass} placeholder="Password" autoComplete={false}/>
            <div className="rememberme"><input type="checkbox" style={{height:"15px",width:"15px",backgroundColor:"black"}} /><p style={{margin:"0",marginTop:"-2px",fontWeight:"300"}}>Remember me</p></div>
            <button className="signin-btn">Sign In</button>
            <div className="forgot-div">
            <p style={{fontSize:"14px",fontWeight:"400",margin:"0",color:"#626262",marginTop:"5px"}}>Forgot your password?</p>
            <p style={{fontSize:"14px",fontWeight:"400",margin:"0",marginTop:"6px",color:"#ef4f23"}}>Create an account</p>
            </div>
            <TnC/>


        
        </div>
    )
}

export default SignInForm
