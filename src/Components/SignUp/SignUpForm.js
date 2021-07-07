import React from 'react'
import { useState } from 'react';
import TnC from '../Tnc';
import GLogo from '../../Glogo.png'
function SignUpForm() {
    const [mail,setmail]= useState();
    const [name, setname] = useState("")
    const [pass,setpass]= useState();
    const [phno, setphno] = useState("")
    const [passConfirm, setpassConfirm] = useState("")
    const [err, seterr] = useState(true)
    return (
        <div className="signup-form">
            <button onClick={(e)=>alert("hi")} style={{backgroundColor:"white",cursor:"pointer",border:"2px solid #f6f6f6",borderRadius:"5px",marginBottom:"20px",height:"40px"}}><div  className="google-btn" ><img src={GLogo} alt="GLogo" height="20px"  width="20px" /><p style={{fontSize:"16px",margin:"0",paddingLeft:"10px"}} >Continue with Google</p></div></button>
            <div className="hr-div">
            <hr class="hr-text" /><span>or</span> <hr class="hr-text" />
            </div>
            <input onChange={(e)=>setname(e.target.value)} className="name-inp" type="text" value={name}  placeholder="Full Name" autoComplete="off"/>
            {err?<p style={{margin:"0",marginLeft:"0px",marginTop:"-5px",marginBottom:"12px",fontSize:"12px",fontStyle:"normal",color:"#FF0404",width:"120px",height:"19px",lineHeight:"19px"}}>*This Field is Required</p>
            :null }
            <input onChange={(e)=>setmail(e.target.value)} className="email-inp" type="email" value={mail}  placeholder="Email Address" autoComplete="off"/>
            <div className="phno-div">
            <p style={{color:"#B1B1B1",margin:"0",borderRight:"1px solid #B1B1B1",marginLeft:"0",marginRight:"0",paddingTop:"15px",flex:"0.1%"}}>+91</p>
            <input onChange={(e)=>setphno(e.target.value)} className="phno-inp" type="text" value={phno} placeholder="Phone Number" autoComplete={false}/>
            </div>
            <input onChange={(e)=>setpass(e.target.value)} className="pass-inp" type="password" value={pass} placeholder="Password" autoComplete={false}/>
            <input onChange={(e)=>setpassConfirm(e.target.value)} className="pass-inp" type="password" value={passConfirm} placeholder="Confirm Password" autoComplete={false}/>
            <button className="signup-btn">Sign In</button>
            <TnC/>


        
        </div>
    )
}

export default SignUpForm
