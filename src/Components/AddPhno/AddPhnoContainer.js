import React from 'react'
import { useState } from 'react';
function AddPhnoContainer() {
    const [phno, setphno] = useState("");
    const [err, seterr] = useState(true);
    return (
        <div className="addphno-container" >
            <h3 style={{fontSize:"18px",lineHeight:"23px",fontWeight:"900"}}>Add a Phone Number</h3>
            <p style={{textAlign:"left",marginBottom:"25px",fontSize:"14px",color:"#5E5858",lineHeight:"17px"}} >Your phone number helps us keep your account secure by adding an additional layer of verification. It also helps to keep your regularly updated with your data on the dashboard, notifying you and alerting you. You can always stay connected with us and our products.</p>
            <div className="addphno-phno-div">
            <p style={{color:"#B1B1B1",width:"50px",margin:"0",borderRight:"1px solid #B1B1B1",marginLeft:"0",marginRight:"0",paddingTop:"15px"}}>+91</p>
            <input onChange={(e)=>setphno(e.target.value)} className="phno-inp" type="text" value={phno} placeholder="Phone Number" autoComplete={false}/>
            </div>
            {err?<p style={{margin:"0",marginLeft:"0px",marginTop:"-5px",marginBottom:"12px",fontSize:"12px",fontStyle:"normal",color:"#FF0404",width:"120px",height:"19px",lineHeight:"19px"}}>*This Field is Required</p>
            :null }
            <button className="proceed-btn">Let's Proceed</button>

        </div>
    )
}
  
export default AddPhnoContainer
